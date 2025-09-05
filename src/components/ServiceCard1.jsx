import Image from 'next/image';
import { useState } from 'react';
import NextLink from './NextLink';

const ServiceCard1 = (props) => {
  const { title, url, src, description } = props;
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="col-md-6 col-lg-4 ">
        <div className="card" onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>
          <div className="card-body p-2">
            <figure className="rounded mt-5">
              <Image
                src={isHovered ? src : src}
                alt={`${title}`}
                layout="fill"
                className="position-static w-10"
              />
            </figure>
            <h3 className="mt-5">{title}</h3>
            <p className="px-5">{description}</p>
            <NextLink title="Ver más..." href={url} className="btn btn-md text-white secondary-bg rounded mb-5" />
          </div>
        </div>
    </div>
  );
}; // set deafult Props

export default ServiceCard1;
