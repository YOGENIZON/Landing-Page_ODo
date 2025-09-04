import { Fragment, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, Pagination } from 'swiper';

const Carousel = ({
  children,
  slideClassName = '',
  spaceBetween = 30,
  slidesPerView = 3,
  pagination = true,
  navigation = true,
  ...others
}) => {
  const [prevEl, setPrevEl] = useState(null);
  const [nextEl, setNextEl] = useState(null);
  const [paginationEl, setPaginationEl] = useState(null);

  return (
    <Fragment>
      <Swiper
        spaceBetween={spaceBetween}
        slidesPerView={slidesPerView}
        loop={true}
        modules={[Pagination, Navigation, Autoplay]}
        navigation={
          navigation
            ? {
                prevEl,
                nextEl
              }
            : false
        }
        pagination={
          pagination
            ? {
                clickable: true,
                el: paginationEl
              }
            : false
        }
        {...others}
      >
        {children.map((slide, index) => (
          <SwiperSlide className={slideClassName} key={index}>
            {slide}
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Custom Controls */}
      {(navigation || pagination) && (
        <div className="swiper-controls">
          {navigation && (
            <div className="swiper-navigation">
              <div
                role="button"
                ref={setPrevEl}
                className="swiper-button swiper-button-prev"
              />
              <div
                role="button"
                ref={setNextEl}
                className="swiper-button swiper-button-next"
              />
            </div>
          )}
          {pagination && (
            <div
              className="swiper-pagination"
              ref={setPaginationEl}
            />
          )}
        </div>
      )}
    </Fragment>
  );
};

export default Carousel;
