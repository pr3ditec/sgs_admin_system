<script setup lang="ts">
/**
 * @description View para cadastro de usuários
 * @active
 */
import { onMounted, ref, watch, type Ref } from 'vue'
import { useGlobalStore } from '@/stores/global'
import type {
  Aparelho,
  ApiResponse,
  ButtonController,
  Cliente,
  EquipamentosServicos,
  InputController,
  OrdemServico,
  SelectController,
  Servicos
} from '@/Helpers/Types'
import { buttonHandler, validateInputParameter, validateSelectParameter } from '@/Helpers/Validator'
import { Response } from '@/Helpers/Response'
import { clearEquipmentServiceOrder, clearServiceOrder } from '@/Helpers/Free'
import { bindKey } from '@/Helpers/Binder'
import DefaultLayout from '@/layouts/DefaultLayout.vue'
import FormLayout from '@/layouts/FormLayout.vue'
import SGSButton from '@/components/Buttons/SGSButton.vue'
import SGSDivider from '@/components/Forms/SGSDivider.vue'
import SGSSelect from '@/components/Forms/SGSSelect.vue'
import SGSAddEquipmentService from '@/components/Forms/SGSAddEquipmentService.vue'
import SGSSelectMany from '@/components/Forms/SGSSelectMany.vue'
import SGSMoneyInput from '@/components/Forms/SGSMoneyInput.vue'
import SGSInput from '@/components/Forms/SGSInput.vue'
import SGSDatePicker from '@/components/Forms/SGSDatePicker.vue'

const request = useGlobalStore().request

const buttonController: Ref<ButtonController> = ref({
  isLoading: false,
  isDisabled: false
})

const clienteController: Ref<SelectController> = ref({
  isDisabled: true,
  isEmpty: false,
  notFound: false
})

const valorOsController: Ref<InputController> = ref({
  isEmpty: false,
  isDisabled: false
})

const dataOsController: Ref<InputController> = ref({
  isEmpty: false,
  isDisabled: false
})

const usuarioController: Ref<SelectController> = ref({
  isDisabled: true,
  isEmpty: false,
  notFound: false
})

const aparelhoController: Ref<SelectController> = ref({
  isDisabled: true,
  isEmpty: false,
  notFound: false
})

const servicoController: Ref<SelectController> = ref({
  isDisabled: true,
  isEmpty: false,
  notFound: false
})

const equipmentCount: Ref<number> = ref(1)
const serviceCount: Ref<number> = ref(1)

const aparelhoData: Ref<Array<Aparelho>> = ref([])
const clienteData: Ref<Array<Cliente>> = ref([])
const equipamentosServicosData: Ref<Array<EquipamentosServicos>> = ref([])
const servicosData: Ref<Array<Servicos>> = ref([])
const apiFormData: Ref<OrdemServico> = ref(<OrdemServico>{
  concluido: false,
  recebido: false,
  valor: 0,
  data_os: '',
  equipamentos_servicos: [],
  cliente_id: 0,
  usuario_id: 0
})

const addEquipmentToServiceOrder = () => {
  equipmentCount.value++
  equipamentosServicosData.value.push(<EquipamentosServicos>{})
  apiFormData.value.equipamentos_servicos = equipamentosServicosData.value
}

const popEquipmentFromServiceOrder = () => {
  equipmentCount.value--
  equipamentosServicosData.value.pop()
}

const validateData = (): boolean => {
  const isValidClienteId = validateSelectParameter(
    clienteController.value,
    apiFormData.value.cliente_id
  )
  const isValidUsuarioId = validateInputParameter(
    usuarioController.value,
    apiFormData.value.usuario_id
  )

  return isValidClienteId && isValidUsuarioId
}

const getClienteData = async () => {
  await request.get('/cliente').then((res: ApiResponse) => {
    if (res.status) {
      clienteData.value = res.list as Array<Cliente>
      clienteController.value.isDisabled = false
    } else {
      clienteController.value.notFound = true
    }
  })
}

