'use-strict'

export const constants = {
  ERROR_MESSAGE: {
    ID_NOT_VALID: 'O identificador não é válido',
    PARAMETER_REQUIRED: 'O parâmetro \'|NAME|\' é obrigatório',
    HEADER_PARAMETER_REQUIRED: 'O parâmetro \'|NAME|\' do cabeçalho da requisição é obrigatório',
    REQUEST_VALIDATION_ERROR: 'Erro na validação da sua requisição',
    RESOURCE_NOT_FOUND: 'O recurso solicitado não existe',
    RESOURCE_NOT_FOUND_INTERNAL: 'A consulta não retornou nenhum resultado',
    RESOURCE_NOT_FOUND_CODE: 20,
    VALIDATION_ERROR_REQUEST_PAYLOAD: 'Erro de validação do payload de entrada',
    VALIDATION_ERROR_REQUEST_PAYLOAD_CODE: 10,
    INTERNAL_ERROR_MESSAGE: 'Ocorreu um erro interno na consulta',
    INTERNAL_ERROR_MESSAGE_DETAIL: 'Contactar o administrador e solicitar o log pelo requestId \'|REQUEST_ID|\'',
    INTERNAL_ERROR_CODE: 90,
    INTERNAL_ERROR_MESSAGE_HIT: 'Ocorreu um erro ao realizar o HIT',
    UNAUTHORIZED_ERROR: '  Você não tem permissão para realizar essa operação',
    UNSUPPORTED_TYPE_MESSAGE: 'Método não suportado',
    UNSUPPORTED_TYPE_MESSAGE_DETAIL: 'O método \'|TYPE|\' não é suportado',
    UNSUPPORTED_TYPE_CODE: 22
  },
  HTTP_CODE: {
    OK: 200,
    CREATED: 201,
    ACCEPTED: 202,
    NO_CONTENT: 204,
    BAD_REQUEST: 400,
    UNAUTHORIZED: 401,
    FORBIDDEN: 403,
    NOT_FOUND: 404,
    INTERNAL_SERVER_ERROR: 500
  }
}
