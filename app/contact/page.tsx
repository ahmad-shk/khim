import React from 'react'
import Header from '@/components/header'
import Footer from '@/components/footer'

const ContactPage = () => {
    return (
        <div className="bg-white">
            <div className="bg-primary h-32 relative overflow-hidden">
                <Header />
            </div>

            <main>
                {/* Hero Section */}
                <section className="bg-primary pt-24 pb-48 text-center relative overflow-hidden">
                    <img src="/assets/ornament-sm.svg" className="absolute left-10 top-0 h-64 opacity-60" alt="" />
                    <img src="/assets/ornament-sm.svg" className="absolute right-10 top-0 h-64 opacity-60" alt="" />

                    <div className="container mx-auto px-4 relative z-10">
                        <div className="flex items-center justify-center gap-4 mb-6">
                            <img src="/assets/cloud-sm-left.svg" className="w-16" alt="" />
                            <h1 className="text-4xl md:text-7xl text-white font-serif italic tracking-widest uppercase">
                                <span className="font-light">Get In </span> <span className="font-bold">Touch With Us!</span>
                            </h1>
                            <img src="/assets/cloud-sm.svg" className="w-16" alt="" />
                        </div>
                        <p className="text-white/80 text-lg md:text-xl font-light italic max-w-3xl mx-auto">
                            For reservations, inquiries, or general information, please get in touch with us or visit us during opening hours.
                        </p>
                    </div>

                    {/* Scalloped edge effect */}
                    <div className="absolute bottom-0 left-0 w-full h-24 bg-white rounded-t-[100%] scale-x-[1.2]"></div>
                </section>

                {/* Info Boxes Section */}
                <section className="container mx-auto px-4 -mt-32 relative z-20 pb-20">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-5xl text-primary font-serif italic mb-12">
                            Experience the diversity of Asia – fresh, <br /> aromatic and prepared with love.
                        </h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                        {/* Box 1 */}
                        <div className="bg-primary text-white p-10 pt-20 rounded-[2.5rem] relative shadow-2xl group hover:-translate-y-2 transition-transform duration-300">
                            <div className="absolute -top-8 left-1/2 -translate-x-1/2 w-24 h-24 bg-[#D4AF37] rounded-full p-4 shadow-lg flex items-center justify-center">
                                <div className="border border-white/30 rounded-full w-full h-full flex items-center justify-center">
                                    <img src="/assets/logo.svg" className="w-12 h-12 invert" alt="" />
                                </div>
                            </div>
                            <h3 className="text-secondary text-2xl font-bold italic mb-4">Opening Hours:</h3>
                            <div className="font-light text-lg">
                                <p>11:30 - 14:30</p>
                                <p>17:30 - 21:30</p>
                            </div>
                        </div>

                        {/* Box 2 */}
                        <div className="bg-primary text-white p-10 pt-20 rounded-[2.5rem] relative shadow-2xl group hover:-translate-y-2 transition-transform duration-300">
                            <div className="absolute -top-8 left-1/2 -translate-x-1/2 w-24 h-24 bg-[#D4AF37] rounded-full p-4 shadow-lg flex items-center justify-center">
                                <div className="border border-white/30 rounded-full w-full h-full flex items-center justify-center text-white">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" /></svg>
                                </div>
                            </div>
                            <h3 className="text-secondary text-2xl font-bold italic mb-4">Contact:</h3>
                            <div className="font-light text-lg">
                                <p>+43 677 6317 8906</p>
                                <p>khimrest22@yahoo.com</p>
                            </div>
                        </div>

                        {/* Box 3 */}
                        <div className="bg-primary text-white p-10 pt-20 rounded-[2.5rem] relative shadow-2xl group hover:-translate-y-2 transition-transform duration-300">
                            <div className="absolute -top-8 left-1/2 -translate-x-1/2 w-24 h-24 bg-[#D4AF37] rounded-full p-4 shadow-lg flex items-center justify-center">
                                <div className="border border-white/30 rounded-full w-full h-full flex items-center justify-center text-white">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" /><circle cx="12" cy="10" r="3" /></svg>
                                </div>
                            </div>
                            <h3 className="text-secondary text-2xl font-bold italic mb-4">Address:</h3>
                            <div className="font-light text-lg">
                                <p>St. Pöltner Gasse 12,</p>
                                <p>3130 St. Polten</p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Booking Section */}
                <section className="bg-primary py-24 relative overflow-hidden">
                    <img src="/assets/ornament-sm.svg" className="absolute left-10 top-0 h-64 opacity-30" alt="" />
                    <img src="/assets/ornament-sm.svg" className="absolute right-10 top-0 h-64 opacity-30" alt="" />
                    <div className="absolute inset-0 opacity-10">
                        <img src="/assets/gray-circle-bg.png" className="w-full h-full object-cover" alt="" />
                    </div>

                    <div className="container mx-auto px-4 relative z-10 text-center">
                        <div className="flex items-center justify-center gap-4 mb-6">
                            <img src="/assets/cloud-sm-left.svg" className="w-16" alt="" />
                            <h2 className="text-4xl md:text-7xl text-white font-serif italic tracking-widest uppercase">
                                <span className="font-light">Book A </span> <span className="font-bold">Table</span>
                            </h2>
                            <img src="/assets/cloud-sm.svg" className="w-16" alt="" />
                        </div>
                        <p className="text-white/80 text-lg font-light italic mb-16 max-w-xl mx-auto">
                            Reserve your table conveniently online. We will get back to you as soon as possible.
                        </p>

                        <div className="max-w-4xl mx-auto bg-white/10 backdrop-blur-md rounded-[3rem] p-12 border border-white/10">
                            <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="md:col-span-2">
                                    <input type="text" placeholder="Name" className="w-full bg-transparent border-b border-white/40 p-3 text-white placeholder:text-white/60 focus:border-secondary outline-none transition-all" />
                                </div>
                                <div>
                                    <input type="tel" placeholder="Phone (Optional)" className="w-full bg-transparent border-b border-white/40 p-3 text-white placeholder:text-white/60 focus:border-secondary outline-none transition-all" />
                                </div>
                                <div>
                                    <input type="email" placeholder="Email (Optional)" className="w-full bg-transparent border-b border-white/40 p-3 text-white placeholder:text-white/60 focus:border-secondary outline-none transition-all" />
                                </div>
                                <div>
                                    <input type="text" placeholder="Date (DD.MM.YY)" className="w-full bg-transparent border-b border-white/40 p-3 text-white placeholder:text-white/60 focus:border-secondary outline-none transition-all" />
                                </div>
                                <div>
                                    <input type="text" placeholder="Time (HH:MM)" className="w-full bg-transparent border-b border-white/40 p-3 text-white placeholder:text-white/60 focus:border-secondary outline-none transition-all" />
                                </div>
                                <div>
                                    <input type="number" placeholder="Number of person" className="w-full bg-transparent border-b border-white/40 p-3 text-white placeholder:text-white/60 focus:border-secondary outline-none transition-all" />
                                </div>
                                <div>
                                    <input type="text" placeholder="Message (Optional)" className="w-full bg-transparent border-b border-white/40 p-3 text-white placeholder:text-white/60 focus:border-secondary outline-none transition-all" />
                                </div>
                                <div className="md:col-span-2 mt-8">
                                    <button className="bg-primary text-white border border-white/20 px-16 py-4 rounded-full text-lg font-bold uppercase tracking-[0.2em] hover:bg-white hover:text-primary transition-all shadow-xl">
                                        Book A Table
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </section>

                {/* Location Section */}
                <section className="bg-white py-24 relative overflow-hidden">
                    <div className="container mx-auto px-4 text-center">
                        <div className="flex items-center justify-center gap-4 mb-16">
                            <img src="/assets/cloud-sm-left.svg" className="w-16 opacity-30" alt="" />
                            <h2 className="text-4xl md:text-7xl text-primary font-serif italic tracking-widest uppercase">
                                <span className="font-light">Our </span> <span className="font-bold">Location</span>
                            </h2>
                            <img src="/assets/cloud-sm.svg" className="w-16 opacity-30" alt="" />
                        </div>

                        <div className="relative w-full aspect-video rounded-[3rem] overflow-hidden shadow-2xl mb-12">
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2658.8340331045953!2d15.621453476904!3d48.20986164620864!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x476db209e5352c89%3A0xc3f8e58f00dbed4!2sSt.%20P%C3%B6ltner%20Gasse%2012%2C%203130%20St.%20P%C3%B6lten%2C%20Austria!5e0!3m2!1sen!2s!4v1708100000000!5m2!1sen!2s"
                                width="100%"
                                height="100%"
                                style={{ border: 0 }}
                                allowFullScreen
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                            ></iframe>
                        </div>

                        <button className="bg-primary text-white px-12 py-4 rounded-full text-sm font-bold uppercase tracking-[0.2em] hover:bg-primary/90 transition-all shadow-xl">
                            Route in Google Maps Planen
                        </button>
                    </div>
                </section>
            </main>
            <Footer />
        </div>
    )
}

export default ContactPage
