import { createSlice } from '@reduxjs/toolkit'
import lodashGet from 'lodash/get'

const initialState = {
  educationHistory: {
    nameOfSchool: '',
    countryCode: '',
    graduationYear: '',
    degreeName: '',
    cgpa: '',
    transcript: '',
    diploma: ''
  },
  englishProficiencyExam: {
    language: '',
    dateOfExam: '',
    grade: '',
    certificate: ''
  },
  firstName: '',
  lastName: '',
  phone: '',
  email: '',
  originCountry: '',
  residenceCountry: '',
  nationality: '',
  sex: '',
  residenceCity: '',
  address: '',
  title: '',
  motherName: '',
  fatherName: '',
  birthdate: '',
  profilePicture: '',
  passport: {
    dateOfIssue: '',
    dateOfExpire: '',
    passportNumber: '',
    needVisa: '',
    file: ''
  }
}

export const studentSlice = createSlice({
  name: 'student',
  initialState,
  reducers: {
    addStudent: (state, action) => {
      return { ...state, ...action.payload }
    }
  }
})

export const { addStudent } = studentSlice.actions

export const studentSelector = (state) => lodashGet(state, 'student', '')
export const educationHistorySelector = (state) => lodashGet(state, 'student.educationHistory', '')
export const englishProficiencyExamSelector = (state) =>
  lodashGet(state, 'student.englishProficiencyExam', '')

export default studentSlice.reducer
