import SocialLinks from './SocialLinks'; // -------- data -------- //
import Image from 'next/image.js';
import Link from 'next/link';

import { aboutUsFooter } from '../data.js'; // common links section

const widget = (list, title) => {
  return (
    <div className="widget">
      <h3 className="widget-title fs-20 mb-3">{title}</h3>
    </div>
  );
};

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className=" border-top bg-white-900 overflow-hidden">
      <div className="container pb-3 mt-10">
        <div className="row justify-content-around">
          <div className="col-lg-3">
            <div className="widget d-flex flex-column align-items-center">
              <div className=" d-flex  w-100">
                <Image
                  src="/img/logo.png"
                  alt="Logo"
                  width={150}
                  height={100}
                  className="text-center"
                  style={{
                    width: '100%',
                    height: '100%'
                  }}
                />
              </div>
              <div className="widget">
                <div className="d-flex mb-1 align-items-start">
                  <i className="uil uil-location-pin-alt fs-26" />
                  <address className=" ms-2 m-0 mt-1">
                    Plaza Jarabacoa, Marginal Nte., Santo Domingo Este 11506, Dominican Republic
                  </address>
                </div>
                <div className="d-flex mb-1 align-items-center">
                  <i className="uil uil-envelope fs-26" />
                  <Link href="mailto:contact@example.com" className="link-body ms-2">
                    info@monestdental.com
                  </Link>
                </div>
                <div className="d-flex align-items-center mb-1">
                  <i className="uil uil-phone-volume fs-26" />
                  <p className=" m-0 ms-2 fs-16">
                    <Link href="tel:+1 (849)-507-8787">(849)-507-8787</Link>
                  </p>
                </div>
              </div>
            </div>
            <div className="d-flex flex-column">
              <h3 className="fs-20">Conéctese con nosotros</h3>
              <SocialLinks className="nav social " />
            </div>
          </div>

          <div className="col-sm-6 col-md-4 col-lg-2 mt-md-5 mt-lg-0 mt-10 ms-0 ms-md-5">
            {widget(aboutUsFooter, 'Horario')} Lunes 08:00 – 17:00 Martes 08:00 – 17:00 Miércoles 08:00 – 17:00 Jueves
            – Cerrado Viernes 08:00 – 17:00 Sábado 08:00 – 17:00 Domingo – Cerrado
          </div>
          <div className=" col-lg-3 mt-md-5 mt-lg-0 mt-10 ">
            <div className="widget">
              <h3 className="widget-title fs-20 mb-3">Ubicación</h3>
              <div className=" d-flex justify-content-center border rounded">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3783.950448254601!2d-69.85157182480917!3d18.48590358260093!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMTjCsDI5JzA5LjMiTiA2OcKwNTAnNTYuNCJX!5e0!3m2!1ses-419!2sdo!4v1756916482269!5m2!1ses-419!2sdo"
                  width="100%"
                  height="250"
                  loading="lazy"
                ></iframe>
              </div>
            </div>
          </div>
        </div>

        <hr className="mt-4 mt-md-4 mb-3" />

        <div className="d-md-flex align-items-center justify-content-center">
          <p className="mb-2 mb-lg-0 ">© {currentYear} Monest Dental Clinic </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
