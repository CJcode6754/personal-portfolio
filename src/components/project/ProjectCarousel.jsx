import React, { useState, useCallback, useEffect, useRef, useMemo, memo } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ChevronLeft, ChevronRight, X, Github, ExternalLink, Lock } from "lucide-react";
import TechPopover from "./TechPopover";

const normalizeImageGroups = (project) => {
  if (Array.isArray(project.roleGroups) && project.roleGroups.length > 0) {
    return project.roleGroups
      .map((group) => ({ role: group.role || group.label || "Overview", images: Array.isArray(group.images) ? group.images : [] }))
      .filter((group) => group.images.length > 0);
  }

  const allImages = Array.isArray(project.images) ? project.images : [];
  if (allImages.some((img) => typeof img.role === "string" && img.role.trim().length > 0)) {
    const groups = allImages.reduce((acc, img) => {
      const role = img.role?.trim() || "General";
      if (!acc[role]) acc[role] = [];
      acc[role].push(img);
      return acc;
    }, {});
    return Object.entries(groups).map(([role, images]) => ({ role, images }));
  }

  return [{ role: "Overview", images: allImages }];
};

// ── Lazy image with IntersectionObserver ─────────────────────────────────────
const LazyImage = memo(({ src, alt, priority = false, style = {} }) => {
  const [loaded, setLoaded] = useState(false);
  const [inView, setInView] = useState(priority);
  const ref = useRef(null);

  useEffect(() => {
    if (priority) return;
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setInView(true); obs.disconnect(); } },
      { rootMargin: "200px" }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [priority]);

  return (
    <div ref={ref} style={{ width: "100%", height: "100%", position: "relative", background: "var(--bg-secondary)", ...style }}>
      {!loaded && (
        <div style={{
          position: "absolute", inset: 0,
          background: "linear-gradient(90deg, var(--bg-secondary) 25%, var(--bg-card) 50%, var(--bg-secondary) 75%)",
          backgroundSize: "200% 100%",
          animation: "shimmer 1.4s infinite",
        }} />
      )}
      {inView && (
        <>
          {/* blurred bg fill for letterbox gaps */}
          <img
            src={src}
            aria-hidden="true"
            style={{
              position: "absolute", inset: 0,
              width: "100%", height: "100%",
              objectFit: "cover",
              filter: "blur(18px) brightness(0.75)",
              transform: "scale(1.1)",
              opacity: loaded ? 1 : 0,
              transition: "opacity 0.3s ease",
            }}
          />
          <img
            src={src}
            alt={alt}
            loading={priority ? "eager" : "lazy"}
            decoding="async"
            onLoad={() => setLoaded(true)}
            style={{
              position: "relative",
              width: "100%", height: "100%",
              objectFit: "contain",
              display: "block",
              opacity: loaded ? 1 : 0,
              transition: "opacity 0.3s ease",
            }}
          />
        </>
      )}
    </div>
  );
});

