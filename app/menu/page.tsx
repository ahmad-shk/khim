'use client';

import React, { useState } from 'react'
import Header from '@/components/header'
import Footer from '@/components/footer'
import DishCard from '@/components/dish-card'

const MenuPage = () => {
    const categories = [
        "All", "Appetizer", "Soup", "Roll", "Dim Sum", "Maki",
        "Main Course", "Rice & Noodles", "Bento", "Drinks", "Dessert"
    ];

    const [activeIndex, setActiveIndex] = useState(0);

    const dishes = Array(12).fill({
        title: "A10. SALMON TARTAR DFMN",
        price: "10,00",
        image: "/assets/pro-img.png",
        rating: 5
    });

    return (
        <div className="bg-gray-circle">
            <main className='inner-page'>
                {/* Hero Section */}
                <section className="inner-page--header min-h-[675px]">
                    {/* Lanterns */}
                    <div className='ornament left'></div>
                    <div className='ornament right'></div>

                    <div className="container mx-auto px-4 relative z-10 text-center">
                        <div className="text-center 2xl:mt-16">
                            <div className="section-title flex items-center justify-center gap-6">
                                <img className='' src="assets/cloud-sm-left.svg" alt="" />
                                <h2 className="text-3xl sm:text-4xl lg:text-5xl 3xl:text-7xl! font-light uppercase tracking-tight text-white">
                                <span className="italic">Discover </span> <span className="font-normal">our dishes!</span>
                                </h2>
                                <img className='' src="assets/cloud-sm.svg" alt="" />
                            </div>
                            <p className="text-xl sm:text-2xl lg:text-3xl 3xl:text-[35px]! text-white font-light mt-5">Experience the diversity of Asia – with lovingly prepared dishes,<br/> fresh ingredients and authentic tastes.</p>
                        </div>
                    </div>

                </section>

                {/* Filter & Grid Section */}
                <section className='signature-wrapper overflow-hidden relative'>
                    <div className='ornament left'></div>
                    <div className='ornament right'></div>

                    <section className="container mx-auto relative z-10">
                        <div className="tab-holder flex flex-wrap justify-center mb-[40px] mt-[80px]">
                            {categories.map((cat, i) => (
                                <button
                                    key={cat}
                                    onClick={() => setActiveIndex(i)}
                                    className={`btn ${activeIndex === i ? "active" : ""}`}
                                >
                                    {cat}
                                </button>
                            ))}
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 gap-y-0">
                            {dishes.map((dish, idx) => (
                                <DishCard
                                    key={idx}
                                    id={`dish-${idx}`}
                                    title={dish.title}
                                    price={dish.price}
                                    image={dish.image}
                                    rating={dish.rating}
                                />
                            ))}
                        </div>

                        <div className="flex justify-center mt-20">
                            <button className="btn btn-primary lg">
                                Explore More
                            </button>
                        </div>


                        <div className="mt-[100px]">
                            <div className="mb-16">
                                <h2 className="text-3xl sm:text-4xl lg:text-5xl 3xl:text-7xl! italic text-primary uppercase font-light">
                                    Appetizer
                                </h2>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                {Array(10).fill(0).map((_, i) => (
                                    <div key={i} className="dish-card-lg">
                                        <div className="icon">
                                            <img src="/assets/pro-img.png" className="w-full h-full object-contain rounded-2xl" alt="" />
                                        </div>
                                        <div className="text-primary">
                                            <h4 className="text-xl sm:text-2xl 3xl:text-[30px]">A10. SALMON TARTAR DFMN</h4>
                                            <p className="text-[15px] font-light uppercase italic">
                                                Salmon | Onion | Garlic
                                            </p>
                                            <span className="text-2xl sm:text-3xl 3xl:text-[45px]">€ 10,00</span>
                                        </div>
                                    </div>
                                ))}
                            </div>

                            <div className="flex justify-center mt-12 sm:mt-24 mb-16 sm:mb-[135px]">
                                <button className="btn btn-primary lg">
                                    Explore More
                                </button>
                            </div>
                        </div>

                    </section>
                </section>


            </main>
            <Footer />
        </div>
    )
}

export default MenuPage
