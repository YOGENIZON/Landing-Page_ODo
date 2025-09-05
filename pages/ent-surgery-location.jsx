import { Fragment } from 'react';
import { Breadcrumb } from 'react-bootstrap';
import PageProgress from 'components/PageProgress';
import CTA from 'components/CTA';
import Link from 'next/link';
import Head from 'next/head';
import NextLink from 'components/NextLink';
import Image from 'next/image';
import { surgery } from '../src/data';

const Surgeries = () => {
  return (
    <Fragment>
      <PageProgress />
      <Head>
        <title>ENTrova - ENT Hospital Website Template</title>
        <meta
          name="description"
          content=""
        />
        <link rel="canonical" href="https://entrova.com/ent-surgery-location" />
      </Head>
      <Breadcrumb className="d-flex flex-column align-items-center justify-content-center pt-14 pb-14 breadcrumbs">
        <div className="overlay"></div>
        <div className="text-center box">
          <p className="fs-56 fw-bold">ENT Surgery</p>
          <p className="mt-2 fs-18 ">
            <Link href="/" className="text-second">
              Home
            </Link>{' '}
            / ENT Surgery
          </p>
        </div>
      </Breadcrumb>
      <main className="content-wrapper overflow-hidden">
        <section className="wrapper bg-light shadow-lg">
          <div className="container py-14 py-md-16 ">
            <div className="col-md-10  col-lg-8  ">
              <p className="fs-80 fw-bolder sub-h2 position-relative ">Surgeries</p>
              <h1 className="display-5 mb-16 fw-bold z-1 mt-n15 mt-md-n16 mt-lg-n17 sub-head">
                ENT Surgery in Location
                <span
                  className="ms-2"
                  style={{ borderBottom: '3px solid #D8D8D8', display: 'inline-block', width: '30px', height: '0px' }}
                ></span>
              </h1>
            </div>
            <div className="row justify-content-center">
              {surgery.map((item) => {
                return (
                  <div key={item.id} className="position-relative col-md-6 col-lg-4 col-xxl-3 mb-5 mb-md-5">
                    <div
                      className="shape rounded image-bg rellax d-md-block"
                    />

                    <div className="card shadow-lg">
                      <figure className="card-img-top">
                        <Image
                          src={item.sec1Img}
                          alt={`${item.title}`}
                          layout="fill"
                          className="position-static"
                        />
                      </figure>

                      <div className="card-body px-5 py-4 d-flex flex-column align-items-center">
                        <h3 className='text-center'>{item.title}</h3>
                        <p className="mx-1 text-center">{item.cardDescription}</p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>
        <CTA />
      </main>
    </Fragment>
  );
};

export default Surgeries;
