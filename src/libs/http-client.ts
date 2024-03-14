import axios, {
  AxiosError,
  AxiosInstance,
  AxiosRequestConfig,
  AxiosResponse,
  InternalAxiosRequestConfig,
} from 'axios'
import { sleep, storage } from '@/utils'
import toast from 'react-hot-toast'
import { API_URL, ROUTES } from '@/config'

export class HttpClient {
  private axiosInstance: AxiosInstance

  constructor(baseURL: string) {
    this.axiosInstance = axios.create({ baseURL })
    this.setupInterceptors()
  }

  public async get<T>(
    url: string,
    config?: AxiosRequestConfig
  ): Promise<AxiosResponse<T>> {
    return this.axiosInstance.get<T>(url, config)
  }

  public async post<T>(
    url: string,
    data?: unknown,
    config?: AxiosRequestConfig
  ): Promise<AxiosResponse<T>> {
    return this.axiosInstance.post<T>(url, data, config)
  }

  public async put<T>(
    url: string,
    data?: unknown,
    config?: AxiosRequestConfig
  ): Promise<AxiosResponse<T>> {
    return this.axiosInstance.put<T>(url, data, config)
  }

  public async delete<T>(
    url: string,
    config?: AxiosRequestConfig
  ): Promise<AxiosResponse<T>> {
    return this.axiosInstance.delete<T>(url, config)
  }

  private setupInterceptors() {
    this.axiosInstance.interceptors.request.use(
      (config: InternalAxiosRequestConfig) => {
        const token = storage.getToken()
        config.headers = config.headers || {}
        if (token) {
          config.headers['Authorization'] = `Bearer ${token}`
        }
        config.headers.Accept = 'application/json'
        return config
      }
    )

    this.axiosInstance.interceptors.response.use(
      (response: AxiosResponse) => response,
      async (error: AxiosError) => {
        if (error?.response?.status === 401) {
          if (window.location.pathname === ROUTES.auth.login) {
            return
          }

          toast.error('The login session has expired. Please login again!')

          await sleep(2000)

          storage.removeToken()
          window.location.replace(ROUTES.auth.login)
          return
        }

        return Promise.reject(error)
      }
    )
  }
}

export const httpClient = Object.freeze(new HttpClient(API_URL))
