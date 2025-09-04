import { Fragment } from 'react';
import ServiceCard1 from './ServiceCard1';
import { surgeryList } from '../data.js';

const Services = () => {
  return (
    <Fragment>
      <div className="position-relative ">
        <div className="row gx-md-5 gy-5 text-center justify-content-center">
          {surgeryList.map((item) => (
            <ServiceCard1 key={item.id} {...item} />
          ))}
        </div>
      </div>
    </Fragment>
  );
};

export default Services;
