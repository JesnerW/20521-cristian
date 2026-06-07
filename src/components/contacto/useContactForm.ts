import React, { useState } from 'react';

export interface FormData {
  nombre: string;
  email: string;
  mensaje: string;
}

export type SubmissionStatus = 'idle' | 'submitting' | 'success' | 'error';

export function useContactForm() {
  const [formData, setFormData] = useState<FormData>({
    nombre: '',
    email: '',
    mensaje: ''
  });
  const [status, setStatus] = useState<SubmissionStatus>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target;
    setFormData((prev) => ({ ...prev, [id]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('submitting');

    try {
      const response = await fetch("https://formsubmit.co/ajax/jesner631@gmail.com", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: JSON.stringify({
          "👤 Nombre del Remitente": formData.nombre,
          "📧 Correo de Contacto": formData.email,
          "💬 Consulta o Mensaje": formData.mensaje,
          "_subject": "🔔 Nueva Consulta Web - I.E. 20521",
          "_captcha": "false",
          "_template": "box",
          "_autoresponse": "Gracias por comunicarte con la I. E. 20521 Santísima Virgen del Rosario. Hemos recibido tu consulta con éxito. Un representante de nuestra institución se pondrá en contacto contigo lo antes posible."
        })
      });

      if (response.ok) {
        setStatus('success');
        setFormData({ nombre: '', email: '', mensaje: '' });
        setTimeout(() => setStatus('idle'), 5000);
      } else {
        setStatus('error');
        setTimeout(() => setStatus('idle'), 5000);
      }
    } catch (err) {
      console.error(err);
      setStatus('error');
      setTimeout(() => setStatus('idle'), 5000);
    }
  };

  return {
    formData,
    status,
    handleChange,
    handleSubmit
  };
}
