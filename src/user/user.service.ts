import { Injectable } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';
import { errorCode, failCode, successCode } from 'src/config/response';
import { UserDto } from './entities/user.entity';

@Injectable()
export class UserService {
  prisma = new PrismaClient();

  async create(user: UserDto) {
    const checkEmail = await this.prisma.nguoiDung.findFirst({
      where: { email: user.email },
    });

    const checkPhone = await this.prisma.nguoiDung.findFirst({
      where: { phone: user.phone },
    });
    if (checkEmail) {
      return errorCode({}, 'The email already exists.');
    }

    if (checkPhone) {
      return errorCode({}, 'The phone already exists.');
    }
    const result = await this.prisma.nguoiDung.create({
      data: user,
    });

    //check create user
    if (!result) {
      return failCode();
    }

    return successCode(user, 'Success registering!');
  }

  async getUser(): Promise<UserDto[]> {
    const data = await this.prisma.nguoiDung.findMany();
    return successCode(data, 'Get user successfully!');
  }

  async findOne(userId: number): Promise<UserDto> {
    if (!userId) {
      return errorCode({}, 'Please enter the ID address as a number.');
    }

    const checkUser = await this.prisma.nguoiDung.findFirst({
      where: { id: userId },
    });

    if (!checkUser) {
      return errorCode({}, 'User not found ');
    }

    return successCode(checkUser, 'Find user successfully!');
  }

  async update(userId: number, updateUserDto: UserDto) {
    if (!userId) {
      return errorCode({}, 'Please enter the ID address as a number.');
    }

    const checkUser = await this.prisma.nguoiDung.findFirst({
      where: { id: userId },
    });

    if (!checkUser) {
      return errorCode({}, 'User not found ');
    }

    const updateUser = await this.prisma.nguoiDung.update({
      where: { id: userId },
      data: updateUserDto,
    });

    if (updateUser) {
      return successCode(updateUser, 'Update user successfully!');
    }

    return failCode();
  }

  async remove(userId: number) {
    if (!userId) {
      return errorCode({}, 'Please enter the ID address as a number.');
    }

    const checkUser = await this.prisma.nguoiDung.findFirst({
      where: { id: userId },
    });

    if (!checkUser) {
      return errorCode({}, 'User not found ');
    }

    const deleteUser = await this.prisma.nguoiDung.delete({
      where: { id: userId },
    });
    if (deleteUser) {
      return successCode({}, 'Delete user successfully!');
    }
    return errorCode({}, 'Delete user failed. You not valid !');
  }
}
