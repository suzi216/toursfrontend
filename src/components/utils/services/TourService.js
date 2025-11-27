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
  deletePeriod: (id) => {
    return TourApi.delete(`/api/periods/${id}`);
  },
  allProgramNames: () => {
    return TourApi.get('/api/programs/all-names')
  },
  getAnnouncements: (qs) => {
    return TourApi.get(`/api/university-announcements${qs ? `?${qs}` : ''}`)
  },
  allPrograms: (qs) => {
    return TourApi.get(`/api/programs?${qs}`)
  },
  deleteUniversity: (id) => {
    return TourApi.delete(`/api/universities/${id}`)
  }
}

export default TourService