import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';

import slide1 from '../../src/assets/home/slide1.jpg';
import slide2 from '../../src/assets/home/slide2.jpg';
import slide3 from '../../src/assets/home/slide3.jpg';
import slide4 from '../../src/assets/home/slide4.jpg';
import slide5 from '../../src/assets/home/slide5.jpg';

const Category = () => {
    return (
        <div className="my-16 px-5">
            <h2 className="text-4xl font-bold text-center mb-8 text-gray-800">Our Categories</h2>
            <Swiper
                slidesPerView={1}
                spaceBetween={20}
                centeredSlides={true}
                pagination={{
                    clickable: true,
                }}
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
                modules={[Pagination]}
                className="mySwiper"
            >
                <SwiperSlide>
                    <div className="relative rounded-lg overflow-hidden shadow-xl transition-transform duration-300 hover:scale-105">
                        <img src={slide1} className="w-full h-full object-cover"/>
                        <div className="absolute bottom-4 left-4 text-white text-xl font-bold bg-black bg-opacity-50 p-3 rounded">
                           SALADS
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="relative rounded-lg overflow-hidden shadow-xl transition-transform duration-300 hover:scale-105">
                        <img src={slide2} className="w-full h-full object-cover"/>
                        <div className="absolute bottom-4 left-4 text-white text-xl font-bold bg-black bg-opacity-50 p-3 rounded">
                           SOUPS
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="relative rounded-lg overflow-hidden shadow-xl transition-transform duration-300 hover:scale-105">
                        <img src={slide3}  className="w-full h-full object-cover"/>
                        <div className="absolute bottom-4 left-4 text-white text-xl font-bold bg-black bg-opacity-50 p-3 rounded">
                            PIZZAS
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="relative rounded-lg overflow-hidden shadow-xl transition-transform duration-300 hover:scale-105">
                        <img src={slide4} className="w-full h-full object-cover"/>
                        <div className="absolute bottom-4 left-4 text-white text-xl font-bold bg-black bg-opacity-50 p-3 rounded">
                          DESSERTS
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="relative rounded-lg overflow-hidden shadow-xl transition-transform duration-300 hover:scale-105">
                        <img src={slide5}  className="w-full h-full object-cover"/>
                        <div className="absolute bottom-4 left-4 text-white text-xl font-bold bg-black bg-opacity-50 p-3 rounded">
                            VEGITABLE
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>
        </div>
    );
};

export default Category;