// ── Hero / Thumbnail slide (slide 0) ─────────────────────────────────────────
const HeroSlide = memo(({ project, image, role }) => {
  const src = image?.src || project.images?.[0]?.src;
  const caption = image?.caption || project.title;

  return (
    <div style={{ position: "relative", width: "100%", height: "100%" }}>
      {/* blurred bg fill */}
      <img
        src={src}
        aria-hidden="true"
        style={{
          position: "absolute", inset: 0,
          width: "100%", height: "100%",
          objectFit: "cover",
          filter: "blur(20px) brightness(0.6) saturate(1.2)",
          transform: "scale(1.1)",
        }}
      />
      <LazyImage src={src} alt={caption} priority style={{ position: "relative" }} />
      <div style={{
        position: "absolute", inset: 0,
        background: "linear-gradient(to top, rgba(0,0,0,0.85) 0%, rgba(0,0,0,0.3) 50%, transparent 75%)",
      }} />
      <div style={{
        position: "absolute", bottom: 0, left: 0, right: 0,
        padding: "clamp(1.5rem, 5vw, 2.5rem) clamp(1.5rem, 5vw, 2.5rem) clamp(1.25rem, 4vw, 2rem)",
      }}>
        <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: "0.75rem" }}>
          {role && (
            <span style={{
              padding: "0.4rem 1rem", borderRadius: "2rem",
              background: "rgba(255,255,255,0.15)", color: "#fff",
              fontSize: "0.75rem", fontWeight: 600,
              border: "1px solid rgba(255,255,255,0.2)",
              backdropFilter: "blur(8px)",
              boxShadow: "0 4px 12px rgba(0,0,0,0.2)",
            }}>
              {role}
            </span>
          )}
          <div style={{
            height: "1px", flex: 1,
            background: "linear-gradient(90deg, rgba(255,255,255,0.3), transparent)",
          }} />
        </div>
        <h2 style={{
          fontFamily: "Outfit, sans-serif",
          fontSize: "clamp(1.25rem, 4vw, 2.25rem)",
          fontWeight: 800, color: "#fff",
          margin: "0 0 0.5rem", lineHeight: 1.1,
          textShadow: "0 4px 16px rgba(0,0,0,0.6)",
        }}>{project.title}</h2>
        <p style={{
          fontSize: "clamp(0.8rem, 2.5vw, 0.95rem)", color: "rgba(255,255,255,0.9)",
          lineHeight: 1.6, margin: "0 0 1rem",
          display: "-webkit-box", WebkitLineClamp: 2,
          WebkitBoxOrient: "vertical", overflow: "hidden",
          textShadow: "0 2px 8px rgba(0,0,0,0.3)",
        }}>{project.description}</p>
        <div style={{
          display: "flex", flexWrap: "wrap", gap: "0.5rem", alignItems: "center",
          marginTop: "0.5rem"
        }}>
          {project.technologies.slice(0, 5).map((t, i) => (
            <span key={i} style={{
              padding: "0.3rem 0.75rem", borderRadius: "1.5rem",
              background: "rgba(255,255,255,0.12)", color: "rgba(255,255,255,0.95)",
              fontSize: "0.7rem", fontWeight: 500,
              border: "1px solid rgba(255,255,255,0.15)",
              backdropFilter: "blur(6px)",
              boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
            }}>{t}</span>
          ))}
          {project.technologies.length > 5 && (
            <TechPopover techs={project.technologies.slice(5)} dark />
          )}
        </div>
      </div>
    </div>
  );
});

// ── Regular image slide ───────────────────────────────────────────────────────
const ImageSlide = memo(({ image, index }) => (  <div style={{ position: "relative", width: "100%", height: "100%" }}>
    <LazyImage src={image.src} alt={image.caption || `Screenshot ${index}`} />
    {image.caption && (
      <div style={{
        position: "absolute", bottom: 0, left: 0, right: 0,
        padding: "1.25rem 1.5rem",
        background: "linear-gradient(to top, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0.4) 60%, transparent 100%)",
        backdropFilter: "blur(4px)",
      }}>
        <p style={{
          color: "rgba(255,255,255,0.95)",
          fontSize: "clamp(0.8rem, 2vw, 0.9rem)",
          fontWeight: 600,
          margin: 0,
          textShadow: "0 2px 8px rgba(0,0,0,0.5)",
          lineHeight: 1.4,
        }}>
          {image.caption}
        </p>
      </div>
    )}
  </div>
));

