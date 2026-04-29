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
    transform: isVisible ? 'translateY(0)' : 'translateY(24px)',
    transition: `opacity 0.8s ease ${delay}s, transform 0.8s ease ${delay}s`,
  });

  return (
    <section
      id="home"
      className="section-base min-h-screen flex items-center justify-center px-4 relative overflow-hidden pt-28 pb-16"
    >
      {/* Subtle background blobs */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div
          className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] rounded-full blur-[100px] opacity-20"
          style={{ background: 'radial-gradient(circle, var(--accent), transparent)' }}
        />
        <div
          className="absolute bottom-[-10%] left-[-5%] w-[400px] h-[400px] rounded-full blur-[100px] opacity-15"
          style={{ background: 'radial-gradient(circle, var(--accent-2), transparent)' }}
        />
      </div>

      <div className="max-w-7xl mx-auto w-full grid lg:grid-cols-[1.2fr_1fr] gap-12 lg:gap-8 items-center relative z-10">

        {/* ── LEFT COLUMN ───────────────────────────────────────── */}
        <div className="flex flex-col items-start" style={fade(0)}>
          
          {/* Status badge */}
          <div
            className="inline-flex items-center w-fit whitespace-nowrap gap-2 px-5 py-2.5 rounded-full mb-8 text-sm font-semibold"
            style={{ 
              borderColor: 'rgba(34,197,94,0.3)', color: '#22c55e', 
              background: 'rgba(34,197,94,0.1)', border: '1px solid' 
            }}
          >
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-500" />
            </span>
            <Sparkles className="w-3.5 h-3.5" />
            Available for new opportunities
          </div>

          {/* Name */}
          <h1
            className="text-5xl sm:text-6xl lg:text-7xl font-bold leading-[1.1] mb-6"
            style={{ fontFamily: 'Outfit, sans-serif', color: 'var(--text-primary)' }}
          >
            Hi, I'm Ceejay
            <br />
            <span style={{
              background: 'linear-gradient(135deg, var(--accent), var(--accent-2))',
              WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent'
            }}>
              Ibabiosa.
            </span>
          </h1>

          {/* Typewriter */}
          <div
            className="flex items-center gap-3 text-xl sm:text-2xl mb-6 h-9 font-medium"
            style={{ color: 'var(--text-secondary)' }}
          >
            <Code2 className="w-6 h-6 flex-shrink-0" style={{ color: 'var(--accent)' }} />
            <span>{typedText}</span>
            <span className="animate-pulse font-light" style={{ color: 'var(--accent)' }}>|</span>
          </div>

          {/* Bio */}
          <p
            className="text-base sm:text-lg leading-relaxed mb-8 max-w-xl"
            style={{ color: 'var(--text-secondary)' }}
          >
            A passionate developer building enterprise-grade web systems.
            Specializing in <strong style={{ color: 'var(--text-primary)', fontWeight: 600 }}>Laravel</strong> and{' '}
            <strong style={{ color: 'var(--text-primary)', fontWeight: 600 }}>React</strong>, I transform complex business problems into elegant, scalable digital solutions.
          </p>

          {/* Location / Exp Info */}
          <div className="flex flex-wrap items-center gap-6 mb-10 text-sm font-medium" style={{ color: 'var(--text-muted)' }}>
            <div className="flex items-center gap-2">
              <MapPin className="w-4 h-4" style={{ color: 'var(--accent)' }} />
              Philippines
            </div>
            <div className="flex items-center gap-2">
              <Zap className="w-4 h-4" style={{ color: 'var(--accent-2)' }} />
              Fast Learner & Problem Solver
            </div>
          </div>

          {/* CTA Buttons */}
          <div style={{ display: "flex", flexWrap: "wrap", alignItems: "center", gap: "1.5rem", marginTop: "2rem" }}>
            <a
              href="https://www.linkedin.com/in/ceejay-ibabiosa-206052292/"
              target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-white font-bold transition-all duration-300 hover:scale-105 hover:shadow-xl hover:-translate-y-1"
              style={{ padding: "0.75rem 1.5rem", borderRadius: "0.75rem", fontSize: "0.9375rem", background: 'linear-gradient(135deg, var(--accent), var(--accent-2))', boxShadow: '0 8px 25px var(--accent-glow)' }}
            >
              <Mail className="w-4 h-4" />
              Get in Touch
              <ArrowRight className="w-4 h-4" />
            </a>

            <a
              href={Resume}
              target="_blank" rel="noopener noreferrer" download
              className="inline-flex items-center gap-2 font-bold transition-all duration-300 hover:-translate-y-1"
              style={{
                padding: "0.75rem 1.5rem", borderRadius: "0.75rem", fontSize: "0.9375rem",
                background: 'var(--bg-card)', color: 'var(--text-primary)',
                border: '1px solid var(--border-strong)', boxShadow: 'var(--shadow)'
              }}
              onMouseEnter={e => e.currentTarget.style.borderColor = 'var(--accent)'}
              onMouseLeave={e => e.currentTarget.style.borderColor = 'var(--border-strong)'}
            >
              <Download className="w-4 h-4" />
              Resume
            </a>

            <a
              href="https://github.com/CJcode6754"
              target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center justify-center transition-all duration-300 hover:-translate-y-1"
              style={{
                width: "3rem", height: "3rem", borderRadius: "0.75rem",
                background: 'var(--bg-card)', color: 'var(--text-secondary)',
                border: '1px solid var(--border-strong)', boxShadow: 'var(--shadow)'
              }}
              onMouseEnter={e => { e.currentTarget.style.borderColor = 'var(--accent)'; e.currentTarget.style.color = 'var(--accent)'; }}
              onMouseLeave={e => { e.currentTarget.style.borderColor = 'var(--border-strong)'; e.currentTarget.style.color = 'var(--text-secondary)'; }}
              aria-label="GitHub profile"
            >
              <Github className="w-6 h-6" />
            </a>
          </div>
        </div>

        {/* ── RIGHT COLUMN — Bento Grid ──────────────────────────── */}
        <div className="w-full max-w-md mx-auto lg:max-w-full lg:mx-0" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1.5rem", height: "440px", ...fade(0.2) }}>
          
          {/* Main Image (Tall) */}
          <div 
            className="group"
            style={{ gridColumn: "1 / 2", gridRow: "1 / 3", borderRadius: "1.5rem", overflow: "hidden", position: "relative", border: '1px solid var(--border-strong)', boxShadow: 'var(--shadow-lg)' }}
          >
            {/* Inner gradient border simulation */}
            <div className="absolute inset-0 z-10 pointer-events-none rounded-3xl" style={{ border: '4px solid var(--bg-card)', opacity: 0.5 }} />
            
            <img
              src={myPic}
              alt="Ceejay Ibabiosa"
              className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
            />
            {/* Bottom gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-80" />
            <div className="absolute bottom-5 left-5 right-5 text-white">
              <p className="text-xs font-semibold uppercase tracking-wider text-white/80 mb-1">Developer</p>
              <p className="text-lg font-bold leading-tight">Ceejay<br/>Ibabiosa</p>
            </div>
          </div>

          {/* Current Experience Widget */}
          <a 
            href="#experience-section"
            className="group text-left"
            style={{ 
              gridColumn: "2 / 3", gridRow: "1 / 2", borderRadius: "1.5rem", padding: "1.5rem",
              display: "flex", flexDirection: "column", justifyContent: "space-between", position: "relative", overflow: "hidden",
              border: '1px solid var(--border)', boxShadow: 'var(--shadow)', textDecoration: 'none',
              transition: "transform 0.3s ease, border-color 0.3s ease"
            }}
            onMouseEnter={e => { e.currentTarget.style.borderColor = 'var(--accent)'; e.currentTarget.style.transform = 'translateY(-4px)'; }}
            onMouseLeave={e => { e.currentTarget.style.borderColor = 'var(--border)'; e.currentTarget.style.transform = 'translateY(0)'; }}
          >
            {/* Background Image - Unsplash Office/Laptop */}
            <div 
              className="absolute inset-0 z-0 opacity-60 transition-transform duration-700 group-hover:scale-110"
              style={{
                backgroundImage: 'url("https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=600&q=80")',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
              }}
            />
            <div className="absolute inset-0 z-0 bg-black/40 mix-blend-multiply" />
            <div className="absolute inset-0 z-0" style={{ background: 'linear-gradient(to bottom, rgba(0,0,0,0.2), rgba(0,0,0,0.8))' }} />

            <div className="w-12 h-12 rounded-full flex items-center justify-center mb-6 relative z-10" style={{ background: 'rgba(6,182,212,0.2)', border: '1px solid rgba(6,182,212,0.3)', color: '#22d3ee', backdropFilter: 'blur(4px)' }}>
              <Briefcase className="w-5 h-5" />
            </div>
            <div className="relative z-10">
              <p className="text-xs font-bold uppercase tracking-widest mb-3 flex items-center gap-2" style={{ color: '#e2e8f0' }}>
                Current Role
                <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse shadow-[0_0_8px_#4ade80]" />
              </p>
              <p className="text-base font-bold leading-tight text-white mb-1">Junior Developer</p>
              <p className="text-sm mt-1 text-white/80">@ Intercommerce</p>
            </div>
          </a>

          {/* Projects Widget */}
          <a 
            href="#project-section"
            className="group text-left"
            style={{ 
              gridColumn: "2 / 3", gridRow: "2 / 3", borderRadius: "1.5rem", padding: "1.5rem",
              display: "flex", flexDirection: "column", justifyContent: "space-between", position: "relative", overflow: "hidden",
              border: 'none', boxShadow: '0 8px 20px var(--accent-glow)', textDecoration: 'none',
              transition: "transform 0.3s ease"
            }}
            onMouseEnter={e => e.currentTarget.style.transform = 'translateY(-4px)'}
            onMouseLeave={e => e.currentTarget.style.transform = 'translateY(0)'}
          >
            {/* Background Image - Unsplash Code/Screen */}
            <div 
              className="absolute inset-0 z-0 opacity-80 transition-transform duration-700 group-hover:scale-110"
              style={{
                backgroundImage: 'url("https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=600&q=80")',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
              }}
            />
            {/* Tint overlay to ensure text is legible and colors match theme */}
            <div className="absolute inset-0 z-0 mix-blend-overlay" style={{ background: 'linear-gradient(135deg, var(--accent), var(--accent-2))', opacity: 0.8 }} />
            <div className="absolute inset-0 z-0" style={{ background: 'linear-gradient(to bottom, rgba(0,0,0,0.1), rgba(0,0,0,0.85))' }} />

            <div className="absolute -right-4 -top-4 opacity-30 transform group-hover:scale-110 transition-transform duration-500 z-10">
              <Folder className="w-24 h-24 text-white" />
            </div>
            
            <div className="w-12 h-12 rounded-full flex items-center justify-center mb-6 relative z-10" style={{ background: 'rgba(255,255,255,0.15)', border: '1px solid rgba(255,255,255,0.3)', color: '#fff', backdropFilter: 'blur(4px)' }}>
              <Code2 className="w-5 h-5" />
            </div>
            <div className="relative z-10">
              <p className="text-xs font-bold uppercase tracking-widest mb-3 text-white/80">
                Portfolio
              </p>
              <p className="text-3xl font-bold text-white leading-none mb-2">8+</p>
              <p className="text-sm text-white/90 font-medium">Projects Shipped <ArrowRight className="w-3.5 h-3.5 inline ml-1" /></p>
            </div>
          </a>

        </div>

      </div>

      {/* Scroll indicator */}
      <a
        href="#techstack-section"
        className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 transition-opacity hover:opacity-70"
        style={{ color: 'var(--text-muted)' }}
        aria-label="Scroll down"
      >
        <span className="text-[10px] tracking-widest uppercase font-semibold">Scroll</span>
        <ChevronDown className="w-4 h-4 animate-bounce" />
      </a>
    </section>
  );
};

export default Home;