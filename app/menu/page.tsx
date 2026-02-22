'use client';
import React, { useState } from 'react'
import Header from '@/components/header'
import Footer from '@/components/footer'
import DishCard from '@/components/dish-card'

const DISHES_DATA = [
    // APPETIZERS
    { id: "app-1", title: "A10. Lachs Tartar DFMN", category: "Vorspeise", price: "10,00", image: "/assets/pro-img.png", rating: 5, description: "Lachs, Avocado und Reis." },
    { id: "app-2", title: "S1. Kimchi", category: "Vorspeise", price: "5,50", image: "/assets/pro-img.png", rating: 4, description: "Fermentierter Chinakohl." },
    { id: "app-3", title: "S2. Seetang Salat", category: "Vorspeise", price: "6,00", image: "/assets/pro-img.png", rating: 5, description: "" },
    { id: "app-4", title: "S3. Avocado Salat", category: "Vorspeise", price: "7,00", image: "/assets/pro-img.png", rating: 4, description: "" },
    { id: "app-5", title: "A1G. Babyrollen A (V)", category: "Vorspeise", price: "5,00", image: "/assets/pro-img.png", rating: 5, description: "" },
    { id: "app-6", title: "A1. Frühlingsrolle AM", category: "Vorspeise", price: "5,00", image: "/assets/pro-img.png", rating: 4, description: "" },
    { id: "app-7", title: "A2. Hummer Teigtaschen ABFL", category: "Vorspeise", price: "6,50", image: "/assets/pro-img.png", rating: 5, description: "" },
    { id: "app-8", title: "A3. Samosa AHMN (V)", category: "Vorspeise", price: "6,00", image: "/assets/pro-img.png", rating: 4, description: "Indische Kartoffelteigtasche mit Tamarindensauce." },
    { id: "app-9", title: "A7. Edamame F", category: "Vorspeise", price: "5,00", image: "/assets/pro-img.png", rating: 5, description: "Sojabohnen." },
    { id: "app-10", title: "A3C. Fried Chicken A", category: "Vorspeise", price: "6,00", image: "/assets/pro-img.png", rating: 4, description: "" },
    { id: "app-11", title: "A6. Gyoza AFL", category: "Vorspeise", price: "6,00", image: "/assets/pro-img.png", rating: 5, description: "Gegrillte Teigtaschen mit Huhn." },
    { id: "app-12", title: "A6G. Vegetarische Gyoza A", category: "Vorspeise", price: "5,50", image: "/assets/pro-img.png", rating: 4, description: "" },
    { id: "app-13", title: "A8. Hühner Sateh AEHMNO", category: "Vorspeise", price: "6,00", image: "/assets/pro-img.png", rating: 5, description: "Hühnchenspießchen mit pikanter Erdnusssauce." },

    // SOUP
    { id: "soup-1", title: "B1. Pikante Suppe ACFNO", category: "Soup", price: "4,50", image: "/assets/pro-img.png", rating: 5, description: "" },
    { id: "soup-2", title: "B2. Miso Suppe F", category: "Soup", price: "4,50", image: "/assets/pro-img.png", rating: 5, description: "." },
    { id: "soup-3", title: "B3. Tom-Yamm-Goong BDOR", category: "Soup", price: "6,00", image: "/assets/pro-img.png", rating: 4, description: "Thai scharf-säuerliche Suppe mit Garnelen & Pilzen." },
    { id: "soup-4", title: "B4. Tom-Kha-Kai HO", category: "Soup", price: "5,50", image: "/assets/pro-img.png", rating: 5, description: "Thai-Kokos Suppe mit Hühnerfleisch & Pilzen." },
    { id: "soup-5", title: "B5. Wantan Suppe ABCF", category: "Soup", price: "6,00", image: "/assets/pro-img.png", rating: 4, description: "" },
    { id: "soup-6", title: "B6. Chao Shou ABCEFMN", category: "Soup", price: "6,50", image: "/assets/pro-img.png", rating: 5, description: "Teigtaschen mit Huhn & Garnelen in Chili-Öl."},

    // ROLL
    { id: "roll-1", title: "RS1. Dragon Roll ABDF – 8 Stk.", category: "Roll", price: "17,00", image: "/assets/pro-img.png", rating: 5, description: "Crab, avocado, and cucumber." },
    { id: "roll-2", title: "RS2. Philadelphia Roll ADGN – 8 Stk.", category: "Roll", price: "13,00", image: "/assets/pro-img.png", rating: 5, description: "Eel and cucumber topped with avocado." },
    { id: "roll-3", title: "RS3. Hokkaido Roll ABF – 8 Stk.", category: "Roll", price: "15,00", image: "/assets/pro-img.png", rating: 4, description: "Fresh tuna with spicy mayo and scallions." },
    { id: "roll-4", title: "RS4. Spicy Salmon Roll ABCDG – 8 Stk. ", category: "Roll", price: "14,00", image: "/assets/pro-img.png", rating: 5, description: "California roll topped with assorted fish." },

    // DIM SUM
    { id: "ds-1", title: "D01. SHRIMP HAKAODS1. Xiao Long Bao AFL – 4 Stk.", category: "Dim Sum", price: "6,00", image: "/assets/pro-img.png", rating: 5, description: "Steamed translucent shrimp dumplings." },
    { id: "ds-2", title: "DS2. Shao Mai AFL – 4 Stk.", category: "Dim Sum", price: "6,50", image: "/assets/pro-img.png", rating: 4, description: "Open-faced steamed pork dumplings." },
    { id: "ds-3", title: "DS3. Garnelen Teigtaschen ABFL – 4 Stk.", category: "Dim Sum", price: "6,00", image: "/assets/pro-img.png", rating: 4, description: "Fluffy steamed buns with sweet BBQ pork." },
    { id: "ds-4", title: "DS4. Dim Sum Mix ABFL – 4 Stk.", category: "Dim Sum", price: "06,50", image: "/assets/pro-img.png", rating: 5, description: "Steamed mixed vegetable dumplings." },

    // MAKI
    { id: "maki-1", title: "DS5. Gurken Maki FM – 6 / 12 Stk.", category: "Maki", price: " 3,50 / € 6,00", image: "/assets/pro-img.png", rating: 5, description: "Fresh salmon small roll." },
    { id: "maki-2", title: "DS6. Avocado Maki FMN (V) – 6 / 12 Stk.", category: "Maki", price: " 4,50 / € 8,00", image: "/assets/pro-img.png", rating: 5, description: "Fresh tuna small roll." },
    { id: "maki-3", title: "DS7. Lachs Maki DFMN – 6 / 12 Stk.", category: "Maki", price: " 4,50 / € 8,00", image: "/assets/pro-img.png", rating: 4, description: "Creamy avocado small roll." },
    { id: "maki-4", title: "DS8. Lachs Sashimi BDFMN – 3 Stk.", category: "Maki", price: "9,00", image: "/assets/pro-img.png", rating: 5, description: "Grilled eel with sweet soy sauce." },

    // MAIN COURSE
    { id: "main-1", title: "W17. Hühnerfleisch mit Cashewnüssen BDHR", category: "Hauptspeisen", price: "15,00", image: "/assets/pro-img.png", rating: 5, description: "" },
    { id: "main-2", title: "W2. Indisches Chili Chicken ACFM", category: "Hauptspeisen", price: "15,00", image: "/assets/pro-img.png", rating: 5, description: "" },
    { id: "main-3", title: "C2. Sabjee Curry MO (V)", category: "Hauptspeisen", price: "13,00", image: "/assets/pro-img.png", rating: 4, description: "" },
    { id: "main-4", title: "C6G. Kirscherbsen Curry MO (V) ", category: "Hauptspeisen", price: "13,00", image: "/assets/pro-img.png", rating: 5, description: "" },
    { id: "main-5", title: "W8. Ayam Ros Merah AMNO ", category: "Hauptspeisen", price: "15,00", image: "/assets/pro-img.png", rating: 4, description: "Hühnerfleisch mit Kurkuma gebraten." },
    { id: "main-6", title: "C6H. Kashmir Chicken Curry FMO", category: "Hauptspeisen", price: "15,00", image: "/assets/pro-img.png", rating: 5, description: "MitErdäpfeln, Cashewnüssen, Rosinen." },
    { id: "main-7", title: "C3H. Rotes Thai Curry HO ", category: "Hauptspeisen", price: "15,00", image: "/assets/pro-img.png", rating: 5, description: "Mit Hühnerfleisch und Kokosmilch." },
    { id: "main-8", title: "C3R. Rotes Thai Curry HO", category: "Hauptspeisen", price: "16,50", image: "/assets/pro-img.png", rating: 4, description: "Mit Rindfleisch und Kokosmilch." },
    { id: "main-9", title: "C3S. Rotes Thai Curry BDHOR", category: "Hauptspeisen", price: "19,00", image: "/assets/pro-img.png", rating: 5, description: "Mit Garnelen und Kokosmilch." },
    { id: "main-10", title: "C3G. Rotes Thai Curry HO", category: "Hauptspeisen", price: "13,00", image: "/assets/pro-img.png", rating: 5, description: "Mit Tofu, Gemüse und Kokosmilch." },
    { id: "main-11", title: "W7. Dragon & Phoenix ABCDFHMNOR", category: "Hauptspeisen", price: "18,00", image: "/assets/pro-img.png", rating: 5, description: "Huhn, Garnelen & Gemüse mit leichtem Curry & Kurkuma." },
    { id: "main-12", title: "W1R. Aus dem Wok gebraten mit Gemüse ABDFR", category: "Hauptspeisen", price: "16,00", image: "/assets/pro-img.png", rating: 4, description: "mit Rindfleisch." },
    { id: "main-13", title: "AM3. Bulgogi AFN", category: "Hauptspeisen", price: "16,00", image: "/assets/pro-img.png", rating: 5, description: "Mariniertes Rindfleisch." },
    { id: "main-14", title: "W6. Huhn Spezial AFMNO", category: "Hauptspeisen", price: "15,00", image: "/assets/pro-img.png", rating: 5, description: "Knuspriges Hühnerfilet mit gebratenem Gemüse in Currysauce." },
    { id: "main-15", title: "AM5. Lachs Teriyaki ADFN", category: "Hauptspeisen", price: "16,00", image: "/assets/pro-img.png", rating: 5, description: "" },
    { id: "main-16", title: "W6G. Tofu Special FMNO", category: "Hauptspeisen", price: "13,00", image: "/assets/pro-img.png", rating: 5, description: "Knuspriges Tofu auf gebratenem Gemüse mit leichter Currysauce" },
    { id: "main-17", title: "AM7. Korean Fried Chicken ACFN", category: "Hauptspeisen", price: "15,50", image: "/assets/pro-img.png", rating: 5, description: "" },
    { id: "main-18", title: "K1. Knusprige Ente ACFNO", category: "Hauptspeisen", price: "16,50", image: "/assets/pro-img.png", rating: 5, description: "Mit Salat & Knoblauchsauce" },
    { id: "main-19", title: "W1G. Tofu und Gemuse ABDFR", category: "Hauptspeisen", price: "13,00", image: "/assets/pro-img.png", rating: 5, description: "im Wok gebraten." },
    { id: "main-20", title: "K2. Knuspriges Hühnerfilet AFNO", category: "Hauptspeisen", price: "14,00", image: "/assets/pro-img.png", rating: 5, description: "Mit Salat & Knoblauchsauce." },
    { id: "main-21", title: "K6H. Mango Chicken F", category: "Hauptspeisen", price: "14,50", image: "/assets/pro-img.png", rating: 5, description: "" },
    { id: "main-22", title: "W3E. Acht Köstlichkeiten à la KHIM ABCDEFR", category: "Hauptspeisen", price: "16,00", image: "/assets/pro-img.png", rating: 5, description: "Huhn, Rind & Ente mit Gemüse aus dem Wok." },

    // RICE & NOODLES
    { id: "rn-1", title: "N4S. Pad Thai ACFR", category: "Rice & Noodles", price: "14,00", image: "/assets/pro-img.png", rating: 4, description: "Gebratene Reisbandnudeln mit Garnelen." },
    { id: "rn-2", title: "N4. Gebratene Nudeln ACF", category: "Rice & Noodles", price: "10,00", image: "/assets/pro-img.png", rating: 5, description: "mit Ei und Gemüse." },
    { id: "rn-3", title: "N4H. Gebratene Nudeln ACF", category: "Rice & Noodles", price: "11,00", image: "/assets/pro-img.png", rating: 5, description: "mit Hühnerfleisch." },
    { id: "rn-4", title: "N5S. Thai-gebratene Nudeln ACFR", category: "Rice & Noodles", price: "15,00", image: "/assets/pro-img.png", rating: 5, description: "mit Garnelen." },
    { id: "rn-5", title: "R3H. Gebratener Reis ACF", category: "Rice & Noodles", price: "11,00", image: "/assets/pro-img.png", rating: 4, description: "mit Hühnerfleisch." },
    { id: "rn-6", title: "R1S. Thai gebratener Reis ACFR", category: "Rice & Noodles", price: "15,00", image: "/assets/pro-img.png", rating: 5, description: "mit Garnelen." },

    // BENTO
    { id: "ben-1", title: "SB1. Avocado Maki Bento DFMN", category: "Bento", price: "13,00", image: "/assets/pro-img.png", rating: 5, description: "" },
    { id: "ben-2", title: "SB2. Bulgogi Bento ADFMN", category: "Bento", price: "15,00", image: "/assets/pro-img.png", rating: 5, description: "Mariniertes Rindfleisch." },
    { id: "ben-3", title: "SB3. Gyoza Bento ADFLMN", category: "Bento", price: "14,00", image: "/assets/pro-img.png", rating: 4, description: "Gegrillte Teigtaschen." },
    { id: "ben-4", title: "SB4. Yasai Bento DFMN", category: "Bento", price: "13,00", image: "/assets/pro-img.png", rating: 5, description: "Gebratenes Gemüse." },
    { id: "ben-5", title: "SB5. Lachs Bento ADFMN", category: "Bento", price: "15,00", image: "/assets/pro-img.png", rating: 5, description: "" },
    { id: "ben-6", title: "SB6. Agamo Bento ADFMN", category: "Bento", price: "15,00", image: "/assets/pro-img.png", rating: 4, description: ".Gebratene Ente." },

    // DRINKS
    { id: "dr-1", title: "D1. Hausgemachter Eistee", category: "Getränke", price: "6,00", image: "/assets/pro-img.png", rating: 5, description: "Pfirsich oder Zitrone." },
    { id: "dr-2", title: "D2. Raspberry-lemon lemonade", category: "Getränke", price: "6,60", image: "/assets/pro-img.png", rating: 5, description: "Cremiges Jogurtgetränk." },
    { id: "dr-3", title: "D3. Hausgemachte Minz-Limonade", category: "Getränke", price: "6,00", image: "/assets/pro-img.png", rating: 4, description: "Exotisch und süß-fruchtig." },
    { id: "dr-4", title: "D4. Butterfly Pea Lemonade", category: "Getränke", price: "6,00", image: "/assets/pro-img.png", rating: 5, description: "Erfrischende Limonade mit natürlichem Farbverlauf." },
    { id: "dr-5", title: "D5. Blue Butterfly Soda", category: "Getränke", price: "6,00", image: "/assets/pro-img.png", rating: 5, description: "Spritziges Erfrischungsgetränk." },

    // DESSERT
    { id: "des-1", title: "D1. Kuih Tayap AHOG (V)", category: "Dessert", price: "6,00", image: "/assets/pro-img.png", rating: 5, description: "Indonesische Kokospalatschinken." },
    { id: "des-2", title: "D2. Gebackene Banane mit Honig AN", category: "Dessert", price: "4,50", image: "/assets/pro-img.png", rating: 5, description: "" },
    { id: "des-3", title: "D3. Volcano ACHO", category: "Dessert", price: "6,00", image: "/assets/pro-img.png", rating: 4, description: "flambiertes Eis." },
    { id: "des-4", title: "D4. Mango Lassi O 0,4l", category: "Dessert", price: "6,00", image: "/assets/pro-img.png", rating: 5, description: "" },
    { id: "des-5", title: "D5. Mochi 1 stk. FG", category: "Dessert", price: "5,00", image: "/assets/pro-img.png", rating: 5, description: "Japanische Reiskuchen." },
    { id: "des-6", title: "D6. Matcha Eis 2 stk. CG", category: "Dessert", price: "5,00", image: "/assets/pro-img.png", rating: 4, description: "" },
];

