import { FileDown } from 'lucide-react';
import StepCard from './admision/StepCard';
import { admisionSteps } from '../data/admisionData';
import '../styles/admision.css';

export default function Admision() {
  return (
    <section id="admision" style={{ padding: '100px 0', backgroundColor: 'var(--bg-light)' }}>
      <div className="container">
        
        {/* Header de Sección */}
        <div style={{ textAlign: 'center', marginBottom: '64px' }}>
          <span className="section-tag">Únete a nosotros</span>
          <h2 className="section-title">Proceso de Admisión 2026-2027</h2>
          <p className="section-desc">
            Las inscripciones para el próximo periodo escolar ya están abiertas. Sigue estos sencillos pasos para formar parte de nuestra comunidad.
          </p>
        </div>

        {/* Steps Grid */}
        <div style={{ position: 'relative', marginTop: '48px' }}>
          
          {/* Connector Line (Desktop) */}
          <div className="connector-line" />

          <div 
            style={{ 
              display: 'grid', 
              gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', 
              gap: '32px',
              position: 'relative',
              zIndex: 2
            }}
          >
            {admisionSteps.map((step) => (
              <StepCard key={step.number} step={step} />
            ))}
          </div>
        </div>

        {/* Download PDF CTA */}
        <div style={{ marginTop: '56px', textAlign: 'center' }}>
          <button className="btn btn-outline">
            <FileDown size={20} />
            Descargar Requisitos (PDF)
          </button>
        </div>

      </div>
    </section>
  );
}
