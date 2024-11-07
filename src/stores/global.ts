import Request from '@/Helpers/Request'
import { defineStore } from 'pinia'

var start_service_request = new Request()

export const useGlobalStore = defineStore('global', {
  state: () => ({
    usuario_id: 0 as Number,
    closeModalEquipment: false,
    title: '' as string
  }),
  actions: {
    setToken(token: String) {},
    setUsuarioId(usuario_id: Number) {
      this.usuario_id = usuario_id
    },
    setCloseModalEquipment(close: boolean): void {
      this.closeModalEquipment = close
    },
    setTitle(title: string): void {
      this.title = title
    }
  },
  getters: {
    request: (state) => start_service_request,
    userId: (state) => state.usuario_id,
    shouldCloseModalEquipment: (state) => state.closeModalEquipment,
    getTitle: (state) => state.title
  }
})
