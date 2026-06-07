import React from 'react';
import type { FormData, SubmissionStatus } from './useContactForm';

interface ContactFormProps {
  formData: FormData;
  status: SubmissionStatus;
  handleChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  handleSubmit: (e: React.FormEvent) => void;
}

export default function ContactForm({ formData, status, handleChange, handleSubmit }: ContactFormProps) {
  return (
    <div
      style={{
        backgroundColor: 'var(--bg-light)',
        padding: '48px 40px',
        borderRadius: 'var(--radius-lg)',
        boxShadow: '0 10px 30px rgba(0,0,0,0.01)',
        border: '1px solid rgba(0,0,0,0.03)'
      }}
    >
      <h3 style={{ fontSize: '24px', fontWeight: 800, marginBottom: '24px', color: 'var(--text-dark)' }}>
        Envíanos un mensaje
      </h3>

      {status === 'success' ? (
        <div
          style={{
            backgroundColor: 'var(--success-light)',
            color: 'var(--success)',
            padding: '24px',
            borderRadius: 'var(--radius-md)',
            textAlign: 'center',
            fontWeight: 700,
            border: '1px solid rgba(16, 185, 129, 0.2)',
            animation: 'float 3s ease-in-out infinite'
          }}
        >
          ¡Mensaje enviado con éxito! Nos pondremos en contacto contigo lo antes posible.
        </div>
      ) : (
        <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
          {status === 'error' && (
            <div 
              style={{
                backgroundColor: 'hsl(358, 85%, 96%)',
                color: 'var(--secondary)',
                padding: '16px',
                borderRadius: 'var(--radius-md)',
                textAlign: 'center',
                fontWeight: 700,
                border: '1px solid rgba(227, 26, 26, 0.15)',
                fontSize: '14px'
              }}
            >
              Hubo un error al enviar el mensaje. Inténtalo de nuevo o contáctanos por WhatsApp.
            </div>
          )}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
            <label htmlFor="nombre" style={{ fontSize: '14px', fontWeight: 700, color: 'var(--text-dark)' }}>
              Nombre del Apoderado
            </label>
            <input
              type="text"
              id="nombre"
              required
              placeholder="Ej. Juan Pérez"
              value={formData.nombre}
              onChange={handleChange}
              style={{
                padding: '14px 16px',
                borderRadius: 'var(--radius-sm)',
                border: '1px solid hsl(210, 20%, 80%)',
                fontSize: '15px',
                backgroundColor: 'var(--bg-white)',
                outline: 'none',
                transition: 'var(--transition-fast)'
              }}
              className="form-input"
            />
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
            <label htmlFor="email" style={{ fontSize: '14px', fontWeight: 700, color: 'var(--text-dark)' }}>
              Correo Electrónico
            </label>
            <input
              type="email"
              id="email"
              required
              placeholder="tu@correo.com"
              value={formData.email}
              onChange={handleChange}
              style={{
                padding: '14px 16px',
                borderRadius: 'var(--radius-sm)',
                border: '1px solid hsl(210, 20%, 80%)',
                fontSize: '15px',
                backgroundColor: 'var(--bg-white)',
                outline: 'none',
                transition: 'var(--transition-fast)'
              }}
              className="form-input"
            />
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
            <label htmlFor="mensaje" style={{ fontSize: '14px', fontWeight: 700, color: 'var(--text-dark)' }}>
              Consulta o Mensaje
            </label>
            <textarea
              id="mensaje"
              required
              rows={4}
              placeholder="Escribe aquí tus dudas sobre vacantes, costos, etc."
              value={formData.mensaje}
              onChange={handleChange}
              style={{
                padding: '14px 16px',
                borderRadius: 'var(--radius-sm)',
                border: '1px solid hsl(210, 20%, 80%)',
                fontSize: '15px',
                backgroundColor: 'var(--bg-white)',
                outline: 'none',
                transition: 'var(--transition-fast)',
                resize: 'none',
                fontFamily: 'inherit'
              }}
              className="form-input"
            />
          </div>

          <button
            type="submit"
            className="btn btn-primary"
            style={{ marginTop: '8px', padding: '14px' }}
            disabled={status === 'submitting'}
          >
            {status === 'submitting' ? 'Enviando...' : 'Enviar Mensaje'}
          </button>
        </form>
      )}
    </div>
  );
}
