import { Fragment } from 'react';
import { Breadcrumb } from 'react-bootstrap';
import PageProgress from 'components/PageProgress';
import About from 'components/About';
import CTA from 'components/CTA';
import TreatmentsCards from 'components/TreatmentsCards';
import Link from 'next/link';
import Head from 'next/head';

const DrJackSmith = () => {
  return (
    <Fragment>
      <PageProgress />
      <Head>
        <title>ENTrova - ENT Hospital Website Template</title>
        <meta
          name="description"
          content=""
        />
        <link rel="canonical" href="https://entrova.com/ent-specialist-doctor-location" />
      </Head>
      <Breadcrumb className="d-flex flex-column align-items-center justify-content-center pt-14 pb-14 breadcrumbs">
        <div className="overlay"></div>
        <div className="text-center box">
          <p className="fs-56 fw-bold">About Dr. Jack Smith </p>
          <p className="mt-2 fs-18 ">
            <Link href="/" className="text-second">
              Home
            </Link>{' '}
            / About Dr. Jack Smith
          </p>
        </div>
      </Breadcrumb>
      <main className="content-wrapper mt-15 overflow-hidden">
        <section className="wrapper bg-light">
          <div className="container">
            <About
              imgPosition="left"
              imgSrc="/img/ent.webp"
              subHeading="Dr. Jack Smith"
              heading="ENT Specialist Doctor in Location"
              para="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consequuntur ut, nisi voluptatum dolore fuga molestiae optio magnam, sit recusandae vel repellat. Ad fuga eius modi repellendus perspiciatis fugit necessitatibus iusto blanditiis optio. Ipsam, qui cum? Numquam itaque doloremque qui, nihil sit, eligendi magni accusantium eaque similique vel deleniti hic recusandae. Ipsam, qui cum? Numquam itaque doloremque qui, nihil sit, eligendi magni accusantium eaque similique vel deleniti hic recusandae. Ipsam, qui cum? Numquam itaque doloremque qui, nihil sit, eligendi magni accusantium eaque similique vel deleniti hic recusandae?"
              isH1="true"
            />
          </div>
        </section>
        <section className="wrapper bg-light py-10 py-md-14">
          <div className="container ">
            <div className="col-md-10  col-lg-8  ">
              <p className="fs-80 fw-bolder sub-h2 position-relative ">Treatments </p>
              <h2 className="display-5 mb-md-16 mb-10 fw-bold z-1 mt-n15 mt-md-n16 mt-lg-n17 sub-head">
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

export default DrJackSmith;
