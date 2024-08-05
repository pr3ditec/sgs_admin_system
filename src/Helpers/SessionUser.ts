import { useGlobalStore } from '@/stores/global'
import LocalStorageController from './LocalStorage'

const setSessionUser = (usuario_id: Number) => {
  useGlobalStore().setUsuarioId(usuario_id)
  LocalStorageController.storeUser(usuario_id)
}

const getSessionUser = () => {
  return useGlobalStore().userId == 0 ? LocalStorageController.getUser() : useGlobalStore().userId
}

export { setSessionUser, getSessionUser }
