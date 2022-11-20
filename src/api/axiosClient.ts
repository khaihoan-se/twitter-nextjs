
import axios from 'axios'
import queryString from 'query-string'
// Set up default config for http requests here

// Please have a look at here `https://github.com/axios/axios#request-
// config` for the full list of configs
const REACT_APP_API_URL = 'http://localhost:3001'
// axios.defaults.withCredentials = true
// console.log(process.env.REACT_APP_API_URL)

const axiosClient = axios.create({
   baseURL: REACT_APP_API_URL,
   withCredentials: true,
   headers: {
      'X-Requested-With': 'XMLHttpRequest',
      'Content-Type': 'application/json',
      Accept: 'application/json',
   },
   paramsSerializer: (params) => queryString.stringify(params),
})
axiosClient.interceptors.request.use(async (config) => {
   // Handle token here ...
   return config
})
axiosClient.interceptors.response.use(
   (response) => {
      if (response && response.data) {
         return response.data
      }
      return response
   },
   (error) => {
      // Handle errors
      throw error
   }
)

export default axiosClient;