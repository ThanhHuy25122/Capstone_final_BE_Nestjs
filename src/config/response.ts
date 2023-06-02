import { HttpException, HttpStatus } from '@nestjs/common';
// 200 : OK
export const successCode = (
  data: any | object | null = {},
  message: string,
) => {
  throw new HttpException(
    {
      statusCode: HttpStatus.OK,
      message: message,
      content: data,
    },
    HttpStatus.OK,
  );
};

// 400 : Bad Request

export const errorCode = (data: any | object | null = {}, message: string) => {
  throw new HttpException(
    {
      statusCode: HttpStatus.BAD_REQUEST,
      message: message,
      content: data,
    },
    HttpStatus.BAD_REQUEST,
  );
};

// 500 : Internal Server Error

export const failCode = (message: string = 'Internal Server Error') => {
  throw new HttpException(
    {
      statusCode: HttpStatus.INTERNAL_SERVER_ERROR,

      message: message,
    },
    HttpStatus.INTERNAL_SERVER_ERROR,
  );
};
