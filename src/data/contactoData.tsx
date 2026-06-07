import React from 'react';
import { MessageCircle, Phone, Mail, MapPin } from 'lucide-react';

export interface ContactCardData {
  type: string;
  link: string;
  icon: React.ReactNode;
  label: string;
  value: string;
  className: string;
  bg: string;
  borderColor: string;
  iconBg: string;
  labelColor: string;
  valueColor: string;
  target?: string;
  rel?: string;
}

export const contactCards: ContactCardData[] = [
  {
    type: 'whatsapp',
    link: 'https://wa.me/51965335632',
    icon: <MessageCircle size={28} />,
    label: 'Chatea con nosotros',
    value: '+51 965 335 632',
    className: 'contact-card whatsapp',
    bg: 'hsl(142, 72%, 97%)',
    borderColor: 'hsl(142, 72%, 90%)',
    iconBg: 'hsl(142, 72%, 29%)',
    labelColor: 'hsl(142, 72%, 20%)',
    valueColor: 'hsl(142, 72%, 15%)',
    target: '_blank',
    rel: 'noreferrer'
  },
  {
    type: 'call',
    link: 'tel:+51922759182',
    icon: <Phone size={24} />,
    label: 'Llámanos (Dirección)',
    value: '922 759 182',
    className: 'contact-card call',
    bg: 'var(--primary-light)',
    borderColor: 'hsl(203, 85%, 90%)',
    iconBg: 'var(--primary)',
    labelColor: 'var(--primary)',
    valueColor: 'var(--primary-hover)',
    target: undefined,
    rel: undefined
  },
  {
    type: 'email',
    link: 'mailto:contacto@ie20521.edu.pe',
    icon: <Mail size={22} />,
    label: 'Escríbenos',
    value: 'contacto@ie20521.edu.pe',
    className: 'contact-card email',
    bg: 'var(--secondary-light)',
    borderColor: 'rgba(227, 26, 26, 0.15)',
    iconBg: 'var(--secondary)',
    labelColor: 'var(--secondary)',
    valueColor: 'var(--text-dark)',
    target: undefined,
    rel: undefined
  },
  {
    type: 'location',
    link: 'https://share.google/YJaYbxKDSstQIwDVN',
    icon: <MapPin size={28} />,
    label: 'Nuestra Sede',
    value: 'Av. Rafael Changa Aldave Mz. S, Lt. 4, San Nicolás, Supe',
    className: 'contact-card location',
    bg: 'hsl(43, 75%, 97%)',
    borderColor: 'rgba(203, 161, 53, 0.15)',
    iconBg: 'var(--accent-gold)',
    labelColor: 'var(--accent-gold)',
    valueColor: 'var(--text-dark)',
    target: '_blank',
    rel: 'noreferrer'
  }
];
