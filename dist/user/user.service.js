"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserService = void 0;
const common_1 = require("@nestjs/common");
const client_1 = require("@prisma/client");
const response_1 = require("../config/response");
let UserService = class UserService {
    constructor() {
        this.prisma = new client_1.PrismaClient();
    }
    async create(user) {
        const checkEmail = await this.prisma.nguoiDung.findFirst({
            where: { email: user.email },
        });
        const checkPhone = await this.prisma.nguoiDung.findFirst({
            where: { phone: user.phone },
        });
        if (checkEmail) {
            return (0, response_1.errorCode)({}, 'The email already exists.');
        }
        if (checkPhone) {
            return (0, response_1.errorCode)({}, 'The phone already exists.');
        }
        const result = await this.prisma.nguoiDung.create({
            data: user,
        });
        if (!result) {
            return (0, response_1.failCode)();
        }
        return (0, response_1.successCode)(user, 'Success registering!');
    }
    async getUser() {
        const data = await this.prisma.nguoiDung.findMany();
        return (0, response_1.successCode)(data, 'Get user successfully!');
    }
    async findOne(userId) {
        if (!userId) {
            return (0, response_1.errorCode)({}, 'Please enter the ID address as a number.');
        }
        const checkUser = await this.prisma.nguoiDung.findFirst({
            where: { id: userId },
        });
        if (!checkUser) {
            return (0, response_1.errorCode)({}, 'User not found ');
        }
        return (0, response_1.successCode)(checkUser, 'Find user successfully!');
    }
    async update(userId, updateUserDto) {
        if (!userId) {
            return (0, response_1.errorCode)({}, 'Please enter the ID address as a number.');
        }
        const checkUser = await this.prisma.nguoiDung.findFirst({
            where: { id: userId },
        });
        if (!checkUser) {
            return (0, response_1.errorCode)({}, 'User not found ');
        }
        const updateUser = await this.prisma.nguoiDung.update({
            where: { id: userId },
            data: updateUserDto,
        });
        if (updateUser) {
            return (0, response_1.successCode)(updateUser, 'Update user successfully!');
        }
        return (0, response_1.failCode)();
    }
    async remove(userId) {
        if (!userId) {
            return (0, response_1.errorCode)({}, 'Please enter the ID address as a number.');
        }
        const checkUser = await this.prisma.nguoiDung.findFirst({
            where: { id: userId },
        });
        if (!checkUser) {
            return (0, response_1.errorCode)({}, 'User not found ');
        }
        const deleteUser = await this.prisma.nguoiDung.delete({
            where: { id: userId },
        });
        if (deleteUser) {
            return (0, response_1.successCode)({}, 'Delete user successfully!');
        }
        return (0, response_1.errorCode)({}, 'Delete user failed. You not valid !');
    }
};
UserService = __decorate([
    (0, common_1.Injectable)()
], UserService);
exports.UserService = UserService;
//# sourceMappingURL=user.service.js.map