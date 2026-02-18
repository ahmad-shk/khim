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
        <div className="dist-card">
            {/* Heart Icon */}
            <div className='body'>
                <div className='flex items-end gap-2 justify-between mb-[21px] logo-row'>
                    <div className='icon'>
                        <img
                            src={image}
                            alt={title}
                            className=""
                        />
                    </div>
                    <span className='mb-5'>
                        <svg width="33" height="27" viewBox="0 0 33 27" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M23.9053 0.000269897C28.8281 0.0242375 32.813 4.00906 32.837 8.93196C32.837 17.9511 16.4185 26.8828 16.4185 26.8828C16.4185 26.8828 0 17.8198 0 8.93196C0 3.99917 3.99881 0.000269897 8.93169 0.000269897C11.9513 -0.0232787 14.7743 1.49548 16.4185 4.02825C18.0741 1.5078 20.8898 -0.00702094 23.9053 0.000269897Z" fill="#D7443E" />
                        </svg>
                    </span>
                </div>
                {/* Content */}
                <div className="">
                    <h3 className="text-black text-xl sm:text-[25px] uppercase italic" style={{ lineHeight: '1.2' }}>
                        {title}
                    </h3>
                    <p className="text-black opacity-90 font-light uppercase italic mb-[5px] text-[15px]">(salmon, avocado and rice)</p>
                    <div className="flex gap-1 mb-1.5 text-[25px]">
                        {[...Array(5)].map((_, i) => (
                            <span key={i} className={i < rating ? "text-[#FEEC05]" : "text-gray-300"}>★</span>
                        ))}
                    </div>

                    <p className="text-black text-[25px] italic">€ {price}</p>
                </div>
            </div>
        </div>
    )
}

export default DishCard
