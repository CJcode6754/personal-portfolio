import React, { useEffect, useState } from "react";
import { Star } from "lucide-react";
import { motion } from "motion/react";
import { stats, technologies } from "../assets";

const TechStack = () => {
  const [tech, setTech] = useState([]);
  const [myStats, setMyStats] = useState([]);

  useEffect(() => {
    setTech(technologies);
    setMyStats(stats);
  }, []);

  const statIconColors = [
    { from: "#6366f1", to: "#a78bfa" },
    { from: "#10b981", to: "#34d399" },
    { from: "#f59e0b", to: "#f97316" },
    { from: "#06b6d4", to: "#3b82f6" },
  ];

  return (
    <section
      id="techstack-section"
      style={{
        backgroundColor: "var(--bg-secondary)",
        padding: "4.5rem 1.5rem",
        overflow: "hidden",
        position: "relative",
        transition: "background-color 0.4s ease",
      }}
    >
      <div style={{
        position: "absolute", top: "-10rem", right: 0,
        width: "24rem", height: "24rem", borderRadius: "9999px",
        background: "radial-gradient(circle, var(--accent-2), transparent)",
        filter: "blur(80px)", opacity: 0.15, pointerEvents: "none",
      }} />

      <div style={{ maxWidth: "72rem", margin: "0 auto", position: "relative", zIndex: 1 }}>

        <motion.div 
          style={{ textAlign: "center", marginBottom: "3rem" }}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div style={{
            display: "inline-flex", alignItems: "center", gap: "0.5rem",
            padding: "0.375rem 1rem", borderRadius: "9999px",
            background: "var(--bg-card)", border: "1px solid var(--border-strong)",
            color: "var(--accent)", fontSize: "0.875rem", fontWeight: 500,
            marginBottom: "1.5rem",
          }}>
            <Star style={{ width: "1rem", height: "1rem" }} />
            Skills & Expertise
          </div>
          <h2 style={{
            fontFamily: "Outfit, sans-serif", fontSize: "clamp(2.5rem, 6vw, 4rem)",
            fontWeight: 800, color: "var(--text-primary)", marginBottom: "1rem",
            lineHeight: 1.1,
          }}>
            My{" "}
            <span style={{
              background: "linear-gradient(135deg, var(--accent), var(--accent-2))",
              WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text",
            }}>
              Tech Stack
            </span>
          </h2>
          <p style={{ color: "var(--text-secondary)", fontSize: "clamp(0.875rem, 2vw, 1.125rem)", maxWidth: "32rem", margin: "0 auto" }}>
            Tools and technologies I use to bring ideas to life.
          </p>
        </motion.div>

        <motion.div 
          style={{
            display: "flex", flexWrap: "wrap", gap: "0.75rem",
            justifyContent: "center", marginBottom: "3rem"
          }}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ staggerChildren: 0.03, delayChildren: 0.2 }}
        >
          {tech.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
              style={{
                display: "inline-flex", alignItems: "center", gap: "0.625rem",
                padding: "0.625rem 1.25rem", borderRadius: "9999px",
                background: "var(--bg-card)", border: "1px solid var(--border)",
                cursor: "default",
                transition: `border-color 0.2s, box-shadow 0.2s, transform 0.2s`,
              }}
              onMouseEnter={e => {
                e.currentTarget.style.borderColor = "var(--accent)";
                e.currentTarget.style.boxShadow = "0 4px 20px var(--accent-glow)";
                e.currentTarget.style.transform = "translateY(-3px)";
              }}
              onMouseLeave={e => {
                e.currentTarget.style.borderColor = "var(--border)";
                e.currentTarget.style.boxShadow = "none";
                e.currentTarget.style.transform = "translateY(0)";
              }}
            >
              <img src={t.icon} alt={t.name} style={{ width: "1.25rem", height: "1.25rem", objectFit: "contain" }} />
              <span style={{ fontSize: "0.875rem", fontWeight: 500, color: "var(--text-primary)" }}>
                {t.name}
              </span>
            </motion.div>
          ))}
        </motion.div>

        <motion.div 
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 200px), 1fr))",
            gap: "1.25rem"
          }}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          {myStats.map((stat, i) => {
            const IconComponent = stat.icon;
            const colors = statIconColors[i] || statIconColors[0];
            return (
              <div
                key={stat.label}
                style={{
                  backgroundColor: "var(--bg-card)", border: "1px solid var(--border)",
                  borderRadius: "1.25rem", padding: "clamp(1.25rem, 4vw, 2rem) clamp(1rem, 3vw, 1.5rem)", textAlign: "center",
                  cursor: "default", transition: "transform 0.3s, box-shadow 0.3s, border-color 0.3s",
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.transform = "translateY(-4px)";
                  e.currentTarget.style.boxShadow = "var(--shadow-lg)";
                  e.currentTarget.style.borderColor = "var(--accent)";
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.transform = "translateY(0)";
                  e.currentTarget.style.boxShadow = "none";
                  e.currentTarget.style.borderColor = "var(--border)";
                }}
              >
                <div style={{
                  display: "inline-flex", alignItems: "center", justifyContent: "center",
                  width: "3.5rem", height: "3.5rem", borderRadius: "1rem",
                  background: `linear-gradient(135deg, ${colors.from}, ${colors.to})`,
                  marginBottom: "1.25rem",
                }}>
                  <IconComponent style={{ width: "1.75rem", height: "1.75rem", color: "#fff" }} />
                </div>
                <div style={{
                  fontFamily: "Outfit, sans-serif", fontSize: "2.25rem", fontWeight: 800,
                  color: "var(--text-primary)", marginBottom: "0.375rem",
                }}>
                  {stat.number}
                </div>
                <div style={{ fontSize: "0.875rem", color: "var(--text-secondary)", fontWeight: 500 }}>
                  {stat.label}
                </div>
              </div>
            );
          })}
        </motion.div>

      </div>
    </section>
  );
};

export default TechStack;