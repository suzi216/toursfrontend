import { useState, Fragment, useEffect, useRef } from 'react'
import Header from '../components/core/Header'
import Link from "next/link";
import { useRouter } from "next/router";
import Footer from '../components/core/Footer';
import TourCart from '../components/core/TourCart';
import TourService from '@/components/utils/services/TourService';
import { GiMountainCave, GiPhotoCamera, GiKnifeFork, GiTicket, GiSeaStar, GiThunderball, GiPlainArrow } from 'react-icons/gi';

import dynamic from "next/dynamic";

const AlbaniaMap = dynamic(() => import("../components/core/Map"), {
  ssr: false,
});

const mockTours = [
  {
    id: 1,
    name: 'Basic Tee',
    href: '#',
    imageSrc: 'https://tailwindcss.com/plus-assets/img/ecommerce-images/product-page-01-related-product-01.jpg',
    imageAlt: "Front of men's Basic Tee in black.",
    price: '$35',
    color: 'Black',
  },
  {
    id: 2,
    name: 'Basic Tee',
    href: '#',
    imageSrc: 'https://tailwindcss.com/plus-assets/img/ecommerce-images/product-page-01-related-product-01.jpg',
    imageAlt: "Front of men's Basic Tee in black.",
    price: '$35',
    color: 'Black',
  },
  {
    id: 3,
    name: 'Basic Tee',
    href: '#',
    imageSrc: 'https://tailwindcss.com/plus-assets/img/ecommerce-images/product-page-01-related-product-01.jpg',
    imageAlt: "Front of men's Basic Tee in black.",
    price: '$35',
    color: 'Black',
  },
  {
    id: 4,
    name: 'Basic Tee',
    href: '#',
    imageSrc: 'https://tailwindcss.com/plus-assets/img/ecommerce-images/product-page-01-related-product-01.jpg',
    imageAlt: "Front of men's Basic Tee in black.",
    price: '$35',
    color: 'Black',
  },

]


const categoried = [
  { icon: GiPhotoCamera, label: 'Attractions', color: 'bg-emerald-600', link: '/attractions' },
  { icon: GiKnifeFork, label: 'Food & Drink', color: 'bg-cyan-600', link: '/gastronomy' },
  { icon: GiTicket, label: 'Experiences', color: 'bg-red-500', link: '/experiences' },
];


