import Tiles from './Tiles';
import NextLink from './NextLink';

/**
 * About2 Section
 * Displays an introductory text block with a call-to-action and a visual tiles component.
 */
const About2 = () => {
  return (
    <div className="row gx-lg-8 gx-xl-12 gy-10 align-items-center">
      
      {/* Text Content */}
      <div className="col-lg-6 order-lg-1 order-2">
        <h2 className="mb-4">Sobre Monest Dental Clinic</h2>
        
        <p className="mb-5 text-justify">
          Monest Dental Clinic es una clínica dental de vanguardia dedicada a ofrecer atención integral y personalizada a nuestros pacientes. Contamos con un equipo de profesionales altamente capacitados que utilizan la tecnología más avanzada para proporcionar tratamientos efectivos y seguros. En nuestra clínica, la salud bucal y el bienestar de nuestros pacientes son nuestra prioridad.

Desde procedimientos preventivos hasta tratamientos especializados, nos aseguramos de que cada paciente reciba el mejor cuidado posible en un ambiente cómodo y amigable. Ya sea que necesites un chequeo rutinario, un tratamiento de ortodoncia, o una cirugía dental, en Monest Dental Clinic nos comprometemos a brindarte soluciones de calidad adaptadas a tus necesidades.
        </p>

        {/* CTA Button */}
        
      </div>

      {/* Visual Tiles */}
      <div className="col-lg-6 position-relative d-flex justify-content-center justify-content-lg-start">
        <Tiles />
      </div>
    </div>
  );
};

export default About2;
