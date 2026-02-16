import Link from 'next/link'
import React from 'react'

const InstagramFeed = () => {
    return (
        <section className="instagram-feed pt-24 pb-32 bg-white text-center bg-gray-circle relative overflow-hidden ">
            <div className='ornament left'>
                <img src="assets/ornament-lg.svg" alt='' />
            </div>
            <div className='ornament right'>
                <img src="assets/ornament-sm.svg" alt='' />
            </div>

            <div className="container">
                <h2 className="text-3xl md:text-7xl text-primary font-serif mb-6">
                    FOLLOW <span className="italic font-extralight">@khim.asia.cuisine</span>
                </h2>
                <p className="text-2xl md:text-[45px] text-primary font-light mb-16 mx-auto">
                    Join us on Instagram for insights into our cuisine, new dishes and exclusive offers.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
                    <div className="bg-gray-200 rounded-3xl overflow-hidden relative group">
                        <div className='image'>
                            <img src="assets/social-media-img.png" alt=''/>
                        </div>
                    </div>
                    <div className="bg-gray-200 rounded-3xl overflow-hidden relative group">
                        <div className='image'>
                            <img src="assets/social-media-img.png" alt=''/>
                        </div>
                    </div>
                    <div className="bg-gray-200 rounded-3xl overflow-hidden relative group">
                        <div className='image'>
                            <img src="assets/social-media-img.png" alt=''/>
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

            <div className='cloud'>
                <img src="assets/cloud-img.svg" alt="" />
            </div>
        </section>
    )
}

export default InstagramFeed
