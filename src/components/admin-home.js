import { useState, Fragment,useEffect } from 'react'
import Input from '../components/core/Input'
import MultiSelectInput from '../components/core/MultiSelectInput'
import ProductService from '@/untils/services/ProductService'
import { Bars3Icon, MagnifyingGlassIcon, ShoppingBagIcon, XMarkIcon } from '@heroicons/react/24/outline'
import { categoryOptions } from '../constants/filter'
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
    id: 1,
    name: 'Basic Tee',
    href: '#',
    imageSrc: 'https://tailwindcss.com/plus-assets/img/ecommerce-images/product-page-01-related-product-01.jpg',
    imageAlt: "Front of men's Basic Tee in black.",
    price: '$35',
    color: 'Black',
  },
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
    id: 1,
    name: 'Basic Tee',
    href: '#',
    imageSrc: 'https://tailwindcss.com/plus-assets/img/ecommerce-images/product-page-01-related-product-01.jpg',
    imageAlt: "Front of men's Basic Tee in black.",
    price: '$35',
    color: 'Black',
  },
  {
    id: 1,
    name: 'Basic Tee',
    href: '#',
    imageSrc: 'https://tailwindcss.com/plus-assets/img/ecommerce-images/product-page-01-related-product-01.jpg',
    imageAlt: "Front of men's Basic Tee in black.",
    price: '$35',
    color: 'Black',
  },
  // More products...
]

const navigation = {

  pages: [
    { name: 'Clothes', href: 'clothes' },
    { name: 'Beauty', href: 'beauty' },
    { name: 'Accessories', href: 'accessories' },
    { name: 'Sports', href: 'sports' },
    { name: 'Shoes', href: 'shoes' },
  ],
}

const formatOptionLabel = ({ label }) => (label)

export default function AdminHome() {
  const [addProduct, setAddProduct] = useState(false)

  const [name, setName] = useState('')
  const [description, setDescription] = useState('')
  const [categories, setCategory] = useState([])
  const [size, setSize] = useState('')
  const [unitPrice, setUnitPrice] = useState('')
  const [variability, setVariability] = useState('')
  const [characteristics, setCharacteristics] = useState('')
  const [img, setImages] = useState('')

  const [products, setProducts] = useState([])
  const [totalPages, setTotalPages] = useState(0)

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
    
    ProductService.getAllProducts().then((response) => {
      console.log(response.data);
      const { content, totalPages } = response.data
      setProducts(content)
      setTotalPages(totalPages)
      // setUniversityOptions(
      //   response.data.map(({ id, name, country }) => {
      //     return { label: name, value: id, country }
      //   })
      // )
    })
  }, [])


  
  return (
    <>
      ADMINPAGE

      <header className="relative bg-white">
        <nav aria-label="Top" className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="border-b border-gray-200">

            <div className="flex h-16 items-center">
              <div>
                <button className='font-bold' onClick={() => setAddProduct(!addProduct)}> Add Product</button>
              </div>

              <div className="hidden lg:ml-8 lg:block lg:self-stretch">
                <div className="flex h-full space-x-8">
                  {navigation.pages.map((page) => (
                    <a
                      key={page.name}
                      href={page.href}
                      className="flex items-center text-sm font-medium text-gray-700 hover:text-gray-800"
                    >
                      {page.name}
                    </a>
                  ))}
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

                {/* Cart */}
                <div className="ml-4 flow-root lg:ml-6">
                  <a href="#" className="group -m-2 flex items-center p-2">
                    <ShoppingBagIcon
                      aria-hidden="true"
                      className="size-6 shrink-0 text-gray-400 group-hover:text-gray-500"
                    />
                    <span className="ml-2 text-sm font-medium text-gray-700 group-hover:text-gray-800">0</span>
                    <span className="sr-only">items in cart, view bag</span>
                  </a>
                </div>
                {/* Log out */}
                <div className="hidden lg:flex lg:flex-1 lg:items-center lg:justify-end lg:space-x-6">
                  <a href="#" className="text-sm font-medium text-gray-700 hover:text-gray-800">
                    Log out
                  </a>
                </div>

              </div>
            </div>
          </div>
        </nav>
      </header>

      <div className="bg-white">
        <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
          <h2 className="text-2xl font-bold tracking-tight text-gray-900">All Products</h2>
          <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
            {products.map((product) => (
              <div key={product.id} className="group relative">
                <img
                  alt={product.img}
                  src={product.imageSrc}
                  className="aspect-square w-full rounded-md bg-gray-200 object-cover group-hover:opacity-75 lg:aspect-auto lg:h-80"
                />
                <div className="mt-4 flex justify-between">
                  <div>
                    <h3 className="text-sm text-gray-700">
                      <a href={product.href}>
                        <span aria-hidden="true" className="absolute inset-0" />
                        {product.name}
                      </a>
                    </h3>
                    <p className="mt-1 text-sm text-gray-500">{product.description}</p>
                    <p className="mt-1 text-sm text-gray-500">{product.characteristics}</p>
                    <p className="mt-1 text-sm text-gray-500">{product.variability}</p>
                    

                  </div>
                  <p className="text-sm font-medium text-gray-900">{product.unitPrice}</p>
                  <p className="text-sm font-medium text-gray-900">{product.categories}</p>
                </div>
              </div>
            ))}
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
    </>
  )
}


