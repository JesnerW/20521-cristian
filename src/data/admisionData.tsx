import React from 'react';
import { Info, Users, FileCheck } from 'lucide-react';

export interface StepData {
  number: number;
  icon: React.ReactNode;
  title: string;
  desc: string;
  color: string;
  lightBg: string;
}

export const admisionSteps: StepData[] = [
  {
    number: 1,
    icon: <Info size={24} />,
    title: 'Solicitar Informes',
    desc: 'Contáctanos vía WhatsApp o correo para enviarte el dossier informativo y costos.',
    color: 'var(--primary)',
    lightBg: 'var(--primary-light)',
  },
  {
    number: 2,
    icon: <Users size={24} />,
    title: 'Entrevista Familiar',
    desc: 'Agendaremos una reunión virtual o presencial para conocer al estudiante y su familia.',
    color: 'var(--secondary)',
    lightBg: 'var(--secondary-light)',
  },
  {
    number: 3,
    icon: <FileCheck size={24} />,
    title: 'Matrícula Oficial',
    desc: 'Entrega de documentos requeridos y pago de la cuota de inscripción para reservar la vacante.',
    color: 'var(--accent-gold)',
    lightBg: 'hsl(43, 75%, 95%)',
  }
];
