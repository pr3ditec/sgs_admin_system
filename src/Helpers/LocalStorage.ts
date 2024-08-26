export default class LocalStorageController {
  /**
   * Classe que funciona como uma biblioteca para utilizar o localstorage
   *  seta e remove as configurações básicas do usuario
   *  informações de usuario, tema, linguagem
   */

  /** STORE METHODS */
  static storeLang(lang: String) {
    localStorage.setItem('lang', lang as string)
  }
  static storeToken(token: String) {
    localStorage.setItem('token', token as string)
  }
  static storeUser(usuario: Object) {
    localStorage.setItem('usuario', JSON.stringify(usuario))
  }
  /** STORE METHODS */

  /** DESTROY METHODS */
  static destroyUser() {
    localStorage.removeItem('usuario')
  }

  static destroyToken() {
    localStorage.removeItem('token')
  }
  /** DESTROY METHODS */

  /** RETRIEVE METHODS */
  static getLang() {
    return localStorage.getItem('lang')
  }
  static getToken() {
    return localStorage.getItem('token') ?? false
  }
  static getUser() {
    return JSON.parse(localStorage.getItem('usuario')!)
  }
  /** RETRIEVE METHODS */
}
