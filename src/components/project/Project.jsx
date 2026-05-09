import React, { useState, useCallback } from "react";
import { Users, User } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { teamProjects, personalProjects } from "../assets";
import ProjectCarousel from "./ProjectCarousel";
import TechPopover from "./TechPopover";

const ProjectCard = ({ project, isTeam, onOpen, index }) => {
  const [hovered, setHovered] = useState(false);
  const hasCarousel = Array.isArray(project.images) && project.images.length > 0;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: 0.1 * index }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        borderRadius: "1rem",
        overflow: "hidden",
        background: "var(--bg-card)",
        border: `1px solid ${hovered ? "var(--accent)" : "var(--border)"}`,
        boxShadow: hovered ? "var(--shadow-lg)" : "var(--shadow)",
        transition: "border-color 0.25s, box-shadow 0.25s, transform 0.25s",
        transform: hovered ? "translateY(-4px)" : "translateY(0)",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <div 
        onClick={() => hasCarousel && onOpen(project)}
        style={{ position: "relative", height: "160px", overflow: "hidden", flexShrink: 0, cursor: hasCarousel ? "pointer" : "default" }}
      >
        <img
          src={project.images?.[0]?.src || project.image}
          alt={project.title}
          style={{
            width: "100%", height: "100%",
            objectFit: "cover", objectPosition: "top",
            display: "block",
            transform: hovered ? "scale(1.06)" : "scale(1)",
            transition: "transform 0.4s ease",
          }}
        />
        <div style={{
          position: "absolute", inset: 0,
          background: "linear-gradient(to top, rgba(0,0,0,0.6) 0%, transparent 60%)",
          pointerEvents: "none",
        }} />
        <div style={{ position: "absolute", top: "0.625rem", left: "0.625rem", display: "flex", gap: "0.375rem", flexWrap: "wrap" }}>
          <span style={{
            padding: "0.2rem 0.6rem", borderRadius: "9999px",
            background: "rgba(0,0,0,0.55)", color: "#e2e8f0",
            fontSize: "0.65rem", fontWeight: 600,
            backdropFilter: "blur(6px)", border: "1px solid rgba(255,255,255,0.12)",
          }}>
            {project.category}
          </span>
          {project.isCommission && (
            <span style={{
              padding: "0.2rem 0.65rem", borderRadius: "9999px",
              background: "#10b981", color: "#fff",
              fontSize: "0.65rem", fontWeight: 700,
              backdropFilter: "blur(6px)", border: "1px solid rgba(255,255,255,0.2)",
              boxShadow: "0 2px 8px rgba(16,185,129,0.25)",
            }}>
              Commission
            </span>
          )}
        </div>
        {hasCarousel && hovered && (
          <div style={{
            position: "absolute", bottom: "0.625rem", right: "0.625rem",
            padding: "0.25rem 0.6rem", borderRadius: "9999px",
            background: "rgba(99,102,241,0.85)", color: "#fff",
            fontSize: "0.6rem", fontWeight: 700,
            backdropFilter: "blur(6px)",
            pointerEvents: "none",
          }}>
            {project.images.length} slides
          </div>
        )}
      </div>

      <div style={{ padding: "1rem", flex: 1, display: "flex", flexDirection: "column", gap: "0.5rem" }}>
        <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
          <h3 style={{ fontSize: "0.9375rem", fontWeight: 700, color: "var(--text-primary)", margin: 0, flex: 1 }}>
            {project.title}
          </h3>
          {isTeam
            ? <Users style={{ width: "0.875rem", height: "0.875rem", color: "var(--accent)", flexShrink: 0 }} />
            : <User style={{ width: "0.875rem", height: "0.875rem", color: "var(--accent-2)", flexShrink: 0 }} />
          }
        </div>

        <p style={{
          fontSize: "0.8rem", color: "var(--text-secondary)", lineHeight: 1.55,
          margin: 0,
          display: "-webkit-box", WebkitLineClamp: 2,
          WebkitBoxOrient: "vertical", overflow: "hidden",
        }}>
          {project.description}
        </p>

        <div style={{ display: "flex", flexWrap: "wrap", gap: "0.3rem", marginTop: "auto", paddingTop: "0.375rem" }}>
          {project.technologies.slice(0, 5).map((t, i) => (
            <span key={i} style={{
              padding: "0.175rem 0.5rem", borderRadius: "9999px",
              background: "var(--bg-secondary)", border: "1px solid var(--border)",
              color: "var(--text-muted)", fontSize: "0.65rem", fontWeight: 500,
            }}>
              {t}
            </span>
          ))}
          {project.technologies.length > 5 && (
            <TechPopover techs={project.technologies.slice(5)} />
          )}
        </div>
      </div>
    </motion.div>
  );
};

