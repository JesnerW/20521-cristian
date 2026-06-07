import React from 'react';
import { Target, Eye } from 'lucide-react';

export interface NosotrosCardData {
  title: string;
  desc: string;
  type: 'primary' | 'secondary';
  icon: React.ReactNode;
}

export const nosotrosCards: NosotrosCardData[] = [
  {
    title: 'Nuestra Misión',
    desc: 'Formar niños y niñas íntegros, proporcionando una educación de excelencia basada en valores, metodologías innovadoras y un acompañamiento personalizado que potencie sus habilidades para enfrentar los retos del futuro.',
    type: 'primary',
    icon: <Target size={30} />
  },
  {
    title: 'Nuestra Visión',
    desc: 'Ser reconocidos como la institución educativa líder en el nivel primario a nivel nacional, destacando por nuestra calidad humana, excelencia académica y nuestro compromiso constante con la innovación educativa.',
    type: 'secondary',
    icon: <Eye size={30} />
  }
];
