import ThumbsCarousel from 'components/ThumbsCarousel';

const About1 = () => {
  return (
    <div className="row gx-lg-8 gx-xl-12 align-items-center">
      {/* Text Column */}
      <div className="col-lg-6">
        <h1 className="mb-4">
          Ear, Nose & Throat Hospital in Location
        </h1>
        <p className="mb-6 text-justify">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequuntur ut, nisi voluptatum dolore fuga
          molestiae optio magnam, sit recusandae vel repellat. Ad fuga eius modi repellendus perspiciatis fugit
          necessitatibus iusto blanditiis optio. Ipsam, qui cum? Numquam itaque doloremque qui, nihil sit, eligendi magni
          accusantium eaque similique vel deleniti hic recusandae.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequuntur ut, nisi voluptatum dolore fuga
          molestiae optio magnam, sit recusandae vel repellat. Ad fuga eius modi repellendus perspiciatis fugit
          necessitatibus iusto blanditiis optio. Ipsam, qui cum? Numquam itaque doloremque qui, nihil sit, eligendi magni
          accusantium eaque similique vel deleniti hic recusandae.
        </p>
        <p className="mb-6 text-justify">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequuntur ut, nisi voluptatum dolore fuga
          molestiae optio magnam, sit recusandae vel repellat. Ad fuga eius modi repellendus perspiciatis fugit
          necessitatibus iusto blanditiis optio. Ipsam, qui cum?
        </p>
      </div>

      {/* Carousel Column */}
      <div className="col-lg-6">
        <ThumbsCarousel />
      </div>
    </div>
  );
};

export default About1;
