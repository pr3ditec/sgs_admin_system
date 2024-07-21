import axios from 'axios'

export default class Request {
  private request: any
  private baseURL: string = 'http://127.0.0.1:8000'

  constructor() {
    this.request = axios.create({
      timeout: 10000,
      headers: {
        // Authorization: `Bearer ${token ?? localStorage.getItem('user.token')}`
      }
    })
  }

  public async get(route: string, data: any = {}): Promise<any> {
    try {
      this.request.defaults.baseURL = this.baseURL

      let response: any = await this.request.get(route)
      return await response.data
    } catch (error) {
      if (axios.isAxiosError(error)) {
        if (error.response) {
          return {}
        }
      }
    }
  }

  public async store(route: string, data: any = {}): Promise<any> {
    try {
      this.request.defaults.baseURL = this.baseURL

      let response: any = await this.request.post(route, data)

      return await response.data
    } catch (error) {
      if (axios.isAxiosError(error)) {
        if (error.response) {
          return await error.response.data
        }
      }
    }
  }

  public async update(route: string, data: Object = {}): Promise<any> {
    try {
      this.request.defaults.baseURL = this.baseURL

      let response: any = await this.request.put(route, (data = data))

      return await response.data
    } catch (error) {
      if (axios.isAxiosError(error)) {
        if (error.response) {
          return await error.response.data
        }
      }
    }
  }

  public async destroy(route: string): Promise<any> {
    try {
      this.request.defaults.baseURL = this.baseURL

      let response: any = await this.request.delete(route)

      return await response.data
    } catch (error) {
      if (axios.isAxiosError(error)) {
        if (error.response) {
          return await error.response.data
        }
      }
    }
  }
}
