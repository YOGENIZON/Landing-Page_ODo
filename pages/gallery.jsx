import { Fragment } from 'react';
import { Breadcrumb } from 'react-bootstrap';
import PageProgress from 'components/PageProgress';
import CTA from 'components/CTA';
import Link from 'next/link';
import Head from 'next/head';
import Image from 'next/image';
import { homeGallery } from '../src/data';
import Gallery from 'components/Gallery';

const Gallerys = () => {
  return (
    <Fragment>
      <PageProgress />
      <Head>
        <title>ENTrova - ENT Hospital Website Template</title>
        <meta
          name="description"
          content=""
        />
        <link rel="canonical" href="https://entrova.com/gallery" />
      </Head>
      <Breadcrumb className="d-flex flex-column align-items-center justify-content-center pt-14 pb-14 breadcrumbs">
        <div className="overlay"></div>
        <div className="text-center box">
          <p className="fs-56 fw-bold">Gallery</p>
          <p className="mt-2 fs-18 ">
            <Link href="/" className="text-second">
              Home
            </Link>{' '}
            / Gallery
          </p>
        </div>
      </Breadcrumb>
      <main className="content-wrapper mt-15 overflow-hidden">
        <section className="wrapper bg-light shadow-lg">
          <div className="container pb-14 pb-md-16 ">
            <div className="col-md-10  col-lg-8  ">
              <p className="fs-80 fw-bolder sub-h2 position-relative ">Gallery</p>
              <h1 className="display-5 mb-16 fw-bold z-1 mt-n15 mt-md-n16 mt-lg-n17">
                Gallery
                <span
                  className="ms-2"
                  style={{ borderBottom: '3px solid #D8D8D8', display: 'inline-block', width: '30px', height: '0px' }}
                ></span>
              </h1>
            </div>
            <Gallery images={homeGallery} />
          </div>
        </section>
        <CTA />
      </main>
    </Fragment>
  );
};

export default Gallerys;
