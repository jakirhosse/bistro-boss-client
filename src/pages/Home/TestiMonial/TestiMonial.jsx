import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import { Rating } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";
import SecctionTitle from "../../../componetes/SecctionTitle/SecctionTitle";

const TestiMonial = () => {
  const [testimonials, setTestimonials] = useState([]);

  useEffect(() => {
    fetch("https://bistro-boss-server-five-coral.vercel.app/reviews")
      .then((res) => res.json())
      .then((data) => setTestimonials(data));
  }, []);

  return (
    <>
      <section>
       <SecctionTitle  Heading={'What Our Client Say'}
                    subHeading={'testimonials'}>
       </SecctionTitle>
      </section>
      <section>
        <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
          {testimonials?.map((testimonial) => (
            <SwiperSlide key={testimonial._id}>
              <div className="flex flex-col items-center mx-20 my-20">
                <Rating
                  style={{ maxWidth: 180 }}
                  value={testimonial.rating}
                  readOnly
                />
                <p className="italic">{testimonial.details}</p>
                <p className="text-yellow-500 text-xl italic">{testimonial.name}</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </section>
    </>
  );
};
export default TestiMonial;