const MenuPage = () => {
    const categories = ["All", "Vorspeise", "Soup", "Roll", "Dim Sum", "Maki", "Hauptspeisen", "Rice & Noodles", "Bento", "Getränke", "Dessert"];
    const [activeIndex, setActiveIndex] = useState(0);
    const [selectedDish, setSelectedDish] = useState<any>(null);

    // State to track which categories are "Expanded" in the "All" view
    const [expandedCategories, setExpandedCategories] = useState<string[]>([]);

    const toggleExpand = (cat: string) => {
        setExpandedCategories(prev =>
            prev.includes(cat) ? prev.filter(c => c !== cat) : [...prev, cat]
        );
    };

    const activeCategory = categories[activeIndex];

    const renderDishes = () => {
        if (activeCategory === "All") {
            return categories.slice(1).map(cat => {
                const categoryDishes = DISHES_DATA.filter(dish => dish.category === cat);
                if (categoryDishes.length === 0) return null;

                const isExpanded = expandedCategories.includes(cat);
                const displayDishes = isExpanded ? categoryDishes : categoryDishes.slice(0, 4);

                return (
                    <div key={cat} className="w-full mb-20">
                        {/* Heading on LEFT side */}
                        <div className="flex justify-start mb-8 border-b border-gray-100 pb-2">
                            <h2 className="text-3xl sm:text-4xl lg:text-5xl 3xl:text-7xl! italic text-primary uppercase font-light md:text-start text-center">
                                {cat}
                            </h2>
                        </div>
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-y-12 gap-y-6">
                            {displayDishes.map((dish) => (
                                <DishCard
                                    key={dish.id}
                                    {...dish}
                                    onOpen={() => setSelectedDish(dish)}
                                />
                            ))}
                        </div>

                        {/* Explore More Button per category if more than 4 items */}
                        {categoryDishes.length > 4 && !isExpanded && (
                            <div className="flex justify-center mt-12">
                                <button
                                    onClick={() => toggleExpand(cat)}
                                    className="btn btn-primary lg"
                                >
                                    Explore More
                                </button>
                            </div>
                        )}
                    </div>
                );
            });
        } else {
            const filteredDishes = DISHES_DATA.filter(dish => dish.category === activeCategory);
            return (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-y-12 gap-y-6 mb-20">
                    {filteredDishes.map((dish) => (
                        <DishCard
                            key={dish.id}
                            {...dish}
                            onOpen={() => setSelectedDish(dish)}
                        />
                    ))}
                </div>
            );
        }
    };

    return (
        <div className="bg-gray-circle">
            <main className='inner-page'>
                <section className="inner-page--header min-h-[675px]">
                    <div className='ornament left'></div>
                    <div className='ornament right'></div>
                    <div className="container mx-auto px-4 relative z-10 text-center">
                        <div className="text-center 2xl:mt-16">
                            <div className="section-title flex items-center justify-center gap-6">
                                <img src="assets/cloud-sm-left.svg" alt="" />
                                <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-7xl font-light uppercase tracking-tight text-white">
                                    <span className="italic">Discover </span> <span className="font-normal">our dishes!</span>
                                </h2>
                                <img src="assets/cloud-sm.svg" alt="" />
                            </div>
                            <p className="text-xl sm:text-2xl lg:text-3xl text-white font-light mt-5">Experience the diversity of Asia – with lovingly prepared dishes,<br /> fresh ingredients and authentic tastes.</p>
                        </div>
                    </div>
                </section>

                <section className='signature-wrapper overflow-hidden relative'>
                    <div className='ornament left'></div>
                    <div className='ornament right'></div>

                    <section className="container mx-auto relative z-10">
                        {/* Mobile view spacing adjusted: lg:mt-[80px] vs mt-[160px] */}
                        <div className="tab-holder flex flex-wrap justify-center mb-[40px] lg:mt-[80px] mt-[160px]">
                            {categories.map((cat, i) => (
                                <button key={cat} onClick={() => setActiveIndex(i)} className={`btn ${activeIndex === i ? "active" : ""}`}>
                                    {cat}
                                </button>
                            ))}
                        </div>

                        <div className="w-full pb-20">
                            {renderDishes()}
                        </div>
                    </section>
                </section>
            </main>

            {/* Popup */}
            {selectedDish && (
                <div className="fixed inset-0 z-[999] flex items-center justify-center p-5">
                    <div
                        className="absolute inset-0 bg-black/80 backdrop-blur-sm"
                        onClick={() => setSelectedDish(null)}
                    ></div>

                    <div className="bg-white w-full max-w-[500px] lg:max-w-5xl relative z-10 overflow-hidden rounded-lg shadow-2xl animate-in fade-in zoom-in duration-300">
                        <button
                            onClick={() => setSelectedDish(null)}
                            className="absolute top-4 right-6 z-[30] text-black/70 hover:text-black transition-colors cursor-pointer"
                        >
                            <span className="text-2xl">✕</span>
                        </button>

                        <div className="flex flex-col lg:flex-row md:mt-0 mt-10">
                            <div className="lg:w-[40%] bg-[#fcfcfc] flex items-center justify-center p-5 border-b lg:border-b-0 lg:border-r border-gray-100 lg:h-auto">
                                <img
                                    src={selectedDish.image}
                                    alt={selectedDish.title}
                                    className="h-full w-full object-cover drop-shadow-xl rounded-xl"
                                    style={{maxWidth: '400px'}}
                                />
                            </div>

                            <div className="lg:w-[40%] p-6 lg:p-12 flex flex-col justify-center bg-white">
                                <h3 className="text-black text-2xl lg:text-4xl uppercase italic font-light leading-tight mb-3">
                                    {selectedDish.title}
                                </h3>
                                <div className="flex items-center mb-4">
                                    <div className="flex gap-1 text-[#FEEC05] text-lg lg:text-xl">
                                        {[...Array(5)].map((_, i) => (
                                            <span key={i} className={i < selectedDish.rating ? "" : "text-gray-200"}>★</span>
                                        ))}
                                    </div>
                                </div>
                                <div className="mb-6">
                                    <p className="text-gray-500 italic text-base lg:text-lg leading-relaxed font-light">
                                        {selectedDish.description}
                                    </p>
                                </div>
                                <div className="mt-auto pt-4 border-t border-gray-50 flex items-center justify-between">
                                    <div>
                                        <span className="block text-gray-400 text-[10px] uppercase tracking-widest mb-1">Price</span>
                                        <p className="text-black text-3xl lg:text-4xl font-light italic">€{selectedDish.price}</p>
                                    </div>
                                    {/* <div className="text-[#D7443E] font-serif text-2xl italic opacity-20">
                                        味
                                    </div> */}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
            <Footer />
        </div>
    )
}

export default MenuPage