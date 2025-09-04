import { Fragment, useRef, useState } from 'react'; // -------- custom hook -------- //
import { useRouter } from 'next/router';
import useSticky from 'hooks/useSticky';
import useNestedDropdown from 'hooks/useNestedDropdown'; // -------- custom component -------- //
import Image from 'next/image.js';
import NextLink from './NextLink';
import SocialLinks from './SocialLinks';
import ListItemLink from './ListItemLink';
import DropdownToggleLink from './DropdownToggleLink';
import { surgery } from '../data.js';
import Link from 'next/link';

import { treatments, aboutUs } from '../data.js';
const Navbar = (props) => {
  const { navClassName, navOtherClass, fancy, stickyBox, logoAlt } = props;

  useNestedDropdown();
  const sticky = useSticky(350);
  const navbarRef = useRef(null);
  const router = useRouter();
  const [earSurgery, setEarSurgery] = useState(true);
  const [noseSurgery, setNoseSurgery] = useState(false);
  const [throatSurgery, setThroatSurgery] = useState(false);
  const [headAndNeckSurgery, setHeadAndNeckSurgery] = useState(false);
  const [openSurgery, setOpenSurgery] = useState(false);

  const fixedClassName = 'navbar navbar-expand-lg center-nav transparent navbar-light navbar-clone fixed'; // render inner nav item links

  const renderLinks = (links) => {
    return links.map((item) => (
      <ListItemLink href={item.url} title={item.title} linkClassName="dropdown-item" key={item.id} />
    ));
  }; // all main header contents

  const handleSurgeryDropdown = () => {
    setOpenSurgery(!openSurgery);
  };

  const handleTreatments = () => {
    router.push('/ent-treatment-location');
  };

  const handleSurgeries = () => {
    router.push('/ent-surgery-location');
  };

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

  const handleAboutUs = () => {
    router.push('/about-us');
  };

  const surgeryMenu = [
    {
      id: 1,
      title: 'Ear Surgery',
      url: '/best-ear-hospital-location',
      onMouseEnter: handleEarSurgery,
      action: earSurgery
    },
    {
      id: 2,
      title: 'Nose Surgery',
      url: '/best-nose-hospital-location',
      onMouseEnter: handleNoseSurgery,
      action: noseSurgery
    },
    {
      id: 3,
      title: 'Throat Surgery',
      url: '/best-throat-hospital-location',
      onMouseEnter: handleThroatSurgery,
      action: throatSurgery
    },
    {
      id: 4,
      title: 'Head & Neck Surgery',
      url: '/head-and-neck-surgery-hospital-location',
      onMouseEnter: handleHeadandNeckSurgery,
      action: headAndNeckSurgery
    }
  ];

  const headerContent = (
    <Fragment>
      <div className="navbar-brand w-100">
        <NextLink
          href="/"
          title={
            <Image
              alt="Logo | ENTrova"
              className="py-2"
              src={`/img/logo.png`}
              width={80}
              height={120}
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
                alt="Logo | ENTrova"
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
              <NextLink href="/" title="Home" className="nav-link " />
            </li>
            <li className="nav-item dropdown d-none d-lg-block">
              <DropdownToggleLink
                title="About Us"
                onClick={handleAboutUs}
                className="nav-link dropdown-toggle"
                href="/about-us"
              />
              <ul className="dropdown-menu" data-bs-dismiss="offcanvas">
                {aboutUs.map(({ id, url, title, children }) => {
                  if (!url && children) {
                    return (
                      <li className="dropdown dropdown-submenu dropend" key={id}>
                        <DropdownToggleLink title="About Us " />
                        <ul className="dropdown-menu">{renderLinks(children)}</ul>
                      </li>
                    );
                  }

                  return <ListItemLink key={id} href={url} title={title} linkClassName="dropdown-item" />;
                })}
              </ul>
            </li>
            <li className="nav-item d-lg-none" data-bs-dismiss="offcanvas">
              <NextLink href="/about-us" title="About Us" className="nav-link " />
            </li>

            <li className="nav-item  d-lg-none" data-bs-dismiss="offcanvas">
              <NextLink href="/ent-specialist-doctor-location" title="Dr Jack Smith" className="nav-link " />
            </li>
            <li className="nav-item  d-lg-none" data-bs-dismiss="offcanvas">
              <NextLink href="/gallery" title="Gallery" className="nav-link " />
            </li>
            <li onMouseEnter={handleEarSurgery} className="nav-item dropdown d-none d-lg-block">
              <DropdownToggleLink title="Surgeries" onClick={handleSurgeries} className="nav-link dropdown-toggle" href="/ent-surgery-location" />
              {/* <Link onClick={handleSurgeries} className="nav-link dropdown-toggle" href="/surgeries" data-bs-toggle="dropdown">
                Surgeries
              </Link> */}
              <div className="dropdown-menu dropdown-lg">
                <div className="dropdown-lg-content ">
                  <div>
                    {surgeryMenu.map((item) => (
                      <h4 className="dropdown-header surgery-headings" key={item.id}>
                        <li onMouseEnter={item.onMouseEnter} >
                          <Link className="dropdown-item " href={item.url}>
                            {item.title}
                          </Link>
                        </li>
                      </h4>
                    ))}
                  </div>
                  {earSurgery && (
                    <div>
                      <h4 className="dropdown-header d-header">Ear Surgeries</h4>
                      <ul className="list-unstyled justify-content-center">
                        <li>
                          <Link className="dropdown-item" href="/ear-surgery/tympanoplasty-surgery-hospital-location">
                            Tympanoplasty Surgery
                          </Link>
                        </li>
                        <li>
                          <Link className="dropdown-item" href="/ear-surgery/mastoid-surgery-hospital-location">
                            Mastoid Surgery
                          </Link>
                        </li>
                        <li>
                          <Link className="dropdown-item" href="/ear-surgery/stapes-surgery-hospital-location">
                            Stapes Surgery
                          </Link>
                        </li>
                        <li>
                          <Link className="dropdown-item" href="/ear-surgery/myringotomy-surgery-hospital-location">
                            Myringotomy Surgery
                          </Link>
                        </li>
                      </ul>
                    </div>
                  )}
                  {noseSurgery && (
                    <div>
                      <h4 className="dropdown-header d-header"> Nose Surgeries </h4>
                      <ul className="list-unstyled justify-content-center">
                        <li>
                          <Link
                            className="dropdown-item"
                            href="/nose-surgery/adenoidectomy-surgery-hospital-location"
                          >
                            Adenoidectomy Surgery
                          </Link>
                        </li>
                        <li>
                          <Link className="dropdown-item" href="/nose-surgery/septoplasty-surgery-hospital-location">
                            Septoplasty Surgery
                          </Link>
                        </li>
                        <li>
                          <Link className="dropdown-item" href="/nose-surgery/sinus-surgery-hospital-location">
                            Sinus Surger
                          </Link>
                        </li>
                        <li>
                          <Link className="dropdown-item" href="/nose-surgery/skull-base-surgery-hospital-location">
                            Skull Base Surgery
                          </Link>
                        </li>
                        <li>
                          <Link className="dropdown-item" href="/nose-surgery/pituitary-surgery-hospital-location">
                            Pituitary Surgery
                          </Link>
                        </li>
                        <li>
                          <Link
                            className="dropdown-item"
                            href="/nose-surgery/endonasal-dacryocystorhinostomy-surgery-hospital-location"
                          >
                            Endonasal Dacryocystorhinostomy Surgery
                          </Link>
                        </li>
                      </ul>
                    </div>
                  )}
                  {throatSurgery && (
                    <div>
                      <h4 className="dropdown-header d-header">Throat Surgeries</h4>
                      <ul className="list-unstyled justify-content-center">
                        <li>
                          <Link
                            className="dropdown-item"
                            href="/throat-surgery/tonsillectomy-surgery-hospital-location"
                          >
                            Tonsillectomy Surgery
                          </Link>
                        </li>
                        <li>
                          <Link className="dropdown-item" href="/throat-surgery/thyroid-surgery-hospital-location">
                            Thyroid Surgery
                          </Link>
                        </li>
                        <li>
                          <Link className="dropdown-item" href="/throat-surgery/parotid-surgery-hospital-location">
                            Parotid Surgery
                          </Link>
                        </li>
                        <li>
                          <Link
                            className="dropdown-item"
                            href="/throat-surgery/microlaryngeal-surgery-hospital-location"
                          >
                            Microlaryngeal Surgery
                          </Link>
                        </li>
                        <li>
                          <Link
                            className="dropdown-item"
                            href="/throat-surgery/bronchoscopy-surgery-hospital-location"
                          >
                            Bronchoscopy Surgery
                          </Link>
                        </li>
                        <li>
                          <Link
                            className="dropdown-item"
                            href="/throat-surgery/direct-laryngoscopy-biopsy-surgery-hospital-location"
                          >
                            Direct Laryngoscopy & Biopsy Surgery
                          </Link>
                        </li>
                      </ul>
                    </div>
                  )}
                  {headAndNeckSurgery && <div></div>}
                </div>
              </div>
            </li>
            <li className="nav-item dropdown d-lg-none" onClick={handleSurgeryDropdown}>
              <DropdownToggleLink
                title="Surgeries"
                className="nav-link dropdown-toggle"
                onClick={() => {
                  // if (openSurgery) {
                  handleSurgeries();
                  // }
                }}
              />

              <ul className="dropdown-menu">
                {surgery.map(({ id, title, children, url }) => {
                  if (children) {
                    return (
                      <li className="dropdown dropdown-submenu dropend" key={id}>
                        <DropdownToggleLink title={title} className="dropdown-item dropdown-toggle" />
                        <ul className="dropdown-menu" data-bs-dismiss="offcanvas">
                          {children.map((child) => (
                            <ListItemLink
                              key={child.id}
                              href={child.url}
                              title={child.title}
                              linkClassName="dropdown-item"
                            />
                          ))}
                        </ul>
                      </li>
                    );
                  } else {
                    return <ListItemLink key={id} href={url} title={title} linkClassName="dropdown-item" />;
                  }
                })}
              </ul>
            </li>

            <li className="nav-item dropdown d-none d-lg-block">
              <DropdownToggleLink title="Treatments" onClick={handleTreatments} className="nav-link dropdown-toggle" href="/ent-treatment-location" />
              <ul className="dropdown-menu">
                {treatments.map(({ id, url, title, children }) => {
                  if (!url && children) {
                    return (
                      <li className="dropdown dropdown-submenu dropend" key={id}>
                        <DropdownToggleLink title="Treatments" />
                        <ul className="dropdown-menu" >{renderLinks(children)}</ul>
                      </li>
                    );
                  }

                  return (
                    <ListItemLink key={id} href={`/ent-treatment/${url}`} title={title} linkClassName="dropdown-item" />
                  );
                })}
              </ul>
            </li>
            <li className="nav-item dropdown  d-lg-none">
              <DropdownToggleLink title="Treatments" className="nav-link dropdown-toggle" />
              <ul className="dropdown-menu" data-bs-dismiss="offcanvas">
                {treatments.map(({ id, url, title, children }) => {
                  if (!url && children) {
                    return (
                      <li className="dropdown dropdown-submenu dropend" key={id}>
                        <DropdownToggleLink title="Treatments" />
                        <ul className="dropdown-menu">{renderLinks(children)}</ul>
                      </li>
                    );
                  }

                  return (
                    <ListItemLink key={id} href={`/ent-treatment/${url}`} title={title} linkClassName="dropdown-item" />
                  );
                })}
              </ul>
            </li>
            <li className="nav-item" data-bs-dismiss="offcanvas">
              <NextLink href="/contact-us" title="Contact Us" className="nav-link " />
            </li>
            <li className="nav-item align-items-center d-flex mt-3 mt-lg-0 ms-lg-3 " data-bs-dismiss="offcanvas">
              <NextLink
                title="Book Appointment"
                href="/book-appointment"
                className="btn btn-sm secondary-bg text-white mb-lg-1 rounded border border-md-none"
              />
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
