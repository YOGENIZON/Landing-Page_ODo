import Carousel from './Carousel';
import TestimonialCard from './TestimonialCard';
import Image from 'next/image';

// Array of testimonial objects containing reviewer name and their review text
const testimonialList = [
  {
    name: 'Jhilaris Bautista',
    review: `Me encantó el trato, es el centro más moderno y complaciente que he visitado, honestamente son los mejores del país, la Dra Lucy muy Dulce & la Dra Cesarina muy profesional, El Sr Albert muy amable y caballeroso, 100% recomendados. Los precios muy accesibles
& siempre tienen regalitos para sus pasientes.`
  },
  {
    name: 'Wilson Paulino',
    review: `Excelente atencion y muy bonito lugar, fácil llegar y acceso, servicio de primera y se ve muy modernizado, me encantó mucha gracias.`
  },
  {
    name: 'Emely Nahomy',
    review: `Una muy buna experiencia, me encantó, con estímulo de seguir mi tratamiento con ustedes, el personal llenó todas mis expectativas, siempre muy atentos 😍…`
  },
  {
    name: 'Angie Ramirez',
    review: `Excelente experiencia
He visto un trabajo  realmente profesional
Y un trato personalizado
Lo recomiendo.`
  },
  {
    name: 'Juan Flas',
    review: `Excelentes atenciones del personal y la Dra Lucy tejeda Álvarez. Le recomiendo a todos que visiten su consultorio y vivan la experiencia de una sonrisa espectacular.`
  }
];

// TestimonialCard1 component: Displays an image alongside a slider of testimonial cards
const TestimonialCard1 = ({ className = '', sliderWrapperClassname = 'p-12' }) => {
  return (
    // Outer card container with shadow and optional additional className
    <div className={`card shadow-lg ${className}`}>
      <div className="row gx-0 justify-content-center">
        {/* Right column: Carousel slider containing testimonial cards */}
        <div className="col-lg-5">
          <div className={sliderWrapperClassname}>
            <div className="swiper-container dots-closer mb-4">
              {/* Carousel component displaying one slide at a time with grab cursor enabled, no navigation arrows */}
              <Carousel grabCursor slidesPerView={1} navigation={false}>
                {/* Map over testimonialList and render each testimonial inside a TestimonialCard */}
                {testimonialList.map((item, i) => (
                  <TestimonialCard key={i} {...item} />
                ))}
              </Carousel>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard1;
