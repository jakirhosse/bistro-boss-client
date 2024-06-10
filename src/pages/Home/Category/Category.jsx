import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { FreeMode, Pagination } from 'swiper/modules';


import slider from '../../../assets/assets/home/slide1.jpg'
import slider2 from '../../../assets/assets/home/slide2.jpg'
import slider3 from '../../../assets/assets/home/slide3.jpg'
import slider4 from '../../../assets/assets/home/slide4.jpg'
import slider5 from '../../../assets/assets/home/slide5.jpg'
import SecctionTitle from '../../../componetes/SecctionTitle/SecctionTitle';

const Category = () => {
        return (
                <section>
                       <SecctionTitle 
                        heading={"10:00 pm to 8:00am"}
                        Setheading={"order online"}
                       ></SecctionTitle>
                        <Swiper
        slidesPerView={3}
        spaceBetween={30}
        freeMode={true}
        pagination={{
          clickable: true,
        }}
        modules={[FreeMode, Pagination]}
        className="mySwiper mt-20 mb-10"
      >
        
        <SwiperSlide className='gap-20'>
           <img src={slider} alt="" />
           <p className='text-4xl uppercase text-center -mt-16 text-white'>salad</p>
        </SwiperSlide>
        <SwiperSlide>
  <img src={slider2} alt="" />
  <p className='text-4xl uppercase text-center -mt-16 text-white'>pizza</p>
        </SwiperSlide>
        <SwiperSlide>
     <img src={slider3} alt="" />
     <p className='text-4xl uppercase text-center -mt-16 text-white'>Bugger</p>
        </SwiperSlide>
        <SwiperSlide>
         <img src={slider4} alt="" />
         <p className='text-4xl uppercase text-center -mt-16 text-white'>pizza</p>
        </SwiperSlide>
        <SwiperSlide>
     <img src={slider5} alt="" />
     <p className='text-4xl uppercase text-center -mt-16 text-white'>salad</p>
        </SwiperSlide>
      </Swiper>
 </section>

        );
};

export default Category;