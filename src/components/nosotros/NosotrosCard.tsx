import type { NosotrosCardData } from '../../data/nosotrosData';

interface NosotrosCardProps {
  card: NosotrosCardData;
}

export default function NosotrosCard({ card }: NosotrosCardProps) {
  const isPrimary = card.type === 'primary';
  const cardClass = isPrimary ? 'glass-card-primary' : 'glass-card-secondary';
  const iconShadow = isPrimary 
    ? '0 6px 16px rgba(29, 78, 216, 0.2)' 
    : '0 6px 16px rgba(245, 158, 11, 0.2)';

  return (
    <div 
      className={cardClass} 
      style={{ padding: '48px 36px', display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}
    >
      <div 
        style={{ 
          backgroundColor: isPrimary ? 'var(--primary)' : 'var(--secondary)', 
          color: 'var(--bg-white)', 
          width: '60px', 
          height: '60px', 
          borderRadius: 'var(--radius-md)', 
          display: 'flex', 
          alignItems: 'center', 
          justifyContent: 'center',
          marginBottom: '24px',
          boxShadow: iconShadow
        }}
      >
        {card.icon}
      </div>
      <h3 style={{ fontSize: '24px', fontWeight: 800, marginBottom: '16px', color: 'var(--text-dark)' }}>
        {card.title}
      </h3>
      <p style={{ color: 'var(--text-muted)', fontSize: '16px', lineHeight: 1.7 }}>
        {card.desc}
      </p>
    </div>
  );
}
