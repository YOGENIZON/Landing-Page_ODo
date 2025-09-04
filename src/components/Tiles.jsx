import { Fragment } from 'react';
import Image from 'next/image';

const Tiles = () => {
  // List of image filenames (without extension)
  const images = ['/img/icons/about1.jpg', '/img/icons/about2.jpg'];

  return (
    <Fragment>
      {/* Grid container for overlapping image tiles */}
      <div className="overlap-grid-2 overlap-grid">
        {images.map((filename, index) => (
          <div className="item" key={`${filename}-${index}`}>
            <figure className="rounded">
              <Image
                src={filename}
                alt={`${filename} | ENTrova`}
                width={500}
                height={400}
                className="position-static"
                style={{ width: '100%' }}
              // Next.js will optimize image size and serve responsive images automatically
              />
            </figure>
          </div>
        ))}
      </div>
    </Fragment>
  );
};

export default Tiles;
