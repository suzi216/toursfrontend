import toast from 'react-hot-toast'
import {
  RiCloseCircleFill,
  RiInformationFill,
  RiErrorWarningFill,
  RiFileGifFill,
  RiFileImageFill,
  RiFileVideoFill,
  RiFileMusicFill,
  RiFileCodeFill,
  RiFileTextFill,
  RiFilePdf2Fill,
  RiFileZipFill,
  RiFileExcel2Fill,
  RiFilePpt2Fill,
  RiFileWord2Fill,
  RiFileExcelFill,
  RiFilePptFill,
  RiFileWordFill,
  RiFileFill
} from 'react-icons/ri'
import { FaCheckCircle } from 'react-icons/fa'
// import moment from 'moment'
import clsx from 'clsx'
import { twMerge } from 'tailwind-merge'
// import currenciesData from 'currency-codes-ts'
// import getSymbolFromCurrency from 'currency-symbol-map'
import axios from 'axios'
import { STUDENT } from '@/constants'
// import i18n from '@/i18n'
// import QRCode from 'qrcode'
// import AES from 'crypto-js/aes'
// import utf8Encoder from 'crypto-js/enc-utf8'
// import { teamBoardSectionOptions } from '@/constants/filters'

export function cn(...input) {
  return twMerge(clsx(input))
}

export function capitalize(string) {
  return string.charAt(0).toUpperCase() + string.slice(1)
}

export const buildValidationMessage = (message) => {
  return {
    required_error: message,
    invalid_type_error: message
  }
}

export const showSuccess = (message = 'Success', timeout = 2000) => {
  toast(message, {
    id: 'success-toast',
    position: 'top-center',
    icon: <FaCheckCircle className="h-5 text-green-400" />,
    className:
      'text-xs sm:text-sm leading-5 font-medium text-green-600 bg-green-50 lg:max-w-md 2xl:max-w-lg',
    duration: timeout
  })
}

export const showError = (error, timeout = 2000) => {
  toast(error, {
    id: 'error-toast',
    position: 'top-center',
    icon: <RiCloseCircleFill className="h-5 text-red-500" />,
    className:
      'text-xs sm:text-sm leading-5 font-medium text-red-600 bg-red-100 lg:max-w-md 2xl:max-w-lg',
    duration: timeout
  })
}

export const showInfo = (message, timeout = 2000) => {
  toast(message, {
    id: 'info-toast',
    position: 'top-center',
    className: 'text-xs sm:text-sm leading-5 font-medium text-blue-600 bg-blue-100 lg:max-w-md 2xl:max-w-lg',
    icon: <RiInformationFill className="h-5 text-blue-500" />,
    duration: timeout
  })
}

export const showWarning = (message, timeout = 2000) => {
  toast(message, {
    id: 'warning-toast',
    position: 'top-center',
    className: 'text-xs sm:text-sm leading-5 font-medium text-yellow-600 bg-yellow-100 lg:max-w-md 2xl:max-w-lg',
    icon: <RiErrorWarningFill className="h-5 text-yellow-500" />,
    duration: timeout
  })
}

export const getCountryOptions = () => {
  return Object.entries(countries).map(([key, value]) => {
    return {
      label: value,
      value: key
    }
  })
}

export const findCountryByCode = (code) =>
  code ? getCountryOptions().find((country) => country.value === code) : null

export const generateInitials = (fullName) => {
  let initials
  initials = fullName
    .split(' ')
    .map((el) => el[0]?.toUpperCase())
    .join('')

  return initials
}

export const getCurrencySymbol = (currency) => {
  return getSymbolFromCurrency(currency) ??
    getSymbolFromCurrency(
      currenciesData.data.find((code) => code.currency.toLowerCase() === currency.toLowerCase())?.code
    ) ??
    getSymbolFromCurrency(
      currenciesData.data.find((code) => code.currency.toLowerCase().includes(currency.toLowerCase()))?.code
    ) ??
    currency ??
    ''
}

export const dateTimeFormatter = (date, formattingString = 'DD/MM/YYYY, HH:mm:ss') =>
  moment(date).format(formattingString)

export const dateFormatter = (date, format) => moment(date).format(format ?? 'DD/MM/YYYY')

