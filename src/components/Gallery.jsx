import { Fragment } from 'react';
import Image from 'next/image.js';
import Link from 'next/link';

const Gallery = ({ images, target }) => {
  return (
    <Fragment>
      <div className="row gy-4 justify-content-center">
        {images.map(({ id, image, alt, caption }) => (
          <div className={`project item col-md-6 col-lg-4 col-xxl-3 `} key={id}>
            <figure className="rounded">
              <Link href={image} data-glightbox data-gallery="shots-group" target={target ? '_blank' : ''}>
                <Image src={image} alt={`${alt} | ENTrova`} layout="fill" className="position-static" />
                {caption && <h3 className='text-center mt-1'>{caption}</h3>}
                <span className="bg" />
              </Link>
            </figure>
          </div>
        ))}
      </div>
    </Fragment>
  );
};

export default Gallery;
