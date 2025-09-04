const CTA1 = () => {
  return (
    <section className="container">
      <div className="row justify-content-center p-0 gx-15">
        {/* Phone */}
        <div className="col-md-4 p-0 bg-black">
          <div className="p-10 h-100">
            <div className="d-flex flex-column gap-3">
              <i className="icons uil uil-phone-volume text-white fs-2" aria-hidden="true"></i>
              <div>
                <h3 className="text-white">Phone</h3>
                <p className="text-white">
                  Your health doesn't wait, and neither do we — call to reach out to us now.
                </p>
                <h4 className="fs-18">
                  <a href="tel:+911234567890" className="text-blue text-decoration-none">
                    +91 12345 67890
                  </a>
                </h4>
              </div>
            </div>
          </div>
        </div>

        {/* Email */}
        <div className="col-md-4 p-0 bg-black">
          <div className="p-10 h-100">
            <div className="d-flex flex-column gap-3">
              <i className="icons uil uil-envelope text-white fs-2" aria-hidden="true"></i>
              <div>
                <h3 className="text-white">Email</h3>
                <p className="text-white">
                  We look forward to helping you achieve better health. Reach out to us now.
                </p>
                <h4 className="fs-18">
                  <a href="mailto:contact@example.com" className="text-blue text-decoration-none">
                    contact@example.com
                  </a>
                </h4>
              </div>
            </div>
          </div>
        </div>

        {/* Location */}
        <div className="col-md-4 p-0 bg-black">
          <div className="p-10 h-100">
            <div className="d-flex flex-column gap-3">
              <i className="icons uil uil-location-arrow text-white fs-2" aria-hidden="true"></i>
              <div>
                <h3 className="text-white">Location</h3>
                <p className="text-white fs-18 mb-2">
                  210, Amrit Plaza, Skyline Avenue, Heritage Enclave, Bhuj, Mirjapur West, Gujarat 370001
                </p>
                <a
                  href="https://maps.app.goo.gl/LecMoFZdY3ZaJosJ6"
                  className="text-blue fw-bold text-decoration-none"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View On Google Map
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA1;
