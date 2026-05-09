import React, { useState } from "react";
import { Github, Mail } from "lucide-react";
import { motion } from "motion/react";
import { services } from "../assets";

export default function Services() {
  return (
    <section
      id="services"
      style={{
        backgroundColor: "var(--bg-primary)",
        padding: "4.5rem 1.5rem",
        overflow: "hidden",
        position: "relative",
        transition: "background-color 0.4s ease",
      }}
    >
      <div style={{
        position: "absolute", top: 0, right: 0,
        width: "22rem", height: "22rem", borderRadius: "9999px",
        background: "radial-gradient(circle, var(--accent-2), transparent)",
        filter: "blur(80px)", opacity: 0.1, pointerEvents: "none",
        transform: "translate(30%, -30%)",
      }} />

      <div style={{ maxWidth: "72rem", margin: "0 auto", position: "relative", zIndex: 1 }}>

        <motion.div 
          style={{ textAlign: "center", marginBottom: "2.5rem" }}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 style={{
            fontFamily: "Outfit, sans-serif",
            fontSize: "clamp(2.5rem, 6vw, 4rem)",
            fontWeight: 800, color: "var(--text-primary)",
            marginBottom: "1rem", lineHeight: 1.1,
          }}>
            What I{" "}
            <span style={{
              color: "var(--accent)",
            }}>Offer</span>
          </h2>
        <p style={{
          color: "var(--text-secondary)", fontSize: "clamp(0.875rem, 2vw, 1.125rem)",
          maxWidth: "36rem", margin: "0 auto",
        }}>
          Building digital products while constantly learning new ways to solve problems.
        </p>
        </motion.div>

        <motion.div 
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 280px), 1fr))",
            gap: "1.5rem",
            marginBottom: "3rem",
          }}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ staggerChildren: 0.1, delayChildren: 0.2 }}
        >
          {services.map(({ name, icon: Icon, description, color, colorRaw }) => (
            <ServiceCard key={name} name={name} Icon={Icon} description={description} color={color} colorRaw={colorRaw} />
          ))}
        </motion.div>

        <CTABanner />

        <div style={{ marginTop: "4rem", textAlign: "center", fontSize: "0.875rem", color: "var(--text-muted)" }}>
          Designed & built by{" "}
          <span style={{ color: "var(--accent)", fontWeight: 600 }}>Ceejay Ibabiosa</span>
          {" "} · Philippines · {new Date().getFullYear()}
        </div>
      </div>
    </section>
  );
}

function ServiceCard({ name, Icon, description, color, colorRaw }) {
  const [hovered, setHovered] = useState(false);
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        background: "var(--bg-card)",
        border: `1px solid ${hovered ? colorRaw : "var(--border)"}`,
        borderRadius: "1.25rem",
        padding: "2rem",
        cursor: "default",
        transform: hovered ? "translateY(-6px)" : "translateY(0)",
        boxShadow: hovered ? `0 8px 30px ${colorRaw}22` : "var(--shadow)",
        transition: "transform 0.3s, border-color 0.3s, box-shadow 0.3s",
      }}
    >
      <div style={{
        width: "3.5rem", height: "3.5rem", borderRadius: "1rem",
        background: `${colorRaw}18`, border: `1px solid ${colorRaw}33`,
        display: "flex", alignItems: "center", justifyContent: "center",
        marginBottom: "1.5rem",
        transform: hovered ? "scale(1.1)" : "scale(1)",
        transition: "transform 0.3s",
      }}>
        <Icon style={{ width: "1.75rem", height: "1.75rem", color: colorRaw }} />
      </div>
      <h3 style={{ fontSize: "1.0625rem", fontWeight: 700, color: "var(--text-primary)", marginBottom: "0.75rem" }}>
        {name}
      </h3>
      <p style={{ fontSize: "0.9rem", color: "var(--text-secondary)", lineHeight: 1.7 }}>
        {description}
      </p>
    </motion.div>
  );
}

