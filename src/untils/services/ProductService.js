import axios from 'axios'

const baseURL = process.env.NEXT_PUBLIC_PRODUCT_API_URL

// Create an Axios instance with default headers
const ProductApi = axios.create({
  baseURL,
  headers: {
    // 'Content-Type': 'application/json', // Optional: uncomment if needed
    'Access-Control-Allow-Origin': '*',
  },
})

const ProductService = {

    createProduct: (data) => {
        return ProductApi.post(`/api/products`, data, {
            headers: {
              accept: 'application/json',
              'Content-Type': `multipart/form-data;`
            }
          })
      },
      getAllProducts: () => {
        return ProductApi.get('/api/products')
      }
}

export default ProductService;