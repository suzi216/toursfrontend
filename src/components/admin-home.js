import { useState, Fragment, useEffect, useRef } from 'react'
import Header from '../components/core/Header'
import Link from "next/link";
import { useRouter } from "next/router";
import Footer from '../components/core/Footer';
import TourCart from './core/TourCart';
import ProductService from '@/untils/services/ProductService'
import { GiMagnifyingGlass, GiPhotoCamera, GiKnifeFork, GiTicket, GiArrowDunk } from 'react-icons/gi';

import dynamic from "next/dynamic";

const AlbaniaMap = dynamic(() => import("../components/core/Map"), {
  ssr: false,
});

const products = [
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
  {
    id: 5,
    name: 'Basic Tee',
    href: '#',
    imageSrc: 'https://tailwindcss.com/plus-assets/img/ecommerce-images/product-page-01-related-product-01.jpg',
    imageAlt: "Front of men's Basic Tee in black.",
    price: '$35',
    color: 'Black',
  }
]


const categoried = [
  { icon: GiPhotoCamera, label: 'Attractions', color: 'bg-emerald-600', link: '/attractions' },
  { icon: GiKnifeFork, label: 'Food & Drink', color: 'bg-cyan-600', link: '/gastronomy' },
  { icon: GiTicket, label: 'Experiences', color: 'bg-red-500', link: '/experiences' },
];

const formatOptionLabel = ({ label }) => (label)

export default function AdminHome() {
  const [addProduct, setAddProduct] = useState(false)
  const scrollRef = useRef(null);
  const router = useRouter();


  const [name, setName] = useState('')
  const [description, setDescription] = useState('')
  const [categories, setCategory] = useState([])
  const [size, setSize] = useState('')
  const [unitPrice, setUnitPrice] = useState('')
  const [variability, setVariability] = useState('')
  const [characteristics, setCharacteristics] = useState('')
  const [img, setImages] = useState('')

  // const [products, setProducts] = useState([])
  const [totalPages, setTotalPages] = useState(0)

  const [isClient, setIsClient] = useState(false);

  const createProduct = async (event) => {
    event.preventDefault()
    const payload = {
      name,
      description,
      categories,
      unitPrice,
      variability,
      characteristics,
      img,
      size
    }
    console.log(payload)
    let data = new FormData()

    Object.keys(payload).forEach((key) => {
      if (key === 'categories') {
        const categoryValues = payload[key].map(item => item.value); // or item.label
        data.append(key, categoryValues); // gives ["SHOES", "ACCESSORIES"]
        console.log(categoryValues)
      } else {
        data.append(key, payload[key]);
      }
    });
    const res = await ProductService.createProduct(data)
    console.log(res)
  }


  useEffect(() => {
    setIsClient(true);

    // ProductService.getAllProducts().then((response) => {
    //   console.log(response.data);
    //   const { content, totalPages } = response.data
    //   setProducts(content)
    //   setTotalPages(totalPages)
    //   // setUniversityOptions(
    //   //   response.data.map(({ id, name, country }) => {
    //   //     return { label: name, value: id, country }
    //   //   })
    //   // )
    // })
  }, [])



  return (
    <>

      <Header />

      <div className="mt-10 px-4 lg:px-10">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">

          {/* LEFT: MAP */}
          <div className="w-full relative">
            <div className="flex items-center justify-between mb-4">
              <div>
                <h1 className="text-2xl md:text-3xl font-bold text-gray-700">
                  Discover Albania on the Map
                </h1>
                <p className="text-gray-700 text-sm mt-1">
                  Click a region to reveal hidden gems, beaches & adventures
                </p>
              </div>
            </div>

            <div className="relative w-full h-[460px] rounded-3xl overflow-hidden shadow-xl bg-gray-100 ring-1 ring-gray-200">
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
                <h2 className="text-2xl font-bold text-gray-700">
                  What would you like to explore?
                </h2>
                <p className="text-gray-700 text-sm mt-1">
                  Choose a category to start your journey
                </p>
              </div>

              <div className="grid grid-cols-3 gap-7">
                {categoried.map((category) => (
                  <Link key={category.label} href={category.link}>
                    <button
                      className="group flex flex-col items-center gap-3
                  transition-all duration-300
                  hover:-translate-y-1 hover:scale-105
                  active:scale-95 focus:outline-none
                  focus-visible:ring-4 focus-visible:ring-cyan-300
                  rounded-2xl p-3"
                    >
                      <div
                        className={`${category.color}
                    w-16 h-16 rounded-2xl
                    flex items-center justify-center
                    shadow-md group-hover:shadow-xl
                    transition-all duration-300`}
                      >
                        <category.icon className="w-8 h-8 text-white" />
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


      <div className="bg-slate-50 py-12">
        <div className="max-w-7xl mx-auto px-4">

          {/* Section Header */}
          <div className="text-center mb-10">
            <h2 className="font-serif text-4xl font-bold text-gray-700">
              Book Travel Packages
            </h2>
            <p className="text-gray-700 text-sm mt-2">
              Handpicked luxury escapes & adventure deals
            </p>
          </div>

          {/* Horizontal Scroll */}
          <div className="overflow-x-auto scroll-smooth no-scrollbar">
            <div className="flex gap-6 pb-4">
              <TourCart    />
            </div>
          </div>
        </div>
      </div>


      <Footer />

    </>
  )
}


