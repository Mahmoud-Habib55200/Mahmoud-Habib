import React from "react";
import "./Testimonials.css";
import AVTR1 from "../../assets/avatar1.jpg";
import AVTR2 from "../../assets/avatar2.jpg";
import AVTR3 from "../../assets/avatar3.jpg";
import AVTR4 from "../../assets/avatar4.jpg";

//import swiper core and required modules
import { Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

//import swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

/////////////////////////////////////

const data = [
  {
    avatar: AVTR1,
    name: "Tina Snow",
    review:
      "A distinguished and professional personality in work, with excellent communication skills and a great deal of respect for colleagues and clients alike ",
  },

  {
    avatar: AVTR2,
    name: "Shatta Wale",
    review:
      " Flexible and quick to adapt to any changes in tasks and projects.Dedicated and goes above and beyond to achieve goals and meet project needs. ",
  },

  {
    avatar: AVTR3,
    name: "Kwame Despite",
    review:
      "Works diligently with precision and focus in everything they do, making them a valuable addition to any team they work with.Possesses excellent communication skills and interacts well with clients and users, helping to improve the user experience and raise the level of service provided. ",
  },

  {
    avatar: AVTR4,
    name: "Nano Ama McBrown",
    review:
      "Has a positive mindset and motivates the team around them, helping to successfully accomplish tasks with their leadership qualities. Handles pressure with confidence and is able to deal with tight deadlines and difficult tasks efficiently. ",
  },
];

const Testimonials = () => {
  return (
    <section id="testimonials">
      <h5>Review From Clients</h5>
      <h2
        data-aos="zoom-in"
        data-aos-offset="200"
        data-aos-delay="50"
        data-aos-duration="1000"
        data-aos-easing="ease-in-out"
      >
        Testimoials
      </h2>

      <Swiper
        className="container testimonials__container"
        modules={[Pagination]}
        spaceBetween={40}
        slidesPerView={1}
        pagination={{ clickable: true }}
      >
        {data.map(({ avatar, name, review }, index) => {
          return (
            <SwiperSlide key={index} className="testimonials">
              <div
                className="clinet__avatar"
                data-aos="fade-left"
                data-aos-anchor="#example-anchor"
                data-aos-offset="500"
                data-aos-duration="500"
              >
                <img src={avatar} alt="AVTR1" />
              </div>
              <h5
                className="client__name"
                data-aos="fade-up"
                data-aos-anchor-placement="bottom-bottom"
              >
                {" "}
                {name}{" "}
              </h5>
              <small
                className="client__review"
                
              >
                {review}
              </small>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </section>
  );
};

export default Testimonials;
