import type {
  Aparelho,
  Cidade,
  Cliente,
  EquipamentosServicos,
  Login,
  OrdemServico,
  PermissaoUsuario,
  Servicos,
  TipoUsuario,
  Usuario
} from './Types'

const clearUserData = (formData: Usuario) => {
  formData.nome = ''
  formData.email = ''
  formData.senha = ''
  formData.tipo_usuario_id = 0
}

const clearUserTypeData = (formData: TipoUsuario) => {
  formData.nome = ''
}

const clearServiceOrder = (formData: OrdemServico) => {
  formData.numero = ''
  formData.concluido = false
  formData.recebido = false
  formData.equipamentos_servicos = []
  formData.cliente_id = 0
}

const clearEquipmentServiceOrder = (formData: Array<EquipamentosServicos>) => {
  formData.forEach((item) => {
    item.aparelho_id = 0
    item.servicos = []
  })
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
  formData.telefone = ''
  formData.inscricao_estadual = ''
  formData.inscricao_municipal = ''
}

const clearEquipmentData = (formData: Aparelho) => {
  formData.nome = ''
  formData.tipo = ''
  formData.cliente_id = 0
}

const clearLoginData = (formData: Login) => {
  formData.email = ''
  formData.senha = ''
}

const clearServiceData = (formData: Servicos) => {
  formData.descricao = ''
  formData.preco = ''
}

export {
  clearUserData,
  clearUserTypeData,
  clearPermissionUserData,
  clearCityData,
  clearClientData,
  clearEquipmentData,
  clearServiceOrder,
  clearEquipmentServiceOrder,
  clearLoginData,
  clearServiceData
}
