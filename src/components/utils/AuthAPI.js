import axios from 'axios'
import { AUTH_URL } from '@/constants/index.js'

const API = axios.create({
  baseURL: AUTH_URL,
  headers: {
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*'
  }
})

export default API
