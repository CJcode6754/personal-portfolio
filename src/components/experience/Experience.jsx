import React, { useState } from "react";
import {
  Briefcase
} from "lucide-react";
import { motion } from "motion/react";
import { timeline } from "../assets";

const ExperienceTimeline = () => {
  return (
    <section
      id="experience-section"
      style={{
        backgroundColor: "var(--bg-secondary)",
        padding: "4.5rem 1.5rem",
        overflow: "hidden",
        position: "relative",
        transition: "background-color 0.4s ease",
      }}
    >
      <div style={{
        position: "absolute", bottom: "-4rem", left: "-4rem",
        width: "22rem", height: "22rem", borderRadius: "9999px",
        background: "radial-gradient(circle, var(--accent), transparent)",
        filter: "blur(80px)", opacity: 0.1, pointerEvents: "none",
      }} />

      <div style={{ maxWidth: "56rem", margin: "0 auto", position: "relative", zIndex: 1 }}>

        <motion.div 
          style={{ textAlign: "center", marginBottom: "3rem" }}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div style={{
            display: "inline-flex", alignItems: "center", gap: "0.5rem",
            padding: "0.3rem 0.875rem", borderRadius: "9999px",
            background: "var(--bg-card)", border: "1px solid var(--border-strong)",
            color: "var(--accent)", fontSize: "0.8125rem", fontWeight: 500,
            marginBottom: "1rem",
          }}>
            <Briefcase style={{ width: "0.875rem", height: "0.875rem" }} />
            My Journey
          </div>
          <h2 style={{
            fontFamily: "Outfit, sans-serif",
            fontSize: "clamp(2rem, 5vw, 3rem)",
            fontWeight: 800, color: "var(--text-primary)",
            marginBottom: "0.75rem", lineHeight: 1.15,
          }}>
            Experience &{" "}
            <span style={{
              background: "linear-gradient(135deg, var(--accent), var(--accent-2))",
              WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text",
            }}>
              Timeline
            </span>
          </h2>
          <p style={{ color: "var(--text-secondary)", fontSize: "1rem", maxWidth: "32rem", margin: "0 auto" }}>
            From my first line of code to building enterprise systems.
          </p>
        </motion.div>

        <div style={{ position: "relative", paddingLeft: "clamp(1.75rem, 5vw, 2.5rem)" }}>
          {timeline.map((item, i) => {
            const Icon = item.icon;
            return (
              <TimelineCard
                key={item.id}
                item={item}
                Icon={Icon}
                index={i}
                isLast={i === timeline.length - 1}
                nextItem={timeline[i + 1]}
              />
            );
          })}
        </div>

      </div>
    </section>
  );
};

const TimelineCard = ({ item, Icon, index, isLast, nextItem }) => {
  const [hovered, setHovered] = useState(false);
  const [expanded, setExpanded] = useState(index === 0);

  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: 0.1 * index }}
      style={{ position: "relative", marginBottom: isLast ? 0 : "1.25rem" }}
    >
      {!isLast && (
        <div style={{
          position: "absolute",
          left: "-1.75rem",
          top: "2.625rem",
          height: "calc(100% - 0.375rem)",
          width: "2px",
          background: `linear-gradient(to bottom, ${item.iconColor}, ${nextItem?.iconColor || "var(--border)"})`,
          opacity: 0.5,
          zIndex: 0,
        }} />
      )}

      <div style={{
        position: "absolute",
        left: "-2.5rem", top: "1rem",
        width: "1.625rem", height: "1.625rem",
        borderRadius: "9999px",
        background: item.iconBg,
        border: `2px solid ${item.iconColor}`,
        display: "flex", alignItems: "center", justifyContent: "center",
        boxShadow: "0 0 0 3px var(--bg-secondary)",
        zIndex: 1,
      }}>
        <Icon style={{ width: "0.75rem", height: "0.75rem", color: item.iconColor }} />
      </div>

      <div
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        onClick={() => setExpanded(p => !p)}
        style={{
          background: "var(--bg-card)",
          border: `1px solid ${hovered || expanded ? item.iconColor : "var(--border)"}`,
          borderRadius: "1rem",
          padding: "0.875rem 1.25rem",
          boxShadow: hovered || expanded ? `0 6px 24px ${item.iconColor}18` : "var(--shadow)",
          transition: "border-color 0.25s, box-shadow 0.25s",
          cursor: "pointer",
        }}
      >
        {/* Header — always visible */}
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: "0.75rem", flexWrap: "wrap" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "0.625rem", flexWrap: "wrap", flex: 1 }}>
            <h3 style={{ fontSize: "0.9375rem", fontWeight: 700, color: "var(--text-primary)", margin: 0 }}>
              {item.title}
            </h3>
            {item.isCurrent && (
              <span style={{
                display: "inline-flex", alignItems: "center", gap: "0.25rem",
                padding: "0.125rem 0.5rem", borderRadius: "9999px",
                background: "rgba(34,197,94,0.12)", border: "1px solid rgba(34,197,94,0.3)",
                color: "#22c55e", fontSize: "0.6875rem", fontWeight: 600,
              }}>
                <span style={{
                  width: "0.375rem", height: "0.375rem", borderRadius: "9999px",
                  background: "#22c55e", display: "inline-block",
                  animation: "pulse-dot 1.5s ease-in-out infinite",
                }} />
                Current
              </span>
            )}
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", flexShrink: 0 }}>
            <span style={{
              padding: "0.125rem 0.625rem", borderRadius: "9999px",
              background: item.iconBg, border: `1px solid ${item.iconBorder}`,
              color: item.iconColor, fontSize: "0.6875rem", fontWeight: 600,
            }}>
              {item.year}
            </span>
            <span style={{
              color: "var(--text-muted)", fontSize: "0.75rem",
              transform: expanded ? "rotate(180deg)" : "rotate(0deg)",
              transition: "transform 0.25s ease",
              display: "inline-block", lineHeight: 1,
            }}>▾</span>
          </div>
        </div>

        <p style={{ fontSize: "0.8rem", color: item.iconColor, fontWeight: 500, margin: "0.25rem 0 0" }}>
          {item.subtitle}
        </p>

        {/* Expandable body */}
        <motion.div
          initial={false}
          animate={{ height: expanded ? "auto" : 0, opacity: expanded ? 1 : 0 }}
          transition={{ duration: 0.25, ease: "easeInOut" }}
          style={{ overflow: "hidden" }}
        >
          <p style={{
            fontSize: "0.8125rem", color: "var(--text-secondary)", lineHeight: 1.65,
            margin: "0.625rem 0 0.75rem",
          }}>
            {item.description}
          </p>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "0.3rem" }}>
            {item.tags.map(tag => (
              <span key={tag} style={{
                padding: "0.175rem 0.5rem", borderRadius: "9999px",
                background: "var(--bg-secondary)", border: "1px solid var(--border)",
                color: "var(--text-muted)", fontSize: "0.6875rem", fontWeight: 500,
              }}>
                {tag}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default ExperienceTimeline;
