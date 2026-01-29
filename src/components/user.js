import { useState, Fragment, useEffect, useRef } from 'react'
import Header from './core/Header'
import Link from "next/link";
import { useRouter } from "next/router";
import Footer from './core/Footer';
import TourCart from './core/TourCart';
import TourService from '@/components/utils/services/TourService';
import { GiMountainCave, GiPhotoCamera, GiKnifeFork, GiTicket, GiSeaStar, GiThunderball, GiPlainArrow } from 'react-icons/gi';

import dynamic from "next/dynamic";

const AlbaniaMap = dynamic(() => import("./core/Map"), {
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

]


const categoried = [
  { icon: GiPhotoCamera, label: 'Attractions', color: 'bg-emerald-600', link: '/attractions' },
  { icon: GiKnifeFork, label: 'Food & Drink', color: 'bg-cyan-600', link: '/gastronomy' },
  { icon: GiTicket, label: 'Experiences', color: 'bg-red-500', link: '/experiences' },
];
export default function UserHome() {

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

  const scrollToSection = (e) => {
    const el = document.getElementById(e);
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

      <div className=" bg-gradient-to-br from-gray-500 via-teal-600 to-gray-600 ">
        <div className="max-w-7xl mx-auto px-6 py-6 xl:py-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">

            <div className="space-y-6 text-center max-w-3xl mx-auto">
              <h1 className="text-3xl md:text-4xl xl:text-6xl font-serif font-bold leading-tight text-white">
                Travel{" "}
                <span className="bg-gradient-to-r from-yellow-200 to-yellow-400 bg-clip-text text-transparent">
                  Albania
                </span>
                , Your Way
              </h1>

              <p className="text-gray-200 text-sm md:text-base leading-relaxed max-w-2xl mx-auto">
                Discover Albania like never before with handpicked tours, authentic stays,
                and unforgettable local experiences.
              </p>

              <div className="flex flex-col sm:flex-row justify-center gap-6 mt-12">
                <button
                  onClick={() => scrollToSection("tours")}
                  className="px-10 py-4 rounded-full bg-yellow-300 text-gray-900 font-semibold text-sm
      hover:bg-yellow-400 hover:scale-105 transition-all duration-300 shadow-lg shadow-yellow-300/30"
                >
                  Explore Tours
                </button>

                <button
                  onClick={() => scrollToSection("customize")}
                  className="px-10 py-4 rounded-full border-2 border-yellow-300 text-yellow-300 font-semibold text-sm
      hover:bg-yellow-300 hover:text-gray-900 hover:scale-105 transition-all duration-300"
                >
                  Customize Your Trip
                </button>
              </div>
            </div>



            <div className="relative">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl transform lg:translate-x-6">
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

          <div className="grid md:grid-cols-3 gap-8 lg:mt-7 xl:mt-12 pt-6 border-t border-white/20">
            <div className="text-center space-y-2">
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


      <div id="tours" className="bg-slate-50 py-4 xl:py-10">
        <div className="max-w-7xl mx-auto px-4">

          {/* Section Header */}
          <div className="text-center my-2 xl:mb-6">
            <h2 className="font-serif text-2xl xl:text-4xl font-bold text-gray-700">
              Book Travel Packages
            </h2>

          </div>

          {/* Horizontal Scroll */}
          <div className="overflow-x-auto scroll-smooth no-scrollbar">
            <div className="flex gap-6 ">
              <TourCart tours={tours} isPopular={tours.isPopular} />
            </div>
          </div>
        </div>
      </div>

      <div id="customize" className="bg-slate-50 py-4 ">
        <div className="max-w-7xl mx-auto px-4">

          {/* Section Header */}
          <div className="text-center  xl:mb-6">
            <h2 className="font-serif text-2xl xl:text-4xl font-bold text-gray-700">
              Customize Your Tour
            </h2>
          </div>

          {/* Horizontal Scroll */}
          <div >
            <div className="max-w-4xl mx-auto px-4">
              <p className="text-center mb-4 text-sm">
                Share your plan — we’ll craft the perfect experience in 2–3 days
              </p>

              <form className="grid grid-cols-1 sm:grid-cols-3 gap-4 backdrop-blur rounded-xl">
                {/* Destination */}
                <div>
                  <label className="block text-xs mb-1">
                    Destination
                  </label>
                  <input
                    type="text"
                    placeholder="Tirana, Saranda"
                    className="w-full rounded-md  px-3 py-2 text-xs
          border border-gray-700 focus:border-yellow-300 focus:ring-1 focus:ring-yellow-300 outline-none"
                  />
                </div>

                {/* Days */}
                <div>
                  <label className="block text-xs  mb-1">
                    Days
                  </label>
                  <input
                    type="number"
                    min="1"
                    placeholder="5"
                    className="w-full rounded-md  px-3 py-2 text-xs
          border border-gray-700 focus:border-yellow-300 focus:ring-1 focus:ring-yellow-300 outline-none"
                  />
                </div>

                {/* People */}
                <div>
                  <label className="block text-xs mb-1">
                    People
                  </label>
                  <input
                    type="number"
                    min="1"
                    placeholder="2"
                    className="w-full rounded-md  px-3 py-2 text-xs
          border border-gray-700 focus:border-yellow-300 focus:ring-1 focus:ring-yellow-300 outline-none"
                  />
                </div>

                {/* Budget */}
                <div>
                  <label className="block text-xs mb-1">
                    Budget €
                  </label>
                  <input
                    type="number"
                    placeholder="1000"
                    className="w-full rounded-md px-3 py-2 text-xs
          border border-gray-700 focus:border-yellow-300 focus:ring-1 focus:ring-yellow-300 outline-none"
                  />
                </div>

                {/* Email */}
                <div>
                  <label className="block text-xs mb-1">
                    Email
                  </label>
                  <input
                    type="email"
                    placeholder="you@example.com"
                    className="w-full rounded-md px-3 py-2 text-xs
          border border-gray-700 focus:border-yellow-300 focus:ring-1 focus:ring-yellow-300 outline-none"
                  />
                </div>

                {/* Phone */}
                <div>
                  <label className="block text-xs  mb-1">
                    Phone
                  </label>
                  <input
                    type="tel"
                    placeholder="+355 69 000 0000"
                    className="w-full rounded-md  px-3 py-2 text-xs
          border border-gray-700 focus:border-yellow-300 focus:ring-1 focus:ring-yellow-300 outline-none"
                  />
                </div>

                {/* Submit */}
                <div className="sm:col-span-3 flex justify-center mt-2">
                  <button
                    type="submit"
                    className="px-10 py-2.5 rounded-full bg-yellow-300 text-gray-900 text-sm font-semibold
          hover:bg-yellow-400 transition-all duration-300 shadow-md shadow-yellow-300/20"
                  >
                    Send Request
                  </button>
                </div>
              </form>
            </div>
          </div>



        </div>

      </div>



      <div className="mt-6 px-10">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-2 ">

          {/* LEFT: MAP */}
          <div className='flex flex-col '>

            <div className="w-full relative ">
              <div className="flex items-center justify-between mb-2">
                <div>

                  <h1 className="text-lg xl:text-2xl font-bold text-gray-700 my-2 pl-10">
                    Click a region to explore hidden gems !
                  </h1>

                </div>
              </div>

              <div className="relative w-fu; lg:w-5/6 h-[380px] rounded-3xl overflow-hidden shadow-xl bg-gray-100 ring-1 ring-gray-200">
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
                  rounded-2xl p-2 lg:ml-6"
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


