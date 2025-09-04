import { Fragment } from 'react';
import Head from 'next/head';
import PageProgress from 'components/PageProgress';
import Hero from 'components/Hero';
import About from 'components/About';
import About2 from 'components/About2';
import Services from 'components/Services';
import Services1 from 'components/Services1';
import CTA2 from 'components/CTA2';
import CTA from 'components/CTA';
import Testimonial from 'components/Testimonial';
import Gallery from 'components/Gallery';
import { homeGallery } from '../src/data';

const Home = () => {
  return (
    <Fragment>
      <PageProgress />
      <Head>
        <title>ENTrova - ENT Hospital Website Template</title>
        <meta name="description" content="" />
        <link rel="canonical" href="https://entrova.com" />
      </Head>
      <main className="content-wrapper overflow-hidden">
        <Hero />
        <section className="wrapper bg-light">
          <div className="container pt-8 pt-md-15">
            <About
              imgPosition="right"
              imgSrc="/img/location.png"
              heading="Monest Dental Clinic: La Mejor Clínica de la Zona"
              para="Monest Dental Clinic se ha consolidado como la clínica dental líder en la región, destacándose por su enfoque único en la salud bucal y su atención personalizada. Nuestro equipo de expertos está compuesto por dentistas altamente calificados y con una vasta experiencia en procedimientos de vanguardia. Nos enorgullece contar con tecnología de última generación para ofrecer a nuestros pacientes tratamientos eficaces y seguros.
              Nos esforzamos por crear un ambiente cómodo y amigable, garantizando que cada visita sea una experiencia positiva. En Monest, la salud de nuestros pacientes es lo más importante, y trabajamos con dedicación para brindarles el mejor servicio y resultados. Ya sea para una consulta preventiva o un tratamiento especializado, en Monest Dental Clinic encontrarás la atención y el cuidado que mereces."
              isH1="true"
            />
          </div>
        </section>
        <section className="wrapper bg-light pt-10 pt-md-14">
          <div className="container ">
            <div className="col-md-10  col-lg-8  ">
              <p className="fs-80 fw-bolder sub-h2 position-relative ">Surgeries</p>
              <h2 className="display-5 mb-16 fw-bold z-1 mt-n15 mt-md-n16 mt-lg-n17 sub-head">
                ENT Surgery in Location
                <span
                  className="ms-2"
                  style={{ borderBottom: '3px solid #D8D8D8', display: 'inline-block', width: '30px', height: '0px' }}
                ></span>
              </h2>
            </div>
            <Services />
          </div>
        </section>
        <section className="wrapper bg-light ">
          <div className="container pt-14 pt-md-16">
            <About2 />
          </div>
        </section>

        <section className="wrapper bg-light mt-22">
          <div className="container mt-14 mt-md-16">
            <div className="col-md-10  col-lg-8  ">
              <h2 className="display-5 mb-16 fw-bold z-1 mt-n10 mt-sm-n15 mt-md-n16 mt-lg-n70 sub-head">
                Conoce al equipo
               
              </h2>
            </div>
          </div>
        </section>
        <CTA2 />
        <section className="wrapper bg-light ">
          <div className="container pt-16 pt-md-16 position-relative z-1">
            <Testimonial />
          </div>
          <div className=" mt-n10 z-0" style={{ height: '150px', backgroundColor: '#2966BF' }}></div>
        </section>
        <section className="wrapper bg-light shadow-lg  mb-n10">
          <div className="container py-14">
            <div className="col-md-10  col-lg-8  ">
              <p className="fs-80 fw-bolder sub-h2 position-relative "> Hospital</p>
              <h2 className="display-5 mb-16 fw-bold z-1 mt-n15 mt-md-n16 mt-lg-n17 sub-head">
                Nuestra Instalaciones
                <span
                  className="ms-2"
                  style={{ borderBottom: '3px solid #D8D8D8', display: 'inline-block', width: '30px', height: '0px' }}
                ></span>
              </h2>
            </div>
            <Gallery images={homeGallery} />
          </div>
        </section>
        <CTA />
      </main>
    </Fragment>
  );
};

export default Home;
