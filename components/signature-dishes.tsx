'use client'
import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation } from 'swiper/modules'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/navigation'

const dishes = [
  {
    title: "Roast duck fillet with mixed vegetables (ADFR)",
    image: "/assets/amb2.png"
  },
  {
    title: "Sesame Chicken (ADFN)",
    image: "/assets/amb3.png"
  },
  {
    title: "Hot Chili Beef (DFR)",
    image: "/assets/amb4.png"
  },
  {
    title: "Fried vegetables with glass noodles (F)",
    image: "/assets/amb5.png"
  },
  {
    title: "Chicken Chop Suey (D,F,R)",
    image: "/assets/amb6.png"
  },
  {
    title: "Eight treasures sharf (DFR)",
    image: "/assets/amb7.png"
  },
  {
    title: "Japanese katsu curry with crispy chicken fillet (AMNO)",
    image: "/assets/amb8.png"
  }
];

const SignatureDishes = () => {
   return (
      <div className='dish-slider'>
         <section className="bg-gray-circle overflow-hidden relative">
            <section className="py-16 sm:py-24">
               <div className="container relative z-10">
                  <div className="text-center mb-12 sm:mb-16">
                     <div className="section-title flex items-center justify-center gap-4 sm:gap-6 mb-4">
                        <img className='' src="/assets/cloud-sm-left.svg" alt="" />
                        <h2 className="text-3xl sm:text-4xl lg:text-5xl 3xl:text-7xl! font-light uppercase text-primary tracking-wide">
                           <span className="italic">Signature </span> <br className='md:hidden' /> <span className="font-normal">Gerichte</span>
                        </h2>
                        <img className='' src="/assets/cloud-sm.svg" alt="" />
                     </div>
                     <p className="text-2xl lg:text-3xl 3xl:text-[40px]! text-primary font-light md:px-0 px-10">
                        Delikat, schnell, günstig: Ihr Mittagsspeise-Menü für 12 €.
                     </p>
                  </div>

               </div>
               <div className="relative">
                  <Swiper
                     modules={[Navigation]}
                     spaceBetween={1}
                     slidesPerView={1}
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
                           1500: {
                              slidesPerView: 4,
                           }
                     }}
                     className="mySwiper !overflow-visible"
                  >
                     {dishes.map((dish, index) => (
                        <SwiperSlide key={index}>
                           <div className="aspect-[1/1] relative group/card overflow-hidden flex items-center justify-center text-center">
                              <img 
                                 className='absolute inset-0 w-full h-full object-cover transition-transform duration-300 group-hover/card:scale-120'
                                 src={dish.image} 
                                 alt={dish.title} 
                              />
                              <div className="absolute bg-gradient inset-0 flex flex-col items-center justify-center text-center p-6 transition-colors duration-300 group-hover/card:bg-black/40"></div>
                              <div className="relative z-1">
                                 <h3 className="text-[#EFD977] text-4xl font-normal leading-tight">
                                    {dish.title}
                                 </h3>
                              </div>
                           </div>
                        </SwiperSlide>
                     ))}
                  </Swiper>
               </div>

               {/* Navigation Arrows */}
               <div className="flex justify-center items-center gap-8 mt-12 sm:mt-16">
                  <button 
                     className="swiper-button-prev-custom transition-transform hover:scale-110 active:scale-95 cursor-pointer disabled:opacity-30"
                     aria-label="Previous slide"
                  >
                     <svg width="128" height="45" viewBox="0 0 128 45" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M127.914 22.207L1.41406 22.207M1.41406 22.207L22.9141 43.707M1.41406 22.207L22.9141 0.707022" stroke="#091C46" stroke-width="2"/>
                     </svg>
                  </button>
                  <button 
                     className="swiper-button-next-custom transition-transform hover:scale-110 active:scale-95 cursor-pointer disabled:opacity-30"
                     aria-label="Next slide"
                  >
                     <svg width="128" height="45" viewBox="0 0 128 45" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M0 22.207H126.5M126.5 22.207L105 0.707031M126.5 22.207L105 43.707" stroke="#091C46" stroke-width="2"/>
                     </svg>
                  </button>
               </div>
            </section>
         </section>
      </div>
   )
}

export default SignatureDishes