export const timeFormatter = (dateTime, format) => moment(dateTime).format(format)

export const getMonthNameFromDate = (date, short = true) =>
  moment(date).format(short ? 'MMM' : 'MMMM')

export const getYearFromDate = (date) => moment(date).format('YYYY')

export const upperSnakeCaseToSentenceCase = (str) => {
  return str
    ?.split('_')
    ?.map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
    ?.join(' ')
}

export const durationFormatter = (duration) => {
  const years = Math.floor(duration / 12)
  const months = duration % 12

  if (years === 0) {
    return `${months} months`
  }

  if (months === 0) {
    return `${years} years`
  }

  return `${years} years ${months} months`
}

export const objectToQueryString = (obj) => {
  const queryParams = new URLSearchParams()

  Object.keys(obj).forEach((key) => {
    if (obj[key]) {
      if (obj[key] instanceof Array) {
        obj[key].forEach((item) => {
          queryParams.append(key, item)
        })
      } else {
        queryParams.append(key, obj[key])
      }

    }
  })

  return queryParams.toString()
}

export const amountFormatter = (amount, currencyCode = 'USD', locales = 'en-US', fractionDigits = 2) => {
  if (!currencyCode) currencyCode = 'USD'
  let currency = currencyCode
  if (currencyCode === 'POUND') {
    currency = 'GBP'
  } else if (currencyCode === 'LIRA') {
    currency = 'TRY'
  } else if (currencyCode === 'EURO') {
    currency = 'EUR'
  }

  return new Intl.NumberFormat(locales, {
    style: 'currency',
    currency,
    minimumFractionDigits: fractionDigits
  }).format(amount)
}

export function getProgramStartDate(program) {
  return (program.dates?.length > 0 && program.dates[0]?.startDate) ?? program.applicationStartDate
}

export function getProgramEndDate(program) {
  return (program.dates?.length > 0 && program.dates[0]?.endDate) ?? program.applicationEndDate
}

export const getSeasonFromDate = (dateString) => {
  const date = new Date(dateString)

  if (isNaN(date)) {
    return 'Invalid Date'
  }

  const month = date.getMonth() + 1 // Adding 1 to get the month as 1-12 (instead of 0-11)
  const day = date.getDate()

  if ((month >= 3 && month <= 5) || (month === 6 && day < 21)) {
    return 'Spring'
  }

  if ((month >= 6 && month <= 8) || (month === 9 && day < 21)) {
    return 'Fall'
  }

  if ((month >= 9 && month <= 11) || (month === 12 && day >= 21)) {
    return 'Fall'
  }

  if ((month >= 1 && month <= 2) || (month === 3 && day >= 21)) {
    return 'Spring'
  }

  return 'Unknown Season'
}

