import Link from 'next/link'
import React from 'react'

const Header = () => {
    return (
        <header className='page-header bg-primary text-white z-1'>
            <div className='inner relative'>
                <div className="container">
                    <div className="flex items-center justify-between">
                        <nav>
                            <ul className='flex gap-10'>
                                <li><Link href="/" className='uppercase text-xl hover:text-secondary transition-colors'>Home</Link></li>
                                <li><Link href="/menu" className='uppercase text-xl hover:text-secondary transition-colors'>Menu</Link></li>
                                <li><Link href="/contact" className='uppercase text-xl hover:text-secondary transition-colors'>Contact</Link></li>
                            </ul>
                        </nav>
                        <div className="logo bg-white rounded-b-3xl p-9 pt-6 -mb-20 relative z-1">
                            <img src="/assets/logo.svg" alt="Logo" />
                        </div>
                        <div className="contact-info text-end">
                            <p className='gradient-text text-xl'>Order Online Now</p>
                            <h4 className='text-3xl font-normal' >+43 677 6317 8906</h4>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header