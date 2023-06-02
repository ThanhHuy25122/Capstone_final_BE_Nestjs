"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdatePreviewDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const create_preview_dto_1 = require("./create-preview.dto");
class UpdatePreviewDto extends (0, swagger_1.PartialType)(create_preview_dto_1.CreatePreviewDto) {
}
exports.UpdatePreviewDto = UpdatePreviewDto;
//# sourceMappingURL=update-preview.dto.js.map