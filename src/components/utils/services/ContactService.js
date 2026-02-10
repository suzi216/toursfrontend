import API from '../API'

// const ContactApi = API("http://localhost:8080")
const ContactApi = API("https://tours-ff09.onrender.com")


const ContactService = {
    createEmail: (data) => {
        return ContactApi.post('/api/contact', data);
    },
    CreateCustomTourRequest: (data) => {
        return ContactApi.post('/api/contact/custom-tour', data);
    },

}

export default ContactService