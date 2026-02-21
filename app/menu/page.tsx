'use client';
import React, { useState } from 'react'
import Header from '@/components/header'
import Footer from '@/components/footer'
import DishCard from '@/components/dish-card'

const DISHES_DATA = [
    // APPETIZERS
    { id: "app-1", title: "A10. SALMON TARTAR", category: "Appetizer", price: "10,00", image: "/assets/pro-img.png", rating: 5, description: "Freshly prepared salmon with premium avocado." },
    { id: "app-2", title: "A11. SPRING ROLLS", category: "Appetizer", price: "08,00", image: "/assets/pro-img.png", rating: 4, description: "Crispy vegetable rolls with sweet chili sauce." },
    { id: "app-3", title: "A12. CHICKEN GYOZA", category: "Appetizer", price: "09,50", image: "/assets/pro-img.png", rating: 5, description: "Pan-fried Japanese dumplings." },
    { id: "app-4", title: "A13. EDAMAME SALT", category: "Appetizer", price: "06,00", image: "/assets/pro-img.png", rating: 4, description: "Steamed green soybeans with sea salt." },
    { id: "app-5", title: "A14. TEMPURA PRAWNS", category: "Appetizer", price: "12,00", image: "/assets/pro-img.png", rating: 5, description: "Crispy battered deep-fried prawns." },
    { id: "app-6", title: "A15. SEAWEED SALAD", category: "Appetizer", price: "07,00", image: "/assets/pro-img.png", rating: 4, description: "Fresh marinated seaweed with sesame." },

    // SOUP
    { id: "soup-1", title: "S01. MISO SOUP", category: "Soup", price: "05,00", image: "/assets/pro-img.png", rating: 5, description: "Traditional soybean paste soup with tofu." },
    { id: "soup-2", title: "S02. TOM YUM SOUP", category: "Soup", price: "08,50", image: "/assets/pro-img.png", rating: 5, description: "Spicy and sour Thai soup with shrimp." },
    { id: "soup-3", title: "S03. WAN-TAN SOUP", category: "Soup", price: "07,50", image: "/assets/pro-img.png", rating: 4, description: "Chicken dumplings in clear broth." },

    // ROLL
    { id: "roll-1", title: "R01. CALIFORNIA ROLL", category: "Roll", price: "12,00", image: "/assets/pro-img.png", rating: 5, description: "Crab, avocado, and cucumber." },
    { id: "roll-2", title: "R02. DRAGON ROLL", category: "Roll", price: "15,50", image: "/assets/pro-img.png", rating: 5, description: "Eel and cucumber topped with avocado." },
    { id: "roll-3", title: "R03. SPICY TUNA ROLL", category: "Roll", price: "14,00", image: "/assets/pro-img.png", rating: 4, description: "Fresh tuna with spicy mayo and scallions." },
    { id: "roll-4", title: "R04. RAINBOW ROLL", category: "Roll", price: "16,00", image: "/assets/pro-img.png", rating: 5, description: "California roll topped with assorted fish." },
    { id: "roll-5", title: "R05. TIGER ROLL", category: "Roll", price: "14,50", image: "/assets/pro-img.png", rating: 5, description: "Shrimp tempura and cucumber." },
    { id: "roll-6", title: "R06. VOLCANO ROLL", category: "Roll", price: "17,00", image: "/assets/pro-img.png", rating: 5, description: "Baked seafood mix on top of California roll." },

    // DIM SUM
    { id: "ds-1", title: "D01. SHRIMP HAKAO", category: "Dim Sum", price: "09,00", image: "/assets/pro-img.png", rating: 5, description: "Steamed translucent shrimp dumplings." },
    { id: "ds-2", title: "D02. PORK SHUMAI", category: "Dim Sum", price: "08,50", image: "/assets/pro-img.png", rating: 4, description: "Open-faced steamed pork dumplings." },
    { id: "ds-3", title: "D03. BBQ PORK BUNS", category: "Dim Sum", price: "07,50", image: "/assets/pro-img.png", rating: 4, description: "Fluffy steamed buns with sweet BBQ pork." },
    { id: "ds-4", title: "D04. VEGGIE CRYSTAL", category: "Dim Sum", price: "08,00", image: "/assets/pro-img.png", rating: 5, description: "Steamed mixed vegetable dumplings." },

    // MAKI
    { id: "maki-1", title: "M01. SAKE MAKI", category: "Maki", price: "10,00", image: "/assets/pro-img.png", rating: 5, description: "Fresh salmon small roll." },
    { id: "maki-2", title: "M02. TEKKA MAKI", category: "Maki", price: "12,00", image: "/assets/pro-img.png", rating: 5, description: "Fresh tuna small roll." },
    { id: "maki-3", title: "M03. AVOCADO MAKI", category: "Maki", price: "08,00", image: "/assets/pro-img.png", rating: 4, description: "Creamy avocado small roll." },
    { id: "maki-4", title: "M04. UNAGI MAKI", category: "Maki", price: "13,00", image: "/assets/pro-img.png", rating: 5, description: "Grilled eel with sweet soy sauce." },

    // MAIN COURSE
    { id: "main-1", title: "MC1. TERIYAKI CHICKEN", category: "Main Course", price: "18,00", image: "/assets/pro-img.png", rating: 5, description: "Grilled chicken with teriyaki sauce." },
    { id: "main-2", title: "MC2. BEEF BULGOGI", category: "Main Course", price: "22,00", image: "/assets/pro-img.png", rating: 5, description: "Korean style marinated beef." },
    { id: "main-3", title: "MC3. RED CURRY DUCK", category: "Main Course", price: "20,50", image: "/assets/pro-img.png", rating: 4, description: "Crispy duck in spicy red curry." },
    { id: "main-4", title: "MC4. SALMON STEAK", category: "Main Course", price: "24,00", image: "/assets/pro-img.png", rating: 5, description: "Pan-seared salmon with lemon butter." },

    // RICE & NOODLES
    { id: "rn-1", title: "RN1. EGG FRIED RICE", category: "Rice & Noodles", price: "11,00", image: "/assets/pro-img.png", rating: 4, description: "Stir-fried rice with eggs and peas." },
    { id: "rn-2", title: "RN2. YAKI UDON", category: "Rice & Noodles", price: "14,50", image: "/assets/pro-img.png", rating: 5, description: "Thick wheat noodles with vegetables." },
    { id: "rn-3", title: "RN3. BEEF CHOW MEIN", category: "Rice & Noodles", price: "15,00", image: "/assets/pro-img.png", rating: 5, description: "Stir-fried egg noodles with beef slices." },
    { id: "rn-4", title: "RN4. SEAFOOD RAMEN", category: "Rice & Noodles", price: "17,00", image: "/assets/pro-img.png", rating: 5, description: "Japanese ramen with shrimp and squid." },

    // BENTO
    { id: "ben-1", title: "B01. SALMON BENTO", category: "Bento", price: "24,00", image: "/assets/pro-img.png", rating: 5, description: "Salmon teriyaki, tempura, and sides." },
    { id: "ben-2", title: "B02. CHICKEN KASTU", category: "Bento", price: "21,00", image: "/assets/pro-img.png", rating: 5, description: "Breaded chicken with curry sauce box." },
    { id: "ben-3", title: "B03. VEGGIE BENTO", category: "Bento", price: "19,00", image: "/assets/pro-img.png", rating: 4, description: "Vegetable tempura and tofu box." },

    // DRINKS
    { id: "dr-1", title: "D01. GREEN TEA", category: "Drinks", price: "04,00", image: "/assets/pro-img.png", rating: 5, description: "Hot Japanese green tea." },
    { id: "dr-2", title: "D02. ICED MOCHI LATTE", category: "Drinks", price: "06,50", image: "/assets/pro-img.png", rating: 5, description: "Creamy iced coffee." },
    { id: "dr-3", title: "D03. MANGO LASSI", category: "Drinks", price: "05,50", image: "/assets/pro-img.png", rating: 4, description: "Fresh mango yogurt drink." },
    { id: "dr-4", title: "D04. SAKE (150ml)", category: "Drinks", price: "12,00", image: "/assets/pro-img.png", rating: 5, description: "Traditional Japanese rice wine." },

    // DESSERT
    { id: "des-1", title: "DS1. MOCHI ICE CREAM", category: "Dessert", price: "07,00", image: "/assets/pro-img.png", rating: 5, description: "Assorted rice cake ice cream." },
    { id: "des-2", title: "DS2. MATCHA CAKE", category: "Dessert", price: "08,50", image: "/assets/pro-img.png", rating: 5, description: "Green tea infused cheesecake." },
    { id: "des-3", title: "DS3. FRIED BANANA", category: "Dessert", price: "06,50", image: "/assets/pro-img.png", rating: 4, description: "Fried banana with honey and vanilla ice cream." },
    { id: "des-4", title: "DS4. RED BEAN MOCHI", category: "Dessert", price: "07,50", image: "/assets/pro-img.png", rating: 5, description: "Sweet red bean rice cake." },
    { id: "des-5", title: "DS5. ICE CREAM BOWL", category: "Dessert", price: "09,00", image: "/assets/pro-img.png", rating: 5, description: "Vanilla ice cream with toppings." },
     { id: "des-6", title: "DS6. SESAME BALLS", category: "Dessert", price: "06,00", image: "/assets/pro-img.png", rating: 4, description: "Deep-fried glutinous rice balls with sesame." },  
];

const MenuPage = () => {
    const categories = ["All", "Appetizer", "Soup", "Roll", "Dim Sum", "Maki", "Main Course", "Rice & Noodles", "Bento", "Drinks", "Dessert"];
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
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 gap-y-12">
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
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 gap-y-12 mb-20">
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

                    <div className="bg-white w-full max-w-[400px] lg:max-w-5xl relative z-10 overflow-hidden rounded-lg shadow-2xl animate-in fade-in zoom-in duration-300">
                        <button
                            onClick={() => setSelectedDish(null)}
                            className="absolute top-4 right-4 z-[30] text-black/40 hover:text-black transition-colors"
                        >
                            <span className="text-xl">✕</span>
                        </button>

                        <div className="flex flex-col lg:flex-row">
                            <div className="lg:w-[60%] bg-[#fcfcfc] flex items-center justify-center p-8 lg:p-16 border-b lg:border-b-0 lg:border-r border-gray-100 h-[250px] lg:h-auto">
                                <img
                                    src={selectedDish.image}
                                    alt={selectedDish.title}
                                    className="max-h-full w-auto drop-shadow-xl"
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
                                    <div className="text-[#D7443E] font-serif text-2xl italic opacity-20">
                                        味
                                    </div>
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