import API from '../API'

const TourApi = API("http://localhost:8080")


const TourService = {

  getCities: (qs) => {
    return TourApi.get(`/api/universities/cities${qs ? `?${qs}` : ''}`)
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

  getAnnouncements: (qs) => {
    return TourApi.get(`/api/university-announcements${qs ? `?${qs}` : ''}`)
  }
}

export default TourService