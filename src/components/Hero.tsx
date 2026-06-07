import { useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, EffectFade, Navigation } from 'swiper/modules';
import type { Swiper as SwiperType } from 'swiper';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { heroSlides } from '../data/heroData';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';

// Dynamically read all images from src/fotos
const imageModules = import.meta.glob('/src/fotos/*.{png,jpg,jpeg,svg,webp}', { eager: true });
const imageUrls = Object.values(imageModules).map((mod: any) => mod.default || mod);

export default function Hero() {
  const swiperRef = useRef<SwiperType | null>(null);

  const handleNavClick = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleMouseEnter = () => {
    if (swiperRef.current && swiperRef.current.params && swiperRef.current.params.autoplay) {
      const autoplay = swiperRef.current.params.autoplay;
      if (typeof autoplay === 'object') {
        autoplay.delay = 15000; // Slow down (15 seconds between slides)
        swiperRef.current.autoplay.stop();
        swiperRef.current.autoplay.start();
      }
    }
  };

  const handleMouseLeave = () => {
    if (swiperRef.current && swiperRef.current.params && swiperRef.current.params.autoplay) {
      const autoplay = swiperRef.current.params.autoplay;
      if (typeof autoplay === 'object') {
        autoplay.delay = 5000; // Normal speed (5 seconds between slides)
        swiperRef.current.autoplay.stop();
        swiperRef.current.autoplay.start();
      }
    }
  };

  // If there are no images in the folder, render a fallback background
  const slidesToRender = imageUrls.length > 0 ? imageUrls : [
    'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80',
    'https://images.unsplash.com/photo-1580582932707-520aed937b7b?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80',
    'https://images.unsplash.com/photo-1509062522246-3755977927d7?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80'
  ];

  return (
    <section id="inicio" style={{ position: 'relative', height: '100vh', width: '100%', overflow: 'hidden' }}>
      <div 
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        style={{ height: '100%', width: '100%' }}
      >
        <Swiper
          modules={[Autoplay, Pagination, EffectFade, Navigation]}
          effect="fade"
          autoplay={{ delay: 5000, disableOnInteraction: false }}
          pagination={{ clickable: true }}
          navigation={{
            nextEl: '.custom-swiper-next',
            prevEl: '.custom-swiper-prev',
          }}
          loop={true}
          onSwiper={(swiper) => {
            swiperRef.current = swiper;
          }}
          style={{ height: '100%', width: '100%' }}
        >
        {slidesToRender.map((url, index) => {
          // Wrap around text details if there are more images than text configurations
          const text = heroSlides[index % heroSlides.length];
          return (
            <SwiperSlide key={index} style={{ position: 'relative', height: '100%', width: '100%' }}>
              {/* Background Image */}
              <div
                style={{
                  backgroundImage: `url(${url})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  width: '100%',
                  height: '100%',
                  position: 'absolute',
                  top: 0,
                  left: 0,
                }}
              />
              
              {/* Dark Overlay */}
              <div
                style={{
                  position: 'absolute',
                  inset: 0,
                  backgroundColor: 'rgba(0, 0, 0, 0.45)',
                  zIndex: 1,
                }}
              />

              {/* Slide Content */}
              <div
                style={{
                  position: 'relative',
                  zIndex: 2,
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'center',
                  height: '100%',
                  textAlign: 'center',
                  padding: '0 24px',
                  color: 'var(--bg-white)',
                }}
              >
                <h1
                  style={{
                    fontSize: 'clamp(32px, 6vw, 64px)',
                    fontWeight: 800,
                    marginBottom: '16px',
                    textShadow: '0 4px 12px rgba(0,0,0,0.3)',
                    maxWidth: '900px',
                    lineHeight: 1.15
                  }}
                >
                  {text.title}
                </h1>
                <p
                  style={{
                    fontSize: 'clamp(16px, 2.5vw, 24px)',
                    color: 'rgba(255,255,255,0.9)',
                    marginBottom: '36px',
                    maxWidth: '700px',
                    textShadow: '0 2px 8px rgba(0,0,0,0.3)',
                  }}
                >
                  {text.description}
                </p>
                <button
                  onClick={() => handleNavClick(text.btnLink)}
                  className={`btn ${text.colorClass}`}
                  style={{ fontSize: '18px', padding: '14px 36px' }}
                >
                  {text.btnText}
                </button>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>

      {/* Custom navigation buttons */}
      <button className="custom-swiper-prev" aria-label="Anterior diapositiva">
        <ChevronLeft size={28} />
      </button>
      <button className="custom-swiper-next" aria-label="Siguiente diapositiva">
        <ChevronRight size={28} />
      </button>
      </div>
    </section>
  );
}
