import Link from 'next/link'
import React from 'react'

const InstagramFeed = () => {
  return (
    <section className="py-20 bg-white text-center">
      <div className="container">
        <h2 className="text-3xl md:text-4xl text-primary font-serif italic mb-4">
            FOLLOW <span className="text-gray-400 not-italic font-sans font-light">@khim.asia.cuisine</span>
        </h2>
        <p className="text-gray-500 mb-12 max-w-lg mx-auto">
            Join us on Instagram for insights into our cuisine, new dishes and exclusive offers.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <div className="aspect-4/5 bg-gray-200 rounded-xl overflow-hidden relative group">
                <div className="w-full h-full flex items-center justify-center text-gray-500 group-hover:bg-gray-300 transition-colors">
                    Instagram Post 1
                </div>
            </div>
            <div className="aspect-4/5 bg-gray-200 rounded-xl overflow-hidden relative group">
                <div className="w-full h-full flex items-center justify-center text-gray-500 group-hover:bg-gray-300 transition-colors">
                    Instagram Post 2
                </div>
            </div>
            <div className="aspect-4/5 bg-gray-200 rounded-xl overflow-hidden relative group">
                <div className="w-full h-full flex items-center justify-center text-gray-500 group-hover:bg-gray-300 transition-colors">
                    Instagram Post 3
                </div>
            </div>
        </div>

        <Link 
            href="#"
            className="inline-block bg-primary text-white text-xs uppercase tracking-widest px-8 py-3 rounded-full hover:bg-opacity-90 transition-colors"
        >
            Explore the Feed
        </Link>
      </div>
    </section>
  )
}

export default InstagramFeed
