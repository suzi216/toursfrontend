import API from '../API'

// const BookingApi = API("http://localhost:8080")
const BookingApi = API("https://tours-ff09.onrender.com")


const BookingService = {
 
  createBooking: (data) => {
    return BookingApi.post('/api/bookings', data);
  },
  
}

export default BookingService
