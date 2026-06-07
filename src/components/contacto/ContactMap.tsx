export default function ContactMap() {
  return (
    <div
      style={{
        width: '100%',
        height: '400px',
        borderRadius: 'var(--radius-lg)',
        overflow: 'hidden',
        border: '1px solid rgba(0, 0, 0, 0.08)',
        boxShadow: '0 10px 30px rgba(0, 0, 0, 0.05)',
        marginTop: '56px'
      }}
    >
      <iframe
        title="Ubicación Google Maps"
        src="https://maps.google.com/maps?q=-10.801645,-77.711755&t=&z=16&ie=UTF8&iwloc=&output=embed"
        width="100%"
        height="100%"
        style={{ border: 0 }}
        allowFullScreen={true}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      />
    </div>
  );
}
