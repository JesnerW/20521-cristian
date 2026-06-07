import type { StepData } from '../../data/admisionData';

interface StepCardProps {
  step: StepData;
}

export default function StepCard({ step }: StepCardProps) {
  return (
    <div 
      style={{ 
        backgroundColor: 'var(--bg-white)', 
        padding: '40px 32px', 
        borderRadius: 'var(--radius-md)', 
        boxShadow: '0 10px 30px rgba(0,0,0,0.03)',
        border: '1px solid rgba(0,0,0,0.05)',
        borderTop: `5px solid ${step.color}`,
        textAlign: 'center',
        transition: 'var(--transition-normal)',
      }}
      className="step-card"
    >
      {/* Step Circle Header */}
      <div 
        style={{
          width: '64px',
          height: '64px',
          borderRadius: 'var(--radius-full)',
          backgroundColor: step.lightBg,
          color: step.color,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          margin: '0 auto 24px',
          position: 'relative',
          boxShadow: '0 4px 12px rgba(0, 0, 0, 0.02)'
        }}
      >
        {step.icon}
        {/* Floating Number Badge */}
        <span
          style={{
            position: 'absolute',
            top: '-6px',
            right: '-6px',
            width: '24px',
            height: '24px',
            borderRadius: 'var(--radius-full)',
            backgroundColor: step.color,
            color: 'var(--bg-white)',
            fontSize: '12px',
            fontWeight: 800,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            boxShadow: '0 2px 6px rgba(0,0,0,0.1)'
          }}
        >
          {step.number}
        </span>
      </div>

      <h3 style={{ fontSize: '20px', fontWeight: 800, marginBottom: '12px', color: 'var(--text-dark)' }}>
        {step.title}
      </h3>
      <p style={{ color: 'var(--text-muted)', fontSize: '15px', lineHeight: 1.6 }}>
        {step.desc}
      </p>
    </div>
  );
}
