import { ResponseSuccess } from './response-success';

export enum MessageDefault {
  SUCCESSFULLY_CREATED = 'Se registró {{elemento}} exitosamente',
  SUCCESSFULLY_UPDATED = 'Se actualizó {{elemento}} exitosamente',
  SUCCESSFULLY_DELETED = 'Se elimino  {{elemento}} exitosamente',
}

export class ResponseMessage {
  static createSuccessResponse<T>(message: string, data: T): ResponseSuccess<T> {
    return {
      message,
      data
    };
  }
  static createDefaultMessage<T>(message: MessageDefault, data: T): ResponseSuccess<T> {

    return {
      message,
      data
    };
  }
}
