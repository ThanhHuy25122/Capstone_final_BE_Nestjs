"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateUserDto = void 0;
const mapped_types_1 = require("@nestjs/mapped-types");
const user_entity_1 = require("../entities/user.entity");
class UpdateUserDto extends (0, mapped_types_1.PartialType)(user_entity_1.UserDto) {
}
exports.UpdateUserDto = UpdateUserDto;
//# sourceMappingURL=update-user.dto.js.map