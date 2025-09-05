import { Fragment, useRef, useState } from 'react'; // -------- custom hook -------- //
import { useRouter } from 'next/router';
import useSticky from 'hooks/useSticky';
import Image from 'next/image.js';
import NextLink from './NextLink';
import SocialLinks from './SocialLinks';

const Navbar = (props) => {
  const { navClassName, navOtherClass, fancy, stickyBox, logoAlt } = props;

  const sticky = useSticky(350);
  const navbarRef = useRef(null);
  const router = useRouter();
  const [earSurgery, setEarSurgery] = useState(true);
  const [noseSurgery, setNoseSurgery] = useState(false);
  const [throatSurgery, setThroatSurgery] = useState(false);
  const [headAndNeckSurgery, setHeadAndNeckSurgery] = useState(false);
  const [openSurgery, setOpenSurgery] = useState(false);

  const fixedClassName = 'navbar navbar-expand-lg center-nav transparent navbar-light navbar-clone fixed'; // render inner nav item links
 // all main header contents


  const handleEarSurgery = () => {
    setNoseSurgery(false);
    setThroatSurgery(false);
    setHeadAndNeckSurgery(false);
    setEarSurgery(true);
  };

  const handleNoseSurgery = () => {
    setThroatSurgery(false);
    setEarSurgery(false);
    setHeadAndNeckSurgery(false);
    setNoseSurgery(true);
  };

  const handleThroatSurgery = () => {
    setNoseSurgery(false);
    setHeadAndNeckSurgery(false);
    setEarSurgery(false);
    setThroatSurgery(true);
  };

  const handleHeadandNeckSurgery = () => {
    setNoseSurgery(false);
    setThroatSurgery(false);
    setEarSurgery(false);
    setHeadAndNeckSurgery(true);
  };


  const headerContent = (
    <Fragment>
      <div className="navbar-brand w-100">
        <NextLink
          href="/"
          title={
            <Image
              alt="Logo"
              className="py-2"
              src={`/img/logo.png`}
              width={110}
              height={115}
            />
          }
        />
      </div>

      <div id="offcanvas-nav" data-bs-scroll="true" className="navbar-collapse offcanvas offcanvas-nav offcanvas-start">
        <div className="offcanvas-header d-lg-none offcavas-bg nav-logo">
          <NextLink
            href="/"
            title={
              <Image
                id="nav-logo"
                alt="Logo"
                className="py-2 position-static"
                src={`/img/logo.png`}
                layout="fill"
              // width={150}
              //height={90}
              />
            }
          />
          <button type="button" aria-label="Close" data-bs-dismiss="offcanvas" className="btn-close btn-close-white" />
        </div>

        <div className="offcanvas-body ms-lg-auto d-flex flex-column h-100 offcavas-bg">
          <ul className="navbar-nav">
            <li className="nav-item" data-bs-dismiss="offcanvas">
              <NextLink href="/" title="Inicio" className="nav-link " />
            </li>
            
            <li className="nav-item d-lg-none" data-bs-dismiss="offcanvas">
              <NextLink href="/about-us" title="About Us" className="nav-link " />
            </li>
 
           
          </ul>

          <div className="offcanvas-footer d-lg-none">
            <div>
              <NextLink
                title="info@monestdental.com"
                className="link-inverse"
                href="mailto:info@monestdental.com"
              />
              <br />
              <NextLink href="tel:+1 (849)-507-8787" title="(849)-507-8787" />
              <br />
              <SocialLinks />
            </div>
          </div>
        </div>
      </div>

      <div className={navOtherClass}>
        <button data-bs-toggle="offcanvas" data-bs-target="#offcanvas-nav" className="hamburger offcanvas-nav-btn">
          <span />
        </button>
      </div>
    </Fragment>
  );
  return (
    <Fragment>
      {stickyBox && (
        <div
          style={{
            paddingTop: sticky ? navbarRef.current?.clientHeight : 0
          }}
        />
      )}

      <nav ref={navbarRef} className={sticky ? fixedClassName : navClassName}>
        {fancy ? (
          <div className="container">
            <div className="navbar-collapse-wrapper bg-white d-flex flex-row flex-nowrap w-100 justify-content-between align-items-end">
              {headerContent}
            </div>
          </div>
        ) : (
          <div className="container flex-lg-row flex-nowrap align-items-center">{headerContent}</div>
        )}
      </nav>
    </Fragment>
  );
};

Navbar.defaultProps = {
  stickyBox: true,
  navOtherClass: 'navbar-other  d-flex  d-lg-none',
  navClassName: 'navbar navbar-expand-lg center-nav transparent navbar-light'
};
export default Navbar;