// ── Main Carousel Modal ───────────────────────────────────────────────────────
const ProjectCarousel = ({ project, onClose }) => {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(1);
  const [selectedRole, setSelectedRole] = useState(() => {
    const groups = normalizeImageGroups(project);
    return groups[0]?.role || "Overview";
  });
  const dragStart = useRef(null);

  const roleGroups = useMemo(() => normalizeImageGroups(project), [project]);
  const currentGroup = roleGroups.find((group) => group.role === selectedRole) || roleGroups[0] || { role: "Overview", images: [] };
  const slides = currentGroup.images;
  const total = slides.length;

  useEffect(() => {
    const defaultRole = roleGroups[0]?.role || "Overview";
    setSelectedRole(defaultRole);
    setCurrent(0);
  }, [project.id, roleGroups]);

  const go = useCallback((next) => {
    setDirection(next > current ? 1 : -1);
    setCurrent(next);
  }, [current]);

  const prev = useCallback(() => go((current - 1 + total) % total), [go, current, total]);
  const next = useCallback(() => go((current + 1) % total), [go, current, total]);

  // Keyboard navigation
  useEffect(() => {
    const handler = (e) => {
      if (e.key === "ArrowLeft") prev();
      else if (e.key === "ArrowRight") next();
      else if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [prev, next, onClose]);

  // Drag / swipe
  const onDragStart = (e) => { dragStart.current = e.clientX ?? e.touches?.[0]?.clientX; };
  const onDragEnd = (e) => {
    if (dragStart.current === null) return;
    const end = e.clientX ?? e.changedTouches?.[0]?.clientX ?? dragStart.current;
    const delta = dragStart.current - end;
    if (Math.abs(delta) > 40) delta > 0 ? next() : prev();
    dragStart.current = null;
  };

  const variants = {
    enter: (d) => ({ x: d > 0 ? "100%" : "-100%", opacity: 0 }),
    center: { x: 0, opacity: 1 },
    exit: (d) => ({ x: d > 0 ? "-100%" : "100%", opacity: 0 }),
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.2 }}
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label={`${project.title} carousel`}
      style={{
        position: "fixed", inset: 0, zIndex: 200,
        background: "rgba(0,0,0,0.85)",
        backdropFilter: "blur(20px) saturate(1.2)",
        display: "flex", flexDirection: "column",
        alignItems: "center", justifyContent: "center",
        padding: "clamp(0.5rem, 3vw, 1rem)",
        overflowY: "auto",
      }}
    >
      {/* Card */}
      <motion.div
        initial={{ scale: 0.94, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.94, opacity: 0 }}
        transition={{ duration: 0.22, ease: "easeOut" }}
        onClick={(e) => e.stopPropagation()}
        style={{
          width: "100%", maxWidth: "900px",
          background: "var(--bg-card)",
          borderRadius: "1.25rem",
          border: "1px solid var(--border-strong)",
          overflow: "hidden",
          boxShadow: "0 32px 80px rgba(0,0,0,0.6)",
          display: "flex", flexDirection: "column",
          maxHeight: "90vh",
        }}
      >
        {/* Role group tabs */}
        {roleGroups.length > 1 && (
          <div style={{
            display: "flex", flexWrap: "wrap", gap: "0.25rem", padding: "1rem 1.25rem 0.5rem",
            background: "var(--bg-card)", borderBottom: "1px solid var(--border)"
          }}>
            {roleGroups.map((group, index) => (
              <button
                key={group.role}
                onClick={() => {
                  if (group.role !== selectedRole) {
                    setSelectedRole(group.role);
                    setCurrent(0);
                  }
                }}
                style={{
                  padding: "0.5rem 1rem", borderRadius: "0.75rem",
                  border: "none", cursor: "pointer",
                  background: group.role === selectedRole
                    ? "linear-gradient(135deg, var(--accent), var(--accent-2))"
                    : "var(--bg-secondary)",
                  color: group.role === selectedRole ? "#fff" : "var(--text-secondary)",
                  fontSize: "0.8rem", fontWeight: 600,
                  transition: "all 0.25s ease",
                  boxShadow: group.role === selectedRole ? "0 4px 12px rgba(0,0,0,0.15)" : "none",
                  transform: group.role === selectedRole ? "translateY(-1px)" : "translateY(0)",
                  position: "relative",
                  overflow: "hidden",
                }}
                onMouseEnter={(e) => {
                  if (group.role !== selectedRole) {
                    e.target.style.background = "var(--bg-hover)";
                    e.target.style.color = "var(--text-primary)";
                  }
                }}
                onMouseLeave={(e) => {
                  if (group.role !== selectedRole) {
                    e.target.style.background = "var(--bg-secondary)";
                    e.target.style.color = "var(--text-secondary)";
                  }
                }}
              >
                {group.role}
                {group.role === selectedRole && (
                  <div style={{
                    position: "absolute", bottom: 0, left: "50%", transform: "translateX(-50%)",
                    width: "60%", height: "2px",
                    background: "rgba(255,255,255,0.8)", borderRadius: "1px",
                  }} />
                )}
              </button>
            ))}
          </div>
        )}

        {/* Slide area */}
        <div
          style={{ position: "relative", width: "100%", aspectRatio: "16/9", overflow: "hidden", flexShrink: 0, cursor: "grab", padding: "0.75rem 0.75rem 0", background: "var(--bg-secondary)" }}
          onMouseDown={onDragStart}
          onMouseUp={onDragEnd}
          onTouchStart={onDragStart}
          onTouchEnd={onDragEnd}
        >
          <AnimatePresence initial={false} custom={direction} mode="popLayout">
            <motion.div
              key={`${selectedRole}-${current}`}
              custom={direction}
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.28, ease: [0.25, 0.46, 0.45, 0.94] }}
              style={{ position: "absolute", inset: "0.75rem 0.75rem 0", borderRadius: "0.75rem", overflow: "hidden" }}
            >
              {current === 0
                ? <HeroSlide project={project} image={slides[0]} role={currentGroup.role} />
                : <ImageSlide image={slides[current]} index={current} />
              }
            </motion.div>
          </AnimatePresence>

          {/* Close */}
          <button
            onClick={onClose}
            aria-label="Close carousel"
            style={{
              position: "absolute", top: "1.5rem", right: "1.5rem", zIndex: 10,
              width: "2.5rem", height: "2.5rem", borderRadius: "50%",
              background: "rgba(0,0,0,0.7)", border: "1px solid rgba(255,255,255,0.2)",
              color: "#fff", cursor: "pointer",
              display: "flex", alignItems: "center", justifyContent: "center",
              backdropFilter: "blur(8px)",
              boxShadow: "0 4px 16px rgba(0,0,0,0.4)",
              transition: "all 0.25s ease",
            }}
            onMouseEnter={(e) => {
              e.target.style.background = "rgba(0,0,0,0.9)";
              e.target.style.transform = "scale(1.05)";
              e.target.style.boxShadow = "0 6px 20px rgba(0,0,0,0.5)";
            }}
            onMouseLeave={(e) => {
              e.target.style.background = "rgba(0,0,0,0.7)";
              e.target.style.transform = "scale(1)";
              e.target.style.boxShadow = "0 4px 16px rgba(0,0,0,0.4)";
            }}
          >
            <X size={16} />
          </button>

          {/* Arrows */}
          {total > 1 && (
            <>
              <button
                onClick={prev}
                aria-label="Previous slide"
                style={arrowStyle("left")}
                onMouseEnter={(e) => {
                  e.target.style.background = "rgba(0,0,0,0.9)";
                  e.target.style.transform = "translateY(-50%) scale(1.05)";
                  e.target.style.boxShadow = "0 6px 20px rgba(0,0,0,0.5)";
                }}
                onMouseLeave={(e) => {
                  e.target.style.background = "rgba(0,0,0,0.7)";
                  e.target.style.transform = "translateY(-50%) scale(1)";
                  e.target.style.boxShadow = "0 4px 16px rgba(0,0,0,0.4)";
                }}
              >
                <ChevronLeft size={20} />
              </button>
              <button
                onClick={next}
                aria-label="Next slide"
                style={arrowStyle("right")}
                onMouseEnter={(e) => {
                  e.target.style.background = "rgba(0,0,0,0.9)";
                  e.target.style.transform = "translateY(-50%) scale(1.05)";
                  e.target.style.boxShadow = "0 6px 20px rgba(0,0,0,0.5)";
                }}
                onMouseLeave={(e) => {
                  e.target.style.background = "rgba(0,0,0,0.7)";
                  e.target.style.transform = "translateY(-50%) scale(1)";
                  e.target.style.boxShadow = "0 4px 16px rgba(0,0,0,0.4)";
                }}
              >
                <ChevronRight size={20} />
              </button>
            </>
          )}

          {/* Slide counter */}
          <div style={{
            position: "absolute", top: "1.5rem", left: "1.5rem",
            padding: "0.3rem 0.8rem", borderRadius: "2rem",
            background: "rgba(0,0,0,0.7)", color: "rgba(255,255,255,0.9)",
            fontSize: "0.7rem", fontWeight: 600,
            backdropFilter: "blur(8px)", border: "1px solid rgba(255,255,255,0.15)",
            boxShadow: "0 4px 12px rgba(0,0,0,0.3)",
          }}>
            {current + 1} / {total}
          </div>
        </div>

        {/* Bottom bar */}
        <div style={{
          padding: "1rem 1.25rem",
          display: "flex", alignItems: "center", justifyContent: "space-between",
          gap: "1rem",
          borderTop: "1px solid var(--border)",
          background: "var(--bg-card)",
          boxShadow: "0 -4px 16px rgba(0,0,0,0.1)",
        }}>
          {/* Dots */}
          <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
            {slides.map((img, i) => (
              <button
                key={`${selectedRole}-${i}`}
                onClick={() => go(i)}
                aria-label={`Go to slide ${i + 1}`}
                title={i === 0 ? "Overview" : img.caption || `Screenshot ${i}`}
                style={{
                  width: i === current ? "2rem" : "0.75rem",
                  height: "0.75rem",
                  borderRadius: "9999px",
                  border: "none", cursor: "pointer",
                  background: i === current
                    ? "linear-gradient(135deg, var(--accent), var(--accent-2))"
                    : "rgba(255,255,255,0.3)",
                  transition: "all 0.3s ease",
                  padding: 0, flexShrink: 0,
                  boxShadow: i === current ? "0 2px 8px rgba(0,0,0,0.3)" : "none",
                  transform: i === current ? "scale(1.1)" : "scale(1)",
                }}
                onMouseEnter={(e) => {
                  if (i !== current) {
                    e.target.style.background = "rgba(255,255,255,0.5)";
                    e.target.style.transform = "scale(1.05)";
                  }
                }}
                onMouseLeave={(e) => {
                  if (i !== current) {
                    e.target.style.background = "rgba(255,255,255,0.3)";
                    e.target.style.transform = "scale(1)";
                  }
                }}
              />
            ))}
          </div>

          {/* Action links */}
          <div style={{ display: "flex", gap: "0.5rem", marginLeft: "auto" }}>
            {project.githubApi && (
              <a href={project.githubApi} target="_blank" rel="noopener noreferrer" style={linkStyle("secondary")}>
                <Github size={13} /> <span style={{ display: "var(--btn-label-display, inline)" }}>API</span>
              </a>
            )}
            {project.github && (
              <a href={project.github} target="_blank" rel="noopener noreferrer" style={linkStyle("secondary")}>
                <Github size={13} /> <span style={{ display: "var(--btn-label-display, inline)" }}>{project.githubApi ? "Frontend" : "Code"}</span>
              </a>
            )}
            {project.live ? (
              <a href={project.live} target="_blank" rel="noopener noreferrer" style={linkStyle("primary")}>
                <ExternalLink size={13} /> <span style={{ display: "var(--btn-label-display, inline)" }}>Live</span>
              </a>
            ) : project.liveProtected && (
              <a href={project.liveProtected} target="_blank" rel="noopener noreferrer" style={linkStyle("primary")}>
                <Lock size={13} /> <span style={{ display: "var(--btn-label-display, inline)" }}>Live</span>
              </a>
            )}
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

