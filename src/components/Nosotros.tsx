import { nosotrosCards } from '../data/nosotrosData';
import NosotrosCard from './nosotros/NosotrosCard';

export default function Nosotros() {
  return (
    <section id="nosotros" style={{ padding: '100px 0', backgroundColor: 'var(--bg-white)' }}>
      <div className="container">
        
        {/* Header de Sección */}
        <div style={{ textAlign: 'center', marginBottom: '64px' }}>
          <span className="section-tag">Conócenos</span>
          <h2 className="section-title">Sobre Nuestra Institución</h2>
          <p className="section-desc">
            Con más de 20 años de experiencia, la I. E. 20521 Santísima Virgen del Rosario se dedica a brindar una educación primaria de calidad, fomentando el pensamiento crítico, la creatividad y los valores humanos en un ambiente seguro y familiar.
          </p>
        </div>

        {/* Grid de Misión y Visión */}
        <div 
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '32px',
            marginTop: '40px'
          }}
        >
          {nosotrosCards.map((card, idx) => (
            <NosotrosCard key={idx} card={card} />
          ))}
        </div>
      </div>
    </section>
  );
}
