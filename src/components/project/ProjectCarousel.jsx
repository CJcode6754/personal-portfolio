import React, { useState, useCallback, useEffect, useRef, memo } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ChevronLeft, ChevronRight, X, Github, ExternalLink, Lock } from "lucide-react";
import TechPopover from "./TechPopover";

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
const HeroSlide = memo(({ project }) => (
  <div style={{ position: "relative", width: "100%", height: "100%" }}>
    {/* blurred bg fill */}
    <img
      src={project.images[0].src}
      aria-hidden="true"
      style={{
        position: "absolute", inset: 0,
        width: "100%", height: "100%",
        objectFit: "cover",
        filter: "blur(18px) brightness(0.75)",
        transform: "scale(1.1)",
      }}
    />
    <LazyImage src={project.images[0].src} alt={project.title} priority style={{ position: "relative" }} />
    <div style={{
      position: "absolute", inset: 0,
      background: "linear-gradient(to top, rgba(0,0,0,0.88) 0%, rgba(0,0,0,0.4) 40%, transparent 65%)",
    }} />
    <div style={{
      position: "absolute", bottom: 0, left: 0, right: 0,
      padding: "clamp(1rem, 4vw, 2rem) clamp(1rem, 4vw, 2rem) clamp(1rem, 3vw, 1.75rem)",
    }}>
      <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", marginBottom: "0.375rem" }}>
      </div>
      <h2 style={{
        fontFamily: "Outfit, sans-serif",
        fontSize: "clamp(1rem, 3vw, 1.75rem)",
        fontWeight: 800, color: "#fff",
        margin: "0 0 0.375rem", lineHeight: 1.2,
        textShadow: "0 2px 8px rgba(0,0,0,0.4)",
      }}>{project.title}</h2>
      <p style={{
        fontSize: "clamp(0.7rem, 2vw, 0.8125rem)", color: "rgba(255,255,255,0.82)",
        lineHeight: 1.5, margin: 0,
        display: "-webkit-box", WebkitLineClamp: 1,
        WebkitBoxOrient: "vertical", overflow: "hidden",
      }}>{project.description}</p>
      <div style={{ display: "flex", flexWrap: "wrap", gap: "0.3rem", marginTop: "0.5rem", alignItems: "center" }}>
        {project.technologies.slice(0, 4).map((t, i) => (
          <span key={i} style={{
            padding: "0.175rem 0.55rem", borderRadius: "9999px",
            background: "rgba(255,255,255,0.12)", color: "rgba(255,255,255,0.9)",
            fontSize: "0.65rem", fontWeight: 500,
            border: "1px solid rgba(255,255,255,0.2)",
            backdropFilter: "blur(4px)",
          }}>{t}</span>
        ))}
        <TechPopover techs={project.technologies.slice(4)} dark />
      </div>
    </div>
  </div>
));

// ── Regular image slide ───────────────────────────────────────────────────────
const ImageSlide = memo(({ image, index }) => (
  <div style={{ position: "relative", width: "100%", height: "100%" }}>
    <LazyImage src={image.src} alt={image.caption || `Screenshot ${index}`} />
    {image.caption && (
      <div style={{
        position: "absolute", bottom: 0, left: 0, right: 0,
        padding: "0.75rem 1.25rem",
        background: "linear-gradient(to top, rgba(0,0,0,0.7) 0%, transparent 100%)",
      }}>
        <p style={{ color: "rgba(255,255,255,0.9)", fontSize: "0.75rem", fontWeight: 500, margin: 0 }}>
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
  const dragStart = useRef(null);
  const total = project.images.length;

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
        background: "rgba(0,0,0,0.92)",
        backdropFilter: "blur(12px)",
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
              key={current}
              custom={direction}
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.28, ease: [0.25, 0.46, 0.45, 0.94] }}
              style={{ position: "absolute", inset: "0.75rem 0.75rem 0", borderRadius: "0.75rem", overflow: "hidden" }}
            >
              {current === 0
                ? <HeroSlide project={project} />
                : <ImageSlide image={project.images[current]} index={current} />
              }
            </motion.div>
          </AnimatePresence>

          {/* Close */}
          <button
            onClick={onClose}
            aria-label="Close carousel"
            style={{
              position: "absolute", top: "1.5rem", right: "1.5rem", zIndex: 10,
              width: "2rem", height: "2rem", borderRadius: "9999px",
              background: "rgba(0,0,0,0.6)", border: "1px solid rgba(255,255,255,0.15)",
              color: "#fff", cursor: "pointer",
              display: "flex", alignItems: "center", justifyContent: "center",
              backdropFilter: "blur(6px)",
            }}
          >
            <X size={14} />
          </button>

          {/* Arrows */}
          {total > 1 && (
            <>
              <button
                onClick={prev}
                aria-label="Previous slide"
                style={arrowStyle("left")}
              >
                <ChevronLeft size={18} />
              </button>
              <button
                onClick={next}
                aria-label="Next slide"
                style={arrowStyle("right")}
              >
                <ChevronRight size={18} />
              </button>
            </>
          )}

          {/* Slide counter */}
          <div style={{
            position: "absolute", top: "1.5rem", left: "1.5rem",
            padding: "0.2rem 0.6rem", borderRadius: "9999px",
            background: "rgba(0,0,0,0.55)", color: "rgba(255,255,255,0.85)",
            fontSize: "0.65rem", fontWeight: 600,
            backdropFilter: "blur(6px)", border: "1px solid rgba(255,255,255,0.1)",
          }}>
            {current + 1} / {total}
          </div>
        </div>

        {/* Bottom bar */}
        <div style={{
          padding: "0.75rem 1rem",
          display: "flex", alignItems: "center", justifyContent: "space-between",
          gap: "1rem",
          borderTop: "1px solid var(--border)",
          background: "var(--bg-card)",
        }}>
          {/* Dots */}
          <div style={{ display: "flex", alignItems: "center", gap: "0.375rem" }}>
            {project.images.map((img, i) => (
              <button
                key={i}
                onClick={() => go(i)}
                aria-label={`Go to slide ${i + 1}`}
                title={i === 0 ? "Overview" : img.caption || `Screenshot ${i}`}
                style={{
                  width: i === current ? "1.5rem" : "0.5rem",
                  height: "0.5rem",
                  borderRadius: "9999px",
                  border: "none", cursor: "pointer",
                  background: i === current
                    ? "linear-gradient(135deg, var(--accent), var(--accent-2))"
                    : "var(--border-strong)",
                  transition: "width 0.25s ease, background 0.2s",
                  padding: 0, flexShrink: 0,
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
  position: "absolute", top: "55%", transform: "translateY(-50%)",
  [side]: "1.5rem", zIndex: 10,
  width: "2.25rem", height: "2.25rem", borderRadius: "9999px",
  background: "rgba(0,0,0,0.55)", border: "1px solid rgba(255,255,255,0.15)",
  color: "#fff", cursor: "pointer",
  display: "flex", alignItems: "center", justifyContent: "center",
  backdropFilter: "blur(6px)",
  transition: "background 0.2s",
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
