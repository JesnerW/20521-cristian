import { useContactForm } from './contacto/useContactForm';
import ContactForm from './contacto/ContactForm';
import ContactInfo from './contacto/ContactInfo';
import ContactMap from './contacto/ContactMap';
import '../styles/contacto.css';

export default function Contacto() {
  const { formData, status, handleChange, handleSubmit } = useContactForm();

  return (
    <section id="contacto" style={{ padding: '100px 0', backgroundColor: 'var(--bg-white)' }}>
      <div className="container">

        {/* Header de Sección */}
        <div style={{ textAlign: 'center', marginBottom: '64px' }}>
          <span className="section-tag">Estamos para escucharte</span>
          <h2 className="section-title">Contacto y Consultas</h2>
        </div>

        {/* Layout Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '64px',
            alignItems: 'start'
          }}
        >
          {/* Formulario (Columna Izquierda) */}
          <ContactForm
            formData={formData}
            status={status}
            handleChange={handleChange}
            handleSubmit={handleSubmit}
          />

          {/* Información de Contacto (Columna Derecha) */}
          <ContactInfo />
        </div>

        {/* Google Maps Interactive Iframe - Full Width */}
        <ContactMap />

      </div>
    </section>
  );
}
