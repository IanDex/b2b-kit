import axios from 'axios'

const HOST = ''

const BaseService = axios.create({
  baseURL: HOST,
  timeout: 60000,
})

BaseService.interceptors.request.use(config => {
  return config
}, error => {
  return Promise.reject(error)
})

BaseService.interceptors.response.use(
  response => response,
  error => {
    return Promise.reject(error)
  }
)

export default BaseService
