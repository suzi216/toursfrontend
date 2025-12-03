import { useState, Fragment, useEffect, useRef } from 'react'
import Header from '../components/core/Header'
import Link from "next/link";
import { useRouter } from "next/router";
import Footer from '../components/core/Footer';
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


      <div className="bg-white p-2 mt-5">
        <div className="mx-auto px-2">
          <div className="grid place-items-center py-5">
            <div>
              <h2 className="font-serif text-4xl font-bold text-gray-700">Book travel packages</h2>
            </div>
          </div>

          <div className="mt-6 overflow-x-auto no-scrollbar scroll-smooth">
            <div className="flex gap-x-6 sm:gap-x-2 lg:gap-x-8">
              {products.map((product) => (
                <div
                  key={product.id}
                  className="gap-2 border item-center rounded-lg flex-shrink-0 w-[280px] sm:w-[320px] lg:w-[350px]"
                >
                  <img
                    src="https://images.pexels.com/photos/533769/pexels-photo-533769.jpeg?auto=compress&cs=tinysrgb&w=800"
                    alt="Vineyard landscape"
                    className="border rounded-lg "
                  />
                  <h2 className="text-2xl font-bold text-gray-700">
                    Theth Deal
                  </h2>

                  <div className="p-2">
                    <h2 className="text-1xl font-bold text-slate-900 leading-tight">
                      Queenstown Deal<br />
                      Luxury Long Weekend<br />
                      Escape
                    </h2>

                    <p className="text-slate-600 text-base leading-relaxed">
                      Includes: Luxury accommodation Rental car, daily breakfast, Massage, Wine Tour & more
                    </p>
                  </div>


                  <div className="mb-6">
                    <div className="text-sm font-semibold text-slate-700 mb-2">Now</div>
                    <div className="flex items-baseline gap-1 mb-2">
                      <span className="text-4xl font-bold text-teal-600">$2599</span>
                      <span className="text-2xl font-semibold text-teal-600">NZD</span>
                    </div>
                    <div className="text-sm text-slate-600">
                      Save $400 Per Adult
                    </div>
                  </div>
                  <button
                    onClick={() => router.push("/checkout")}
                    className="w-full  bg-gradient-to-r from-teal-600 to-teal-700 hover:bg-emerald-800 text-white font-semibold py-4 px-6 rounded-lg transition-colors duration-200 shadow-md hover:shadow-lg">
                    More information
                  </button>

                </div>

              ))}
            </div>
          </div>
        </div>
      </div>

      <Footer />

    </>
  )
}


