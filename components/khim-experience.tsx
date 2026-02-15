import React from 'react'

const KhimExperience = () => {
  return (
    <section className="bg-primary py-24 relative overflow-hidden text-white">
      <div className="container relative z-10">
        <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-serif italic text-secondary mb-2">
                THE KHIM <span className="font-normal text-white">EXPERIENCE</span>
            </h2>
            <p className="text-gray-300">"What Defines Our Dining"</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-center">
            {/* Left Column */}
            <div className="flex flex-col gap-16 text-center lg:text-right">
                <div className="item">
                    <div className="w-12 h-12 bg-secondary/20 rounded-full mx-auto lg:ml-auto lg:mr-0 mb-4 flex items-center justify-center text-secondary">
                        {/* Icon placeholder */}
                        <span>♦</span>
                    </div>
                    <h3 className="text-secondary font-bold text-lg mb-2">Authentic Asian Cuisine</h3>
                    <p className="text-xs text-gray-400 max-w-[200px] mx-auto lg:mr-0 lg:ml-auto">
                        Traditional Asian flavors, prepared with balance and respect for culinary heritage.
                    </p>
                </div>

                <div className="item">
                    <div className="w-12 h-12 bg-secondary/20 rounded-full mx-auto lg:ml-auto lg:mr-0 mb-4 flex items-center justify-center text-secondary">
                        {/* Icon placeholder */}
                        <span>♦</span>
                    </div>
                    <h3 className="text-white font-bold text-lg mb-2">Fresh, Quality Ingredients</h3>
                    <p className="text-xs text-gray-400 max-w-[200px] mx-auto lg:mr-0 lg:ml-auto">
                        Carefully selected ingredients and spices for pure, consistent flavor.
                    </p>
                </div>
            </div>

            {/* Center Column - Logo Badge */}
            <div className="flex justify-center">
                <div className="w-64 h-64 lg:w-80 lg:h-80 border-2 border-secondary rounded-full flex items-center justify-center p-4 relative">
                    <div className="w-full h-full border border-secondary/50 rounded-full flex items-center justify-center bg-primary">
                        <div className="text-center">
                            {/* Logo placeholder */}
                             <div className="text-4xl text-secondary mb-2">Bowl Icon</div>
                             <h3 className="text-3xl font-serif font-bold tracking-widest text-secondary">KHIM</h3>
                             <p className="text-xs tracking-[0.3em] text-secondary">ASIAN</p>
                             <p className="text-[10px] tracking-widest text-secondary uppercase mt-1">Restaurant</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Right Column */}
            <div className="flex flex-col gap-16 text-center lg:text-left">
                <div className="item">
                    <div className="w-12 h-12 bg-secondary/20 rounded-full mx-auto lg:mr-auto lg:ml-0 mb-4 flex items-center justify-center text-secondary">
                         {/* Icon placeholder */}
                         <span>♦</span>
                    </div>
                    <h3 className="text-white font-bold text-lg mb-2">Thoughtful Preparation</h3>
                    <p className="text-xs text-gray-400 max-w-[200px] mx-auto lg:ml-0 lg:mr-auto">
                        Precise and care in every step, from technique to presentation.
                    </p>
                </div>

                <div className="item">
                    <div className="w-12 h-12 bg-secondary/20 rounded-full mx-auto lg:mr-auto lg:ml-0 mb-4 flex items-center justify-center text-secondary">
                         {/* Icon placeholder */}
                         <span>♦</span>
                    </div>
                    <h3 className="text-white font-bold text-lg mb-2">Refined Dining</h3>
                    <p className="text-xs text-gray-400 max-w-[200px] mx-auto lg:ml-0 lg:mr-auto">
                        A calm, elegant setting designed for relaxed and comfortable dining.
                    </p>
                </div>
            </div>
        </div>
      </div>
    </section>
  )
}

export default KhimExperience
