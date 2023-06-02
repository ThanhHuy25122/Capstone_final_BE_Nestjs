"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.JobTypeService = void 0;
const client_1 = require("@prisma/client");
const common_1 = require("@nestjs/common");
const response_1 = require("../config/response");
let JobTypeService = class JobTypeService {
    constructor() {
        this.prisma = new client_1.PrismaClient();
    }
    async create(jobType) {
        const checkJobType = await this.prisma.loaiCongViec.findFirst({
            where: { ten_loai_cong_viec: jobType === null || jobType === void 0 ? void 0 : jobType.ten_loai_cong_viec },
        });
        const createJobType = await this.prisma.loaiCongViec.create({
            data: jobType,
        });
        if (checkJobType) {
            return (0, response_1.errorCode)({}, 'The job type already exists!');
        }
        if (createJobType) {
            return (0, response_1.successCode)(createJobType, 'Job Type successfully created!');
        }
        return (0, response_1.failCode)();
    }
    async findAll() {
        const data = await this.prisma.loaiCongViec.findMany();
        if (!data) {
            return (0, response_1.errorCode)({}, 'There are no job types available.');
        }
        return (0, response_1.successCode)(data, 'Get job type successfully!');
    }
    async findOne(jobTypeId) {
        if (!jobTypeId) {
            return (0, response_1.errorCode)({}, 'Please enter the ID address as a number.');
        }
        const checkJobType = await this.prisma.loaiCongViec.findFirst({
            where: { id: jobTypeId },
        });
        if (!checkJobType) {
            return (0, response_1.errorCode)({}, 'Job type not found ');
        }
        return (0, response_1.successCode)(checkJobType, 'Find job type successfully!');
    }
    async update(jobTypeId, updateJobTypeDto) {
        if (!jobTypeId) {
            return (0, response_1.errorCode)({}, 'Please enter the ID address as a number.');
        }
        const checkJobTypeByName = await this.prisma.loaiCongViec.findFirst({
            where: { ten_loai_cong_viec: updateJobTypeDto === null || updateJobTypeDto === void 0 ? void 0 : updateJobTypeDto.ten_loai_cong_viec },
        });
        if (checkJobTypeByName) {
            return (0, response_1.errorCode)({}, 'The job type already exists!');
        }
        const checkJobTypeById = await this.prisma.loaiCongViec.findFirst({
            where: { id: jobTypeId },
        });
        if (!checkJobTypeById) {
            return (0, response_1.errorCode)({}, 'Job type not found ');
        }
        const updateJobType = await this.prisma.loaiCongViec.update({
            where: { id: jobTypeId },
            data: updateJobTypeDto,
        });
        if (updateJobType) {
            return (0, response_1.successCode)(updateJobType, 'Update job type successfully!');
        }
        return (0, response_1.failCode)();
    }
    async remove(jobTypeId) {
        if (!jobTypeId) {
            return (0, response_1.errorCode)({}, 'Please enter the ID address as a number.');
        }
        const checkJobTypeById = await this.prisma.loaiCongViec.findFirst({
            where: { id: jobTypeId },
        });
        if (!checkJobTypeById) {
            return (0, response_1.errorCode)({}, 'Job type not found ');
        }
        const deleteJobType = await this.prisma.loaiCongViec.delete({
            where: { id: jobTypeId },
        });
        if (deleteJobType) {
            return (0, response_1.successCode)({}, 'Delete job type successfully!');
        }
        return (0, response_1.errorCode)({}, 'Delete job type failed. You not valid !');
    }
};
JobTypeService = __decorate([
    (0, common_1.Injectable)()
], JobTypeService);
exports.JobTypeService = JobTypeService;
//# sourceMappingURL=job-type.service.js.map