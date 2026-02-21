import Link from 'next/link'

const IntroSection = () => {
  return (
    <section className="intro-section pt-20 pb-40 text-center bg-gray-circle relative lg:min-h-[470px]">
      <div className="container relative z-1">
        <div className='md:px-0 px-10'>
          <h2 className="text-3xl lg:text-5xl 3xl:text-[63px]! text-primary font-light italic leading-tight mb-8">
            Fresh ingredients, artisanal perfection, and the diversity of Asia
             {/* <span className="inline-block mx-2 align-middle max-xl:max-w-20  "><img src="assets/title-img.png" alt='image' /></span> */}
             prepared directly for you.
          </h2>
          <div className="md:flex grid justify-center gap-4 mt-10">
            <Link
              href="#"
              className="btn btn-primary"
            >
              Explore the Menu
            </Link>
            <Link
              href="#"
              className="btn btn-secondary"
            >
              Reserve a Table
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

export default IntroSection
