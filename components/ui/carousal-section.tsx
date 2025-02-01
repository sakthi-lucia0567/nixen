import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/autoplay"; // Ensure the autoplay CSS is included
import { Autoplay } from "swiper/modules";

const PortfolioSection: React.FC = () => {
  return (
    <section className="bg-white dark:bg-gray-900 antialiased">
      <div className="max-w-screen-xl px-4 py-8 mx-auto lg:px-6 sm:py-16 lg:py-24">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl font-extrabold leading-tight tracking-tight text-gray-900 sm:text-4xl dark:text-white">
            Trusted Over 50+ Companies
          </h2>
          <p className="mt-4 text-base font-normal text-gray-500 sm:text-xl dark:text-gray-400">
            At Nixensoft, we are proud to share our successful projects that
            help businesses grow. Our creative solutions make it easier for
            clients to reach their goals.
          </p>
        </div>

        <Swiper
          spaceBetween={30}
          slidesPerView={1}
          breakpoints={{
            640: {
              slidesPerView: 2,
            },
            768: {
              slidesPerView: 3,
            },
            1024: {
              slidesPerView: 4,
            },
          }}
          autoplay={{
            delay: 1000, // Auto-swipes every 2.5 seconds
            disableOnInteraction: true, // Keep autoplay after interaction
          }}
          modules={[Autoplay]} // Add autoplay module
          className="mt-12 flex justify-center items-center" // Center swiper container
        >
          <SwiperSlide>
            <div className="space-y-4">
              <span className="bg-gray-100 text-gray-900 text-xs font-medium inline-flex items-center justify-center px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-gray-300">
                Alphabet Inc.
              </span>
              <h3 className="text-2xl font-bold leading-tight text-gray-900 dark:text-white">
                Official website
              </h3>
              <p className="text-lg font-normal text-gray-500 dark:text-gray-400">
                Flowbite helps you connect with friends, family and communities
                of people who share your interests.
              </p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="space-y-4">
              <span className="bg-gray-100 text-gray-900 text-xs font-medium inline-flex items-center justify-center px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-gray-300">
                Alphabet Inc.
              </span>
              <h3 className="text-2xl font-bold leading-tight text-gray-900 dark:text-white">
                Official website
              </h3>
              <p className="text-lg font-normal text-gray-500 dark:text-gray-400">
                Flowbite helps you connect with friends, family and communities
                of people who share your interests.
              </p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="space-y-4">
              <span className="bg-gray-100 text-gray-900 text-xs font-medium inline-flex items-center justify-center px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-gray-300">
                Alphabet Inc.
              </span>
              <h3 className="text-2xl font-bold leading-tight text-gray-900 dark:text-white">
                Official website
              </h3>
              <p className="text-lg font-normal text-gray-500 dark:text-gray-400">
                Flowbite helps you connect with friends, family and communities
                of people who share your interests.
              </p>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="space-y-4">
              <span className="bg-gray-100 text-gray-900 text-xs font-medium inline-flex items-center px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-gray-300">
                Microsoft Corp.
              </span>
              <h3 className="text-2xl font-bold leading-tight text-gray-900 dark:text-white">
                Management system
              </h3>
              <p className="text-lg font-normal text-gray-500 dark:text-gray-400">
                Flowbite helps you connect with friends, family and communities
                of people who share your interests.
              </p>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="space-y-4">
              <span className="bg-gray-100 text-gray-900 text-xs font-medium inline-flex items-center px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-gray-300">
                Adobe Inc.
              </span>
              <h3 className="text-2xl font-bold leading-tight text-gray-900 dark:text-white">
                Logo design
              </h3>
              <p className="text-lg font-normal text-gray-500 dark:text-gray-400">
                Flowbite helps you connect with friends, family and communities
                of people who share your interests.
              </p>
            </div>
          </SwiperSlide>

          {/* Add more SwiperSlide components here as needed */}
        </Swiper>
      </div>
    </section>
  );
};

export default PortfolioSection;
