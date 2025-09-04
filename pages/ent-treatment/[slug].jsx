import { Fragment, useEffect } from 'react';
import Link from 'next/link';
import NextLink from 'components/NextLink';
import PageProgress from 'components/PageProgress';
import { useRouter } from 'next/router';
import Head from 'next/head';
import Carousel from 'components/Carousel';
import { Breadcrumb } from 'react-bootstrap';
import Image from 'next/image';
import { treatments } from '../../src/data';
import ServiceCard from 'components/ServiceCard';
import CTA from 'components/CTA';

const treatmentArr = [
  '/ear-infection-treatment-location',
  '/ear-injury-treatment-location',
  '/hearing-loss-treatment-location',
  '/tinnitus-treatment-location',
  '/dizziness-vertigo-treatment-location',
  '/sinus-infection-treatment-location',
  '/allergy-rhinitis-treatment-location',
  '/nasal-fracture-treatment-location',
  '/nose-bleeding-treatment-location',
  '/nasal-polyps-treatment-location',
  '/tonsillitis-treatment-location',
  '/throat-cancer-treatment-location',
  '/voice-disorders-treatment-location',
  '/swallowing-disorder-treatment-location',
  '/pharyngitis-treatment-location',
  '/head-and-neck-cancer-treatment-location',
  '/thyroid-disorders-treatment-location'
];

