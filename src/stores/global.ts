import Request from '@/Helpers/Request'
import { defineStore } from 'pinia'

var start_service_request = new Request()

export const useGlobalStore = defineStore('global', {
  state: () => ({
    usuario_id: 0 as Number
  }),
  actions: {
    setToken(token: String) {},
    setUsuarioId(usuario_id: Number) {
      this.usuario_id = usuario_id
    }
  },
  getters: {
    request: (state) => start_service_request,
    userId: (state) => state.usuario_id
  }
})
