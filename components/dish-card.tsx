import React from 'react'

interface DishCardProps {
    id: string;
    title: string;
    description?: string;
    price: string;
    image: string;
    rating: number;
}

const DishCard = ({ title, price, image, rating }: DishCardProps) => {
    return (
        <div className="bg-white rounded-[2rem] p-4 shadow-sm relative group overflow-hidden">
            {/* Heart Icon */}
            <button className="absolute right-4 top-4 z-10 text-red-500 bg-white/80 p-2 rounded-full shadow-sm">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" /></svg>
            </button>

            {/* Dish Image */}
            <div className="relative aspect-square mb-6">
                <div className="absolute inset-0 bg-black/5 rounded-full scale-110 -z-10 group-hover:scale-125 transition-transform duration-500"></div>
                <img
                    src={image}
                    alt={title}
                    className="w-full h-full object-contain drop-shadow-2xl group-hover:scale-110 transition-transform duration-500"
                />
            </div>

            {/* Content */}
            <div className="text-center">
                <h3 className="text-primary font-medium text-lg leading-tight mb-2 uppercase tracking-wide px-2">
                    {title}
                </h3>

                <div className="flex justify-center mb-2">
                    {[...Array(5)].map((_, i) => (
                        <span key={i} className={i < rating ? "text-yellow-400" : "text-gray-300"}>★</span>
                    ))}
                </div>

                <p className="text-primary font-bold text-xl">€ {price}</p>
            </div>
        </div>
    )
}

export default DishCard