const AllTreatments = () => {
  const router = useRouter();
  const { slug } = router.query;
  useEffect(() => {
    if (!slug) return;

    const path = `/${slug}`;
    if (!treatmentArr.includes(path)) {
      router.replace('/404');
    }
  }, [slug, router]);
  const slugToMatch = slug;
  const matchedSurgery = treatments.find((treat) => treat.url === slugToMatch);
  const canonicalUrl = `https://entrova.com/ent-treatment/${slug}`;
  const defaultSurgery = treatments[0];
  const treat = matchedSurgery || defaultSurgery;
  const title = treat.secTitle ? treat.secTitle : treat.title;
  return (
    <Fragment>
      <PageProgress />
      <Head>
        <title>{treat.metaTitle}</title>
        <meta name="description" content={treat.metaDescription} />
        <link rel="canonical" href={canonicalUrl} />
      </Head>
      <Breadcrumb className="d-flex flex-column align-items-center justify-content-center pt-14 pb-14 breadcrumbs">
        <div className="overlay"></div>
        <div className="text-center box">
          <p className="fs-56 fw-bold">{treat.title}</p>
          <p className="mt-2 fs-18">
            <Link href="/" className="text-second">
              Home
            </Link>{' '}
            / {title}
          </p>
        </div>
      </Breadcrumb>
      <main className="content-wrapper overflow-hidden">
        {/* Section 1 */}
        <section className="wrapper bg-white">
          <div className="container py-12 ">
            <div className="row gx-lg-8 gx-xl-12 gy-10 align-items-center">
              <div className="col-lg-5 position-relative order-lg-2 ">  
                <figure className="rounded d-flex justify-content-end">
                  <div
                    className="shape rounded img-bg rellax d-md-block treatment-img-bg"
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
                    src={treat.sec1Img}
                    alt={`${treat.sec1Heading} | ENTrova`}
                    width={610}
                    height={500}
                    className="position-relative z-2 image"
                  />
                </figure>
              </div>
              <div className="col-lg-7">
                <h1>{treat.sec1Heading}</h1>
                <p className="mb-6 text-justify">{treat.sec1Para}</p>
                {treat.sec1Para2 && <p className="mb-6 text-justify">{treat.sec1Para2}</p>}
              </div>
            </div>
          </div>
        </section>
        {/* Section 2 */}
        <section className="wrapper bg-gray">
          <div className="container py-10 py-md-12">
            <div className="row gx-lg-8 gx-xl-12 gy-10 align-items-center">
              <h2 className="mb-3"> Symptoms of {treat.title}</h2>
              <div className="mt-2">
                {treat.sec2List.map((item) => (
                  <div key={item.no} className={`card-body`}>
                    <div className="d-flex align-items-center">
                      <div>
                        <span className="icon btn btn-circle btn-md  pe-none me-4">
                          <i className="uil uil-exclamation-circle fs-28 text-danger" />
                        </span>
                      </div>
                      <div>
                        <h4 className="mb-1">{item.text}</h4>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
        {/* Section 3 */}
        <section className="wrapper bg-white">
          <div className="container py-12 ">
            <div className="row gx-lg-8 gx-xl-12 gy-10 align-items-center">
              <div className="col-lg-5 position-relative ">
                <figure className="rounded d-flex justify-content-start">
                  <Image
                    src="/img/ent.webp"
                    alt={`ENT Specialist for ${title} Location | ENTrova`}
                    width={610}
                    height={500}
                    // layout="fill"
                    className="position-static image"
                    // style={{
                    //   width: '80%'
                    // }}
                  />
                </figure>
              </div>
              <div className="col-lg-7">
                <h2>ENT Specialist for {title} Location</h2>
                <p className="mb-6 text-justify">{treat.sec3Para}</p>
                {treat.sec3Para2 && <p className="mb-6 text-justify">{treat.sec3Para2}</p>}
              </div>
            </div>
          </div>
        </section>
        {/* Section 4 */}
        <section className="wrapper bg-gray">
          <div className="container py-10 py-md-14">
            <div className="row gx-md-8 gx-xl-12">
              <div className="col-lg-6 mb-10 mb-md-0">
                <h2>Advanced {title} Surgeries</h2>
                <p className="text-justify">{treat.sec4Para}</p>
                <div className="mt-5">
                  <NextLink title="Know More" href={treat.sec4BtnUrl} className={`btn text-white secondary-bg rounded `} />
                </div>
              </div>

              <div className="col-lg-6 mt-5 mt-lg-0">
                <div className="row gy-6 gx-md-8 gx-xl-12">
                  {treat.sec4List.map(({ no, ...item }) => (
                    <div className="col-md-6" key={no}>
                      <ServiceCard
                        {...item}
                        Icon={
                          <span className="icon btn btn-circle btn-primary pe-none me-4 border-soft-primary border-10 p-4">
                            <span className="number fs-18">{no}</span>
                          </span>
                        }
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Section 5 */}
        <section className="wrapper bg-white">
          <div className="container py-12 py-md-14">
            <div className="row gx-lg-8 gx-xl-12 gy-10 align-items-center">
              <div className="col-lg-5 position-relative order-lg-2 ">
                <figure className="rounded d-flex justify-content-end">
                  <Image
                    src="/img/home/patients-room.webp"
                    alt={`Best ENT Clinic for ${title} Location | ENTrova`}
                    width={610}
                    height={500}
                    // layout="fill"
                    className="position-static image"
                  />
                </figure>
              </div>
              <div className="col-lg-7">
                <h2>Best ENT Clinic for {title} Location</h2>
                <p className="mb-6 text-justify">{treat.sec5Para}</p>
                {treat.sec5Para2 && <p className="mb-6 text-justify">{treat.sec5Para2}</p>}
              </div>
            </div>
          </div>
        </section>
        {/* Section 6 */}
        <section className="wrapper ">
          <div className="container">
            <div className="col-md-10  col-lg-8  ">
              <p className="fs-80 fw-bolder sub-h2 extra-sub position-relative ">Treatments</p>
              <h2 className="mb-lg-16 fw-bold z-1 mt-n10 mt-sm-n15 mt-md-n16 mt-lg-n17 sub-head">
                Other Treatments
                <span
                  className="ms-2"
                  style={{ borderBottom: '3px solid #D8D8D8', display: 'inline-block', width: '30px', height: '0px' }}
                ></span>
              </h2>
            </div>
          </div>

          <div className="container py-10 py-md-0 ">
            <div className="row gx-lg-8 gx-xl-12 gy-10 align-items-center ">
              <div className="swiper-container grid-view nav-bottom nav-color mb-16 text-center">
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
                  {treatments
                    .filter((item) => item.title !== treat.title)
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
                          <Link href={item.url} className="link">
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
        <CTA />
      </main>
    </Fragment>
  );
};

export default AllTreatments;