export const checkNullValues = ({ apiData, role }) => {
  const missingValues = []

  function checkAndAddToMissing(fieldName, value) {
    if (value === null || value === undefined || value === '') {
      missingValues.push(`${fieldName} is missing.`)
    }
  }

  if (role === STUDENT) {
    // Check top-level properties
    checkAndAddToMissing('First Name', apiData.firstName)
    checkAndAddToMissing('Last Name', apiData.lastName)
    checkAndAddToMissing('Father Name', apiData.fatherName)
    checkAndAddToMissing('Mother Name', apiData.motherName)
    checkAndAddToMissing('Address', apiData.address)
    checkAndAddToMissing('Phone', apiData.phone)
    checkAndAddToMissing('Birthdate', apiData.birthdate)
    checkAndAddToMissing('Nationality', apiData.nationality)
    checkAndAddToMissing('Origin Country', apiData.originCountry)
    checkAndAddToMissing('Residence City', apiData.residenceCity)
    checkAndAddToMissing('Residence Country', apiData.residenceCountry)
    checkAndAddToMissing('Gender', apiData.sex)
    checkAndAddToMissing('Email', apiData.email)

    // Check educationHistory
    const educationHistory = apiData.educationHistory
    checkAndAddToMissing('Name Of School', educationHistory?.nameOfSchool)
    checkAndAddToMissing('Graduation Year', educationHistory?.graduationYear)
    checkAndAddToMissing('CGPA', educationHistory?.cgpa)
    checkAndAddToMissing('Country', educationHistory?.countryCode)
    checkAndAddToMissing('Degree Name', educationHistory?.degreeName)

    const transcript = educationHistory?.transcript
    checkAndAddToMissing('Transcript', transcript?.url)

    const diploma = educationHistory?.diploma
    checkAndAddToMissing('Diploma', diploma?.url)

    const profilePicture = apiData.profilePicture
    checkAndAddToMissing('Profile Picture', profilePicture?.url)

    // Check passport
    const passport = apiData.passport
    checkAndAddToMissing('Date Of Issue', passport?.dateOfIssue)
    checkAndAddToMissing('Date Of Expire', passport?.dateOfExpire)
    checkAndAddToMissing('Passport Number', passport?.passportNumber)
    checkAndAddToMissing('Need Visa', passport?.needVisa)

    const passportFile = passport?.file
    checkAndAddToMissing('Passport File', passportFile?.url)

    // Check englishProficiencyExam
    const englishProficiencyExam = apiData.englishProficiencyExam

    checkAndAddToMissing('Date Of Exam', englishProficiencyExam?.dateOfExam)
    checkAndAddToMissing('Grade', englishProficiencyExam?.grade)
    checkAndAddToMissing('Language', englishProficiencyExam?.language)

    const certificate = englishProficiencyExam?.certificate
    checkAndAddToMissing('English Certificate', certificate?.url)
  } else if (role === 'SUPER_ADMIN' || role === 'MANAGER_USER') {
    checkAndAddToMissing('First Name', apiData.firstName)
    checkAndAddToMissing('Last Name', apiData.lastName)
    checkAndAddToMissing('Phone', apiData.phone)

    const profilePicture = apiData.profilePicture

    checkAndAddToMissing('Profile Picture', profilePicture?.url)
  }
  return missingValues
}

export const openFile = (file) => {
  window.open(file.url, '_blank').focus()
}

export const downloadFile = async (url, fileName) => {
  const file = await axios({
    url,
    method: 'GET',
    responseType: 'blob'
  })

  const blobURL = URL.createObjectURL(new Blob([file.data]))
  const linkElement = document.createElement('a')
  linkElement.href = blobURL
  linkElement.setAttribute('download', fileName)
  linkElement.setAttribute('target', '_blank')
  linkElement.click()
  URL.revokeObjectURL(blobURL)

  return fileName
}

export const monthsToYears = (months) => {
  const years = Math.floor(months / 12)
  const remainingMonths = months % 12

  return {
    years: years,
    remainingMonths: remainingMonths
  }
}

export const amountToDisplay = (program) => {
  if (monthsToYears(program.duration).years && monthsToYears(program.duration).remainingMonths) {
    const yearlyPrice = program.discountPercentage
      ? (program.tuitionFee - (program.discountPercentage * program.tuitionFee) / 100) *
      monthsToYears(program.duration).years
      : program.tuitionFee * monthsToYears(program.duration).years

    const monthlyPrice = program.discountPercentage
      ? ((program.tuitionFee - (program.discountPercentage * program.tuitionFee) / 100) / 12) *
      monthsToYears(program.duration).remainingMonths
      : (program.tuitionFee / 12) * monthsToYears(program.duration).remainingMonths
    return yearlyPrice + monthlyPrice
  } else if (
    monthsToYears(program.duration).years &&
    !monthsToYears(program.duration).remainingMonths
  ) {
    return program.discountPercentage
      ? (program.tuitionFee - (program.discountPercentage * program.tuitionFee) / 100) *
      monthsToYears(program.duration).years
      : program.tuitionFee * monthsToYears(program.duration).years
  } else if (
    !monthsToYears(program.duration).years &&
    monthsToYears(program.duration).remainingMonths
  ) {
    return program.discountPercentage
      ? ((program.tuitionFee - (program.discountPercentage * program.tuitionFee) / 100) / 12) *
      monthsToYears(program.duration).remainingMonths
      : (program.tuitionFee / 12) * monthsToYears(program.duration).remainingMonths
  }
}

export function getSimpleDiscountedAmount(program) {
  return program.discountPercentage
    ? program.tuitionFee - (program.discountPercentage * program.tuitionFee) / 100
    : program.tuitionFee
}

export const formatNumber = (number) => {
  return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')
}

