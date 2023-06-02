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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.JobTypeController = void 0;
const common_1 = require("@nestjs/common");
const job_type_service_1 = require("./job-type.service");
const swagger_1 = require("@nestjs/swagger");
const job_type_entity_1 = require("./entities/job-type.entity");
let JobTypeController = class JobTypeController {
    constructor(jobTypeService) {
        this.jobTypeService = jobTypeService;
    }
    create(jobType) {
        return this.jobTypeService.create(jobType);
    }
    findAll() {
        return this.jobTypeService.findAll();
    }
    findOne(jobTypeId) {
        return this.jobTypeService.findOne(+jobTypeId);
    }
    update(jobTypeId, updateJobTypeDto) {
        return this.jobTypeService.update(+jobTypeId, updateJobTypeDto);
    }
    remove(jobTypeId) {
        return this.jobTypeService.remove(+jobTypeId);
    }
};
__decorate([
    (0, common_1.Post)('/create-job-type'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [job_type_entity_1.JobTypeDto]),
    __metadata("design:returntype", void 0)
], JobTypeController.prototype, "create", null);
__decorate([
    (0, common_1.Get)('/get-job-type'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], JobTypeController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)('/get-job-type/:jobTypeId'),
    __param(0, (0, common_1.Param)('jobTypeId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], JobTypeController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)('/update-job-type/:jobTypeId'),
    __param(0, (0, common_1.Param)('jobTypeId')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, job_type_entity_1.JobTypeDto]),
    __metadata("design:returntype", void 0)
], JobTypeController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)('/delete-job-type/:jobTypeId'),
    __param(0, (0, common_1.Param)('jobTypeId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], JobTypeController.prototype, "remove", null);
JobTypeController = __decorate([
    (0, swagger_1.ApiTags)('JOB TYPE'),
    (0, common_1.Controller)('job-type'),
    __metadata("design:paramtypes", [job_type_service_1.JobTypeService])
], JobTypeController);
exports.JobTypeController = JobTypeController;
//# sourceMappingURL=job-type.controller.js.map