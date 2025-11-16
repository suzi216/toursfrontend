import Footer from '@/components/core/Footer';
import Header from '../components/core/Header'

import {GiPositionMarker,GiMultipleTargets,GiHighGrass,GiKnifeFork,GiShield,GiSteeringWheel,GiConversation} from "react-icons/gi";

function Experience() {
  const sections = [
    {
      icon: GiPositionMarker,
      title: "First Impressions",
      content: "Most visitors describe Albania as surprisingly beautiful, underrated, and incredibly welcoming. Many expect it to be similar to other Balkan countries, but end up saying it feels unique, authentic, and unspoiled by mass tourism."
    },
    {
      icon: GiMultipleTargets,
      title: "Hospitality & Local People",
      content: "Albanians are known for warm hospitality—many travelers mention being invited for coffee or homemade raki by strangers. English is widely spoken among younger people, and locals often go out of their way to help with directions, transport, or recommendations."
    }
  ];

  const quotes = [
    "I can't believe this place isn't world-famous yet.",
    "It feels like discovering Europe from 30 years ago, in the best way.",
    "The people make the whole experience unforgettable."
  ];

  return (
    <>
    < Header />
    <div className="min-h-screen bg-gradient-to-br from-teal-50 to-gray-50">
      <div className="relative bg-gradient-to-r from-teal-600 to-teal-700 text-white overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: 'url(https://images.pexels.com/photos/12974928/pexels-photo-12974928.jpeg?auto=compress&cs=tinysrgb&w=1600)',
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}></div>
        </div>
        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">The Albania Experience</h1>
            <p className="text-xl md:text-2xl text-teal-100 max-w-3xl mx-auto">
              What Travelers Say About Europe's Hidden Gem
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {sections.map((section, index) => (
            <div key={index} className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow">
              <div className="flex items-start space-x-4">
                <div className="bg-gradient-to-br from-teal-600 to-teal-700 p-3 rounded-lg">
                  <section.icon className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-700 mb-3">{section.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{section.content}</p>
                </div>
              </div>
            </div>
          ))}
        </div>



        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <div className="bg-white rounded-xl shadow-lg p-8">
            <div className="bg-gradient-to-br from-teal-600 to-teal-700 p-3 rounded-lg w-fit mb-4">
              <GiHighGrass className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-gray-700 mb-3">Nature & Outdoor</h3>
            <p className="text-gray-600 mb-4">
              The Albanian Riviera offers crystal-clear waters and dramatic cliffs. The Accursed Mountains provide Europe's most dramatic unknown range for hiking enthusiasts.
            </p>
            <div className="mt-6">
              <img
                src="https://images.pexels.com/photos/19743519/pexels-photo-19743519.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt="Albanian nature"
                className="w-full h-48 object-cover rounded-lg"
              />
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-8">
            <div className="bg-gradient-to-br from-teal-600 to-teal-700 p-3 rounded-lg w-fit mb-4">
              <GiKnifeFork className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-gray-700 mb-3">Food & Drink</h3>
            <p className="text-gray-600 mb-4">
              Fresh seafood on the coast, mountain cuisine in the north with hearty stews and grilled meats. Traditional dishes like byrek, tavë kosi, and fërgesë at very affordable prices.
            </p>
            <div className="mt-6">
              <img
                src="https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt="Albanian food"
                className="w-full h-48 object-cover rounded-lg"
              />
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-8">
            <div className="bg-gradient-to-br from-teal-600 to-teal-700 p-3 rounded-lg w-fit mb-4">
              <GiShield className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-gray-700 mb-3">Safety & Value</h3>
            <p className="text-gray-600 mb-4">
              Travelers report feeling very safe, even walking at night. Petty crime is low, and locals are protective of tourists. Albania offers excellent value with affordable hotels and meals.
            </p>
            <div className="mt-6 space-y-2">
              <div className="flex items-center justify-between bg-teal-50 p-3 rounded-lg">
                <span className="text-gray-700 font-medium">Hotels</span>
                <span className="text-teal-700 font-bold">Affordable</span>
              </div>
              <div className="flex items-center justify-between bg-teal-50 p-3 rounded-lg">
                <span className="text-gray-700 font-medium">Meals</span>
                <span className="text-teal-700 font-bold">Inexpensive</span>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-lg p-8 mb-16">
          <div className="flex items-start space-x-4 mb-6">
            <div className="bg-gradient-to-br from-teal-600 to-teal-700 p-3 rounded-lg">
              <GiSteeringWheel className="w-6 h-6 text-white" />
            </div>
            <div className="flex-1">
              <h3 className="text-2xl font-bold text-gray-700 mb-3">Cultural & Historical Impressions</h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                Travelers note Albania's fascinating mix of Ottoman, Roman, Greek, and Communist-era history. Sites like Berat, Gjirokastër, and Butrint are considered must-see cultural gems. Visitors are often fascinated by the legacy of bunkers and the story of isolation under communism.
              </p>
              <div className="grid md:grid-cols-3 gap-4 mt-6">
                <img
                  src="https://images.pexels.com/photos/3214995/pexels-photo-3214995.jpeg?auto=compress&cs=tinysrgb&w=600"
                  alt="Historical site"
                  className="w-full h-48 object-cover rounded-lg"
                />
                <img
                  src="https://images.pexels.com/photos/3214993/pexels-photo-3214993.jpeg?auto=compress&cs=tinysrgb&w=600"
                  alt="Ottoman architecture"
                  className="w-full h-48 object-cover rounded-lg"
                />
                <img
                  src="https://images.pexels.com/photos/13031607/pexels-photo-13031607.jpeg?auto=compress&cs=tinysrgb&w=600"
                  alt="Albanian culture"
                  className="w-full h-48 object-cover rounded-lg"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-r from-teal-600 to-teal-700 rounded-xl shadow-lg p-12 text-white">
          <div className="text-center mb-8">
            <GiConversation className="w-12 h-12 mx-auto mb-4 opacity-50" />
            <h2 className="text-3xl font-bold mb-2">What Travelers Say</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {quotes.map((quote, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-lg p-6 hover:bg-white/20 transition-colors">
                <p className="text-lg italic text-center">&ldquo;{quote}&rdquo;</p>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-16 bg-white rounded-xl shadow-lg p-8">
          <h3 className="text-2xl font-bold text-gray-700 mb-6 text-center">Transportation & Getting Around</h3>
          <div className="grid md:grid-cols-3 gap-6 text-center">
            <div className="p-4">
              <div className="text-4xl mb-3">🚌</div>
              <h4 className="font-bold text-gray-700 mb-2">Buses</h4>
              <p className="text-gray-600 text-sm">Cheap but not always frequent</p>
            </div>
            <div className="p-4">
              <div className="text-4xl mb-3">🚗</div>
              <h4 className="font-bold text-gray-700 mb-2">Car Rental</h4>
              <p className="text-gray-600 text-sm">Popular for exploring freely</p>
            </div>
            <div className="p-4">
              <div className="text-4xl mb-3">🛣️</div>
              <h4 className="font-bold text-gray-700 mb-2">Coastal Roads</h4>
              <p className="text-gray-600 text-sm">Narrow but incredibly scenic</p>
            </div>
          </div>
        </div>
      </div>

    </div>
    < Footer/>
    </>
  );
}

export default Experience;
