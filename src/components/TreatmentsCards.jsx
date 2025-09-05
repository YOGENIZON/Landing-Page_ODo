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
        </div>
      </div>
    </Fragment>
  );
};

export default TreatmentsCards;
