import type { User } from './Types'

const clearUserData = (formData: User) => {
  formData.nome = ''
  formData.email = ''
  formData.senha = ''
  formData.tipo_usuario_id = 0
}

export { clearUserData }
