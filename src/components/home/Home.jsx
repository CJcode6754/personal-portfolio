import React, { useEffect, useState } from "react";
import {
  MapPin, Download, Github, Mail, ChevronDown,
  Sparkles, Code2, Zap, ArrowRight, Briefcase, Folder
} from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "motion/react";
import myPic from "../../assets/image1.png";
import Resume from "../../assets/resume.pdf";

const TITLES = ["Junior Developer", "Full Stack Developer", "Laravel & React Dev"];

const Home = () => {
  const [typedText, setTypedText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);

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
          setCurrentIndex((p) => (p + 1) % TITLES.length);
        }, 2500);
      }
    }, 75);
    return () => clearInterval(iv);
  }, [currentIndex]);

  return (
    <>
      <section id="home-section" className="section-base">
        <div
          className="absolute rounded-full blur-[100px] pointer-events-none -top-[10%] -right-[5%] opacity-20"
          style={{
            width: "clamp(200px, 40vw, 500px)",
            height: "clamp(200px, 40vw, 500px)",
            background: "radial-gradient(circle, var(--accent), transparent)",
          }}
        />
        <div
          className="absolute rounded-full blur-[100px] pointer-events-none -bottom-[10%] -left-[5%] opacity-15"
          style={{
            width: "clamp(160px, 30vw, 400px)",
            height: "clamp(160px, 30vw, 400px)",
            background: "radial-gradient(circle, var(--accent-2), transparent)",
          }}
        />

        <motion.div 
          id="home-inner"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >

          <div className="flex flex-col items-start">

            <motion.div 
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6 text-green-500 bg-green-500/10 border border-green-500/30 font-semibold whitespace-nowrap" 
              style={{ fontSize: "clamp(0.7rem, 2vw, 0.875rem)" }}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
            >
              <span className="relative flex w-2.5 h-2.5 shrink-0">
                <span className="animate-ping absolute inset-0 rounded-full bg-green-400 opacity-75" />
                <span className="relative rounded-full w-full h-full bg-green-500" />
              </span>
              <Sparkles className="w-3.5 h-3.5 shrink-0" />
              Available for new opportunities
            </motion.div>

            <h1 className="font-[Outfit,sans-serif] text-[var(--text-primary)] font-extrabold leading-[1.1] mb-4" style={{ fontSize: "clamp(2.2rem, 6vw, 4.5rem)" }}>
              Hi, I'm Ceejay
              <br />
              <span className="bg-gradient-to-br from-[var(--accent)] to-[var(--accent-2)] bg-clip-text text-transparent">
                Ibabiosa.
              </span>
            </h1>

            <div className="home-typewriter">
              <Code2 className="w-5 h-5 text-[var(--accent)] shrink-0" />
              <span>{typedText}</span>
              <span className="animate-pulse text-[var(--accent)] font-light">|</span>
            </div>

            <p className="text-[var(--text-secondary)] leading-relaxed mb-5 max-w-2xl" style={{ fontSize: "clamp(0.875rem, 2vw, 1.125rem)" }}>
              A passionate developer building enterprise-grade web systems. Specializing in{" "}
              <strong className="text-[var(--text-primary)] font-semibold">Laravel</strong> and{" "}
              <strong className="text-[var(--text-primary)] font-semibold">React</strong>,
              I transform complex business problems into elegant, scalable digital solutions.
            </p>

            <div className="flex flex-wrap items-center gap-4 text-[var(--text-muted)] text-sm font-medium">
              <span className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-[var(--accent)]" />
                Philippines
              </span>
              <span className="flex items-center gap-2">
                <Zap className="w-4 h-4 text-[var(--accent-2)]" />
                Fast Learner &amp; Problem Solver
              </span>
            </div>

            <div className="home-cta-row">
              <a href="https://www.linkedin.com/in/ceejay-ibabiosa-206052292/" target="_blank" rel="noopener noreferrer" className="btn-primary">
                <Mail className="w-[0.9rem] h-[0.9rem] shrink-0" />
                <span>Get in Touch</span>
                <ArrowRight className="w-[0.9rem] h-[0.9rem] shrink-0" />
              </a>
              <a href={Resume} target="_blank" rel="noopener noreferrer" download className="btn-secondary">
                <Download className="w-[0.9rem] h-[0.9rem] shrink-0" />
                <span>Resume</span>
              </a>
              <a href="https://github.com/CJcode6754" target="_blank" rel="noopener noreferrer" className="btn-icon" aria-label="GitHub">
                <Github className="w-[1.1rem] h-[1.1rem]" />
              </a>
            </div>
          </div>

          <motion.div 
            id="bento-grid"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >

            <div className="bento-image">
              <div className="absolute inset-0 z-10 rounded-[1.25rem] border-4 border-[var(--bg-card)] opacity-50 pointer-events-none" />
              <img src={myPic} alt="Ceejay Ibabiosa" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/65 to-transparent to-60%" />
              <div className="absolute bottom-4 left-4 right-4 text-white">
                <p className="font-semibold uppercase tracking-[0.1em] text-white/75 mb-[2px]" style={{ fontSize: "clamp(0.6rem, 1.5vw, 0.7rem)" }}>Developer</p>
                <p className="font-bold leading-tight" style={{ fontSize: "clamp(0.85rem, 2vw, 1.1rem)" }}>Ceejay<br />Ibabiosa</p>
              </div>
            </div>

            <Link to="/experience" className="bento-card bento-card-role group">
              <div className="absolute inset-0 z-0 opacity-60 bg-cover bg-center" style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=600&q=80")' }} />
              <div className="absolute inset-0 z-0 bg-black/40" />
              <div className="absolute inset-0 z-0 bg-gradient-to-b from-black/15 to-black/80" />

              <div className="bento-icon relative z-10 bg-cyan-500/20 border border-cyan-500/30 text-cyan-400">
                <Briefcase style={{ width: "clamp(0.8rem, 2vw, 1.25rem)", height: "clamp(0.8rem, 2vw, 1.25rem)" }} />
              </div>

              <div className="relative z-10 mt-2">
                <p className="font-bold uppercase tracking-[0.1em] text-slate-200 flex items-center gap-2 mb-1" style={{ fontSize: "clamp(0.55rem, 1.2vw, 0.72rem)" }}>
                  Current Role
                  <span className="w-1.5 h-1.5 rounded-full bg-green-400 inline-block" />
                </p>
                <p className="font-bold text-white leading-tight" style={{ fontSize: "clamp(0.8rem, 2vw, 1rem)" }}>Junior Developer</p>
                <p className="text-white/75 mt-[2px]" style={{ fontSize: "clamp(0.65rem, 1.5vw, 0.875rem)" }}>@ Intercommerce</p>
              </div>
            </Link>

            <Link to="/projects" className="bento-card bento-card-projects group">
              <div className="absolute inset-0 z-0 opacity-80 bg-cover bg-center" style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=600&q=80")' }} />
              <div className="absolute inset-0 z-0 bg-gradient-to-br from-[var(--accent)] to-[var(--accent-2)] opacity-80 mix-blend-overlay" />
              <div className="absolute inset-0 z-0 bg-gradient-to-b from-black/10 to-black/85" />
              <div className="absolute -top-4 -right-4 z-10 opacity-30">
                <Folder className="w-20 h-20 text-white" />
              </div>

              <div className="bento-icon relative z-10 bg-white/15 border border-white/30 text-white">
                <Code2 style={{ width: "clamp(0.8rem, 2vw, 1.25rem)", height: "clamp(0.8rem, 2vw, 1.25rem)" }} />
              </div>

              <div className="relative z-10 mt-2">
                <p className="font-bold uppercase tracking-[0.1em] text-white/75 mb-1" style={{ fontSize: "clamp(0.55rem, 1.2vw, 0.72rem)" }}>Portfolio</p>
                <p className="font-bold text-white leading-none mb-1" style={{ fontSize: "clamp(1.5rem, 4vw, 2rem)" }}>5+</p>
                <p className="text-white/85 font-medium" style={{ fontSize: "clamp(0.65rem, 1.5vw, 0.875rem)" }}>
                  Projects Shipped <ArrowRight className="inline ml-1 w-3 h-3" />
                </p>
              </div>
            </Link>
          </motion.div>
        </motion.div>

        <Link
          to="/skills"
          className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-[var(--text-muted)] transition-opacity duration-300 hover:opacity-80 hidden sm:flex"
          aria-label="Explore more"
        >
          <span className="text-[10px] tracking-[0.15em] uppercase font-semibold">Explore</span>
          <ChevronDown className="animate-bounce w-4 h-4" />
        </Link>
      </section>
    </>
  );
};

export default Home;