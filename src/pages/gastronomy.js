import Footer from '@/components/core/Footer';
import Header from '../components/core/Header'
import { GiKnifeFork } from "react-icons/gi";

const dishes = [
  {
    name: "Fërgesë",
    subtitle: "Tirana Style",
    description:
      "Fërgesë is one of Albania's most iconic dishes, especially popular in Tirana. It's made from roasted peppers, tomatoes, cottage cheese, and spices, cooked slowly until creamy. Restaurants often serve it as a warm appetizer or a light summer dish. Its rich, rustic flavor reflects Albania's home-style cooking tradition.",
    imageUrl:
      "https://images.pexels.com/photos/4518832/pexels-photo-4518832.jpeg?auto=compress&cs=tinysrgb&w=800",
  },
  {
    name: "Tavë Kosi",
    subtitle: "Elbasan Lamb & Yogurt Bake",
    description:
      'Often called "Albania\'s national dish," Tavë Kosi features tender lamb baked in a sauce of eggs and yogurt, forming a delicate, custard-like crust. It\'s beloved for its simplicity and comforting taste. Many restaurants around Elbasan and central Albania proudly offer their own versions.',
    imageUrl:
      "https://images.pexels.com/photos/3655916/pexels-photo-3655916.jpeg?auto=compress&cs=tinysrgb&w=800",
  },
  {
    name: "Byrek",
    subtitle: "Savory Pie",
    description:
      "You'll find byrek in nearly every Albanian restaurant and bakery. Made of thin layers of dough filled with spinach, cheese, meat, or vegetables, this flaky pie is a staple of Albanian cuisine. In restaurants, it's usually served fresh and warm—crispy on the outside and soft inside.",
    imageUrl:
      "https://images.pexels.com/photos/5848427/pexels-photo-5848427.jpeg?auto=compress&cs=tinysrgb&w=800",
  },
  {
    name: "Grilled Meat",
    subtitle: "Zgara Shqiptare",
    description:
      "Restaurants across Albania are famous for their grilled platters. From qofte (meatballs) to përshesh, lamb chops, and chicken skewers, Albanian-style grilling focuses on quality meat seasoned with simple herbs. Zgara (grill) restaurants are extremely popular and offer generous portions at great value.",
    imageUrl:
      "https://images.pexels.com/photos/1639562/pexels-photo-1639562.jpeg?auto=compress&cs=tinysrgb&w=800",
  },
  {
    name: "Speca të Mbushura",
    subtitle: "Stuffed Peppers",
    description:
      "Stuffed peppers are a classic home-style dish found in many traditional restaurants. The peppers are typically filled with rice, minced meat, herbs, and tomatoes before being baked until tender. It's colorful, aromatic, and full of Mediterranean flavor.",
    imageUrl:
      "https://images.pexels.com/photos/8477849/pexels-photo-8477849.jpeg?auto=compress&cs=tinysrgb&w=800",
  },
  {
    name: "Peshk i Freskët",
    subtitle: "Fresh Fish from the Coast",
    description:
      "Along the Ionian and Adriatic coasts, restaurants serve freshly caught fish such as sea bream, sea bass, mullet, and sardines. They're usually grilled with olive oil, lemon, and sea salt. Coastal towns like Saranda, Himara, and Durrës are known for offering exceptional seafood dishes.",
    imageUrl:
      "https://images.pexels.com/photos/262959/pexels-photo-262959.jpeg?auto=compress&cs=tinysrgb&w=800",
  },
  {
    name: "Flija",
    subtitle: "Layered Crepe Cake",
    description:
      'Flija is a traditional northern Albanian specialty. It\'s made from many thin layers of batter, baked slowly and served with honey, yogurt, or fruit. While traditionally cooked outdoors over a special metal lid ("sac"), some restaurants in Shkodra and Gjakova still prepare it for guests.',
    imageUrl:
      "https://images.pexels.com/photos/1907244/pexels-photo-1907244.jpeg?auto=compress&cs=tinysrgb&w=800",
  },
  {
    name: "Trilece",
    subtitle: "Caramel Milk Cake",
    description:
      "A soft, moist dessert soaked in three types of milk and topped with caramel. Although its origins are debated, Albania has made it a signature dessert. You'll find it in cafés, bakeries, and restaurants across the country.",
    imageUrl:
      "https://images.pexels.com/photos/291528/pexels-photo-291528.jpeg?auto=compress&cs=tinysrgb&w=800",
  },
];

const highlights = [
  "Locally sourced vegetables",
  "Fresh herbs like mint, oregano, and basil",
  "High-quality olive oil",
  "Free-range meats",
  "Traditional cooking methods passed down for generations",
];

export default function Gastronomy() {
  return (
    <>
    <Header />
    <div className="min-h-screen bg-gradient-to-br from-teal-50 to-white">
      <div className="bg-gradient-to-r from-teal-600 to-teal-700 text-white py-8 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center justify-center mb-6">
            <GiKnifeFork className="w-12 h-16" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-center mb-6">
            Albanian Gastronomy
          </h1>
          <p className="text-xl md:text-2xl text-center text-teal-50 max-w-3xl mx-auto">
            Traditional & Delicious Albanian Food You'll Find in Restaurants
          </p>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-6 py-16">
        <div className="grid gap-12 md:gap-16">
          {dishes.map((dish, index) => (
            <div
              key={index}
              className={`flex flex-col ${
                index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
              } gap-8 items-center bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300`}
            >
              <div className="w-full md:w-1/2 h-80 overflow-hidden">
                <img
                  src={dish.imageUrl}
                  alt={dish.name}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="w-full md:w-1/2 p-8">
                <div className="inline-block bg-gradient-to-r from-teal-600 to-teal-700 text-white px-4 py-1 rounded-full text-sm font-semibold mb-4">
                  {index + 1}
                </div>
                <h2 className="text-3xl font-bold text-gray-800 mb-2">
                  {dish.name}
                </h2>
                <h3 className="text-lg text-teal-600 font-medium mb-4">
                  {dish.subtitle}
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  {dish.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-20 bg-gradient-to-r from-teal-600 to-teal-700 rounded-2xl p-10 text-white">
          <h2 className="text-4xl font-bold text-center mb-6">
            Why Albanian Food Stands Out
          </h2>
          <p className="text-xl text-center text-teal-50 mb-10 max-w-3xl mx-auto">
            Albanian cuisine combines Balkan flavors with Mediterranean freshness.
            Restaurants often use:
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {highlights.map((highlight, index) => (
              <div
                key={index}
                className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center hover:bg-white/20 transition-colors duration-300"
              >
                <p className="text-lg font-medium">{highlight}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-16 text-center max-w-3xl mx-auto">
          <p className="text-lg text-gray-700 leading-relaxed">
            Whether you're exploring Tirana, the Albanian Riviera, or the mountain
            towns of the north, you'll always find restaurants offering authentic
            dishes full of warmth, flavor, and tradition.
          </p>
        </div>
      </div>
    </div>

        <Footer />

    </>
  );
}
