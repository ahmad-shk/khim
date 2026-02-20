import Link from 'next/link'
import React from 'react'

const HomeBanner = () => {
    return (
        <div className='home-banner relative overflow-hidden'>
            <div className='image relative'>
                <img src="assets/banner-img.png" alt="Banner" />
            </div>
            <div className='caption'>
                <div className='container'>
                    <h2 className='text-secondary lg:text-3xl text-2xl md:mb-0 mb-5 italic uppercase'>welcome TO</h2>
                    <h1 className='text-5xl lg:text-7xl 3xl:text-[118px]! text-white italic leading-none' >KHIM <br /> ASIAN <br className='md:hidden' /> RESTAURANT</h1>
                    <Link href="#" className='mt-8 3xl:mt-20 inline-block'>
                        <svg width="128" height="45" viewBox="0 0 128 45" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M0 22.2071H126.5M126.5 22.2071L105 0.707092M126.5 22.2071L105 43.7071" stroke="white" strokeWidth="2" />
                        </svg>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default HomeBanner