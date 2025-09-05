import Head from 'next/head';
import { useRouter } from 'next/router';
import { Fragment, useEffect, useState } from 'react';
import ThemeProvider from 'theme/ThemeProvider';
import Layout from 'components/Layout';
// import Script from 'next/script';
// import { GoogleReCaptchaProvider } from 'react-google-recaptcha-v3';

import 'animate.css';
import 'styles/style.css';
import 'styles/responsive.css';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/thumbs';
import 'plyr-react/plyr.css';
import 'glightbox/dist/css/glightbox.css';
import 'plugins/scrollcue/scrollCue.css';
import 'assets/scss/style.scss';

function MyApp({ Component, pageProps }) {
  const { pathname } = useRouter();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (typeof window !== 'undefined') import('bootstrap');
  }, []);

  useEffect(() => {
    (async () => {
      const scrollCue = (await import('plugins/scrollcue')).default;
      scrollCue.init({
        interval: -400,
        duration: 700,
        percentage: 0.8
      });
      scrollCue.update();
    })();
  }, [pathname]);

  useEffect(() => setLoading(false), []);

  return (
    <Fragment>
      {/* <GoogleReCaptchaProvider reCaptchaKey="*****************">  add google site key here*/}
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Monest Dental Clinic</title>
        <meta
          name="description"
          content=""
        />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Monest Dental Clinic" />
        <meta
          property="og:description"
          content=""
        />
        <meta property="og:url" content="https://entrova.com/" />
        <meta property="og:image" content="https://entrova.com/img/logo.png" />
        <meta property="og:image:secure_url" content="/img/logo.png" />
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:title" content="Monest Dental Clinic" />
        <meta
          name="twitter:description"
          content=""
        />
        <meta name="twitter:image" content="/img/logo.png" />
        {/* <meta name="google-site-verification" content="*************************" /> */}
      </Head>

      {/* Uncomment This For Google Analytic  */}

      {/* <Script strategy="afterInteractive" src="***************************" />
        <Script
          id="google-analytics"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
         window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '***********');
        `
          }}
        /> */}
      <Layout>
        <ThemeProvider>{loading ? <div className="page-loader" /> : <Component {...pageProps} />}</ThemeProvider>
      </Layout>
      {/* </GoogleReCaptchaProvider> */}
    </Fragment>
  );
}

export default MyApp;
