import { Fragment, useEffect } from 'react'; // -------- custom hook -------- //
import Link from 'next/link';
import PageProgress from 'components/PageProgress';
import { useRouter } from 'next/router';
import Head from 'next/head';
import Carousel from 'components/Carousel';
import { Breadcrumb } from 'react-bootstrap';
import Image from 'next/image';
import { surgery } from '../src/data';
import CTA from 'components/CTA';
import { earSurgery, noseSurgery, throatSurgery } from '../src/data';

const surgeryArr = [
  '/best-ear-hospital-location',
  '/best-nose-hospital-location',
  '/best-throat-hospital-location',
  '/head-and-neck-surgery-hospital-location'
];
const Surgeries = () => {
  const router = useRouter();
  const { slug } = router.query;
  useEffect(() => {
    if (!slug) return;

    const path = `/${slug}`;
    if (!surgeryArr.includes(path)) {
      router.replace('/404');
    }
  }, [slug, router]);
  const slugToMatch = slug;
  const matchedSurgery = surgery.find((surgery) => surgery.url === slugToMatch);
  const canonicalUrl = `https://entrova.com/${slug}`;
  const defaultSurgery = surgery[0];
  const surgeries = matchedSurgery || defaultSurgery;

  let list = [];
  let listUrl;

  if (surgeries.title === 'Ear Surgery') {
    list = earSurgery;
    listUrl = 'ear-surgery/';
  } else if (surgeries.title === 'Nose Surgery') {
    list = noseSurgery;
    listUrl = 'nose-surgery/';
  } else if (surgeries.title === 'Throat Surgery') {
    list = throatSurgery;
    listUrl = 'throat-surgery/';
  } else if (surgeries.title === 'Head And Neck Surgery') {
    list = surgery;
    listUrl = '';
  }

  return (
    <Fragment>
      <PageProgress />
      <Head>
        <title>{surgeries.metaTitle}</title>
        <meta name="description" content={surgeries.metaDescription} />
        <link rel="canonical" href={canonicalUrl} />
      </Head>
      <Breadcrumb className="d-flex flex-column align-items-center justify-content-center pt-14 pb-14 breadcrumbs">
        <div className="overlay"></div>
        <div className="text-center box">
          <p className="fs-56 fw-bold">{surgeries.title}</p>
          <p className="mt-2 fs-18">
            <Link href="/" className="text-second">
              Home
            </Link>{' '}
            / {surgeries.title}
          </p>
        </div>
      </Breadcrumb>
      <main className="content-wrapper overflow-hidden">
        {/* Section 1 */}
        <section className="wrapper bg-white">
          <div className="container pt-14 pt-md-16 pb-10 pb-md-14">
            <div className="row gx-lg-8 gx-xl-12 gy-10 align-items-center">
              <div className="col-lg-5 position-relative order-lg-2 d-flex justify-content-center">
                <figure className="card-img rounded d-flex justify-content-end">
                  <div
                    className="shape rounded img-bg rellax d-md-block"
                    style={{
                      width: '65%',
                      height: '95%',
                      left: '5.5rem',
                      bottom: '-1.8rem',
                      position: 'absolute',
                      zIndex: 1
                    }}
                  />
                  <Image
                    src={surgeries.sec1Img}
                    alt={`${surgeries.sec1Heading} | ENTrova`}
                    layout="fill"
                    className="position-relative z-2 image"
                  />
                </figure>
              </div>
              <div className="col-lg-7">
                <h1 className="fs-34">{surgeries.sec1Heading}</h1>
                <p className="mb-6 text-justify">{surgeries.sec1Para}</p>
                {surgeries.sec1Para2 && <p className="mb-6 text-justify">{surgeries.sec1Para2}</p>}
                {surgeries.sec1Arr && <h3>What are the Symptomps?</h3>}
                {surgeries.sec1Arr && (
                  <div className={'row gy-3 '}>
                    {surgeries.sec1Arr.map((item, i) => (
                      <div className="col-12" key={i}>
                        <ul className={`icon-list bullet-bg bullet-soft-blue mb-0`}>
                          {item.map((li, i) => {
                            const liProps =
                              i !== 0
                                ? {
                                    className: 'mt-3'
                                  }
                                : {};
                            return (
                              <li key={li} {...liProps}>
                                <i className="uil uil-circle" /> {li}
                              </li>
                            );
                          })}
                        </ul>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>
        </section>
        {/* Section 2 */}
        {slug !== 'head-and-neck-surgery-hospital-location' && (
          <section className="wrapper ">
            <div className="container">
              <div className="col-md-10  col-lg-8  ">
                <p className="fs-80 fw-bolder sub-h2 extra-sub position-relative ">Surgeries</p>
                <h2 className="mb-md-16 fw-bold z-1 mt-n10 mt-sm-n15 mt-md-n16 mt-lg-n17 sub-head">
                  {surgeries.title === 'Head And Neck Surgery'
                    ? 'Other Surgeries'
                    : `${surgeries.title} In Location`}
                  <span
                    className="ms-2"
                    style={{ borderBottom: '3px solid #D8D8D8', display: 'inline-block', width: '30px', height: '0px' }}
                  ></span>
                </h2>
              </div>
            </div>

            <div className="container pt-md-0 pt-10">
              <div className="row gx-lg-8 gx-xl-12 gy-10 align-items-center ">
                <div className="swiper-container grid-view nav-bottom nav-color mb-14 text-center">
                  <Carousel
                    pagination={false}
                    className="overflow-hidden pb-2"
                    breakpoints={{
                      0: {
                        slidesPerView: 1
                      },
                      768: {
                        slidesPerView: 2
                      },
                      992: {
                        slidesPerView: 3
                      }
                    }}
                  >
                    {list
                      .filter((item) => item.title !== surgeries.title)
                      .map((item) => (
                        <div className="card shadow-lg" key={item.id}>
                          <figure className="card-img-top ">
                            <Image
                              src={item.sec1Img}
                              alt={`${item.title} | ENTrova`}
                              layout="fill"
                              className="position-static"
                            />
                          </figure>
                          <div className="card-body p-2">
                            <Link href={item.fullUrl} className="link">
                              <h3 className="fs-21 mb-1">{item.title}</h3>
                            </Link>
                          </div>
                        </div>
                      ))}
                  </Carousel>
                </div>
              </div>
            </div>
          </section>
        )}
        <CTA />
      </main>
    </Fragment>
  );
};

export default Surgeries;