const getAparelhoData = async () => {
  await request.get(`/cliente/${apiFormData.value.cliente_id}`).then((res: ApiResponse) => {
    if (res.status) {
      console.log(res)
      //@ts-expect-error
      aparelhoData.value = res.list['aparelhos'] as Array<Aparelho>
      aparelhoController.value.isDisabled = false
    } else {
      aparelhoController.value.notFound = true
    }
  })
}

const getServiceData = async () => {
  await request.get('/servico').then((res: ApiResponse) => {
    if (res.status) {
      servicosData.value = res.list as Array<Servicos>
      servicoController.value.isDisabled = false
    } else {
      servicoController.value.notFound = true
    }
  })
}

const sanitazeMoney = () => {
  //@ts-expect-error
  apiFormData.value.valor = apiFormData.value.valor.substring(3)
}

const sendData = async () => {
  buttonHandler(buttonController.value, true)
  sanitazeMoney()

  if (!validateData()) {
    return buttonHandler(buttonController.value, false)
  }

  await request
    .store('/ordem-servico', apiFormData.value)
    .then((res: ApiResponse) => {
      console.log(res)

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
      clearServiceOrder(apiFormData.value)
      clearEquipmentServiceOrder(equipamentosServicosData.value)
      shouldReload()
    })
}

const shouldReload = () => {
  if (equipmentCount.value > 2) {
    window.location.reload()
  } else {
    useGlobalStore().setCloseModalEquipment(true)
  }
}

watch(
  () => apiFormData.value.cliente_id,
  () => {
    if (apiFormData.value.cliente_id != 0) {
      getAparelhoData()
    } else {
      aparelhoController.value.isDisabled = true
    }
  }
)

onMounted(() => {
  Promise.all([getClienteData(), getServiceData()]).catch((err) => {
    console.log('Erro ao buscar dados de api...')
  })
  bindKey('Enter', sendData)
  // apiFormData.value.usuario_id = getSessionUser() as number
  apiFormData.value.usuario_id = 2
})
</script>

<style scoped>
.small-width {
  width: 200px; /* ajuste a largura conforme necessário */
}

.small-width1 {
  width: 450px; /* ajuste a largura conforme necessário */
}

.flex-row {
  display: flex;
  gap: 16px; /* espaçamento entre os campos */
}

</style>


<template>
  <DefaultLayout>
    <FormLayout
      title="create-service-order"
      :push="{ label: 'list-service-order', to: '/service-order/list' }"
    >
      <template #body>
        <SGSSelect
          label="client"
          :items="clienteData"
          :track="{ field: 'id', name: 'nome' }"
          :controller="clienteController"
          :reference="apiFormData"
          referenceName="cliente_id"
          required
        />

        <div class="flex-row">
          <SGSMoneyInput
          class="small-width1"
          label="price"
          required
          :reference="apiFormData"
          referenceName="valor"
          :controller="valorOsController"
          />
        <SGSDivider />
        <SGSDatePicker
          class="small-width1"
          label="date-os"
          required
          :reference="apiFormData"
          referenceName="data_os"
          :controller="dataOsController"
         />
        </div>
        
        <SGSDivider />
        <SGSAddEquipmentService
          v-for="count in equipmentCount"
          :key="count"
          label="select-equipment"
          @add-item="addEquipmentToServiceOrder"
          @pop-item="popEquipmentFromServiceOrder"
        >
          <template #item>
            <SGSSelect
              label="equipment"
              :items="aparelhoData"
              :track="{ field: 'id', name: 'nome' }"
              :controller="aparelhoController"
              :reference="equipamentosServicosData[count - 1]"
              referenceName="aparelho_id"
              required
            />
            <SGSDivider />
            <!-- select many -->
            <SGSSelectMany
              :items="servicosData"
              label="services"
              :track="{ field: 'id', name: 'descricao' }"
              :reference="equipamentosServicosData[count - 1]"
              referenceName="servicos"
              required
            />
          </template>
        </SGSAddEquipmentService>
      </template>
      <template #handler>
        <SGSButton @click="sendData" label="create-service-order" :controller="buttonController" />
      </template>
    </FormLayout>
  </DefaultLayout>
</template>