function CTABanner() {
  const [li, setLi] = useState(false);
  const [gh, setGh] = useState(false);

  return (
    <motion.div 
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, delay: 0.2 }}
      style={{
        position: "relative", overflow: "hidden",
        borderRadius: "1.75rem",
        background: "var(--bg-card)",
        border: "1px solid var(--border)",
        padding: "clamp(2rem, 6vw, 4rem) clamp(1.25rem, 4vw, 2rem)",
        textAlign: "center",
      }}
    >
      <div style={{
        position: "absolute", top: 0, right: 0, width: "16rem", height: "16rem",
        borderRadius: "9999px", background: "radial-gradient(circle, var(--accent), transparent)",
        filter: "blur(60px)", opacity: 0.15, transform: "translate(30%, -30%)", pointerEvents: "none",
      }} />
      <div style={{
        position: "absolute", bottom: 0, left: 0, width: "16rem", height: "16rem",
        borderRadius: "9999px", background: "radial-gradient(circle, var(--accent-2), transparent)",
        filter: "blur(60px)", opacity: 0.15, transform: "translate(-30%, 30%)", pointerEvents: "none",
      }} />

      <div style={{ position: "relative", zIndex: 1 }}>
        <div style={{ fontSize: "3.5rem", marginBottom: "1.25rem" }}>🚀</div>
        <h3 style={{
          fontFamily: "Outfit, sans-serif",
          fontSize: "clamp(1.5rem, 4vw, 2.25rem)", fontWeight: 800,
          color: "var(--text-primary)", marginBottom: "1rem",
        }}>
          Ready to build something{" "}
          <span style={{ color: "var(--accent)" }}>
            amazing?
          </span>
        </h3>
        <p style={{
          color: "var(--text-secondary)", fontSize: "1.0625rem",
          maxWidth: "36rem", margin: "0 auto 2.5rem", lineHeight: 1.7,
        }}>
          Let's collaborate and turn your vision into reality. I'm passionate about
          creating digital experiences that make a real difference.
        </p>
        <div style={{ display: "flex", gap: "1rem", justifyContent: "center", flexWrap: "wrap" }}>
          <a
            href="https://www.linkedin.com/in/ceejay-ibabiosa-206052292/"
            target="_blank" rel="noopener noreferrer"
            id="services-cta-btn"
            onMouseEnter={() => setLi(true)}
            onMouseLeave={() => setLi(false)}
            style={{
              display: "inline-flex", alignItems: "center", gap: "0.5rem",
              padding: "0.875rem 2rem", borderRadius: "9999px",
              background: "var(--accent)",
              color: "#fff", fontWeight: 600, fontSize: "0.9375rem",
              textDecoration: "none",
              boxShadow: "0 4px 20px var(--accent-glow)",
              transform: li ? "scale(1.04)" : "scale(1)",
              transition: "transform 0.25s",
            }}
          >
            <Mail style={{ width: "1rem", height: "1rem" }} /> Let's Work Together
          </a>
          <a
            href="https://github.com/CJcode6754"
            target="_blank" rel="noopener noreferrer"
            id="services-github-btn"
            onMouseEnter={() => setGh(true)}
            onMouseLeave={() => setGh(false)}
            style={{
              display: "inline-flex", alignItems: "center", gap: "0.5rem",
              padding: "0.875rem 2rem", borderRadius: "9999px",
              background: "var(--bg-secondary)",
              color: "var(--text-primary)", fontWeight: 600, fontSize: "0.9375rem",
              textDecoration: "none",
              border: `1px solid ${gh ? "var(--accent)" : "var(--border-strong)"}`,
              transform: gh ? "scale(1.04)" : "scale(1)",
              transition: "transform 0.25s, border-color 0.25s",
            }}
          >
            <Github style={{ width: "1rem", height: "1rem" }} /> View My Work
          </a>
        </div>
      </div>
    </motion.div>
  );
}
