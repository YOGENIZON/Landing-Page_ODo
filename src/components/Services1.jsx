// -------- hook -------- //
import useProgressbar from 'hooks/useProgressbar';
import Banner from './Banner';
import Image from 'next/image';

const Services1 = () => {
  // used for the animated line
  useProgressbar();
  return (
    <section className="wrapper bg-gray">
      <div className="container py-14 mt-md-16">
        <div className="row gx-lg-8 gx-xl-12 gy-6 d-flex align-items-center">
          <div className="col-lg-6 order-2 order-lg-1 mt-12 mt-lg-0 ">
            <h2>Advanced ENT Care Facilities</h2>
            <p className=" mb-5 text-justify">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consequuntur ut, nisi voluptatum dolore fuga molestiae optio magnam, sit recusandae vel repellat. Ad fuga eius modi repellendus perspiciatis fugit necessitatibus iusto blanditiis optio. Ipsam, qui cum? Numquam itaque doloremque qui, nihil sit, eligendi magni accusantium eaque similique vel deleniti hic recusandae. Ipsam, qui cum? Numquam itaque doloremque qui, nihil sit, eligendi magni accusantium eaque similique vel deleniti hic recusandae. Ipsam, qui cum? Numquam itaque doloremque qui, nihil sit, eligendi magni accusantium eaque similique vel deleniti hic recusandae
            </p>
          </div>
          <div className="col-lg-6 order-lg-2 d-flex justify-content-center justify-content-lg-end m-0">
            <figure className="rounded image position-relative">
 
              <Image
                src={`/img/home/advance-ent-care-facilities.webp`}
                alt={`Advanced ENT Care Facilities | ENTrova`}
                width={500}
                height={400}
                className="position-static"
                style={{ width: '100%' }} />

            </figure>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services1;
