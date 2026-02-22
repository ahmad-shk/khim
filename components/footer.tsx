import React from 'react'

const Footer = () => {
  return (
    <footer className="page-footer bg-primary text-white pt-24 relative overflow-hidden">


      <div className="container mx-auto px-4 relative z-10 text-center">
        <div className="mb-20">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl 3xl:text-[85px]! font-extralight italic text-white mb-16 leading-none uppercase">
            Traditionelle Rezepte für <br /> <span className='font-light not-italic' >Ihren Genuss</span>
          </h2>

          {/* Large Gold Logo Badge */}
          <div className="relative inline-block max-xl:max-w-52">
            <img src="/assets/footer-logo.svg" alt="KHIM Logo" />
          </div>
        </div>

        {/* Bottom bar */}
        <div className="py-5 border-t border-white font-light text-white text-sm sm:text-xl uppercase">
          <p>© Alle Urheberrechte vorbehalten</p>
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
