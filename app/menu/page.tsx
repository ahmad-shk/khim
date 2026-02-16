import React from 'react'
import Header from '@/components/header'
import Footer from '@/components/footer'
import DishCard from '@/components/dish-card'

const MenuPage = () => {
    const categories = [
        "All", "Appetizer", "Soup", "Roll", "Dim Sum", "Maki",
        "Main Course", "Rice & Noodles", "Bento", "Drinks", "Dessert"
    ];

    const dishes = Array(12).fill({
        title: "A10. SALMON TARTAR DFMN",
        price: "10,00",
        image: "/assets/pro-img.png",
        rating: 5
    });

    return (
        <div className="bg-[#f8f9fb]">
            {/* Nav with background for internal pages */}
            <div className="bg-primary h-32 relative overflow-hidden">
                <Header />
            </div>

            <main>
                {/* Hero Section */}
                <section className="bg-primary pt-24 pb-32 text-center relative overflow-hidden">
                    {/* Lanterns */}
                    <img src="/assets/ornament-sm.svg" className="absolute left-10 top-0 h-48 opacity-50" alt="" />
                    <img src="/assets/ornament-sm.svg" className="absolute right-10 top-0 h-48 opacity-50" alt="" />

                    <div className="container mx-auto px-4 relative z-10">
                        <div className="flex items-center justify-center gap-4 mb-4">
                            <img src="/assets/cloud-sm-left.svg" className="w-12 h-6" alt="" />
                            <h1 className="text-4xl md:text-7xl text-white font-serif italic tracking-wide uppercase">
                                <span className="font-light">Discover</span> <span className="font-bold">Our Dishes!</span>
                            </h1>
                            <img src="/assets/cloud-sm.svg" className="w-12 h-6" alt="" />
                        </div>
                        <p className="text-white/80 text-lg md:text-xl font-light italic max-w-2xl mx-auto">
                            Experience the diversity of Asia – with lovingly prepared dishes, fresh ingredients and authentic tastes.
                        </p>
                    </div>

                    {/* Scalloped edge effect */}
                    <div className="absolute bottom-0 left-0 w-full h-12 bg-[#f8f9fb] rounded-t-[50%] scale-x-[1.2]"></div>
                </section>

                {/* Filter & Grid Section */}
                <section className="container mx-auto px-4 -mt-20 relative z-20 pb-20">
                    <div className="flex flex-wrap justify-center gap-3 mb-16">
                        {categories.map((cat, i) => (
                            <button
                                key={cat}
                                className={`px-6 py-2 rounded-full text-sm font-medium uppercase tracking-wider transition-all
                                    ${i === 0 ? 'bg-primary text-white' : 'bg-white text-primary border border-primary/10 hover:bg-primary/5'}`}
                            >
                                {cat}
                            </button>
                        ))}
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
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
                        <button className="bg-primary text-white px-10 py-3 rounded-full text-sm font-bold uppercase tracking-[0.2em] hover:bg-primary/90 transition-all">
                            Explore More
                        </button>
                    </div>
                </section>

                {/* Detailed List Section */}
                <section className="bg-white py-24 relative overflow-hidden border-t border-primary/5">
                    {/* Decorative Background Pattern */}
                    <div className="absolute inset-0 opacity-5 pointer-events-none">
                        <img src="/assets/gray-circle-bg.png" className="w-full h-full object-cover" alt="" />
                    </div>

                    <div className="container mx-auto px-4 relative z-10">
                        <div className="mb-12">
                            <h2 className="text-4xl italic text-primary font-serif uppercase tracking-widest">
                                Appetizer
                            </h2>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-20 gap-y-8">
                            {Array(10).fill(0).map((_, i) => (
                                <div key={i} className="flex items-center gap-6 group cursor-pointer border-b border-primary/5 pb-6">
                                    <div className="w-20 h-20 rounded-2xl overflow-hidden bg-primary/5 p-2 flex-shrink-0">
                                        <img src="/assets/pro-img.png" className="w-full h-full object-contain" alt="" />
                                    </div>
                                    <div className="flex-grow">
                                        <div className="flex items-center justify-between mb-1">
                                            <h4 className="text-primary font-bold text-lg">A10. SALMON TARTAR DFMN</h4>
                                            <span className="text-primary font-bold">€ 10,00</span>
                                        </div>
                                        <p className="text-primary/60 text-sm font-light uppercase tracking-wider">
                                            Salmon | Onion | Garlic
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>

                        <div className="flex justify-center mt-16">
                            <button className="bg-primary text-white px-10 py-3 rounded-full text-sm font-bold uppercase tracking-[0.2em] hover:bg-primary/90 transition-all">
                                Explore More
                            </button>
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </div>
    )
}

export default MenuPage
