import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import insigniaImg from '../fotos/insignia/insignia.png';
import { menuItems } from '../data/headerData';
import '../styles/Header.css';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsOpen(false);
  };

  return (
    <header 
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        zIndex: 1000,
        height: '80px',
        display: 'flex',
        alignItems: 'center',
        transition: 'var(--transition-fast)',
        background: 'var(--bg-white)',
        borderBottom: '1px solid hsl(210, 20%, 90%)',
        boxShadow: isScrolled ? '0 4px 20px rgba(0, 0, 0, 0.08)' : '0 2px 10px rgba(0, 0, 0, 0.03)',
      }}
    >
      {/* Top brand accent bar */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        height: '4px',
        background: 'linear-gradient(90deg, var(--primary) 0%, var(--secondary) 50%, var(--accent-gold) 100%)',
        zIndex: 1001
      }} />
      <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        
        {/* Logo */}
        <div 
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          style={{ 
            display: 'flex', 
            alignItems: 'center', 
            cursor: 'pointer',
            userSelect: 'none',
            gap: '12px'
          }}
        >
          <img 
            src={insigniaImg} 
            alt="Insignia I. E. 20521 Santísima Virgen del Rosario"
            style={{ 
              height: '52px', 
              width: 'auto', 
              objectFit: 'contain'
            }} 
          />
          <div style={{ display: 'flex', flexDirection: 'column', textAlign: 'left' }}>
            <span style={{ 
              fontSize: 'clamp(14px, 2vw, 17px)', 
              fontWeight: 800, 
              color: 'var(--primary)',
              lineHeight: 1.15
            }}>
              I. E. 20521
            </span>
            <span style={{ 
              fontSize: 'clamp(10px, 1.5vw, 12px)', 
              fontWeight: 700, 
              color: 'var(--secondary)',
              lineHeight: 1.15
            }}>
              Santísima Virgen del Rosario
            </span>
          </div>
        </div>

        {/* Desktop Navigation */}
        <nav style={{ display: 'flex', gap: '32px' }} className="desktop-menu-nav">
          {menuItems.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              onClick={(e) => handleNavClick(e, item.id)}
              style={{
                textDecoration: 'none',
                color: 'var(--text-dark)',
                fontWeight: 700,
                fontSize: '16px',
                transition: 'var(--transition-fast)',
              }}
              className="nav-link"
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          style={{
            background: 'none',
            border: 'none',
            cursor: 'pointer',
            color: 'var(--text-dark)',
            display: 'none',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '8px',
          }}
          className="mobile-menu-btn"
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Drawer */}
      <div
        style={{
          position: 'absolute',
          top: '80px',
          left: 0,
          width: '100%',
          background: 'var(--bg-white)',
          boxShadow: '0 10px 20px rgba(0,0,0,0.05)',
          padding: '16px 24px 24px',
          display: isOpen ? 'flex' : 'none',
          flexDirection: 'column',
          gap: '16px',
          borderBottom: '1px solid hsl(210, 20%, 90%)',
        }}
      >
        {menuItems.map((item) => (
          <a
            key={item.id}
            href={`#${item.id}`}
            onClick={(e) => handleNavClick(e, item.id)}
            style={{
              textDecoration: 'none',
              color: 'var(--text-dark)',
              fontWeight: 700,
              fontSize: '18px',
              padding: '8px 0',
              borderBottom: '1px solid hsl(210, 20%, 95%)',
            }}
          >
            {item.label}
          </a>
        ))}
      </div>
    </header>
  );
}
