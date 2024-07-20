import type {
  ButtonController,
  InputController,
  PasswordController,
  SelectController
} from './Types'

const buttonHandler = (controller: ButtonController, value: boolean) => {
  controller.isDisabled = value
  controller.isLoading = value
}

const validateInputParameter = (controller: InputController, value: any): boolean => {
  var validado: any = false

  if (value == 0 || value == '' || value == null) {
    controller.isEmpty = true
    validado = false
  } else {
    controller.isEmpty = false
    validado = true
  }

  return validado
}

const validateSelectParameter = (controller: SelectController, value: any): boolean => {
  var validado: any = false

  if (value == 0 || value == '' || value == null) {
    controller.isEmpty = true
    validado = false
  } else {
    controller.isEmpty = false
    validado = true
  }

  return validado
}

const validatePasswordParamenter = (controller: PasswordController, value: any): boolean => {
  var validado: any = false

  if (value == 0 || value == '' || value == null) {
    controller.isEmpty = true
    validado = false
  } else {
    controller.isEmpty = false
    validado = true
  }

  if (value.length < 8) {
    controller.isShort = true
    validado = false
  } else {
    controller.isShort = false
    validado = true
  }

  return validado
}

export {
  buttonHandler,
  validateInputParameter,
  validateSelectParameter,
  validatePasswordParamenter
}
