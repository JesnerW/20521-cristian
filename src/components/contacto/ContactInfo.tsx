import { contactCards } from '../../data/contactoData';
import ContactCard from './ContactCard';

export default function ContactInfo() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
      <div>
        <h3 style={{ fontSize: '28px', fontWeight: 800, marginBottom: '16px', color: 'var(--text-dark)', lineHeight: 1.2 }}>
          Información Directa
        </h3>
        <p style={{ color: 'var(--text-muted)', fontSize: '16px', lineHeight: 1.6 }}>
          Puedes comunicarte con nosotros directamente a través de nuestros canales oficiales o visitarnos en nuestras instalaciones en horario de atención (Lunes a Viernes de 8:00 AM a 4:00 PM).
        </p>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
        {contactCards.map((card) => (
          <ContactCard key={card.type} card={card} />
        ))}
      </div>
    </div>
  );
}
