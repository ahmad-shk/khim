'use client'

import React from 'react'
import Image from 'next/image'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';

const WeeklyOffers = () => {
    return (
        <section className="weekly-offers bg-primary pt-36 py-20 text-white relative overflow-hidden -mt-15">
            <div className='ornament left'></div>
            <div className='ornament right'></div>

            <div className="container relative z-10">
                <div className="section-title text-center mb-8">
                    <div className="flex items-center justify-center gap-6">
                        {/* Decorative lines/clouds */}
                        <img src="assets/cloud-sm-left.svg" alt="" />
                        <h2 className="text-3xl sm:text-4xl lg:text-5xl 3xl:text-7xl! font-light">
                            <span className="italic">UNSERE WÖCHENTLICHE</span> <span className="font-normal">ANGEBOTE</span>
                        </h2>
                        <img src="assets/cloud-sm.svg" alt="" />
                    </div>
                    <p className="text-xl sm:text-2xl lg:text-3xl 3xl:text-[40px]! text-white font-light md:mt-0 mt-5">Entdecken Sie unsere wöchentlichen Spezialitäten ...</p>
                </div>

                <div className="cards relative">
                    <Swiper
                        modules={[Navigation]}
                        spaceBetween={20}
                        slidesPerView={2}
                        navigation={{
                            prevEl: '.swiper-button-prev-custom',
                            nextEl: '.swiper-button-next-custom',
                        }}
                        breakpoints={{
                            640: {
                                slidesPerView: 2,
                            },
                            1024: {
                                slidesPerView: 3,
                            },
                        }}
                        className="mySwiper"
                    >
                        {/* Offer Card 1 */}
                        <SwiperSlide>
                            <div className="bg-white text-primary md:p-5 p-3 md:rounded-4xl rounded-xl shadow-lg h-full">
                                <div className="aspect-4/3 bg-gray-200 rounded-2xl mb-4 overflow-hidden relative">
                                    <Image src="/assets/pro-img.png" alt="Spring Rolls" fill className="object-cover" />
                                </div>
                                <h3 className="font-normal text-xl md:text-2xl text-primary mb-1">Spring Rolls</h3>
                                <p className="text-sm md:text-xl font-light text-gray-800 leading-snug">
                                    Crispy fried spring rolls filled with fresh vegetables and delicate spices. Served with a homemade sweet and sour sauce for the perfect flavor.
                                </p>
                            </div>
                        </SwiperSlide>

                        {/* Offer Card 2 */}
                        <SwiperSlide>
                            <div className="bg-white text-primary md:p-5 p-3 md:rounded-4xl rounded-xl shadow-lg h-full">
                                <div className="aspect-4/3 bg-gray-200 rounded-2xl mb-4 overflow-hidden relative">
                                    <Image src="/Khim_item_images/82.png" alt="Spring Rolls" fill className="object-cover" />
                                </div>
                                <h3 className="font-normal text-xl md:text-2xl text-primary mb-1">Chicken satay</h3>
                                <p className="text-sm md:text-xl font-light text-gray-800 leading-snug">
                                    Tenderly grilled chicken skewers with a creamy peanut sauce. Served with fresh coriander and a light lime dip for an authentic flavor.                                </p>
                            </div>
                        </SwiperSlide>

                        {/* Offer Card 3 */}
                        <SwiperSlide>
                            <div className="bg-white text-primary md:p-5 p-3 md:rounded-4xl rounded-xl shadow-lg h-full">
                                <div className="aspect-4/3 bg-gray-200 rounded-2xl mb-4 overflow-hidden relative">
                                    <Image src="/Khim_item_images/83.png" alt="Spring Rolls" fill className="object-cover" />
                                </div>
                                <h3 className="font-normal text-xl md:text-2xl text-primary mb-1">Appetizers</h3>
                                <p className="text-sm md:text-xl font-light text-gray-800 leading-snug">
                                    A fine selection of mini spring rolls, dumplings, and crispy vegetable pastries. Perfect for sharing or as a delicious starter to your meal.
                                </p>
                            </div>
                        </SwiperSlide>

                         {/* Offer Card 4 */}
                         <SwiperSlide>
                            <div className="bg-white text-primary md:p-5 p-3 md:rounded-4xl rounded-xl shadow-lg h-full">
                                <div className="aspect-4/3 bg-gray-200 rounded-2xl mb-4 overflow-hidden relative">
                                    <Image src="/Khim_item_images/84.png" alt="Chicken Wings" fill className="object-cover" />
                                </div>
                                <h3 className="font-normal text-xl md:text-2xl text-primary mb-1">Chicken wings</h3>
                                <p className="text-sm md:text-xl font-light text-gray-800 leading-snug">
                                    Crispy baked chicken wings with a spicy glaze and a subtle hint of chili. Ideal for lovers of bold flavor and tender texture.
                                </p>
                            </div>
                        </SwiperSlide>

                    </Swiper>
                </div>

                <div className="slider-arrows flex justify-center gap-4 mt-12 text-secondary/50">
                    {/* Arrows */}
                    <button className="swiper-button-prev-custom cursor-pointer transition-colors hover:text-white">
                        <svg width="128" height="45" viewBox="0 0 128 45" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M127.914 22.2072L1.41406 22.2071M1.41406 22.2071L22.9141 43.7071M1.41406 22.2071L22.9141 0.707144" stroke="currentColor" strokeWidth="2" />
                        </svg>
                    </button>
                    <button className="swiper-button-next-custom cursor-pointer transition-colors hover:text-white">
                        <svg width="128" height="45" viewBox="0 0 128 45" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M0 22.2072H126.5M126.5 22.2072L105 0.707153M126.5 22.2072L105 43.7072" stroke="currentColor" strokeWidth="2" />
                        </svg>
                    </button>
                </div>
            </div>

            <div className='cloud left'></div>
            <div className='cloud right'></div>
        </section>
    )
}

export default WeeklyOffers
