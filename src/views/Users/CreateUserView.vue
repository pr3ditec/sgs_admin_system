<script setup lang="ts">
/**
 * @description View para cadastro de usuários
 *
 * @interface User define as tipagems de usuario para a apiFormData
 * @var buttonController Controlador vinculado ao componente de botao
 * @var tipoUsuarioData Objeto recuperado da api
 * @var apiFormData Objeto que sera passado para a api
 * @method getTipoUsuarioData Busca tipos de usuario da api
 * @method validateData Executa as validações nos items que serão enviados para api
 * @method sendData Envia uma requisição do tipo post para a api
 * @method onMounted Executa a promise que busca os dados necessários da api
 */
import { onMounted, ref, type Ref } from 'vue'
import { useGlobalStore } from '@/stores/global'
import DefaultLayout from '@/layouts/DefaultLayout.vue'
import FormLayout from '@/layouts/FormLayout.vue'
import SGSButton from '@/components/Buttons/SGSButton.vue'
import SGSInput from '@/components/Forms/SGSInput.vue'
import SGSPassword from '@/components/Forms/SGSPassword.vue'
import SGSDivider from '@/components/Forms/SGSDivider.vue'
import SGSSelectSearch from '@/components/Forms/SGSSelectSearch.vue'
import type {
  ApiResponse,
  ButtonController,
  InputController,
  PasswordController,
  SelectController,
  TipoUsuario,
  User
} from '@/Helpers/Types'
import {
  buttonHandler,
  validateInputParameter,
  validatePasswordParamenter,
  validateSelectParameter
} from '@/Helpers/Validator'
import { Response } from '@/Helpers/Response'
import { clearUserData } from '@/Helpers/Free'
import SGSSelect from '@/components/Forms/SGSSelect.vue'

const request = useGlobalStore().request

const buttonController: Ref<ButtonController> = ref({
  isLoading: false,
  isDisabled: false
})

const nomeController: Ref<InputController> = ref({
  isEmpty: false,
  isDisabled: false
})
const emailController: Ref<InputController> = ref({
  isEmpty: false,
  isDisabled: false
})
const senhaController: Ref<PasswordController> = ref({
  isEmpty: false,
  isDisabled: false,
  isShort: false
})
const tipoUsuarioController: Ref<SelectController> = ref({
  isDisabled: true,
  isEmpty: false,
  notFound: false
})

const tipoUsuarioData: Ref<Array<TipoUsuario>> = ref(<Array<TipoUsuario>>[])
const apiFormData: Ref<User> = ref(<User>{
  nome: '',
  email: '',
  senha: '',
  tipo_usuario_id: 0
})

const getTipoUsuarioData = async () => {
  await request.get('/tipo-usuario').then((res) => {
    if (res.status) {
      tipoUsuarioData.value = res.list
      tipoUsuarioController.value.isDisabled = false
    } else {
      tipoUsuarioController.value.notFound = true
    }
  })
}
const validateData = (): boolean => {
  const isValidNome = validateInputParameter(nomeController.value, apiFormData.value.nome)
  const isValidEmail = validateInputParameter(emailController.value, apiFormData.value.email)
  const isValidPassword = validatePasswordParamenter(senhaController.value, apiFormData.value.senha)
  const isValidTipoUsuario = validateSelectParameter(
    tipoUsuarioController.value,
    apiFormData.value.tipo_usuario_id
  )

  return isValidNome && isValidEmail && isValidTipoUsuario && isValidPassword
}

const sendData = async () => {
  buttonHandler(buttonController.value, true)

  if (!validateData()) {
    return buttonHandler(buttonController.value, false)
  }

  await request
    .store('/usuario', apiFormData.value)
    .then((res: ApiResponse) => {
      if (res.status) {
        Response.show('success', res.messageCode)
      } else {
        Response.show('error', res.messageCode)
      }
    })
    .catch((err) => {
      Response.show('error', 'unexpected-error')
    })
    .finally(() => {
      buttonHandler(buttonController.value, false)
      clearUserData(apiFormData.value)
    })
}
onMounted(() => {
  Promise.all([getTipoUsuarioData()]).catch((err) => {
    console.log('Erro ao buscar dados da api' + err)
  })
})
</script>
<template>
  <DefaultLayout>
    <FormLayout title="create-user">
      <template #body>
        <SGSInput
          label="name"
          required
          :reference="apiFormData"
          referenceName="nome"
          :controller="nomeController"
        />
        <SGSDivider />
        <SGSInput
          label="email"
          required
          :reference="apiFormData"
          referenceName="email"
          :controller="emailController"
        />
        <SGSDivider />
        <SGSSelect
          label="user-type"
          :items="tipoUsuarioData"
          :track="{ field: 'id', name: 'nome' }"
          :controller="tipoUsuarioController"
          :reference="apiFormData"
          referenceName="tipo_usuario_id"
          required
        />
        <SGSDivider />
        <SGSPassword
          label="password"
          required
          :reference="apiFormData"
          referenceName="senha"
          :controller="senhaController"
        />
      </template>
      <template #handler>
        <SGSButton @click="sendData" label="create-user" :controller="buttonController" />
      </template>
    </FormLayout>
  </DefaultLayout>
</template>
