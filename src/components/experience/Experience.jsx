import React, { useEffect, useState } from "react";
import {
  Briefcase
} from "lucide-react";
import { timeline } from "../assets";


const ExperienceTimeline = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setIsVisible(true); },
      { threshold: 0.05 }
    );
    const el = document.getElementById("experience-section");
    if (el) observer.observe(el);
    return () => { if (el) observer.unobserve(el); };
  }, []);

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
      {/* Blob */}
      <div style={{
        position: "absolute", bottom: "-4rem", left: "-4rem",
        width: "22rem", height: "22rem", borderRadius: "9999px",
        background: "radial-gradient(circle, var(--accent), transparent)",
        filter: "blur(80px)", opacity: 0.1, pointerEvents: "none",
      }} />

      <div style={{ maxWidth: "56rem", margin: "0 auto", position: "relative", zIndex: 1 }}>

        {/* Header */}
        <div style={{
          textAlign: "center", marginBottom: "3rem",
          opacity: isVisible ? 1 : 0,
          transform: isVisible ? "translateY(0)" : "translateY(20px)",
          transition: "opacity 0.6s ease, transform 0.6s ease",
        }}>
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
        </div>

        {/* Compact vertical timeline — left anchored */}
        <div style={{ position: "relative", paddingLeft: "2.5rem" }}>

          {timeline.map((item, i) => {
            const Icon = item.icon;
            return (
              <TimelineCard
                key={item.id}
                item={item}
                Icon={Icon}
                index={i}
                isVisible={isVisible}
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

const TimelineCard = ({ item, Icon, index, isVisible, isLast, nextItem }) => {
  const [hovered, setHovered] = useState(false);
  const [expanded, setExpanded] = useState(false);

  return (
    <div
      style={{
        position: "relative",
        marginBottom: isLast ? 0 : "1.25rem",
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? "translateY(0)" : "translateY(16px)",
        transition: `opacity 0.5s ease ${0.08 * index}s, transform 0.5s ease ${0.08 * index}s`,
      }}
    >
      {/* Connecting Line Segment */}
      {!isLast && (
        <div style={{
          position: "absolute",
          left: "-1.75rem",
          top: "2.625rem",
          height: "calc(100% - 0.375rem)",
          width: "2px",
          background: `linear-gradient(to bottom, ${item.iconColor}, ${nextItem?.iconColor || 'var(--border)'})`,
          opacity: 0.5,
          zIndex: 0,
        }} />
      )}

      {/* Icon dot */}
      <div style={{
        position: "absolute",
        left: "-2.5rem",
        top: "1rem",
        width: "1.625rem",
        height: "1.625rem",
        borderRadius: "9999px",
        background: item.iconBg,
        border: `2px solid ${item.iconColor}`,
        display: "flex", alignItems: "center", justifyContent: "center",
        boxShadow: `0 0 0 3px var(--bg-secondary)`,
        zIndex: 1,
      }}>
        <Icon style={{ width: "0.75rem", height: "0.75rem", color: item.iconColor }} />
      </div>

      {/* Card */}
      <div
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        style={{
          background: "var(--bg-card)",
          border: `1px solid ${hovered ? item.iconColor : "var(--border)"}`,
          borderRadius: "1rem",
          padding: "1rem 1.25rem",
          boxShadow: hovered ? `0 6px 24px ${item.iconColor}18` : "var(--shadow)",
          transition: "border-color 0.25s, box-shadow 0.25s",
          cursor: "default",
        }}
      >
        {/* Top row: year + title + current badge */}
        <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", gap: "0.75rem", flexWrap: "wrap", marginBottom: "0.25rem" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "0.625rem", flexWrap: "wrap" }}>
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
          <span style={{
            padding: "0.125rem 0.625rem", borderRadius: "9999px",
            background: item.iconBg, border: `1px solid ${item.iconBorder}`,
            color: item.iconColor, fontSize: "0.6875rem", fontWeight: 600,
            flexShrink: 0,
          }}>
            {item.year}
          </span>
        </div>

        {/* Subtitle */}
        <p style={{ fontSize: "0.8rem", color: item.iconColor, fontWeight: 500, margin: "0 0 0.5rem 0" }}>
          {item.subtitle}
        </p>

        {/* Description — collapsible on small content, always shown */}
        <p style={{
          fontSize: "0.8125rem", color: "var(--text-secondary)", lineHeight: 1.65,
          margin: "0 0 0.75rem 0",
        }}>
          {item.description}
        </p>

        {/* Tags */}
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
      </div>
    </div>
  );
};

export default ExperienceTimeline;
