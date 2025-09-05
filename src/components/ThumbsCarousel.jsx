import Image from 'next/image';
import { useState } from 'react';
import { FreeMode, Navigation, Thumbs } from 'swiper';
import { Swiper as SwiperCarousel, SwiperSlide } from 'swiper/react';
import useLightBox from 'hooks/useLightBox';

/**
 * ThumbsCarousel - A Swiper-based image carousel with thumbnail navigation
 * for showcasing ENT hospital photos.
 */
const ThumbsCarousel = () => {
  useLightBox();

  // Swiper state
  const [thumbsSwiper, setThumbsSwiper] = useState();
  const [prevEl, setPrevEl] = useState(null);
  const [nextEl, setNextEl] = useState(null);

  // Image list (main + thumbnail views)
  const slideImages = [
    {
      id: 1,
      url: '/img/home/receptions.webp',
      fullImage: '/img/home/receptions.webp',
      alt: 'Hospital Reception'
    },
    {
      id: 2,
      url: '/img/home/waiting-area-1.webp',
      fullImage: '/img/home/waiting-area-1.webp',
      alt: 'Waiting Area'
    },
    {
      id: 3,
      url: '/img/home/operation-theator-1.webp',
      fullImage: '/img/home/operation-theator-1.webp',
      alt: 'Operation Theater'
    },

    {
      id: 4,
      url: '/img/home/patients-room.webp',
      fullImage: '/img/home/patients-room.webp',
      alt: 'Private Room'
    },
    {
      id: 5,
      url: '/img/home/patients-room-1.webp',
      fullImage: '/img/home/patients-room-1.webp',
      alt: 'Patient Room'
    },
    {
      id: 6,
      url: '/img/home/waiting-area-2.webp',
      fullImage: '/img/home/waiting-area-2.webp',
      alt: 'Waiting Area'
    },
  ];

  return (
    <div className="swiper-container swiper-thumbs-container">

      {/* Main Swiper */}
      <SwiperCarousel
        spaceBetween={10}
        pagination={false}
        navigation={{ prevEl, nextEl }}
        modules={[FreeMode, Navigation, Thumbs]}
        thumbs={{
          swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null
        }}
      >
        {slideImages.map(({ id, url, alt }) => (
          <SwiperSlide key={id}>
            <figure className="rounded">
              <Image
                width={500}
                height={300}
                src={url}
                alt={`${alt}`}
                loading="lazy"
              />
            </figure>
          </SwiperSlide>
        ))}
      </SwiperCarousel>

      {/* Custom Navigation Controls */}
      <div className="swiper-controls">
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
      </div>

      {/* Thumbnails Swiper */}
      <SwiperCarousel
        freeMode
        threshold={2}
        spaceBetween={10}
        slidesPerView={5}
        watchSlidesProgress
        onSwiper={setThumbsSwiper}
        modules={[FreeMode, Navigation, Thumbs]}
        className="mt-4"
      >
        {slideImages.map(({ id, url, alt }) => (
          <SwiperSlide key={id}>
            <Image
              width={100}
              height={100}
              src={url}
              alt={`${alt}`}
              style={{ width: '100%', height: 'auto' }}
              loading="lazy"
            />
          </SwiperSlide>
        ))}
      </SwiperCarousel>
    </div>
  );
};

export default ThumbsCarousel;
