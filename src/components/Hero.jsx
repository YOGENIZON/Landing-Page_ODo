import useLightBox from 'hooks/useLightBox';
import NextLink from './NextLink';
import Image from 'next/image';

const Hero = () => {
  // use video popup
  useLightBox();
  return (
    <section className="hero bg-blue">
      {/* Uncomment this to Add Video Here */}
      {/* <figure className="video-container bg-gray">
      <div className="overlay"></div>
        <video autoPlay muted loop src="/img/hero-bg.mp4" className="video"></video>
      </figure> */}
      <div className="position-absolute top-0 start-0 w-100 h-100 z-0">
        <video className="position-absolute top-0 end-0" width="576" autoPlay muted loop>
          <source src="/video/clinicVideo.mp4" type="video/mp4" />
          Tu navegador no soporta la etiqueta de video.
        </video>
        <div
          className="overlay position-absolute w-100 h-100"
          style={{
            backgroundImage: 'url("/img/fondoazul.png")',
            backgroundRepeat: 'no-repeat',
            opacity: 0.1,
            zIndex: 1
          }}
        ></div>
      </div>
      <div className="container caption position-relative z-1">
        <div className="row" style={{ height: '85vh' }}>
          <div
            className="text-center text-sm-start d-flex flex-column justify-content-center  p-5 col-lg-8 rounded"
            data-cues="slideInDown"
            data-group="page-title"
            data-interval="-200"
            data-delay="500"
          >
            <h2 className="fs-56 mb-4 text-white animate__animated animate__slideInDown animate__delay-1s">
              Monest Dental Clinic.
            </h2>

            <p className="lead fs-23 lh-sm mb-7 text-white animate__animated animate__slideInRight animate__delay-2s">
              Confíe en Monest Dental Clinic para un cuidado dental integral.
            </p>

            <div className="animate__animated animate__slideInUp animate__delay-3s">
              <NextLink title="Leer mas..." href="/" className="btn btn-lg text-white secondary-bg rounded" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
