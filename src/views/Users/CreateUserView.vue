<script setup lang="ts">
/**
 * @description View para cadastro de usuários
 *
 * @interface User define as tipagems de usuario para a apiFormData
 * @var buttonController Controlador vinculado ao componente de botao
 * @var apiFormData Objeto que sera passado para a api
 * @method validateData Executa as validações nos items que serão enviados para api
 * @method sendData Envia uma requisição do tipo post para a api
 */
import { ref, type Ref } from 'vue'
import DefaultLayout from '@/layouts/DefaultLayout.vue'
import FormLayout from '@/layouts/FormLayout.vue'
import SGSButton from '@/components/Buttons/SGSButton.vue'
import SGSInput from '@/components/Forms/SGSInput.vue'
import SGSPassword from '@/components/Forms/SGSPassword.vue'
import SGSDivider from '@/components/Forms/SGSDivider.vue'

interface User {
  nome: String
  email: String
  senha: String
}

interface Input {
  isEmpty: boolean
  isDisabled: boolean
}

const buttonController = ref({
  isLoading: false,
  isDisabled: false
})

const nomeController: Ref<Input> = ref({
  isEmpty: false,
  isDisabled: false
})
const emailController: Ref<Input> = ref({
  isEmpty: false,
  isDisabled: false
})
const senhaController: Ref<Input> = ref({
  isEmpty: false,
  isDisabled: false
})

const apiFormData: Ref<User> = ref({
  nome: '',
  email: '',
  senha: ''
})

const validateData = () => {}
const sendData = async () => {
  console.log(apiFormData.value)
  buttonController.value.isLoading = !buttonController.value.isLoading
}
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
      </template>
      <template #handler>
        <SGSButton @click="sendData" label="create-user" :controller="buttonController" />
      </template>
    </FormLayout>
  </DefaultLayout>
</template>
