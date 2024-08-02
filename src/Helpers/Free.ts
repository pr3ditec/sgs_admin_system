import type { Cidade, PermissaoUsuario, TipoUsuario, Usuario } from './Types'

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

export { clearUserData, clearUserTypeData, clearPermissionUserData, clearCityData }
