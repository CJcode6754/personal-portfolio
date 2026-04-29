import React, { useEffect, useState } from "react";
import {
  MapPin, Download, Github, Mail, ChevronDown,
  Sparkles, Code2, Zap, ArrowRight, Briefcase, Folder
} from "lucide-react";
import myPic from "../../assets/image1.png";
import Resume from "../../assets/resume.pdf";

const TITLES = ["Junior Developer", "Full Stack Developer", "Laravel & React Dev"];

const Home = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [typedText, setTypedText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const t = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(t);
  }, []);

  useEffect(() => {
    const full = TITLES[currentIndex];
    let i = 0;
    setTypedText("");
    const iv = setInterval(() => {
      if (i < full.length) {
        setTypedText(full.substring(0, ++i));
      } else {
        clearInterval(iv);
        setTimeout(() => {
          setCurrentIndex(p => (p + 1) % TITLES.length);
        }, 2500);
      }
    }, 75);
    return () => clearInterval(iv);
  }, [currentIndex]);

  const fade = (delay) => ({
    opacity: isVisible ? 1 : 0,
    transform: isVisible ? "translateY(0)" : "translateY(24px)",
    transition: `opacity 0.8s ease ${delay}s, transform 0.8s ease ${delay}s`,
  });

  return (
    <section
      id="home"
      className="section-base relative overflow-hidden"
      style={{
        paddingTop: "clamp(100px, 15vw, 200px)",
        paddingBottom: "clamp(60px, 8vw, 96px)",
        paddingLeft: "clamp(1rem, 5vw, 2rem)",
        paddingRight: "clamp(1rem, 5vw, 2rem)",
      }}
    >
      {/* Background blobs */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div
          className="absolute top-[-10%] right-[-5%] rounded-full"
          style={{
            width: "clamp(200px, 40vw, 500px)",
            height: "clamp(200px, 40vw, 500px)",
            filter: "blur(100px)",
            opacity: 0.2,
            background: "radial-gradient(circle, var(--accent), transparent)",
          }}
        />
        <div
          className="absolute bottom-[-10%] left-[-5%] rounded-full"
          style={{
            width: "clamp(160px, 30vw, 400px)",
            height: "clamp(160px, 30vw, 400px)",
            filter: "blur(100px)",
            opacity: 0.15,
            background: "radial-gradient(circle, var(--accent-2), transparent)",
          }}
        />
      </div>

      <div
        className="max-w-7xl mx-auto w-full relative z-10"
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 340px), 1fr))",
          gap: "clamp(2rem, 5vw, 3rem)",
          alignItems: "center",
        }}
      >
        {/* ── LEFT COLUMN ─────────────────────────────── */}
        <div className="flex flex-col items-start" style={fade(0)}>
          {/* Status badge */}
          <div
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6 text-sm font-semibold"
            style={{
              color: "#22c55e",
              background: "rgba(34,197,94,0.1)",
              border: "1px solid rgba(34,197,94,0.3)",
              whiteSpace: "nowrap",
            }}
          >
            <span className="relative flex h-2.5 w-2.5 flex-shrink-0">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-500" />
            </span>
            <Sparkles className="w-3.5 h-3.5 flex-shrink-0" />
            Available for new opportunities
          </div>

          {/* Name */}
          <h1
            className="font-bold leading-[1.1] mb-5"
            style={{
              fontFamily: "Outfit, sans-serif",
              color: "var(--text-primary)",
              fontSize: "clamp(2.5rem, 8vw, 4.5rem)",
            }}
          >
            Hi, I'm Ceejay
            <br />
            <span
              style={{
                background: "linear-gradient(135deg, var(--accent), var(--accent-2))",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Ibabiosa.
            </span>
          </h1>

          {/* Typewriter */}
          <div
            className="flex items-center gap-3 mb-5 font-medium"
            style={{
              color: "var(--text-secondary)",
              fontSize: "clamp(1rem, 3vw, 1.5rem)",
              height: "2.25rem",
            }}
          >
            <Code2
              className="flex-shrink-0"
              style={{ width: "1.25rem", height: "1.25rem", color: "var(--accent)" }}
            />
            <span>{typedText}</span>
            <span className="animate-pulse font-light" style={{ color: "var(--accent)" }}>|</span>
          </div>

          {/* Bio */}
          <p
            className="leading-relaxed mb-6"
            style={{
              color: "var(--text-secondary)",
              fontSize: "clamp(0.9rem, 2.5vw, 1.125rem)",
              maxWidth: "36rem",
            }}
          >
            A passionate developer building enterprise-grade web systems. Specializing in{" "}
            <strong style={{ color: "var(--text-primary)", fontWeight: 600 }}>Laravel</strong> and{" "}
            <strong style={{ color: "var(--text-primary)", fontWeight: 600 }}>React</strong>, I
            transform complex business problems into elegant, scalable digital solutions.
          </p>

          {/* Location / Tags */}
          <div
            className="flex flex-wrap items-center gap-4 mb-8 text-sm font-medium"
            style={{ color: "var(--text-muted)" }}
          >
            <div className="flex items-center gap-2">
              <MapPin className="w-4 h-4" style={{ color: "var(--accent)" }} />
              Philippines
            </div>
            <div className="flex items-center gap-2">
              <Zap className="w-4 h-4" style={{ color: "var(--accent-2)" }} />
              Fast Learner &amp; Problem Solver
            </div>
          </div>

          {/* CTA Buttons — forced single row, compact on mobile */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "0.5rem",
              width: "100%",
              marginTop: "1.5rem",
            }}
          >
            <a
              href="https://www.linkedin.com/in/ceejay-ibabiosa-206052292/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-white font-bold transition-all duration-300 hover:-translate-y-1"
              style={{
                padding: "0.65rem 1rem",
                borderRadius: "0.75rem",
                fontSize: "clamp(0.75rem, 2.5vw, 0.9rem)",
                background: "linear-gradient(135deg, var(--accent), var(--accent-2))",
                boxShadow: "0 8px 25px var(--accent-glow)",
                whiteSpace: "nowrap",
                flex: "1 1 auto",
                justifyContent: "center",
                minWidth: 0,
              }}
            >
              <Mail style={{ width: "0.9rem", height: "0.9rem", flexShrink: 0 }} />
              <span>Get in Touch</span>
              <ArrowRight style={{ width: "0.9rem", height: "0.9rem", flexShrink: 0 }} />
            </a>

            <a
              href={Resume}
              target="_blank"
              rel="noopener noreferrer"
              download
              className="inline-flex items-center gap-1.5 font-bold transition-all duration-300 hover:-translate-y-1"
              style={{
                padding: "0.65rem 1rem",
                borderRadius: "0.75rem",
                fontSize: "clamp(0.75rem, 2.5vw, 0.9rem)",
                background: "var(--bg-card)",
                color: "var(--text-primary)",
                border: "1px solid var(--border-strong)",
                boxShadow: "var(--shadow)",
                whiteSpace: "nowrap",
                flex: "1 1 auto",
                justifyContent: "center",
                minWidth: 0,
              }}
              onMouseEnter={(e) => (e.currentTarget.style.borderColor = "var(--accent)")}
              onMouseLeave={(e) => (e.currentTarget.style.borderColor = "var(--border-strong)")}
            >
              <Download style={{ width: "0.9rem", height: "0.9rem", flexShrink: 0 }} />
              <span>Resume</span>
            </a>

            {/* GitHub icon button — fixed square, never shrinks */}
            <a
              href="https://github.com/CJcode6754"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center transition-all duration-300 hover:-translate-y-1"
              style={{
                width: "2.6rem",
                height: "2.6rem",
                borderRadius: "0.75rem",
                background: "var(--bg-card)",
                color: "var(--text-secondary)",
                border: "1px solid var(--border-strong)",
                boxShadow: "var(--shadow)",
                flexShrink: 0,
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = "var(--accent)";
                e.currentTarget.style.color = "var(--accent)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = "var(--border-strong)";
                e.currentTarget.style.color = "var(--text-secondary)";
              }}
              aria-label="GitHub profile"
            >
              <Github style={{ width: "1.1rem", height: "1.1rem" }} />
            </a>
          </div>
        </div>

        {/* ── RIGHT COLUMN — Bento Grid ──────────────── */}
        <div
          style={{
            ...fade(0.2),
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gridTemplateRows: "auto auto",
            gap: "0.875rem",
            width: "100%",
          }}
        >
          {/* Main Image — spans 2 rows on md+, full width on mobile */}
          <div
            className="group"
            style={{
              gridColumn: "1 / 2",
              gridRow: "1 / 3",
              borderRadius: "1.25rem",
              overflow: "hidden",
              position: "relative",
              border: "1px solid var(--border-strong)",
              boxShadow: "var(--shadow-lg)",
              minHeight: "clamp(240px, 50vw, 400px)",
            }}
          >
            <div
              className="absolute inset-0 z-10 pointer-events-none rounded-3xl"
              style={{ border: "4px solid var(--bg-card)", opacity: 0.5 }}
            />
            <img
              src={myPic}
              alt="Ceejay Ibabiosa"
              className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-80" />
            <div className="absolute bottom-4 left-4 right-4 text-white">
              <p className="text-[10px] font-semibold uppercase tracking-wider text-white/80 mb-0.5">
                Developer
              </p>
              <p className="font-bold leading-tight" style={{ fontSize: "clamp(0.85rem, 2.5vw, 1.1rem)" }}>
                Ceejay
                <br />
                Ibabiosa
              </p>
            </div>
          </div>

          {/* Current Role Card */}
          <a
            href="#experience-section"
            className="group text-left"
            style={{
              gridColumn: "2 / 3",
              gridRow: "1 / 2",
              borderRadius: "1.25rem",
              padding: "clamp(1rem, 3vw, 1.75rem)",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              position: "relative",
              overflow: "hidden",
              border: "1px solid var(--border)",
              boxShadow: "var(--shadow)",
              textDecoration: "none",
              minHeight: "clamp(140px, 22vw, 220px)",
              transition: "transform 0.3s ease, border-color 0.3s ease",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = "var(--accent)";
              e.currentTarget.style.transform = "translateY(-4px)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = "var(--border)";
              e.currentTarget.style.transform = "translateY(0)";
            }}
          >
            <div
              className="absolute inset-0 z-0 opacity-60 transition-transform duration-700 group-hover:scale-110"
              style={{
                backgroundImage:
                  'url("https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=600&q=80")',
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            />
            <div className="absolute inset-0 z-0 bg-black/40 mix-blend-multiply" />
            <div
              className="absolute inset-0 z-0"
              style={{ background: "linear-gradient(to bottom, rgba(0,0,0,0.2), rgba(0,0,0,0.8))" }}
            />

            <div
              className="rounded-full flex items-center justify-center relative z-10 flex-shrink-0"
              style={{
                width: "clamp(2rem, 5vw, 3rem)",
                height: "clamp(2rem, 5vw, 3rem)",
                background: "rgba(6,182,212,0.2)",
                border: "1px solid rgba(6,182,212,0.3)",
                color: "#22d3ee",
                backdropFilter: "blur(4px)",
                marginBottom: "auto",
              }}
            >
              <Briefcase style={{ width: "clamp(0.875rem, 2vw, 1.25rem)", height: "clamp(0.875rem, 2vw, 1.25rem)" }} />
            </div>

            <div className="relative z-10 mt-2">
              <p
                className="font-bold uppercase tracking-widest flex items-center gap-2 mb-1"
                style={{ fontSize: "clamp(0.6rem, 1.5vw, 0.75rem)", color: "#e2e8f0" }}
              >
                Current Role
                <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse shadow-[0_0_8px_#4ade80]" />
              </p>
              <p className="font-bold leading-tight text-white" style={{ fontSize: "clamp(0.8rem, 2.5vw, 1rem)" }}>
                Junior Developer
              </p>
              <p className="text-white/80 mt-0.5" style={{ fontSize: "clamp(0.7rem, 2vw, 0.875rem)" }}>
                @ Intercommerce
              </p>
            </div>
          </a>

          {/* Projects Card */}
          <a
            href="#project-section"
            className="group text-left"
            style={{
              gridColumn: "2 / 3",
              gridRow: "2 / 3",
              borderRadius: "1.25rem",
              padding: "clamp(1rem, 3vw, 1.75rem)",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              position: "relative",
              overflow: "hidden",
              border: "none",
              boxShadow: "0 8px 20px var(--accent-glow)",
              textDecoration: "none",
              minHeight: "clamp(140px, 22vw, 220px)",
              transition: "transform 0.3s ease",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.transform = "translateY(-4px)")}
            onMouseLeave={(e) => (e.currentTarget.style.transform = "translateY(0)")}
          >
            <div
              className="absolute inset-0 z-0 opacity-80 transition-transform duration-700 group-hover:scale-110"
              style={{
                backgroundImage:
                  'url("https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=600&q=80")',
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            />
            <div
              className="absolute inset-0 z-0 mix-blend-overlay"
              style={{
                background: "linear-gradient(135deg, var(--accent), var(--accent-2))",
                opacity: 0.8,
              }}
            />
            <div
              className="absolute inset-0 z-0"
              style={{ background: "linear-gradient(to bottom, rgba(0,0,0,0.1), rgba(0,0,0,0.85))" }}
            />

            <div className="absolute -right-4 -top-4 opacity-30 transform group-hover:scale-110 transition-transform duration-500 z-10">
              <Folder className="text-white" style={{ width: "5rem", height: "5rem" }} />
            </div>

            <div
              className="rounded-full flex items-center justify-center relative z-10 flex-shrink-0"
              style={{
                width: "clamp(2rem, 5vw, 3rem)",
                height: "clamp(2rem, 5vw, 3rem)",
                background: "rgba(255,255,255,0.15)",
                border: "1px solid rgba(255,255,255,0.3)",
                color: "#fff",
                backdropFilter: "blur(4px)",
                marginBottom: "auto",
              }}
            >
              <Code2 style={{ width: "clamp(0.875rem, 2vw, 1.25rem)", height: "clamp(0.875rem, 2vw, 1.25rem)" }} />
            </div>

            <div className="relative z-10 mt-2">
              <p
                className="font-bold uppercase tracking-widest text-white/80 mb-1"
                style={{ fontSize: "clamp(0.6rem, 1.5vw, 0.75rem)" }}
              >
                Portfolio
              </p>
              <p className="font-bold text-white leading-none mb-1" style={{ fontSize: "clamp(1.5rem, 5vw, 2rem)" }}>
                5+
              </p>
              <p className="text-white/90 font-medium" style={{ fontSize: "clamp(0.7rem, 2vw, 0.875rem)" }}>
                Projects Shipped{" "}
                <ArrowRight className="inline ml-1" style={{ width: "0.75rem", height: "0.75rem" }} />
              </p>
            </div>
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <a
        href="#techstack-section"
        className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 transition-opacity hover:opacity-70"
        style={{ color: "var(--text-muted)" }}
        aria-label="Scroll down"
      >
        <span className="text-[10px] tracking-widest uppercase font-semibold">Scroll</span>
        <ChevronDown className="w-4 h-4 animate-bounce" />
      </a>
    </section>
  );
};

export default Home;