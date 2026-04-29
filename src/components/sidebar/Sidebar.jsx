import React, { useState, useEffect } from 'react';
import { Home, User, Folder, BriefcaseBusinessIcon, Briefcase, Sun, Moon } from 'lucide-react';
import { useTheme } from '../../context/ThemeContext';

const Sidebar = () => {
  const { isDark, toggleTheme } = useTheme();
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  const menuItems = [
    { href: '#home', label: 'Home', icon: Home, id: 'home' },
    { href: '#techstack-section', label: 'Skills', icon: User, id: 'techstack-section' },
    { href: '#experience-section', label: 'Experience', icon: Briefcase, id: 'experience-section' },
    { href: '#project-section', label: 'Projects', icon: Folder, id: 'project-section' },
    { href: '#services', label: 'Services', icon: BriefcaseBusinessIcon, id: 'services' },
  ];

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const ids = menuItems.map(m => m.id);
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) setActiveSection(entry.target.id);
        });
      },
      { threshold: 0.3 }
    );
    ids.forEach(id => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  return (
    <nav
      style={{
        position: 'fixed',
        top: '1.25rem',
        left: '50%',
        transform: 'translateX(-50%)',
        zIndex: 50,
        backgroundColor: 'var(--bg-nav)',
        border: '1px solid var(--border)',
        backdropFilter: 'blur(16px)',
        WebkitBackdropFilter: 'blur(16px)',
        borderRadius: '9999px',
        padding: '0.5rem 0.875rem',
        display: 'flex',
        alignItems: 'center',
        gap: '0.25rem',
        boxShadow: scrolled ? 'var(--shadow-lg)' : 'var(--shadow)',
        transition: 'box-shadow 0.3s ease, background-color 0.4s ease',
      }}
    >
      {/* Logo */}
      <a
        href="#home"
        style={{
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          width: '2.25rem', height: '2.25rem', borderRadius: '9999px',
          background: 'linear-gradient(135deg, var(--accent), var(--accent-2))',
          color: '#fff', fontWeight: 700, fontSize: '0.8rem',
          textDecoration: 'none', marginRight: '0.5rem',
          transition: 'transform 0.2s',
          flexShrink: 0,
        }}
        onMouseEnter={e => e.currentTarget.style.transform = 'scale(1.1)'}
        onMouseLeave={e => e.currentTarget.style.transform = 'scale(1)'}
        aria-label="Go to home"
      >
        CJ
      </a>

      {/* Nav Links */}
      {menuItems.map(({ href, label, icon: Icon, id }) => {
        const isActive = activeSection === id;
        return (
          <a
            key={href}
            href={href}
            aria-label={label}
            style={{
              display: 'flex', alignItems: 'center', gap: '0.375rem',
              padding: '0.5rem 0.875rem', borderRadius: '9999px',
              fontSize: '0.8125rem', fontWeight: 500,
              textDecoration: 'none',
              background: isActive ? 'var(--accent-glow)' : 'transparent',
              color: isActive ? 'var(--accent)' : 'var(--text-secondary)',
              transition: 'color 0.2s, background 0.2s',
            }}
            onMouseEnter={e => {
              if (!isActive) { e.currentTarget.style.color = 'var(--text-primary)'; }
            }}
            onMouseLeave={e => {
              if (!isActive) { e.currentTarget.style.color = 'var(--text-secondary)'; }
            }}
          >
            <Icon style={{ width: '0.9rem', height: '0.9rem' }} />
            <span style={{ display: 'none' }} className="sm-show">{label}</span>
          </a>
        );
      })}

      {/* Divider */}
      <div style={{ width: '1px', height: '1.25rem', background: 'var(--border-strong)', margin: '0 0.25rem', flexShrink: 0 }} />

      {/* Theme Toggle */}
      <button
        onClick={toggleTheme}
        id="theme-toggle-btn"
        aria-label="Toggle dark/light mode"
        style={{
          width: '2.75rem', height: '1.5rem', borderRadius: '9999px',
          background: 'linear-gradient(135deg, var(--accent), var(--accent-2))',
          border: 'none', cursor: 'pointer', position: 'relative',
          flexShrink: 0, outline: 'none',
          transition: 'opacity 0.2s',
        }}
        onMouseEnter={e => e.currentTarget.style.opacity = '0.85'}
        onMouseLeave={e => e.currentTarget.style.opacity = '1'}
      >
        <div style={{
          width: '1.125rem', height: '1.125rem', borderRadius: '9999px',
          background: '#fff', position: 'absolute',
          top: '50%', transform: 'translateY(-50%)',
          left: isDark ? 'calc(100% - 1.3125rem)' : '0.1875rem',
          transition: 'left 0.3s ease',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          boxShadow: '0 1px 3px rgba(0,0,0,0.3)',
        }}>
          {isDark
            ? <Moon style={{ width: '0.625rem', height: '0.625rem', color: '#6366f1' }} />
            : <Sun style={{ width: '0.625rem', height: '0.625rem', color: '#f59e0b' }} />
          }
        </div>
      </button>
    </nav>
  );
};

export default Sidebar;
