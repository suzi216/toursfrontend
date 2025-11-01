import { useState, Fragment, useEffect, useRef } from 'react'
import Input from '../components/core/Input'
import MultiSelectInput from '../components/core/MultiSelectInput'
import DiscoverAlbaniaLogo from '../components/core/Logo'
import ProductService from '@/untils/services/ProductService'
import { Bars3Icon, MagnifyingGlassIcon, ShoppingBagIcon, XMarkIcon } from '@heroicons/react/24/outline'
import { categoryOptions } from '../constants/filter'
import { GiMagnifyingGlass, GiPhotoCamera, GiCarWheel, GiCalendar, GiSpookyHouse, GiKnifeFork, GiTicket } from 'react-icons/gi';
import { HiArrowLeft, HiArrowRight } from "react-icons/hi2";


// import AlbaniaMap from '../components/core/Map'

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

const navigation = {

  pages: [
    { name: 'Home', href: '/' },
    { name: 'Find tours', href: 'tours' },
    { name: 'Places to go', href: 'blogs' },
    { name: 'Contact', href: 'contact' },
  ],
}

const categoried = [
  { icon: GiPhotoCamera, label: 'Attractions', color: 'bg-emerald-600' },
  { icon: GiCarWheel, label: 'Trips', color: 'bg-rose-600' },
  { icon: GiCalendar, label: 'Events', color: 'bg-emerald-600' },
  { icon: GiSpookyHouse, label: 'Hotels', color: 'bg-red-500' },
  { icon: GiKnifeFork, label: 'Food & Drink', color: 'bg-cyan-600' },
  { icon: GiTicket, label: 'Experiences', color: 'bg-amber-500' },
];

const formatOptionLabel = ({ label }) => (label)

export default function AdminHome() {
  const [addProduct, setAddProduct] = useState(false)
  const scrollRef = useRef(null);

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
      <div className='mx-3'>
        <header className="relative bg-white">

          <nav aria-label="Top" className="mx-auto  px-4 sm:px-6 lg:px-8">

            <div className="border-b border-gray-200">

              <div className="flex h-28 items-center">

                <div className="hidden lg:block lg:self-stretch">

                  <div className="flex h-full space-x-8">
                    < DiscoverAlbaniaLogo />

                  </div>
                </div>

                <div className="ml-auto flex items-center">
                  {/* Search */}
                  <div className="flex lg:ml-6">
                    <a href="#" className="p-2 text-gray-400 hover:text-gray-500">
                      <span className="sr-only">Search</span>
                      <MagnifyingGlassIcon aria-hidden="true" className="size-6" />
                    </a>
                  </div>
                  <div className="flex h-full space-x-8">
                    {navigation.pages.map((page) => (
                      <a
                        key={page.name}
                        href={page.href}
                        className="flex items-center text-2xl lg:ml-8 font-medium  font-bold text-teal-900 hover:text-gray-800"
                      >
                        {page.name}
                      </a>
                    ))}
                  </div>


                </div>
              </div>
            </div>

          </nav>

        </header>

        <div className='flex justify-center mt-10 p-2'>

          <div className="w-full">
            {isClient ? (
              <AlbaniaMap key="map" />
            ) : (
              <div
                key="placeholder"
                className="flex items-center justify-center  text-gray-400"
              >
                Loading map...
              </div>
            )}
          </div>

          <div className=" bg-gradient-to-br   flex items-center justify-center w-full">
            <div className="w-full max-w-lg space-y-8">
              {/* Search Bar */}
              <div className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="flex items-center gap-4 p-5">
                  <GiMagnifyingGlass className="w-6 h-6 text-gray-400 flex-shrink-0" strokeWidth={2} />
                  <input
                    type="text"
                    placeholder="Search destinations"
                    className="flex-1 text-lg text-gray-800 placeholder-gray-400 bg-transparent border-none outline-none"
                  />
                </div>
              </div>

              {/* Categories Grid */}
              <div className="bg-white rounded-3xl shadow-lg p-8">
                <div className="grid grid-cols-3 gap-8">
                  {categoried.map((category) => (
                    <button
                      key={category.label}
                      className="flex flex-col items-center gap-3 group transition-transform duration-200 hover:scale-105 active:scale-95"
                    >
                      <div className={`${category.color} w-16 h-16 rounded-full flex items-center justify-center shadow-md group-hover:shadow-lg transition-shadow duration-200`}>
                        <category.icon className="w-8 h-8 text-white" strokeWidth={2} />
                      </div>
                      <span className="text-sm font-semibold text-gray-800">
                        {category.label}
                      </span>
                    </button>
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
              <div className="flex gap-x-6 sm:gap-x-6 lg:gap-x-8">
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
                    <h2 className="text-2xl font-bold text-gray-900">
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
                    <button className="w-full  bg-gradient-to-r from-teal-600 to-teal-700 hover:bg-emerald-800 text-white font-semibold py-4 px-6 rounded-lg transition-colors duration-200 shadow-md hover:shadow-lg">
                      More information
                    </button>

                  </div>

                ))}
              </div>
            </div>
          </div>
        </div>

        {addProduct &&
          <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-50 bg-white p-4 shadow-lg w-2/4 h-3/5">
            <div className='flex flex-row items-center justify-between '>
              <h3 className='m-4'>Add a New Product</h3>

              <div>
                <button className='font-bold' onClick={() => setAddProduct(!addProduct)}> X</button>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-5 w-full md:flex-1">
              <Input
                label={'Name' + '*'}
                placeholder={'Name'}
                value={name}
                onChange={setName}
                backgroundColor=" "
              />
              <Input
                label={'Description' + '*'}
                placeholder={'Description'}
                value={description}
                onChange={setDescription}
                backgroundColor=" bg-opacity-20"
              />
              <Input
                label={'Unit Price' + '*'}
                placeholder={'Unit Price'}
                value={unitPrice}
                onChange={setUnitPrice}
                backgroundColor=" bg-opacity-20"
              />
              <Input
                label={'Characteristics' + '*'}
                placeholder={'Characteristics'}
                value={characteristics}
                onChange={setCharacteristics}
                backgroundColor=" bg-opacity-20"
              />
              <Input
                label={'Size' + '*'}
                placeholder={'Size'}
                value={size}
                onChange={setSize}
                backgroundColor=" bg-opacity-20"
              />

              <MultiSelectInput
                backgroundColor="#F0FBFF"
                id="language"
                placeholder={'Category'}
                selected={categories}
                onSelect={(value) => {
                  setCategory(value)
                }}
                options={categoryOptions}
                className="flex-1 mb-3"
                formatOptionLabel={formatOptionLabel}
              />


              <Input
                label={'Variability' + '*'}
                placeholder={'Variability'}
                value={variability}
                onChange={setVariability}
                backgroundColor=" bg-opacity-20"
              />

              <Input
                label={'Images' + '*'}
                placeholder={'Images'}
                value={img}
                onChange={setImages}
                backgroundColor=" bg-opacity-20"
              />
            </div>

            <div className='mt-5'>
              <button
                type="submit"
                className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-1 px-4 rounded shadow"
                onClick={createProduct}
              >
                Create Product
              </button>
            </div>

          </div>
        }
      </div>
    </>
  )
}


