import Request from '@/Helpers/Request'
import { defineStore } from 'pinia'

var start_service_request = new Request()

export const useGlobalStore = defineStore('global', {
  state: () => ({}),
  actions: {
    setToken(token: String) {}
  },
  getters: {
    request: (state) => start_service_request
  }
})
