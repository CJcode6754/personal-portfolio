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
    <div style={{ position: "relative", width: "100%", height: "100%", overflow: "hidden" }}>
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
      
      {/* Simple gradient at the bottom for some depth */}
      <div style={{
        position: "absolute", inset: 0,
        background: "linear-gradient(to top, rgba(0,0,0,0.5) 0%, transparent 40%)",
      }} />
      
      {/* Small floating label for project title */}
      <div style={{
        position: "absolute", bottom: "1.5rem", left: "1.5rem",
        padding: "0.5rem 1rem", borderRadius: "0.75rem",
        background: "rgba(0,0,0,0.6)", color: "#fff",
        backdropFilter: "blur(8px)", border: "1px solid rgba(255,255,255,0.1)",
        display: "flex", alignItems: "center", gap: "0.75rem"
      }}>
        <h2 style={{ fontFamily: "Outfit, sans-serif", fontSize: "1rem", fontWeight: 700, margin: 0 }}>
          {project.title}
        </h2>
        {role && (
          <>
            <div style={{ width: "1px", height: "1rem", background: "rgba(255,255,255,0.2)" }} />
            <span style={{ fontSize: "0.7rem", fontWeight: 600, color: "rgba(255,255,255,0.7)", textTransform: "uppercase", letterSpacing: "0.05em" }}>
              {role}
            </span>
          </>
        )}
      </div>
    </div>
  );
});

