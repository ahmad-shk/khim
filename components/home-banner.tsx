import Link from 'next/link'
import React from 'react'

const HomeBanner = () => {
    return (
        <div className='home-banner'>
            <div className='image relative'>
                <img src="assets/banner-img.png" alt="Banner" />
            </div>
            <div className='caption'>
                <div className='container'>
                    <h2 className='text-secondary text-3xl italic uppercase'>welcome TO</h2>
                    <h1 className='text-[118px] text-white italic leading-none' >KHIM <br /> ASIAN RESTAURANT</h1>
                    <Link href="#" className='mt-20 inline-block'>
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