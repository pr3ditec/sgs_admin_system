import Translate from '@/translate'
import swal from 'sweetalert'

const openCalendarEditModal = (nome: string) => {
  return swal({
    title: nome,
    content: {
      element: 'input',
      attributes: {
        type: 'checkbox'
      }
    }
  })
}

export { openCalendarEditModal }