// ── Regular image slide ───────────────────────────────────────────────────────
const ImageSlide = memo(({ image, index, total }) => (
  <div style={{ position: "relative", width: "100%", height: "100%" }}>
    <LazyImage src={image.src} alt={image.caption || `Screenshot ${index}`} />
    {image.caption && (
      <div style={{
        position: "absolute", bottom: 0, left: 0, right: 0,
        padding: "0.875rem 1.25rem",
        background: "linear-gradient(to top, rgba(0,0,0,0.75) 0%, rgba(0,0,0,0.35) 60%, transparent 100%)",
      }}>
        <p style={{
          fontFamily: "Outfit, sans-serif",
          color: "#fff",
          fontSize: "clamp(0.8rem, 2vw, 0.925rem)",
          fontWeight: 600,
          margin: 0,
          letterSpacing: "-0.01em",
          textShadow: "0 1px 6px rgba(0,0,0,0.5)",
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
  const [showDetails, setShowDetails] = useState(false);
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
    const defaultOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = defaultOverflow || "unset";
    };
  }, []);

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
          boxShadow: "0 32px 80px rgba(0,0,0,0.6)",
          display: "flex", flexDirection: "column",
          maxHeight: "92vh",
          overflow: "hidden",
          overscrollBehavior: "contain",
        }}
      >
        {/* Role group tabs (Header) */}
        {roleGroups.length > 1 && (
          <div style={{
            display: "flex", flexWrap: "wrap", gap: "0.3rem", padding: "0.875rem 1.25rem",
            background: "var(--bg-card)", borderBottom: "1px solid var(--border)",
            alignItems: "center", zIndex: 30,
          }}>
            <span style={{
              fontFamily: "Inter, sans-serif", fontSize: "0.6rem", fontWeight: 600,
              letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--text-muted)",
              marginRight: "0.5rem",
            }}>View</span>
            {roleGroups.map((group) => (
              <button
                key={group.role}
                onClick={() => {
                  if (group.role !== selectedRole) {
                    setSelectedRole(group.role);
                    setCurrent(0);
                  }
                }}
                style={{
                  fontFamily: "Inter, sans-serif", padding: "0.4rem 0.9rem", borderRadius: "0.6rem",
                  border: "none", cursor: "pointer",
                  background: group.role === selectedRole
                    ? "var(--accent)"
                    : "var(--bg-secondary)",
                  color: group.role === selectedRole ? "#fff" : "var(--text-secondary)",
                  fontSize: "0.7rem", fontWeight: 600, transition: "all 0.25s ease",
                }}
              >
                {group.role}
              </button>
            ))}
          </div>
        )}

        {/* Scrollable Body Container */}
        <div style={{ flex: 1, overflowY: "auto", position: "relative" }}>
          
          {/* Slide area */}
          <div
            style={{ position: "relative", width: "100%", aspectRatio: "16/9", overflow: "hidden", background: "var(--bg-secondary)" }}
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
                style={{ position: "absolute", inset: 0 }}
              >
                {current === 0
                  ? <HeroSlide project={project} image={slides[0]} role={currentGroup.role} />
                  : <ImageSlide image={slides[current]} index={current} total={total} />
                }
              </motion.div>
            </AnimatePresence>

            <button
              onClick={onClose}
              style={{
                position: "absolute", top: "1rem", right: "1rem", zIndex: 10,
                width: "2.5rem", height: "2.5rem", borderRadius: "50%",
                background: "rgba(0,0,0,0.7)", border: "1px solid rgba(255,255,255,0.2)",
                color: "#fff", cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center",
                backdropFilter: "blur(8px)",
              }}
            >
              <X size={14} />
            </button>

            {total > 1 && (
              <>
                <button onClick={prev} style={arrowStyle("left")}><ChevronLeft size={18} /></button>
                <button onClick={next} style={arrowStyle("right")}><ChevronRight size={18} /></button>
              </>
            )}
            
            {/* Pagination info floating on image */}
            <div style={{
              position: "absolute", top: "1rem", left: "1rem",
              padding: "0.3rem 0.8rem", borderRadius: "2rem",
              background: "rgba(0,0,0,0.6)", color: "#fff",
              fontSize: "0.65rem", fontWeight: 600, backdropFilter: "blur(6px)",
            }}>
              {current + 1} / {total}
            </div>
          </div>

          {/* Details Toggle Button */}
          <div style={{
            padding: "0.75rem 1.25rem", borderBottom: "1px solid var(--border)",
            display: "flex", justifyContent: "center", background: "var(--bg-secondary)",
          }}>
            <button
              onClick={() => setShowDetails(!showDetails)}
              style={{
                background: "none", border: "none", color: "var(--text-secondary)",
                fontSize: "0.75rem", fontWeight: 700, cursor: "pointer",
                display: "flex", alignItems: "center", gap: "0.5rem",
              }}
            >
              {showDetails ? "Hide Project Details" : "View Project Details & Responsibilities"}
            </button>
          </div>

          {/* Details Content */}
          <AnimatePresence>
            {showDetails && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.3 }}
                style={{ overflow: "hidden" }}
              >
                <div style={{ padding: "2rem", display: "flex", flexDirection: "column", gap: "1.5rem" }}>
                  <div>
                    <h4 style={{ fontFamily: "Outfit, sans-serif", fontSize: "0.95rem", fontWeight: 700, color: "var(--text-primary)", marginBottom: "0.75rem" }}>
                      Project Summary
                    </h4>
                    <p style={{ fontFamily: "Inter, sans-serif", fontSize: "0.9rem", color: "var(--text-secondary)", lineHeight: 1.7, margin: 0 }}>
                      {project.description}
                    </p>
                  </div>
                  {project.responsibilities && project.responsibilities.length > 0 && (
                    <div>
                      <h4 style={{ fontFamily: "Outfit, sans-serif", fontSize: "0.95rem", fontWeight: 700, color: "var(--text-primary)", marginBottom: "0.75rem" }}>
                        Key Responsibilities & Achievements
                      </h4>
                      <ul style={{ margin: 0, paddingLeft: "1.25rem", display: "flex", flexDirection: "column", gap: "0.75rem" }}>
                        {project.responsibilities.map((resp, i) => (
                          <li key={i} style={{ fontFamily: "Inter, sans-serif", fontSize: "0.9rem", color: "var(--text-secondary)", lineHeight: 1.6, listStyleType: "circle" }}>
                            {resp}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Footer (Sticky) */}
        <div style={{
          padding: "1rem 1.5rem", background: "var(--bg-card)", borderTop: "1px solid var(--border)",
          display: "flex", alignItems: "center", justifyContent: "space-between", gap: "1rem", zIndex: 30,
        }}>
          {/* Dots */}
          <div style={{ display: "flex", gap: "0.4rem" }}>
            {slides.map((_, i) => (
              <button
                key={i}
                onClick={() => go(i)}
                style={{
                  width: i === current ? "1.5rem" : "0.5rem", height: "0.5rem",
                  borderRadius: "999px", border: "none", cursor: "pointer",
                  background: i === current ? "var(--accent)" : "var(--border-strong)",
                  transition: "all 0.3s",
                }}
              />
            ))}
          </div>

          {/* Action links */}
          <div style={{ display: "flex", gap: "0.5rem" }}>
            {project.githubApi && (
              <a href={project.githubApi} target="_blank" rel="noopener noreferrer" style={linkStyle("secondary")}>
                <Github size={14} /> API
              </a>
            )}
            {project.github && (
              <a href={project.github} target="_blank" rel="noopener noreferrer" style={linkStyle("secondary")}>
                <Github size={14} /> {project.githubApi ? "Frontend" : "Code"}
              </a>
            )}
            {project.live ? (
              <a href={project.live} target="_blank" rel="noopener noreferrer" style={linkStyle("primary")}>
                <ExternalLink size={14} /> Live
              </a>
            ) : project.liveProtected && (
              <a href={project.liveProtected} target="_blank" rel="noopener noreferrer" style={linkStyle("primary")}>
                <Lock size={14} /> Live
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
  [side]: "1rem", zIndex: 10,
  width: "2.5rem", height: "2.5rem", borderRadius: "50%",
  background: "rgba(0,0,0,0.6)", border: "1px solid rgba(255,255,255,0.15)",
  color: "#fff", cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center",
  backdropFilter: "blur(6px)",
});

const linkStyle = (variant) => ({
  display: "inline-flex", alignItems: "center", gap: "0.5rem",
  padding: "0.5rem 1rem", borderRadius: "0.6rem",
  fontFamily: "Inter, sans-serif", fontSize: "0.75rem", fontWeight: 700, textDecoration: "none",
  transition: "all 0.2s",
  ...(variant === "primary"
    ? { background: "var(--accent)", color: "#fff" }
    : { background: "var(--bg-secondary)", color: "var(--text-secondary)", border: "1px solid var(--border)" }
  ),
});

export default ProjectCarousel;
