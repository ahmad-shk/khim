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
                <h2 className="text-3xl sm:text-4xl lg:text-5xl 3xl:text-7xl! text-primary font-serif mb-6">
                   FOLGEN SIE <br className='md:hidden' /> 
                    <Link href="https://www.instagram.com/khim.asia.cuisine.restaurant?igsh=Mmc4bzF2cW03Z3R6" target="_blank" className="italic font-extralight hover:opacity-80 transition-opacity">
                        @khim.asia.cuisine
                    </Link>
                </h2>
                <p className="text-2xl 3xl:text-[45px]! text-primary font-light mb-16 mx-auto md:px-0 px-10">
                    Besuchen Sie uns auf Instagram für Einblicke in unsere Küche, neue Gerichte und exklusive Angebote.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
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
  href="https://www.instagram.com/khim.asia.cuisine"
  target="_blank"
  className="btn btn-primary"
>
  Zum Feed
</Link>
            </div>

            <div className='cloud'>
                <img src="assets/cloud-img.svg" alt="" />
            </div>
        </section>
    )
}

export default InstagramFeed
