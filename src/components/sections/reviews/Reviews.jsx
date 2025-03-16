import "./reviews.css";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

// import required modules
import { Navigation } from "swiper/modules";

import cover1 from "../../../images/cover-1.png";
import cover2 from "../../../images/cover-2.png";
import cover3 from "../../../images/cover-3.png";
import star from "../../../images/Star.png";

const Reviews = () => {
  const reviews = [
    {
      stars: 5,
      message:
        "We will also facilitate the business marketing of these products with our SEO experts so that they become a ready to use website & help sell product from company",
      user: {
        cover: cover1,
        name: "Amir Uddin",
        jobTitle: "UX Designer",
      },
    },
    {
      stars: 5,
      message:
        "We will also facilitate the business marketing of these products with our SEO experts so that they become a ready to use website & help sell product from company",
      user: {
        cover: cover2,
        name: "Salim Ahmed",
        jobTitle: "UI Designer",
      },
    },
    {
      stars: 5,
      message:
        "We will also facilitate the business marketing of these products with our SEO experts so that they become a ready to use website & help sell product from company",
      user: {
        cover: cover3,
        name: "Guy Hawkins",
        jobTitle: "UX Designer",
      },
    },
  ];

  return (
    <div className="testimonial relative">
      <div className="container mx-auto max-w-screen-lg px-2 sm:px-6 lg:px-8 flex flex-col items-start justify-between gap-10 sm:gap-5 lg:gap-8 pt-24 md:mt-12">
        <div className="info">
          <span className="title inline-block text-lg font-medium text-green relative ml-2 animation-to-right">
            Reviews
          </span>
          <h2 className="font-semibold text-black-100 mt-4 text-4xl dark:text-title-dark animation-to-right">
            Our Customer Say
            <br />
            Something <span className="text-green">About Us</span>
          </h2>
        </div>
        <Swiper
          breakpoints={{
            768: { slidesPerView: 1 },
            1024: { slidesPerView: 2 },
          }}
          navigation={true}
          modules={[Navigation]}
          spaceBetween={30}
          className="mySwiper mt-5"
        >
          {reviews.map((review, index) => (
            <SwiperSlide
              className="rounded-lg max-w-xl animation-left"
              key={index}
            >
              <div className="p-8">
                <div className="stars flex gap-1">
                  {[...Array(review.stars)].map((e, index) => (
                    <img src={star} alt="star" className="h-4" key={index} />
                  ))}
                </div>
                <p className="text-start text-black-90 my-5 text-base dark:text-black-20">
                  {review.message}
                </p>
                <div className="user flex items-center justify-start gap-5">
                  <img
                    className="w-10 h-10 rounded-full"
                    src={review.user.cover}
                    alt="cover"
                  />
                  <div>
                    <h6 className="w-fit font-semibold text-base dark:text-white">
                      {review.user.name}
                    </h6>
                    <span className="text-sm font-medium text-black-20">
                      {review.user.jobTitle}
                    </span>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Reviews;
