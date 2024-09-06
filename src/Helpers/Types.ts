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
  telefone: String
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

export interface Parametros {
  total_ordem_servico: number
  ultimos_30_dias: number
  mes_atual: number
}

export interface OrdemServico {
  numero: String
  concluido: boolean
  recebido: boolean
  equipamentos_servicos: Array<EquipamentosServicos>
  cliente_id: Number
  usuario_id: Number
}

export interface EquipamentosServicos {
  aparelho_id: Number
  servicos: Array<Number>
}

export interface Servicos {
  preco: String
  descricao: String
}

export interface Login {
  email: String
  senha: String
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
