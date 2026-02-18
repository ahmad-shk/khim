'use client'

import { useState } from 'react'
import { MenuIcon, X } from 'lucide-react'
import Link from 'next/link'

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false)

    return (
        <header className='page-header bg-primary text-white z-50 relative'>
            <div className='inner relative'>
                <div className="container">
                    <div className="flex items-center justify-center md:justify-between">
                        {/* Mobile Menu Button */}
                        <button 
                            className="md:hidden z-50 text-white absolute top-7 left-4"
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                        >
                            {isMenuOpen ? <X size={32} /> : <MenuIcon size={32} />}
                        </button>

                        {/* Desktop Navigation */}
                        <nav className='hidden md:block navigation'>
                            <ul className='flex gap-10'>
                                <li><Link href="/" className='uppercase text-base 3xl:text-xl! hover:text-secondary transition-colors'>Home</Link></li>
                                <li><Link href="/menu" className='uppercase text-base 3xl:text-xl! hover:text-secondary transition-colors'>Menu</Link></li>
                                <li><Link href="/contact" className='uppercase text-base 3xl:text-xl! hover:text-secondary transition-colors'>Contact</Link></li>
                            </ul>
                        </nav>

                        {/* Mobile Navigation Overlay */}
                        <div className={`
                            fixed inset-0 bg-primary/95 backdrop-blur-sm z-50 flex items-center justify-center transition-transform duration-300 md:hidden
                            ${isMenuOpen ? 'translate-x-0' : '-translate-x-full'}
                        `}>
                            <button 
                                className="md:hidden z-50 text-white absolute top-7 left-4"
                                onClick={() => setIsMenuOpen(!isMenuOpen)}
                            >
                                {isMenuOpen ? <X size={32} /> : <MenuIcon size={32} />}
                            </button>
                            <nav className='text-center'>
                                <ul className='flex flex-col gap-8 mb-8'>
                                    <li><Link href="/" onClick={() => setIsMenuOpen(false)} className='uppercase text-xl font-bold hover:text-secondary transition-colors'>Home</Link></li>
                                    <li><Link href="/menu" onClick={() => setIsMenuOpen(false)} className='uppercase text-xl font-bold hover:text-secondary transition-colors'>Menu</Link></li>
                                    <li><Link href="/contact" onClick={() => setIsMenuOpen(false)} className='uppercase text-xl font-bold hover:text-secondary transition-colors'>Contact</Link></li>
                                </ul>
                                <div className="text-center">
                                    <p className='gradient-text text-xl mb-2'>Order Online Now</p>
                                    <h4 className='text-2xl font-normal text-white'>+43 677 6317 8906</h4>
                                </div>
                            </nav>
                        </div>

                        {/* Logo */}
                        <div className="logo bg-white rounded-b-xl 3xl:rounded-b-3xl p-5 3xl:p-9 3xl:pt-6 -mb-10 3xl:-mb-20 relative z-30 shadow-lg">
                            <Link href="/">
                                <img src="/assets/logo.svg" alt="Logo" className='w-20 md:w-28 3xl:w-auto! h-auto' />
                            </Link>
                        </div>

                        {/* Contact Info */}
                        <div className="contact-info text-end hidden md:block">
                            <p className='gradient-text text-base 3xl:text-xl!'>Order Online Now</p>
                            <h4 className='text-xl 3xl:text-3xl! font-normal' >+43 677 6317 8906</h4>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header