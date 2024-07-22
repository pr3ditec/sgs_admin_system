import type { TipoUsuario, User } from './Types'

const clearUserData = (formData: User) => {
  formData.nome = ''
  formData.email = ''
  formData.senha = ''
  formData.tipo_usuario_id = 0
}

const clearUserTypeData = (formData: TipoUsuario) => {
  formData.nome = ''
}

export { clearUserData, clearUserTypeData }
