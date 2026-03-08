'use client'
import React, { useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation } from 'swiper/modules'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/navigation'

// 1. Interface definieren, um die TS-Fehler zu beheben
interface Dish {
  title: string;
  image: string;
  description: string;
  price: string;
  rating: number;
}

const dishes: Dish[] = [
  {
    title: "Roast duck fillet with mixed vegetables (ADFR)",
    image: "/assets/amb2.png",
    description: "Zartes Entenfilet serviert mit einer Auswahl an frischem Marktgemüse.",
    price: "12.00",
    rating: 5
  },
  {
    title: "Sesame Chicken (ADFN)",
    image: "/assets/amb3.png",
    description: "Knuspriges Hähnchen in einer süß-sauren Sesamsauce.",
    price: "12.00",
    rating: 4
  },
  {
    title: "Hot Chili Beef (DFR)",
    image: "/assets/amb4.png",
    description: "Scharf angebratenes Rindfleisch mit Chili und Paprika.",
    price: "12.00",
    rating: 5
  },
  {
    title: "Fried vegetables with glass noodles (F)",
    image: "/assets/amb5.png",
    description: "Leichte Glasnudeln mit knackigem Pfannengemüse.",
    price: "12.00",
    rating: 4
  },
  {
    title: "Chicken Chop Suey (D,F,R)",
    image: "/assets/amb9.jpeg",
    description: "Klassisches Chop Suey mit Hähnchen und Sprossen.",
    price: "12.00",
    rating: 5
  },
  {
    title: "Eight treasures sharf (DFR)",
    image: "/assets/amb7.png",
    description: "Traditionelles Gericht mit acht verschiedenen Kostbarkeiten.",
    price: "12.00",
    rating: 4
  },
  {
    title: "Japanese katsu curry with crispy chicken fillet (AMNO)",
    image: "/assets/amb8.png",
    description: "Knuspriges Katsu-Hähnchen in einer aromatischen Currysauce.",
    price: "12.00",
    rating: 5
  }
];

const SignatureDishes = () => {
   // 2. State mit dem Dish-Typ initialisieren
   const [selectedDish, setSelectedDish] = useState<Dish | null>(null);

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
                           prevEl: '.swiper-button-prev-custom-arrow',
                           nextEl: '.swiper-button-next-custom-arrow',
                     }}
                     breakpoints={{
                           640: { slidesPerView: 2 },
                           1024: { slidesPerView: 3 },
                           1500: { slidesPerView: 4 }
                     }}
                     /* Tailwind Fix: overflow-visible! statt !overflow-visible */
                     className="mySwiper overflow-visible!"
                  >
                     {dishes.map((dish, index) => (
                        <SwiperSlide key={index}>
                           <div 
                              onClick={() => setSelectedDish(dish)}
                              className="aspect-[1/0.9] relative group/card overflow-hidden flex items-end justify-center text-center p-8 cursor-pointer"
                           >
                              <div className="layer absolute bg-gradient inset-0 flex flex-col items-center justify-center text-center p-6 transition-colors duration-300 group-hover/card:bg-black/30"></div>
                              <img 
                                 className='absolute inset-0 w-full h-full object-cover transition-transform duration-300 group-hover/card:scale-120'
                                 src={dish.image} 
                                 alt={dish.title} 
                              />
                              <div className="relative z-1">
                                 <h3 className="text-[#EFD977] text-3xl font-normal leading-tight">
                                    {dish.title}
                                 </h3>
                              </div>
                           </div>
                        </SwiperSlide>
                     ))}
                  </Swiper>
               </div>

               <div className="flex justify-center items-center gap-8 mt-12 sm:mt-16">
                  <button className="swiper-button-prev-custom-arrow transition-transform hover:scale-110 active:scale-95 cursor-pointer disabled:opacity-30">
                     <svg width="128" height="45" viewBox="0 0 128 45" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M127.914 22.207L1.41406 22.207M1.41406 22.207L22.9141 43.707M1.41406 22.207L22.9141 0.707022" stroke="#091C46" strokeWidth="2"/>
                     </svg>
                  </button>
                  <button className="swiper-button-next-custom-arrow transition-transform hover:scale-110 active:scale-95 cursor-pointer disabled:opacity-30">
                     <svg width="128" height="45" viewBox="0 0 128 45" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M0 22.207H126.5M126.5 22.207L105 0.707031M126.5 22.207L105 43.707" stroke="#091C46" strokeWidth="2"/>
                     </svg>
                  </button>
               </div>
            </section>
         </section>

         {/* Popup/Modal */}
        {/* Popup/Modal */}
{selectedDish && (
  <div className="fixed inset-0 z-[999] flex items-center justify-center p-4">
    <div
      className="absolute inset-0 bg-black/80 backdrop-blur-sm"
      onClick={() => setSelectedDish(null)}
    ></div>

    <div className="bg-white w-full max-w-lg lg:max-w-5xl relative z-10 overflow-hidden rounded-lg shadow-2xl animate-in fade-in zoom-in duration-300">
      <button
        onClick={() => setSelectedDish(null)}
        className="absolute top-4 right-4 z-30 text-black/70 hover:text-black transition-colors cursor-pointer bg-white/50 rounded-full w-8 h-8 flex items-center justify-center"
      >
        <span className="text-xl">✕</span>
      </button>

      <div className="flex flex-col lg:flex-row">
        {/* IMAGE CONTAINER MIT FIXER HÖHE AUF MOBILE */}
        <div className="w-full lg:w-[40%] bg-[#fcfcfc] flex items-center justify-center p-5 border-b lg:border-b-0 lg:border-r border-gray-100 h-[250px] sm:h-[300px] lg:h-auto">
          <img
            src={selectedDish.image}
            alt={selectedDish.title}
            className="h-full w-full object-contain drop-shadow-xl rounded-xl"
            // object-contain sorgt dafür, dass das ganze Bild sichtbar bleibt, egal welches Format
          />
        </div>

        <div className="w-full lg:w-[60%] p-6 lg:p-12 flex flex-col justify-center bg-white text-left">
          <h3 className="text-black text-2xl lg:text-4xl uppercase italic font-light leading-tight mb-3">
            {selectedDish.title}
          </h3>
          <div className="flex items-center mb-4">
            <div className="flex gap-1 text-[#FEEC05] text-lg lg:text-xl">
              {[...Array(5)].map((_, i) => (
                <span key={i} className={i < selectedDish.rating ? "" : "text-gray-200"}>
                  ★
                </span>
              ))}
            </div>
          </div>
          {/* Falls du die Beschreibung auch anzeigen willst, ist sie hier sicher aufgehoben */}
          {/* <p className="text-gray-600 font-light">{selectedDish.description}</p> */}
        </div>
      </div>
    </div>
  </div>
)}
      </div>
   )
}

export default SignatureDishes