const arrowStyle = (side) => ({
  position: "absolute", top: "50%", transform: "translateY(-50%)",
  [side]: "2rem", zIndex: 10,
  width: "3rem", height: "3rem", borderRadius: "50%",
  background: "rgba(0,0,0,0.7)", border: "1px solid rgba(255,255,255,0.2)",
  color: "#fff", cursor: "pointer",
  display: "flex", alignItems: "center", justifyContent: "center",
  backdropFilter: "blur(8px)",
  boxShadow: "0 4px 16px rgba(0,0,0,0.4)",
  transition: "all 0.25s ease",
  ":hover": {
    background: "rgba(0,0,0,0.9)",
    transform: "translateY(-50%) scale(1.05)",
    boxShadow: "0 6px 20px rgba(0,0,0,0.5)",
  },
});

const linkStyle = (variant) => ({
  display: "inline-flex", alignItems: "center", gap: "0.3rem",
  padding: "0.35rem 0.85rem", borderRadius: "0.5rem",
  fontSize: "0.75rem", fontWeight: 600, textDecoration: "none",
  ...(variant === "primary"
    ? { background: "linear-gradient(135deg, var(--accent), var(--accent-2))", color: "#fff" }
    : { background: "var(--bg-secondary)", color: "var(--text-secondary)", border: "1px solid var(--border-strong)" }
  ),
});

export default ProjectCarousel;