export const formatOptionLabel = ({ label }) => i18n.t(label)

export function getFileNameForStatus(t, status) {
  switch (status) {
    case 'PAYMENT_REVIEW' : {
      return 'Receipt'
    }
    case 'ACCEPTED' : {
      return 'Contract'
    }
    default : {
      return t('file')
    }
  }
}

export function removeNullKeys(obj) {
  const newObj = {};
  for (const key in obj) {
    if (obj[key] !== null) {
      newObj[key] = obj[key];
    }
  }
  return newObj;
}

export function encodeData(data, key) {
  return encodeURIComponent(AES.encrypt(data, key).toString());
}

export function decodeData(data, key) {
  return AES.decrypt(decodeURIComponent(data), key).toString(utf8Encoder);
}

export async function generateQrCode(data) {
  return QRCode.toDataURL(
    data,
    {
      errorCorrectionLevel: 'L',
      margin: 0,
    },
  );
}

const getStatusText = (status, t) => {
  return t(teamBoardSectionOptions.find(({ value }) => value === status)?.label ?? 'unknown')
}

export function parseLogMessageSegments(log, options) {
  const { t, self } = {
    ...{ t: (s) => s, self: false },
    ...options
  }
  const messageSegments = []
  
  switch (log.action) {
    case 'DELETED':
      messageSegments.push({
        text: self ? 'This task' : log.taskTitle,
        bold: !self,
        underline: !self
      }, {
        text: ' has been deleted from ',
        bold: false,
        underline: false
      }, {
        text: getStatusText(log.deletedAction?.sourceStatus, t),
        bold: true,
        underline: false
      })
      break
    case 'MOVED':
      messageSegments.push({
        text: self ? 'This task' : log.taskTitle,
        bold: !self,
        underline: !self
      }, {
        text: ' has been moved from ',
        bold: false,
        underline: false
      }, {
        text: getStatusText(log.movedAction?.sourceStatus, t),
        bold: true,
        underline: false
      }, {
        text: ' to ',
        bold: false,
        underline: false
      }, {
        text: getStatusText(log.movedAction?.destinationStatus, t),
        bold: true,
        underline: false
      })
      break
    case 'ADDED_USER':
      messageSegments.push({
        text: log.addedUserAction?.userName,
        bold: true,
        underline: true
      }, {
        text: ' has been assigned to ',
        bold: false,
        underline: false
      }, {
        text: self ? 'this task' : log.taskTitle,
        bold: !self,
        underline: !self
      })
      break
    case 'CREATED_TASK':
      messageSegments.push({
        text: self ? 'This task' : log.taskTitle,
        bold: !self,
        underline: !self
      }, {
        text: ' has been added to ',
        bold: false,
        underline: false
      }, {
        text: getStatusText(log.createdTaskAction?.destinationStatus, t),
        bold: true,
        underline: false
      })
      break
  }
  
  return messageSegments
}

export const getAttachmentIcon = (fileType) => {
  const [type, subtype] = fileType.split('/')
  
  if (type === 'image') {
    if (subtype === 'gif') return RiFileGifFill
    return RiFileImageFill
  }
  if (type === 'video') return RiFileVideoFill
  if (type === 'audio') return RiFileMusicFill
  if (type === 'text') {
    if (['csv', 'html', 'xml', 'json'].includes(subtype)) return RiFileCodeFill
    return RiFileTextFill
  }
  if (type === 'application') {
    if (subtype === 'pdf') return RiFilePdf2Fill
    if (subtype === 'zip') return RiFileZipFill
    if (subtype === 'vnd.ms-excel') return RiFileExcel2Fill
    if (subtype === 'vnd.ms-powerpoint') return RiFilePpt2Fill
    if (subtype === 'vnd.ms-word') return RiFileWord2Fill
    if (subtype === 'vnd.openxmlformats-officedocument.spreadsheetml.sheet') return RiFileExcelFill
    if (subtype === 'vnd.openxmlformats-officedocument.presentationml.presentation') return RiFilePptFill
    if (subtype === 'vnd.openxmlformats-officedocument.wordprocessingml.document') return RiFileWordFill
    if (['xml', 'json'].includes(subtype)) return RiFileCodeFill
  }
  
  return RiFileFill
}
