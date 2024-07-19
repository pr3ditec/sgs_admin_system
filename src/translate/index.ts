import { useTranslateStore } from '@/stores/translate'
import en from './locales/en.json'
import pt from './locales/pt.json'

export default class Translate {
  static to(key: String | unknown) {
    const stores = useTranslateStore()
    const lang = stores.getLang // esse valor precisa vir de localstorage
    try {
      if (lang == 'pt') {
        //@ts-expect-error
        return pt[key]
      } else if (lang == 'en') {
        //@ts-expect-error
        return en[key]
      } else {
        return key
      }
    } catch {
      console.error('Erro ao buscar tradução')
    }
  }
}
