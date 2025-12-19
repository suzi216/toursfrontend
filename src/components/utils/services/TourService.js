import API from '../API'

// const TourApi = API("http://localhost:8080")
const TourApi = API("https://tours-ff09.onrender.com")


const TourService = {

  getTours: (params) => {
    return TourApi.get('/api/tours/public', { params });
  },
  createTour: (data) => {
    return TourApi.post('/api/tours', data);
  },
  editTour: (id, data) => {
    return TourApi.put(`/api/tours/${id}`, data);
  },
  deleteTour: (id) => {
    return TourApi.delete(`/api/tours/${id}`);
  },
  getTour: (id) => {
    return TourApi.get(`/api/tours/${id}`);
  },
  getAnnouncements: (qs) => {
    return TourApi.get(`/api/university-announcements${qs ? `?${qs}` : ''}`)
  }
}

export default TourService