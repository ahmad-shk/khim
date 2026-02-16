import React from 'react'

const Footer = () => {
  return (
    <footer className="bg-primary text-white py-32 relative overflow-hidden">
      {/* Background Patterns */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <img src="/assets/gray-circle-bg.png" className="w-full h-full object-cover" alt="" />
      </div>

      <div className="container mx-auto px-4 relative z-10 text-center">
        <div className="mb-20">
          <h2 className="text-4xl md:text-6xl font-serif italic text-white mb-16 leading-tight uppercase tracking-widest">
            TRADITIONAL RECIPES FOR <br /> YOUR DELIGHT
          </h2>

          {/* Large Gold Logo Badge */}
          <div className="relative inline-block p-10">
            <img src="/assets/logo.svg" className="w-48 md:w-64 h-auto" alt="KHIM Logo" />
            {/* Decorative outer rings */}
            <div className="absolute inset-0 border border-secondary/30 rounded-full scale-110"></div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-20 border-t border-white/5 text-gray-400 text-sm tracking-widest uppercase">
          <p>© All copyrights reserved</p>
        </div>
      </div>

      {/* Hanging Lanterns */}
      <div className="absolute left-10 top-0 h-64 w-16 hidden lg:block opacity-60">
        <img src="/assets/ornament-sm.svg" alt="" className="h-full w-auto" />
      </div>
      <div className="absolute right-10 top-0 h-64 w-16 hidden lg:block opacity-60">
        <img src="/assets/ornament-sm.svg" alt="" className="h-full w-auto" />
      </div>

      {/* Floating Clouds */}
      <div className='absolute left-[-50px] bottom-20 w-[300px] opacity-20 pointer-events-none'>
        <img src="/assets/cloud-img.svg" alt="" className="w-full h-auto" />
      </div>
    </footer>
  )
}

export default Footer
