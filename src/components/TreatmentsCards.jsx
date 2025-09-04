import { Fragment } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { treatments } from '../data.js';

const TreatmentsCards = () => {
  return (
    <Fragment>
      {/* Container for treatment cards with responsive grid */}
      <div className="position-relative">
        <div className="row gx-md-5 gy-5 text-center justify-content-center">
          {treatments.map(({ id, url, src, title }) => (
            <div className="col-sm-6 col-md-4 col-lg-3" key={id}>
              {/* Link to individual treatment page */}
              <Link href={`/ent-treatment/${url}`} passHref className='card text-decoration-none'>
                {/* Card container, clickable via Link */}
                <div className="card-body p-2 d-flex flex-column align-items-center">
                  {/* Image with rounded corners, centered, scaled */}
                  <figure className="rounded mt-5 w-50">
                    <Image
                      src={src}
                      alt={`${title} | ENTrova`}
                      width={100}
                      height={100}
                      style={{ width: '50%' }}
                    />
                  </figure>
                  {/* Treatment title */}
                  <h3 className="mt-5 text-dark">{title}</h3>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </Fragment>
  );
};

export default TreatmentsCards;
