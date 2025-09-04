import Link from 'next/link';

const Topbar = () => {
  return (
    <section className='primary-bg d-none d-md-block'>
      <div className="container">
        <div className=" py-1 d-flex align-items-center justify-content-between justify-content-xxl-center w-100 row">
          {/* Info text */}
          <div className="d-flex  flex-grow-1 col-md-5 text-white fw-semibold fs-16 d-none d-xxl-flex">
          
          </div>

          {/* Email contact */}
          <div className="d-flex align-items-center justify-content-xxl-center col-4 col-xxl-2 me-2">
            <div className="icon text-white fs-22 mt-1 me-2" aria-hidden="true">
              <i className="uil uil-envelope" />
            </div>
            <Link href="mailto:info@monestdental.com" className="link-white hover fw-semibold" aria-label="Email contact">
              info@monestdental.com
            </Link>
          </div>

          {/* Phone contact */}
          <div className="d-flex align-items-center justify-content-center col-4 col-xxl-2  me-10">
            <div className="icon text-white fs-22 mt-1 me-2" aria-hidden="true">
              <i className="uil uil-phone-volume" />
            </div>
            <Link href="tel:+1 (849)-507-8787" className="link-white hover fw-semibold text-white" aria-label="Phone contact">
             (849)-507-8787
            </Link>
          </div>

          {/* Social links */}
          <div className="d-flex align-items-center justify-content-center col-1">
            <Link href="https://www.facebook.com/profile.php?id=61557750803700" target="_blank" rel="noopener noreferrer" className="link-white hover me-2" aria-label="Facebook">
              <div className="icon text-white fs-22 mt-1">
                <i className="uil uil-facebook" />
              </div>
            </Link>
            <Link href="https://www.instagram.com/monestdental/" target="_blank" rel="noopener noreferrer" className="link-white hover" aria-label="Instagram">
              <div className="icon text-white fs-22 mt-1">
                <i className="uil uil-instagram" />
              </div>
            </Link>
           { /* <Link href="https://api.whatsapp.com/send?phone=1234567890" target="_blank" rel="noopener noreferrer" className="link-white hover ms-2" aria-label="WhatsApp">
              <div className="icon text-white fs-22 mt-1">
                <i className="uil uil-whatsapp" />
              </div>
            </Link> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Topbar;
