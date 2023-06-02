import { PartialType } from '@nestjs/mapped-types';
import { UserDto } from '../entities/user.entity';

export class UpdateUserDto extends PartialType(UserDto) {}
