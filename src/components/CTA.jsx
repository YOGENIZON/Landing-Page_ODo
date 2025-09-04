import Image from 'next/image';

const ctaItems = [
  {
    title: 'Get Directions',
    subtitle: 'Find Us On Map',
    href: 'https://maps.app.goo.gl/UxPfFBDa52wua1E36',
    img: '/img/icons/direction.webp',
    bg: 'url(/img/photos/cta-bg.jpg)',
  },
  {
    title: 'Contact & Appointment',
    subtitle: 'Send Us An Email',
    href: 'https://g.page/r/LecMoFZdY3ZaJosJ6/review',
    img: '/img/icons/contact-and-appointment.webp',
    bg: '#103989',
  },
  {
    title: 'Emergency Service',
    subtitle: 'Call : +91 12345 67890',
    href: 'tel:+911234567890',
    img: '/img/icons/emergency-service.webp',
    bg: 'url(/img/photos/cta-bg.jpg)',
  },
];

const CTA = () => {
  return (
    <div className="row text-center justify-content-center p-0 gx-15">
      {ctaItems.map(({ title, subtitle, href, img, bg }, index) => (
        <div key={index} className="col-md-4 p-0 ">
          <div
            className="p-10 cta-cards align-items-center d-flex justify-content-center"
            style={{
              background: bg.includes('url') ? `${bg} no-repeat center / cover` : bg,
            }}
          >
            <div className="d-flex align-items-start justify-content-center gap-4">
              <figure className="rounded m-0">
            
              </figure>
              <div className="text-start">
               
                <h4 className="fs-18 text-white m-0">
                  <a
                    href={href}
                    className="text-white"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                 
                  </a>
                </h4>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CTA;
