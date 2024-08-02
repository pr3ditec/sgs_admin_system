import type { Aparelho, Cidade, Cliente, PermissaoUsuario, TipoUsuario, Usuario } from './Types'

const clearUserData = (formData: Usuario) => {
  formData.nome = ''
  formData.email = ''
  formData.senha = ''
  formData.tipo_usuario_id = 0
}

const clearUserTypeData = (formData: TipoUsuario) => {
  formData.nome = ''
}

const clearPermissionUserData = (formData: PermissaoUsuario) => {
  formData.permissao_id = 0
  formData.usuario_id = 0
}

const clearCityData = (formData: Cidade) => {
  formData.nome = ''
  formData.uf = ''
}

const clearClientData = (formData: Cliente) => {
  formData.nome = ''
  formData.cep = ''
  formData.logradouro = ''
  formData.numero = ''
  formData.cidade_id = 0
  formData.complemento = ''
  formData.cpf = ''
  formData.cnpj = ''
  formData.inscricao_estadual = ''
  formData.inscricao_municipal = ''
}

const clearEquipmentData = (formData: Aparelho) => {
  formData.nome = ''
  formData.tipo = ''
  formData.cliente_id = 0
}

export {
  clearUserData,
  clearUserTypeData,
  clearPermissionUserData,
  clearCityData,
  clearClientData,
  clearEquipmentData
}
