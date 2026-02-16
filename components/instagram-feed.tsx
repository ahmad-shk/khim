import Link from 'next/link'
import React from 'react'

const InstagramFeed = () => {
    return (
        <section className="instagram-feed py-20 bg-white text-center bg-gray-circle">
            <div className="container">
                <h2 className="text-3xl md:text-[62px] text-primary font-serif mb-4">
                    FOLLOW <span className="italic" style={{ fontWeight: '100' }}>@khim.asia.cuisine</span>
                </h2>
                <p className="text-2xl md:text-[40px] text-primary font-light mb-[48px] w-11/12 mx-auto">
                    Join us on Instagram for insights into our cuisine, new dishes and exclusive offers.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
                    <div className="aspect-1/1 bg-gray-200 rounded-xl overflow-hidden relative group">
                        <div className="w-full h-full flex items-center justify-center text-gray-500 group-hover:bg-gray-300 transition-colors">
                            Instagram Post 1
                        </div>
                    </div>
                    <div className="aspect-1/1 bg-gray-200 rounded-xl overflow-hidden relative group">
                        <div className="w-full h-full flex items-center justify-center text-gray-500 group-hover:bg-gray-300 transition-colors">
                            Instagram Post 2
                        </div>
                    </div>
                    <div className="aspect-1/1 bg-gray-200 rounded-xl overflow-hidden relative group">
                        <div className="w-full h-full flex items-center justify-center text-gray-500 group-hover:bg-gray-300 transition-colors">
                            Instagram Post 3
                        </div>
                    </div>
                </div>

                <Link
                    href="#"
                    className="inline-block bg-primary text-white text-[20px] uppercase tracking-widest px-8 py-[14px] rounded-full hover:bg-opacity-90 transition-colors italic"
                >
                    Explore the Feed
                </Link>
            </div>
        </section>
    )
}

export default InstagramFeed
