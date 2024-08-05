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
  static storeUser(usuario_id: Number) {
    //@ts-expect-error
    localStorage.setItem('usuario_id', usuario_id as string)
  }
  /** STORE METHODS */

  /** RETRIEVE METHODS */
  static getLang() {
    return localStorage.getItem('lang')
  }
  static getToken() {
    return localStorage.getItem('token')
  }
  static getUser() {
    return localStorage.getItem('usuario_id')
  }
  /** RETRIEVE METHODS */
}
