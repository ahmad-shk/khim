import React from 'react'

const Footer = () => {
  return (
    <footer className="page-footer bg-primary text-white pt-24 relative overflow-hidden">


      <div className="container mx-auto px-4 relative z-10 text-center">
        <div className="mb-20">
          <h2 className="text-4xl md:text-[85px] font-light italic text-white mb-16 leading-none uppercase">
            TRADITIONAL RECIPES FOR <br /> <span className='font-normal' >YOUR DELIGHT</span>
          </h2>

          {/* Large Gold Logo Badge */}
          <div className="relative inline-block">
            <img src="/assets/footer-logo.svg" alt="KHIM Logo" />
          </div>
        </div>

        {/* Bottom bar */}
        <div className="py-5 border-t border-white font-light text-white text-xl uppercase">
          <p>© All copyrights reserved</p>
        </div>
      </div>

      <div className='ornament'>
        <img src="assets/ornament-lg.svg" alt='' />
      </div>

      <div className='cloud'>
        <img src="assets/cloud-img.svg" alt="" />
      </div>

    </footer>
  )
}

export default Footer
