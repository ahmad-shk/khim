import React from 'react'

const Footer = () => {
  return (
    <footer className="bg-primary text-white pt-24 pb-8 relative overflow-hidden">
      <div className="container relative z-10 text-center">
        <div className="mb-16">
            <h2 className="text-4xl md:text-5xl font-serif italic text-white mb-8 leading-tight">
                TRADITIONAL RECIPES FOR <br/> YOUR DELIGHT
            </h2>
             
             {/* Logo Circle */}
             <div className="w-48 h-48 mx-auto border border-secondary/30 rounded-full flex items-center justify-center relative">
                 <div className="w-40 h-40 border border-secondary rounded-full flex flex-col items-center justify-center bg-primary">
                    <div className="text-2xl text-secondary mb-1">🍜</div>
                    <div className="text-2xl font-bold font-serif text-secondary tracking-widest">KHIM</div>
                    <div className="text-[10px] tracking-[0.2em] text-secondary uppercase">Asian</div>
                    <div className="text-[8px] tracking-widest text-secondary uppercase mt-0.5">Restaurant</div>
                 </div>
             </div>
        </div>

        <div className="border-t border-white/10 pt-8 mt-12 text-xs text-gray-400">
            <p>All copyrights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