const ProjectSection = () => {
  const [activeTab, setActiveTab] = useState("personal");
  const [carouselProject, setCarouselProject] = useState(null);
  const openCarousel = useCallback((p) => setCarouselProject(p), []);
  const closeCarousel = useCallback(() => setCarouselProject(null), []);

  const Tab = ({ tab, label, icon: Icon, count }) => {
    const active = activeTab === tab;
    return (
      <button
        id={`project-tab-${tab}`}
        onClick={() => setActiveTab(tab)}
        style={{
          display: "inline-flex", alignItems: "center", gap: "0.4rem",
          padding: "0.6rem 1.25rem", borderRadius: "0.75rem",
          fontSize: "0.8125rem", fontWeight: 600, cursor: "pointer",
          border: "none", outline: "none",
          background: active ? "var(--accent)" : "transparent",
          color: active ? "#fff" : "var(--text-secondary)",
          boxShadow: active ? "0 4px 16px var(--accent-glow)" : "none",
          transition: "all 0.2s",
          position: "relative",
          zIndex: 1,
        }}
        onMouseEnter={e => { if (!active) e.currentTarget.style.color = "var(--text-primary)"; }}
        onMouseLeave={e => { if (!active) e.currentTarget.style.color = "var(--text-secondary)"; }}
      >
        <Icon style={{ width: "0.875rem", height: "0.875rem" }} />
        {label}
        <span style={{
          padding: "0.1rem 0.45rem", borderRadius: "9999px",
          background: active ? "rgba(255,255,255,0.25)" : "var(--bg-secondary)",
          color: active ? "#fff" : "var(--text-muted)",
          fontSize: "0.65rem", fontWeight: 700,
          border: active ? "none" : "1px solid var(--border)",
        }}>
          {count}
        </span>
      </button>
    );
  };

  const projects = activeTab === "team" ? teamProjects : personalProjects;
  const isTeam = activeTab === "team";

  return (
    <section
      id="project-section"
      style={{
        backgroundColor: "var(--bg-primary)",
        padding: "4.5rem 1.5rem",
        position: "relative",
        transition: "background-color 0.4s ease",
      }}
    >
      <div style={{ maxWidth: "72rem", margin: "0 auto" }}>

        <motion.div 
          style={{ textAlign: "center", marginBottom: "2.5rem" }}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 style={{
            fontFamily: "Outfit, sans-serif",
            fontSize: "clamp(2rem, 5vw, 3rem)",
            fontWeight: 800, color: "var(--text-primary)",
            marginBottom: "0.625rem", lineHeight: 1.15,
          }}>
            My <span style={{ color: "var(--accent)" }}>Projects</span>
          </h2>
          <p style={{ color: "var(--text-secondary)", fontSize: "1rem", maxWidth: "32rem", margin: "0 auto" }}>
            Personal builds and team collaborations — {personalProjects.length + teamProjects.length} projects shipped.
          </p>
        </motion.div>

        <motion.div 
          style={{ display: "flex", justifyContent: "center", marginBottom: "2rem" }}
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.1 }}
        >
          <div style={{
            display: "inline-flex", gap: "0.375rem", padding: "0.375rem",
            borderRadius: "0.875rem", background: "var(--bg-card)", border: "1px solid var(--border)",
          }}>
            <Tab tab="personal" label="Personal" icon={User} count={personalProjects.length} />
            <Tab tab="team" label="Team" icon={Users} count={teamProjects.length} />
          </div>
        </motion.div>

        <motion.div 
          layout
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(min(100%, 300px), 1fr))",
            gap: "1.25rem",
          }}
        >
          <AnimatePresence mode="popLayout">
            {projects.map((p, i) => (
              <ProjectCard 
                key={p.id} 
                project={p} 
                isTeam={isTeam} 
                onOpen={openCarousel}
                index={i}
              />
            ))}
          </AnimatePresence>
        </motion.div>

      </div>

      <AnimatePresence>
        {carouselProject && (
          <ProjectCarousel project={carouselProject} onClose={closeCarousel} />
        )}
      </AnimatePresence>
    </section>
  );
};

export default ProjectSection;