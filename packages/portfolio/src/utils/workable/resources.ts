import axios from 'axios'
const publicURL =
  process.env.WORKABLE_PUBLIC_BASE_URL ||
  'https://www.workable.com/api/accounts/jalasoft'
const privateURL =
  process.env.WORKABLE_PRIVATE_BASE_URL ||
  'https://jalasoft.workable.com/spi/v3'
const accessToken =
  process.env.WORKABLE_ACCESS_TOKEN ||
  '3c72abdbf6101d383a7f1cec83dc2e3c8fd0163a689c9218c93199dcde8f1773'

export async function getAllJobs() {
  axios.defaults.headers = {
    Authorization: `Bearer ${accessToken}`
  }
  return await axios
    .get(`${privateURL}/jobs?state=published&include_fields=requirements`)
    .then((response) => {
      return response.data.jobs
    })
    .catch((e) => {
      throw (
        e?.response?.data ||
        'Error in Workable integration - get All Jobs Workable'
      )
    })
}

export async function getLocations() {
  axios.defaults.headers = {
    Authorization: `Bearer ${accessToken}`
  }
  return await axios
    .get(`${publicURL}/locations`)
    .then((response) => {
      return response.data
    })
    .catch((e) => {
      return e.response.data
    })
}

export async function getDepartments() {
  axios.defaults.headers = {
    Authorization: `Bearer ${accessToken}`
  }
  return await axios
    .get(`${publicURL}/departments`)
    .then((response) => {
      return response.data
    })
    .catch((e) => {
      return e.response.data
    })
}
