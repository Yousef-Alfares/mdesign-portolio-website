import "./portfolio.css";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Pagination, Navigation } from "swiper/modules";
import MainButton from "../../buttons/Button";

const Portfolio = () => {
  return (
    <div className="portfolio relative">
      <div className="container mx-auto max-w-screen-lg px-2 sm:px-6 lg:px-8 flex flex-wrap md:flex-nowrap items-center justify-between gap-10 sm:gap-5 lg:gap-8 pt-24 md:mt-12">
        <div className="info">
          <span className="title inline-block text-lg font-medium text-green relative ml-2 animation-to-right">
            Portfolio
          </span>
          <h2 className="font-semibold text-black-100 mt-4 text-4xl dark:text-title-dark animation-to-right">
            My Creative Works
            <br />
            Latest <span className="text-green">Project</span>
          </h2>
          <p className="mt-5 text-gray dark:text-paragraph-dark animation-to-right">
            I have selected and mentioned here some of my latest projects to
            share with you.
          </p>
          <MainButton
            text="Show More"
            className="mt-6 animation-to-top"
          ></MainButton>
        </div>
        <Swiper
          breakpoints={{
            40: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 2,
            },
          }}
          spaceBetween={30}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Pagination, Navigation]}
          className="mySwiper mt-10 md:mt-0 animation-to-left"
        >
          <SwiperSlide>
            <div>
              <img
                src={require("../../../images/Mask group.png")}
                className="h-full"
                alt=""
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div>
              <img
                src={require("../../../images/Mask group (1).png")}
                className="h-full"
                alt=""
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div>
              <img
                src={require("../../../images/Mask group (2).png")}
                className="h-full"
                alt=""
              />
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default Portfolio;
