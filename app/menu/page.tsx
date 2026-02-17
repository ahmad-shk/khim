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
        <div className="bg-[#f8f9fb]">
            <div className="bg-primary h-32 relative overflow-hidden">
                <Header />
            </div>

            <main>
                {/* Hero Section */}
                <section className="inner-page--header">
                    {/* Lanterns */}
                    <div className='ornament left'></div>
                    <div className='ornament right'></div>

                    <div className="container mx-auto px-4 relative z-10 text-center">
                        <div className="flex items-center justify-center gap-4 mb-7">
                            <img src="/assets/cloud-sm-left.svg" className="" alt="" />
                            <h1 className="text-4xl md:text-[62px] text-white font-light tracking-wide uppercase">
                                <span className="italic">Discover</span> <span className="font-normal">Our Dishes!</span>
                            </h1>
                            <img src="/assets/cloud-sm.svg" className="" alt="" />
                        </div>
                        <p className="text-white text-[30px] w-10/12 mx-auto">
                            Experience the diversity of Asia – with lovingly prepared dishes, fresh ingredients and authentic tastes.
                        </p>
                    </div>

                </section>

                {/* Filter & Grid Section */}
                <section className='signature-wrapper'>
                    <section className='bg-gray-circle overflow-hidden relative'>
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

                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
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

                            <div className="flex justify-center mt-12">
                                <button className="btn btn-primary">
                                    Explore More
                                </button>
                            </div>


                            <div className="mt-[100px]">
                                <div className="mb-12">
                                    <h2 className="text-[62px] italic text-primary uppercase font-light">
                                        Appetizer
                                    </h2>
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    {Array(10).fill(0).map((_, i) => (
                                        <div key={i} className="dish-card-lg">
                                            <div className="icon">
                                                <img src="/assets/pro-img.png" className="w-full h-full object-contain" alt="" />
                                            </div>
                                            <div className="text-primary">
                                                <h4 className="text-[26px]">A10. SALMON TARTAR DFMN</h4>
                                                <p className="text-[15px] font-light uppercase italic">
                                                    Salmon | Onion | Garlic
                                                </p>
                                                <span className="text-[40px]">€ 10,00</span>
                                            </div>
                                        </div>
                                    ))}
                                </div>

                                <div className="flex justify-center mt-16 mb-[100px]">
                                    <button className="btn btn-primary">
                                        Explore More
                                    </button>
                                </div>
                            </div>

                        </section>
                    </section>
                </section>


            </main>
            <Footer />
        </div>
    )
}

export default MenuPage
