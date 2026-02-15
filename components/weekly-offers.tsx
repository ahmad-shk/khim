import React from 'react'
import Image from 'next/image'

const WeeklyOffers = () => {
  return (
    <section className="weekly-offers bg-primary pt-36 py-20 text-white relative overflow-hidden -mt-10">
        <div className='ornament left'></div>
        <div className='ornament right'></div>

        <div className="container relative z-10">
            <div className="text-center mb-8">
                <div className="flex items-center justify-center gap-6">
                    {/* Decorative lines/clouds */}
                    <img src="assets/cloud-sm-left.svg" alt=""  />
                    <h2 className="text-4xl md:text-7xl font-light">
                        <span className="italic">OUR WEEKLY</span> <span className="font-normal">OFFERS</span>
                    </h2>
                    <img src="assets/cloud-sm.svg" alt="" />
                </div>
                <p className="text-2xl md:text-[40px] text-white font-light">Discover our special dishes of the week ...</p>
            </div>

            <div className="cards grid grid-cols-1 md:grid-cols-3 gap-6 relative">
                {/* Offer Card 1 */}
                <div className="bg-white text-primary p-5 rounded-4xl shadow-lg">
                    <div className="aspect-4/3 bg-gray-200 rounded-2xl mb-4 overflow-hidden relative">
                        <Image src="/assets/pro-img.png" alt="Spring Rolls" fill className="object-cover" />
                    </div>
                    <h3 className="font-normal text-2xl text-primary mb-1">Spring Rolls</h3>
                    <p className="text-xl font-light text-gray-800 leading-snug">
                        Crispy fried rolls filled with fresh vegetables and spices served with homemade sweet and sour sauce.
                    </p>
                </div>

                {/* Offer Card 2 */}
                <div className="bg-white text-primary p-5 rounded-4xl shadow-lg">
                    <div className="aspect-4/3 bg-gray-200 rounded-2xl mb-4 overflow-hidden relative">
                        <Image src="/assets/pro-img.png" alt="Spring Rolls" fill className="object-cover" />
                    </div>
                    <h3 className="font-normal text-2xl text-primary mb-1">Spring Rolls</h3>
                    <p className="text-xl font-light text-gray-800 leading-snug">
                        Crispy fried rolls filled with fresh vegetables and spices served with homemade sweet and sour sauce.
                    </p>
                </div>

                {/* Offer Card 3 */}
                <div className="bg-white text-primary p-5 rounded-4xl shadow-lg">
                    <div className="aspect-4/3 bg-gray-200 rounded-2xl mb-4 overflow-hidden relative">
                        <Image src="/assets/pro-img.png" alt="Spring Rolls" fill className="object-cover" />
                    </div>
                    <h3 className="font-normal text-2xl text-primary mb-1">Spring Rolls</h3>
                    <p className="text-xl font-light text-gray-800 leading-snug">
                        Crispy fried rolls filled with fresh vegetables and spices served with homemade sweet and sour sauce.
                    </p>
                </div>
            </div>

            <div className="flex justify-center gap-4 mt-12 text-secondary/50">
                {/* Arrows */}
                <span>
                    <svg width="128" height="45" viewBox="0 0 128 45" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M127.914 22.2072L1.41406 22.2071M1.41406 22.2071L22.9141 43.7071M1.41406 22.2071L22.9141 0.707144" stroke="white" stroke-width="2"/>
                    </svg>
                </span>
                <span>
                    <svg width="128" height="45" viewBox="0 0 128 45" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M0 22.2072H126.5M126.5 22.2072L105 0.707153M126.5 22.2072L105 43.7072" stroke="white" stroke-width="2"/>
                    </svg>
                </span>
            </div>
        </div>

        <div className='cloud left'></div>
        <div className='cloud right'></div>
    </section>
  )
}

export default WeeklyOffers
