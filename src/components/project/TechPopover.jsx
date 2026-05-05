import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "motion/react";

const TechPopover = ({ techs, dark = false }) => {
  const [open, setOpen] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    if (!open) return;
    const handler = (e) => { if (ref.current && !ref.current.contains(e.target)) setOpen(false); };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, [open]);

  if (!techs?.length) return null;

  return (
    <div ref={ref} style={{ position: "relative" }}>
      <span
        onClick={e => { e.stopPropagation(); setOpen(p => !p); }}
        style={{
          padding: "0.175rem 0.55rem", borderRadius: "9999px",
          fontSize: "0.65rem", fontWeight: 700, cursor: "pointer",
          userSelect: "none", transition: "background 0.2s, color 0.2s",
          ...(dark
            ? {
                background: open ? "rgba(255,255,255,0.35)" : "rgba(255,255,255,0.15)",
                color: "#fff", border: "1px solid rgba(255,255,255,0.3)",
                backdropFilter: "blur(4px)",
              }
            : {
                background: open ? "var(--accent)" : "var(--accent-glow)",
                color: open ? "#fff" : "var(--accent)",
                border: "1px solid var(--accent)",
              }
          ),
        }}
      >
        +{techs.length}
      </span>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 6, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 6, scale: 0.95 }}
            transition={{ duration: 0.15 }}
            onClick={e => e.stopPropagation()}
            style={{
              position: "absolute", bottom: "calc(100% + 0.5rem)", left: 0,
              zIndex: 50,
              background: "var(--bg-card)",
              border: "1px solid var(--border-strong)",
              borderRadius: "0.75rem",
              padding: "0.625rem 0.75rem",
              boxShadow: "var(--shadow-lg)",
              display: "flex", flexWrap: "wrap", gap: "0.3rem",
              minWidth: "9rem",
            }}
          >
            {techs.map((t, i) => (
              <span key={i} style={{
                padding: "0.2rem 0.6rem", borderRadius: "9999px",
                background: "var(--bg-secondary)", border: "1px solid var(--accent)",
                color: "var(--accent)", fontSize: "0.65rem", fontWeight: 600,
                whiteSpace: "nowrap",
              }}>{t}</span>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default TechPopover;
