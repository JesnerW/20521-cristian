import type { ContactCardData } from '../../data/contactoData';

interface ContactCardProps {
  card: ContactCardData;
}

export default function ContactCard({ card }: ContactCardProps) {
  return (
    <a
      href={card.link}
      target={card.target}
      rel={card.rel}
      style={{
        display: 'flex',
        alignItems: 'center',
        padding: '18px 24px',
        backgroundColor: card.bg,
        borderRadius: 'var(--radius-md)',
        border: `1px solid ${card.borderColor}`,
        textDecoration: 'none',
        transition: 'var(--transition-normal)'
      }}
      className={card.className}
    >
      <div
        style={{
          width: '56px',
          height: '56px',
          borderRadius: 'var(--radius-full)',
          backgroundColor: card.iconBg,
          color: 'var(--bg-white)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          marginRight: '20px',
          transition: 'var(--transition-fast)'
        }}
        className="icon-wrapper"
      >
        {card.icon}
      </div>
      <div>
        <p style={{ fontSize: '13px', color: card.labelColor, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '1px' }}>
          {card.label}
        </p>
        <p style={{ 
          fontSize: card.type === 'location' ? '15px' : '18px', 
          fontWeight: 800, 
          color: card.valueColor,
          lineHeight: card.type === 'location' ? 1.4 : 1.2
        }}>
          {card.value}
        </p>
      </div>
    </a>
  );
}
