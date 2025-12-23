import Header from '../components/core/Header'
import Footer from '../components/core/Footer';
import React from "react";
import {
    GiCastle,
    GiRoad,
    GiMountains,
    GiHidden,
    GiWorld
} from "react-icons/gi";

export default function Attractions() {
    const attractions = [
        {
            id: 1,
            title: 'Berat',
            subtitle: '"City of a Thousand Windows"',
            description: 'A historic town and UNESCO World Heritage site, known for its Ottoman-era architecture.',
            highlights: [
                'Berat Castle: Perched on a hill, with old houses still inhabited inside its walls.',
                'Onufri Museum: Located in a church within the castle; features rich religious iconography.',
                'Mangalem Quarter: Known for its white-washed houses and distinctive windows.',
                'Holy Trinity Church: A medieval Byzantine-era church in the Kalaja (castle) district.',
                "St. Michael's Church: Small hilltop chapel with typical Byzantine architecture."
            ],
            imageUrl: 'https://images.pexels.com/photos/10436262/pexels-photo-10436262.jpeg?auto=compress&cs=tinysrgb&w=800',
            icon: <GiCastle className="w-6 h-6" />
        },
        {
            id: 2,
            title: 'Gjirokastër',
            subtitle: '"Stone City"',
            description: 'Another UNESCO site, built mostly of stone, with Ottoman-style houses on a hillside.',
            highlights: [
                'Gjirokastër Fortress (Castle): Built in the 12th century; houses a military museum.',
                'Historic Stone Houses: Roofs are typically slate; the "monumental houses" are a key part of its charm.',
                'Gjirokastër National Folk Festival: Every five years at the castle, celebrating traditional Albanian music and dance.'
            ],
            imageUrl: 'https://images.pexels.com/photos/18882472/pexels-photo-18882472.jpeg?auto=compress&cs=tinysrgb&w=800',
            icon: <GiMountains classNamse="w-6 h-6" />
        },
        {
            id: 3,
            title: 'Butrint National Park',
            subtitle: 'Nature & Archaeology Combined',
            description: 'A national park in southern Albania that combines nature and a major archaeological site.',
            highlights: [
                'Ancient City of Butrint: Ruins from Greek, Roman, Byzantine, and Venetian periods.',
                'Roman Theatre, Forum, Aqueduct: Key architectural remains.',
                'Baptistery of Butrint: With a mosaic floor, from the 6th century.',
                'Biodiversity: The park supports ~1,200 species of plants and animals.'
            ],
            imageUrl: 'https://images.pexels.com/photos/10436262/pexels-photo-10436262.jpeg?auto=compress&cs=tinysrgb&w=800',
            icon: <GiRoad className="w-6 h-6" />
        },
        {
            id: 4,
            title: 'Blue Eye',
            subtitle: 'Syri i Kaltër',
            description: 'A stunning natural spring in southern Albania with incredibly clear, deep blue water.',
            highlights: [
                'The depth is dramatic: divers have gone to ~50 m, but the full depth is unknown.',
                'The area is protected as a natural monument (about 1.8 km²).',
                'There is a viewing deck above the spring; visitors often hike in from Sarandë or Gjirokastër.',
                'Entrance fees apply (and it\'s recommended to go early to avoid crowds).'
            ],
            imageUrl: 'https://images.pexels.com/photos/18882472/pexels-photo-18882472.jpeg?auto=compress&cs=tinysrgb&w=800',
            icon: <GiHidden className="w-6 h-6" />
        },
        {
            id: 5,
            title: 'Pëllumbas Cave',
            subtitle: 'Ancient Cave System',
            description: 'A karst cave near Tirana, part of Dajti National Park.',
            highlights: [
                'The cave is about 360 m long, with a vertical drop of ~45 m.',
                'It has archaeological importance: evidence of ancient human activity and extinct cave bears.',
                'The spot gives a nice nature + adventure feel, without being extremely remote.'
            ],
            imageUrl: 'https://images.pexels.com/photos/10436262/pexels-photo-10436262.jpeg?auto=compress&cs=tinysrgb&w=800',
            icon: <GiMountains className="w-6 h-6" />
        },
        {
            id: 6,
            title: 'Himarë Castle',
            subtitle: 'Ancient Coastal Fortress',
            description: 'A historic castle in the town of Himarë, on the Albanian Riviera.',
            highlights: [
                'Very old fortifications, possibly from the 5th–4th century BC.',
                'Several Orthodox churches inside, including Panagia Kassopitra and All Saints.',
                'Offers great views of the sea and the coastline.'
            ],
            imageUrl: 'https://images.pexels.com/photos/10436262/pexels-photo-10436262.jpeg?auto=compress&cs=tinysrgb&w=800',
            icon: <GiCastle className="w-6 h-6" />
        },
        {
            id: 7,
            title: 'Lake Ohrid',
            subtitle: 'Pogradec Area',
            description: 'A very old, deep lake shared between Albania and North Macedonia.',
            highlights: [
                "The lake's ecosystem is unique, with many endemic species.",
                'The Albanian side (Pogradec area) is very scenic — perfect for relaxing or exploring nature.'
            ],
            imageUrl: 'https://images.pexels.com/photos/18882472/pexels-photo-18882472.jpeg?auto=compress&cs=tinysrgb&w=800',
            icon: <GiWorld className="ws-6 h-6" />
        }
    ];

    return (

        <>
            <Header />
            <div className="min-h-screen bg-gradient-to-br from-teal-50 via-white to-teal-50">

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                    <div className="grid gap-12">
                        {attractions.map((attraction, index) => (
                            <div
                                key={attraction.id}
                                className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-8 bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300`}
                            >
                                <div className="lg:w-1/3">
                                    <div className="h-[250px] xl:h-[300px] relative overflow-hidden">
                                        <img
                                            src={attraction.imageUrl}
                                            alt={attraction.title}
                                            className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                                        />
                                        <div className="absolute top-4 left-4 bg-gradient-to-r from-teal-600 to-teal-700 text-white px-4 py-2 rounded-full flex items-center gap-2 shadow-lg">
                                            {attraction.icon}
                                            <span className="font-semibold">#{attraction.id}</span>
                                        </div>
                                    </div>
                                </div>

                                <div className="w-2/3 p-3 xl:p-4 flex flex-col justify-center">
                                    <h2 className="xl:text-3xl text-base font-bold text-gray-900 mb-1">
                                        {attraction.title}
                                    </h2>
                                    <p className="text-teal-600 xl:text-lg text-base font-medium mb-1 italic">
                                        {attraction.subtitle}
                                    </p>
                                    <p className="text-gray-700 xl:text-lg text-base mb-2 leading-relaxed">
                                        {attraction.description}
                                    </p>

                                    <div className="space-y-3">
                                        <h3 className="xl:text-lg text-base font-semibold text-gray-900 mb-1">Highlights:</h3>
                                        <ul className="space-y-">
                                            {attraction.highlights.map((highlight, idx) => (
                                                <li key={idx} className="flex items-start gap-3 text-gray-700 xl:text-lg text-13">
                                                    <div className="w-2 h-2 rounded-full bg-teal-600 mt-2 flex-shrink-0"></div>
                                                    <span className="leading-relaxed">{highlight}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="mt-16 bg-gradient-to-r from-teal-600 to-teal-700 rounded-2xl p-10 text-white shadow-xl">
                        <h2 className="text-xl xl:text-3xl font-bold mb-6">Why These Are Special</h2>
                        <div className="grid md:grid-cols-2 gap-6 text-teal-50">
                            <div>
                                <h3 className="font-semibold text-base xl:text-xl mb-2 text-white">Diverse Experiences</h3>
                                <p className="leading-relaxed">These destinations range from medieval castles to natural wonders.</p>
                            </div>
                            <div>
                                <h3 className="font-semibold text-base xl:text-xl mb-2 text-white">Cultural Richness</h3>
                                <p className="leading-relaxed">Berat and Gjirokastër reflect Albania's historical depth.</p>
                            </div>
                            <div>
                                <h3 className="font-semibold text-base xl:text-xl mb-2 text-white">Natural Beauty</h3>
                                <p className="leading-relaxed">The Blue Eye and Butrint offer breathtaking natural landscapes.</p>
                            </div>
                            <div>
                                <h3 className="font-semibold text-base xl:text-xl mb-2 text-white">Accessibility</h3>
                                <p className="leading-relaxed">Many attractions are easily reachable from major cities.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />

        </>
    );
}

