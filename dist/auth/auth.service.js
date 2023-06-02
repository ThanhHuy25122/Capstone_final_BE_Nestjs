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
exports.AuthService = void 0;
const client_1 = require("@prisma/client");
const dist_1 = require("@nestjs/config/dist");
const common_1 = require("@nestjs/common");
const jwt_1 = require("@nestjs/jwt");
const auth_entity_1 = require("./entities/auth.entity");
const response_1 = require("../config/response");
class ResponseAuthLogin extends auth_entity_1.UserLogin {
}
let AuthService = class AuthService {
    constructor(jwtService, config) {
        this.jwtService = jwtService;
        this.config = config;
        this.prisma = new client_1.PrismaClient();
    }
    async login(userLogin) {
        const checkEmail = await this.prisma.nguoiDung.findFirst({
            where: {
                email: userLogin.email,
            },
        });
        if (!checkEmail) {
            throw new common_1.HttpException('Email not found', common_1.HttpStatus.BAD_REQUEST);
        }
        const checkPassword = await this.prisma.nguoiDung.findFirst({
            where: {
                password: userLogin.password,
            },
        });
        if (!checkPassword) {
            return (0, response_1.errorCode)({}, 'Login fail! Wrong password ');
        }
        let token = this.jwtService.sign({ data: 'node 29' }, { secret: this.config.get('SECRET_KEY'), expiresIn: '5m' });
        return (0, response_1.successCode)(Object.assign(Object.assign({}, userLogin), { token }), 'Login success!');
    }
    async register(userSignup) {
        const checkEmail = await this.prisma.nguoiDung.findFirst({
            where: { email: userSignup.email },
        });
        const checkPhone = await this.prisma.nguoiDung.findFirst({
            where: { phone: userSignup.phone },
        });
        if (checkEmail) {
            return (0, response_1.errorCode)({}, 'The email already exists.');
        }
        if (checkPhone) {
            return (0, response_1.errorCode)({}, 'The phone already exists.');
        }
        const result = await this.prisma.nguoiDung.create({
            data: userSignup,
        });
        if (!result) {
            return (0, response_1.failCode)();
        }
        return (0, response_1.successCode)(userSignup, 'Success registering!');
    }
};
AuthService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [jwt_1.JwtService, dist_1.ConfigService])
], AuthService);
exports.AuthService = AuthService;
//# sourceMappingURL=auth.service.js.map