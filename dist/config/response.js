"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.failCode = exports.errorCode = exports.successCode = void 0;
const common_1 = require("@nestjs/common");
const successCode = (data = {}, message) => {
    throw new common_1.HttpException({
        statusCode: common_1.HttpStatus.OK,
        message: message,
        content: data,
    }, common_1.HttpStatus.OK);
};
exports.successCode = successCode;
const errorCode = (data = {}, message) => {
    throw new common_1.HttpException({
        statusCode: common_1.HttpStatus.BAD_REQUEST,
        message: message,
        content: data,
    }, common_1.HttpStatus.BAD_REQUEST);
};
exports.errorCode = errorCode;
const failCode = (message = 'Internal Server Error') => {
    throw new common_1.HttpException({
        statusCode: common_1.HttpStatus.INTERNAL_SERVER_ERROR,
        message: message,
    }, common_1.HttpStatus.INTERNAL_SERVER_ERROR);
};
exports.failCode = failCode;
//# sourceMappingURL=response.js.map