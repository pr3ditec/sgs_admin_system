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
  ButtonController,
  InputController,
  SelectController,
  TipoUsuario,
  User
} from '@/Helpers/Types'

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
const senhaController: Ref<InputController> = ref({
  isEmpty: false,
  isDisabled: false
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
const validateData = () => {}
const sendData = async () => {
  console.log(apiFormData.value)
  buttonController.value.isLoading = !buttonController.value.isLoading
}
onMounted(() => {
  Promise.all([getTipoUsuarioData()]).catch((err) => {
    console.log('Erro ao buscar dados da api' + err)
  })
})
</script>
<template>
  <DefaultLayout>
    <FormLayout :push="{ label: 'dashboard', to: '/' }">
      <template #body>
        <SGSInput label="name" required :reference="apiFormData" referenceName="nome" />
        <SGSDivider />
        <SGSInput label="email" required :reference="apiFormData" referenceName="email" />
        <SGSDivider />
        <SGSPassword label="password" required :reference="apiFormData" referenceName="senha" />
        <SGSDivider />
        <SGSSelectSearch
          label="user-type"
          :items="tipoUsuarioData"
          @update-value="(value) => (apiFormData.tipo_usuario_id = value)"
          required
          :track="{ field: 'id', name: 'nome' }"
          :controller="tipoUsuarioController"
        />
      </template>
      <template #handler>
        <SGSButton @click="sendData" label="create-user" :controller="buttonController" />
      </template>
    </FormLayout>
  </DefaultLayout>
</template>
