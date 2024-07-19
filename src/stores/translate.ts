import LocalStorageController from '@/Helpers/LocalStorage'
import { defineStore } from 'pinia'

export const useTranslateStore = defineStore('translate', {
  state: () => ({
    lang: 'pt' as String
  }),
  actions: {
    setLang(newLang: String) {
      this.lang = newLang
      LocalStorageController.storeLang(newLang)
    }
  },
  getters: {
    getLang: (state) => state.lang
  }
})
