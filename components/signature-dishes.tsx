import React from 'react'

const SignatureDishes = () => {
  return (
    <section className="bg-gray-circle py-24 overflow-hidden relative">
      <div className="container relative z-10">
          <div className="text-center mb-16">
               <div className="flex items-center justify-center gap-6">
                    <img src="assets/cloud-sm-left.svg" alt=""  />
                    <h2 className="text-4xl md:text-7xl font-light uppercase text-primary">
                         <span className="italic">Signature </span> <span className="font-normal">Dishes</span>
                    </h2>
                    <img src="assets/cloud-sm.svg" alt="" />
               </div>
               <p className="text-2xl md:text-[40px] text-primary font-light">Delicious, fast, cheap: your lunch menu for 12 €.</p>
          </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {/* Using a grid layout to mimic the bento/masonry style roughly */}
            
            {/* Large item top left */}
            <div className="lg:col-span-2 bg-gray-200 rounded-2xl overflow-hidden relative">
               <img src="assets/dish-large-img.png" alt="" />
            </div>

            {/* Small item top right */}
            <div className="bg-gray-200 rounded-2xl overflow-hidden relative">
               <img src="assets/dish-small-img.png" alt="" />
            </div>

            {/* Medium item row 2 left */}
            <div className="bg-gray-200 rounded-2xl overflow-hidden relative">
               <img src="assets/dish-small-img.png" alt="" />
            </div>

            {/* Large item row 2 right */}
            <div className="lg:col-span-2 bg-gray-200 rounded-2xl overflow-hidden relative">
               <img src="assets/dish-large-img.png" alt="" />
            </div>

            {/* Bottom Row items */}
            <div className="bg-gray-200 rounded-2xl overflow-hidden relative">
               <img src="assets/dish-small-img.png" alt="" />
            </div>
            <div className="bg-gray-200 rounded-2xl overflow-hidden relative">
               <img src="assets/dish-small-img.png" alt="" />
            </div>
            <div className="bg-gray-200 rounded-2xl overflow-hidden relative">
               <img src="assets/dish-small-img.png" alt="" />
            </div>
        </div>
      </div>
    </section>
  )
}

export default SignatureDishes
