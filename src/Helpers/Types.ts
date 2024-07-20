/** API I/O */
export interface User {
  nome: String
  email: String
  senha: String
  tipo_usuario_id: Number
}
export interface TipoUsuario {
  id: Number
  nome: String
}
/** API I/O */

/** CONTROLADORES DE COMPONENTES */
export interface InputController {
  isEmpty: boolean
  isDisabled: boolean
}
export interface PasswordController {
  isEmpty: boolean
  isDisabled: boolean
  isShort: boolean
}
export interface ButtonController {
  isLoading: boolean
  isDisabled: boolean
}

export interface SelectController {
  isDisabled: boolean
  isEmpty: boolean
  notFound: boolean
}

export interface SelectObjectController {
  field: String | any
  name: String
}
/** CONTROLADORES DE COMPONENTES */

/** API */
export interface ApiResponse {
  status: boolean
  messageCode: string
  data: Object | Array<Object>
}
/** API */
