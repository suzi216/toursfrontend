import API from '../API'

const AuthAPI = API("http://localhost:8080")
// const AuthAPI = API("https://tours-ff09.onrender.com")


const AuthService = {
  login: (payload) => {
    return AuthAPI.post('/api/auth/login', payload)
  }
}

export default AuthService
