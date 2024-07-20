import Translate from '@/translate'
import swal from 'sweetalert'

class Response {
  public static show(icon: string, message: string) {
    return swal({
      title: Translate.to(icon),
      icon: icon,
      text: Translate.to(message),
      //@ts-expect-error
      button: false
    })
  }
}

export { Response }
