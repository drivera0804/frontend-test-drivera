import axios from 'axios'
/**
 * Instance of axios with a custom config.
 */
const BASEURL = 'http://localhost:3000/api'

export const api = axios.create({
  baseURL: BASEURL,
  timeout: 200000
})
