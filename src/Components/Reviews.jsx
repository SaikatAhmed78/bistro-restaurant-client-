import React, { useEffect, useState } from 'react';
import SectionTitle from '../Common/SectionTitle';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import '@smastrom/react-rating/style.css';
import { Rating } from '@smastrom/react-rating';
import { FaQuoteRight } from 'react-icons/fa';

const Reviews = () => {
    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/review')
            .then(res => res.json())
            .then(data => {
                setReviews(data);
            });
    }, []);

    return (
        <section className='my-24'>
            <SectionTitle
                subHeading="---What Our Clients Say---"
                heading="TESTIMONIALS"
            />

            <Swiper
                navigation={true}
                modules={[Navigation]}
                className="mySwiper"
                slidesPerView={1}
                spaceBetween={30}
                breakpoints={{
                    640: { slidesPerView: 1 },
                    768: { slidesPerView: 2 },
                    1024: { slidesPerView: 3 },
                }}
            >
                {reviews.map(review => (
                    <SwiperSlide key={review._id}>
                        <div className='bg-white p-8 rounded-xl shadow-lg text-center flex flex-col items-center transform transition-all duration-300 hover:scale-105 hover:shadow-2xl'>
                            <div className='mb-4'>
                                <Rating
                                    style={{ maxWidth: 180 }}
                                    value={review.rating}
                                    readOnly
                                />
                            </div>
                            <FaQuoteRight className='text-4xl text-gray-300 mb-4' />
                            <p className='text-gray-600 italic mb-4'>
                                "{review.details}"
                            </p>
                            <h3 className='text-2xl font-semibold text-orange-500'>{review.name}</h3>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </section>
    );
};

export default Reviews;
