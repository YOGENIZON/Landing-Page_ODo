import { Fragment } from 'react';
import { Breadcrumb } from 'react-bootstrap';
import PageProgress from 'components/PageProgress';
import About from 'components/About';
import CTA from 'components/CTA';
import Facts from 'components/Facts';
import TreatmentsCards from 'components/TreatmentsCards';
import Link from 'next/link';
import Head from 'next/head';

const AboutUS = () => {
  return (
    <Fragment>
      <PageProgress />
      <Head>
        <title>Monest Dental Clinic</title>
        <meta
          name="description"
          content=""
        />
        <link rel="canonical" href="https://entrova.com/about-us" />
      </Head>
      <Breadcrumb className="d-flex flex-column align-items-center justify-content-center pt-14 pb-14 breadcrumbs">
        <div className="overlay"></div>
        <div className="text-center box">
          <p className="fs-56 fw-bold">About Us</p>
          <p className="mt-2 fs-18 ">
            <Link href="/" className="text-second">
              Home
            </Link>{' '}
            / About Us
          </p>
        </div>
      </Breadcrumb>
      <main className="content-wrapper mt-15 overflow-hidden">
        <section className="wrapper">
          <div className="container">
            
          </div>
        </section>
        <section className="wrapper justify-content-center align-items-center d-flex">
          <div className="container py-14 py-md-16">
            <Facts />
          </div>
        </section>
        <section className="wrapper">
          <div className="container">
            <About
              imgPosition="left"
              imgSrc="/img/ent.webp"
              heading="Best ENT Doctor in Location"
              para="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consequuntur ut, nisi voluptatum dolore fuga molestiae optio magnam, sit recusandae vel repellat. Ad fuga eius modi repellendus perspiciatis fugit necessitatibus iusto blanditiis optio. Ipsam, qui cum? Numquam itaque doloremque qui, nihil sit, eligendi magni accusantium eaque similique vel deleniti hic recusandae. Ipsam, qui cum? Numquam itaque doloremque qui, nihil sit, eligendi magni accusantium eaque similique vel deleniti hic recusandae. Ipsam, qui cum? Numquam itaque doloremque qui, nihil sit, eligendi magni accusantium eaque similique vel deleniti hic recusandae?"
              btnName="Know More"
              btnUrl="/ent-specialist-doctor-location"
              btnColor="danger"
            />
          </div>
        </section>
        <section className="wrapper bg-light py-10 py-md-14">
          <div className="container ">
            <div className="col-md-10  col-lg-8  ">
              <p className="fs-80 fw-bolder sub-h2 position-relative ">Treatments </p>
              <h2 className="display-5 mb-16 fw-bold z-1 mt-n15 mt-md-n16 mt-lg-n17 sub-head">
                ENT Diseases We Cure in Location
                <span
                  className="ms-2"
                  style={{ borderBottom: '3px solid #D8D8D8', display: 'inline-block', width: '30px', height: '0px' }}
                ></span>
              </h2>
            </div>
            <TreatmentsCards />
          </div>
        </section>
        <CTA />
      </main>
    </Fragment>
  );
};

export default AboutUS;
