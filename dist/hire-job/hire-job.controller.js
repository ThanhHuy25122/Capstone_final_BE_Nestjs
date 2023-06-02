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
exports.HireJobController = void 0;
const common_1 = require("@nestjs/common");
const hire_job_service_1 = require("./hire-job.service");
const create_hire_job_dto_1 = require("./dto/create-hire-job.dto");
const update_hire_job_dto_1 = require("./dto/update-hire-job.dto");
const swagger_1 = require("@nestjs/swagger");
let HireJobController = class HireJobController {
    constructor(hireJobService) {
        this.hireJobService = hireJobService;
    }
    create(createHireJobDto) {
        return this.hireJobService.create(createHireJobDto);
    }
    findAll() {
        return this.hireJobService.findAll();
    }
    findOne(id) {
        return this.hireJobService.findOne(+id);
    }
    update(id, updateHireJobDto) {
        return this.hireJobService.update(+id, updateHireJobDto);
    }
    remove(id) {
        return this.hireJobService.remove(+id);
    }
};
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_hire_job_dto_1.CreateHireJobDto]),
    __metadata("design:returntype", void 0)
], HireJobController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], HireJobController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], HireJobController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_hire_job_dto_1.UpdateHireJobDto]),
    __metadata("design:returntype", void 0)
], HireJobController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], HireJobController.prototype, "remove", null);
HireJobController = __decorate([
    (0, swagger_1.ApiTags)('HIRE JOB'),
    (0, common_1.Controller)('hire-job'),
    __metadata("design:paramtypes", [hire_job_service_1.HireJobService])
], HireJobController);
exports.HireJobController = HireJobController;
//# sourceMappingURL=hire-job.controller.js.map