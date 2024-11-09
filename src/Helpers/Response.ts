import Translate from '@/translate'
import swal from 'sweetalert'

class Response {
  public static show(icon: string, message: string) {
    return swal({
      title: Translate.to(icon),
      icon: icon,
      text: Translate.to(message),
      timer: 1000,
      //@ts-expect-error
      button: false
    })
  }

  public static helperList() {
    return swal({
      title: 'Ajuda de contexto',
      icon: 'info',
      text: `Nesta tela, você pode visualizar, organizar e gerenciar registros. Veja as funcionalidades abaixo:

Editar e Excluir:

    Opções para Editar e Excluir ao lado de cada item.
    Confirme a exclusão para remover o registro.

Ordenação:

    Clique nos cabeçalhos das colunas para ordenar os registros.

Adicionar Registro:

    Clique em Cadastrar para adicionar um novo registro.

Essas funcionalidades facilitam o gerenciamento dos registros. Para dúvidas adicionais, consulte o suporte.`
      // timer: 1000,
    })
  }
}

export { Response }
