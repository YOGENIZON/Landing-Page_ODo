import { Fragment } from 'react';
import { Breadcrumb } from 'react-bootstrap';
import PageProgress from 'components/PageProgress';
import Link from 'next/link';
import ContactForm1 from 'components/ContactForm1';
import CTA1 from 'components/CTA1';
import Head from 'next/head';

const ContactUs = () => {
  return (
    <Fragment>
      <PageProgress />
      <Head>
        <title>Monest Dental Clinic</title>
        <meta
          name="description"
          content=""
        />
        <link rel="canonical" href="https://entrova.com/contact-us" />
      </Head>
      <Breadcrumb className="d-flex flex-column align-items-center justify-content-center pt-14 pb-14 breadcrumbs">
        <div className="overlay"></div>
        <div className="text-center box">
          <h1 className="fs-56 fw-bold text-main">Contact Us</h1>
          <p className="mt-2 text-white">
            <Link href="/" className='text-second'>Home</Link> / Contact Us
          </p>
        </div>
      </Breadcrumb>
      <main className="content-wrapper overflow-hidden">
        <section className="wrapper bg-light ">
          <ContactForm1 />
        </section>
        <section className="wrapper bg-black ">
          <CTA1 />
        </section>
        <section>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.019594510314!2d-122.4194156846815!3d37.77492927975988!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80858064f3e74c6f%3A0x4211bbcc3de0b9f0!2sGeneral%20Hospital%20-%20San%20Francisco!5e0!3m2!1sen!2sus!4v1748419750000!5m2!1sen!2sus"
            width="100%"
            height="400"
            loading="lazy"
          ></iframe>
        </section>
      </main>
    </Fragment>
  );
};

export default ContactUs;