export default function AdminHome() {

  const router = useRouter();
  const [totalPages, setTotalPages] = useState(0)
  const [tours, setTours] = useState([]);

  const [isClient, setIsClient] = useState(false);
  const getTours = async () => {
    try {
      const response = await TourService.getTours();

      const content = response?.data?.content;

      setTours(content?.length ? content : mockTours);
    } catch (error) {
      console.error("Failed to fetch tours:", error);
      alert("Failed to load tours. Please try again.");
    }
  };

  const scrollToSection = () => {
    const el = document.getElementById("target-section");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  useEffect(() => {
    getTours();

    setIsClient(true);
  }, [])

  return (
    <>

      <Header />

      <div className=" bg-gradient-to-br from-gray-500 via-teal-600 to-gray-600 lg:mt-4 xl:mt-8">
        <div className="max-w-7xl mx-auto px-6 py-6 xl:py-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <h1 className="text-3xl lg:text-5xl xl:text-6xl font-serif text-yellow-200 leading-tight">
                Plan your next trip
                <br />& spirits adventure.
              </h1>

              <p className="text-white lg:text-16 xl:text-lg leading-relaxed max-w-xl">
                Experience Albania like never before through Visit Albania’s top-rated tours, stays, and activities. Plan and book seamlessly, with zero added costs.
              </p>

              <div
                className="flex flex-col items-center mt-14 cursor-pointer group"
                onClick={scrollToSection}
              >
                <GiPlainArrow
                  size={42}
                  className="text-yellow-200 group-hover:text-yellow-300 animate-bounce mt-3 transition-colors"
                />
              </div>
            </div>


            <div className="relative">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl transform lg:translate-x-10">
                <img
                  src="https://images.pexels.com/photos/1407846/pexels-photo-1407846.jpeg?auto=compress&cs=tinysrgb&w=800"
                  alt="Wine making"
                  className="w-full lg:h-[360px] xl:h-[500px] object-cover"
                />
              </div>
              <div className="absolute -left-6 top-1/4 bg-white rounded-2xl p-3 shadow-xl hidden lg:block">
                <img
                  src="https://images.pexels.com/photos/774455/pexels-photo-774455.jpeg?auto=compress&cs=tinysrgb&w=300"
                  alt="Wine tasting"
                  className="xl:w-32 xl:h-40 lg:w-24 lg:h-30 object-cover rounded-xl"
                />
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8 lg:mt-8 xl:mt-16 pt-10 border-t border-white/20">
            <div className="text-center space-y-3">
              <div className="flex justify-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <GiSeaStar key={i} className="w-5 h-5 fill-orange-400 text-orange-400" />
                ))}
              </div>
              <p className="text-white font-medium">
                Leading platform for discovering Albania’s
                <br />
                beauty crafted for curious travelers and adventure seekers.
              </p>
            </div>

            <div className="text-center space-y-3">
              <div className="flex justify-center">
                <GiMountainCave className="w-6 h-6 text-red-400" />
              </div>
              <p className="text-white font-medium">
                500+ must-visit sites, tours & adventures
                <br />
                handpicked across Albania.
              </p>
            </div>

            <div className="text-center space-y-3">
              <div className="flex justify-center">
                <GiThunderball className="w-6 h-6 text-yellow-400" />
              </div>
              <p className="text-white font-medium">
                Easy booking with no fees and free
                <br />
                cancellation.
              </p>
            </div>
          </div>
        </div>
      </div>


      <div id="target-section" className="bg-slate-50 lg:py-8 xl:py-12">
        <div className="max-w-7xl mx-auto px-4">

          {/* Section Header */}
          <div className="text-center mb-2 lg:mb-6 xl:mb-10">
            <h2 className="font-serif lg:text-3xl xl:text-4xl font-bold text-gray-700">
              Book Travel Packages
            </h2>
            <p className="text-gray-700 text-sm mt-1">
              Handpicked luxury escapes & adventure deals
            </p>
          </div>

          {/* Horizontal Scroll */}
          <div className="overflow-x-auto scroll-smooth no-scrollbar">
            <div className="flex gap-6 pb-4">
              <TourCart tours={tours} isPopular={tours.isPopular} />
            </div>
          </div>
        </div>
      </div>

      <div className="mt-6 px-10">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-2 ">

          {/* LEFT: MAP */}
          <div className="w-full relative">
            <div className="flex items-center justify-between mb-6">
              <div>
                <h1 className="text-xl xl:text-3xl font-bold text-gray-700">
                  Discover Albania on the Map
                </h1>
                <p className="text-gray-700 text-16 mt-1">
                  Click a region to reveal hidden gems, beaches & adventures
                </p>
              </div>
            </div>

            <div className="relative w-5/6 h-[380px] rounded-3xl overflow-hidden shadow-xl bg-gray-100 ring-1 ring-gray-200">
              {isClient ? (
                <AlbaniaMap key="map" />
              ) : (
                <div className="h-full flex items-center justify-center text-gray-400 animate-pulse">
                  Loading interactive map...
                </div>
              )}

              {/* Soft Gradient Overlay */}
              <div className="absolute inset-0 pointer-events-none bg-gradient-to-t from-black/10 via-transparent to-transparent" />
            </div>
          </div>

          {/* RIGHT: CATEGORIES */}
          <div className="w-full flex items-center justify-center">
            <div className="bg-gradient-to-br from-white via-white to-cyan-50 rounded-3xl shadow-xl p-8 w-full max-w-lg">

              <div className="text-center mb-8">
                <h2 className="text-xl xl:text-2xl font-bold text-gray-700">
                  What would you like to explore?
                </h2>
                <p className="text-gray-700 text-14 mt-1">
                  Choose a category to start your journey
                </p>
              </div>

              <div className="grid grid-cols-3 gap-2">
                {categoried.map((category) => (
                  <Link key={category.label} href={category.link}>
                    <button
                      className="group flex flex-col items-center gap-3
                  transition-all duration-300
                  hover:-translate-y-1 hover:scale-105
                  active:scale-95 focus:outline-none
                  focus-visible:ring-4 focus-visible:ring-cyan-300
                  rounded-2xl p-2 ml-6"
                    >
                      <div
                        className={`${category.color}
                    w-16 h-16 rounded-2xl
                    flex items-center justify-center
                    shadow-md group-hover:shadow-xl
                    transition-all duration-300`}
                      >
                        <category.icon className="w-6 h-6 text-white" />
                      </div>

                      <span className="text-sm font-semibold text-gray-800 text-center group-hover:text-cyan-600 transition">
                        {category.label}
                      </span>
                    </button>
                  </Link>
                ))}
              </div>

            </div>
          </div>

        </div>
      </div>


      <Footer />

    </>
  )
}


