import { NguoiDung } from '@prisma/client';
import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { UserService } from './user.service';
import { UpdateUserDto } from './dto/update-user.dto';

import { ConfigService } from '@nestjs/config/dist';
import { ApiTags } from '@nestjs/swagger';
import { UserDto } from './entities/user.entity';

@ApiTags('USER')
@Controller('/user')
export class UserController {
  constructor(
    private readonly userService: UserService,
    private config: ConfigService,
  ) {}

  @Get('/get-user')
  findAll(): Promise<NguoiDung[]> {
    return this.userService.getUser();
  }

  @Get('/get-user/:userId')
  findOne(@Param('userId') userId: string): Promise<NguoiDung> {
    return this.userService.findOne(+userId);
  }

  @Post('/add-user')
  create(@Body() user: UserDto) {
    return this.userService.create(user);
  }

  @Patch('/update-user/:userId')
  update(@Param('userId') userId: string, @Body() updateUserDto: UserDto) {
    return this.userService.update(+userId, updateUserDto);
  }

  @Delete('/delete-user/:userId')
  remove(@Param('userId') userId: string) {
    return this.userService.remove(+userId);
  }
}
