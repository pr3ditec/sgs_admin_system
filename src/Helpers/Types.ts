/** API I/O */
export interface Usuario {
  nome: String
  email: String
  senha: String
  tipo_usuario_id: Number
}
export interface TipoUsuario {
  nome: String
}
export interface Permissao {
  nome: String
}

export interface PermissaoUsuario {
  usuario_id: Number
  permissao_id: Number
}

export interface Cidade {
  nome: String
  uf: String
}

export interface Cliente {
  nome: String
  logradouro: String
  cep: String
  numero: String
  complemento: String
  cidade_id: Number
  cpf: Partial<String>
  cnpj: Partial<String>
  inscricao_municipal: Partial<String>
  inscricao_estadual: Partial<String>
  usuario_id: Number
}

export interface Aparelho {
  nome: String
  tipo: String
  cliente_id: Number
}

export interface OrdemServico {
  numero: String
  concluido: boolean
  recebido: boolean
  equipamentos: Array<any>
  servicos: Array<any>
  cliente_id: Number
  usuario_id: Number
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

export interface SearchController {
  value: string
}

export interface TableCotnroller {
  isLoading: boolean
}

export interface HeaderTableController {
  field: String
  title: String
  headerClass: String
}

export interface HelperController {
  field: String
  description: String
  required: String
}
/** CONTROLADORES DE COMPONENTES */

/** API */
export interface ApiResponse {
  status: boolean
  messageCode: string
  list: Object | Array<Object>
}
/** API */
