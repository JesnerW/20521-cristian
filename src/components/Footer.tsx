import insigniaImg from '../fotos/insignia/insignia.png';
import { socialLinks } from '../data/footerData';
import '../styles/Footer.css';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer style={{
      backgroundColor: 'hsl(215, 28%, 10%)',
      color: 'var(--bg-white)',
      padding: '60px 0',
      position: 'relative'
    }}>
      {/* Top brand accent bar */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        height: '4px',
        background: 'linear-gradient(90deg, var(--primary) 0%, var(--secondary) 50%, var(--accent-gold) 100%)',
      }} />
      <div
        className="container"
        style={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '32px'
        }}
      >
        {/* Logo and Copyright */}
        <div className="footer-brand" style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
          <img
            src={insigniaImg}
            alt="Insignia I. E. 20521"
            style={{ height: '110px', width: 'auto', objectFit: 'contain' }}
          />
          <div style={{ display: 'flex', flexDirection: 'column', textAlign: 'left' }}>
            <span style={{ fontSize: '22px', fontWeight: 800, color: 'var(--bg-white)', lineHeight: 1.2 }}>
              I. E. 20521
            </span>
            <span style={{ fontSize: '16px', fontWeight: 700, color: 'var(--secondary)', lineHeight: 1.2 }}>
              Santísima Virgen del Rosario
            </span>
            <p style={{ color: 'hsl(215, 16%, 60%)', fontSize: '12px', marginTop: '6px' }}>
              © {currentYear} Todos los derechos reservados.
            </p>
          </div>
        </div>

        {/* Social Icons */}
        <div style={{ display: 'flex', gap: '20px' }}>
          {socialLinks.map((link, idx) => (
            <a
              key={idx}
              href={link.href}
              target={link.href !== '#' ? "_blank" : undefined}
              rel={link.href !== '#' ? "noreferrer" : undefined}
              aria-label={link.label}
              style={{
                color: 'hsl(215, 16%, 60%)',
                transition: 'var(--transition-fast)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}
              className="footer-social-link"
            >
              {link.icon}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
