import axios from "axios"
import { SERVER_URL } from "./constants"

const API = axios.create({
    baseURL: SERVER_URL,
    timeout: 10000
})

API.interceptors.request.use(
    (config) => {
      if (!config.headers["Authorization"]) {
        const token = ""
        if(token){
            config.headers["Authorization"] = `Bearer ${token}`
        }
      }

      if (!config.headers["Content-Type"]) {
          config.headers["Content-Type"] = "application/json"
      }

      return config
    },
    function (error) {
      return Promise.reject(error)
    }
  )

  export default API
