import Link from 'next/link'

const IntroSection = () => {
  return (
    <section className="intro-section pt-20 pb-40 text-center bg-gray-circle relative min-h-[470px]">
      <div className="container relative z-1">
        <h2 className="text-4xl 2xl:text-[63px] text-primary font-light italic leading-tight mb-8">
          Fresh ingredients, artisanal perfection, and the diversity of Asia <span className="inline-block mx-2 align-middle max-xl:max-w-20  "><img src="assets/title-img.png" alt='image' /></span> prepared directly for you.
        </h2>
        <div className="button-row flex justify-center gap-4 mt-10">
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
    </section>
  )
}

export default IntroSection
