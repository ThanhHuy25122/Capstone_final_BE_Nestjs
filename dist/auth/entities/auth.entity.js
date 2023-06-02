"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Token = exports.UserLogin = exports.Auth = void 0;
const swagger_1 = require("@nestjs/swagger");
class Auth {
}
exports.Auth = Auth;
class UserLogin {
}
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'email', type: String }),
    __metadata("design:type", String)
], UserLogin.prototype, "email", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'password', type: String }),
    __metadata("design:type", String)
], UserLogin.prototype, "password", void 0);
exports.UserLogin = UserLogin;
class Token {
}
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'token', type: String }),
    __metadata("design:type", String)
], Token.prototype, "token", void 0);
exports.Token = Token;
//# sourceMappingURL=auth.entity.js.map