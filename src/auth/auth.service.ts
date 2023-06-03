import { PrismaClient } from '@prisma/client';
import { ConfigService } from '@nestjs/config/dist';
import { Injectable, HttpException, HttpStatus } from '@nestjs/common';

import { JwtService } from '@nestjs/jwt';
import { UserLogin } from './entities/auth.entity';
import { errorCode, failCode, successCode } from 'src/config/response';
import { MyResponse } from 'src/interface/response.dto';
import { UserDto } from 'src/user/entities/user.entity';

class ResponseAuthLogin extends UserLogin {
  token: string;
}

@Injectable()
export class AuthService {
  constructor(private jwtService: JwtService, private config: ConfigService) {}

  prisma = new PrismaClient();

  async login(
    userLogin: UserLogin,
  ): Promise<MyResponse<ResponseAuthLogin> | any> {
    // check email
    const checkEmail = await this.prisma.nguoiDung.findFirst({
      where: {
        email: userLogin.email,
      },
    });

    if (!checkEmail) {
      throw new HttpException('Email not found', HttpStatus.BAD_REQUEST);
    }

    // check pass_word

    const checkPassword = await this.prisma.nguoiDung.findFirst({
      where: {
        password: userLogin.password,
      },
    });

    if (!checkPassword) {
      return errorCode({}, 'Login fail! Wrong password ');
    }
    // login success

    let token: string = this.jwtService.sign(
      { data: 'node 29' },
      { secret: this.config.get('SECRET_KEY'), expiresIn: '5m' },
    );

    return successCode({ ...userLogin, token }, 'Login success!');
  }

  async register(userSignup: UserDto): Promise<MyResponse<UserDto>> {
    const checkEmail = await this.prisma.nguoiDung.findFirst({
      where: { email: userSignup.email },
    });

    const checkPhone = await this.prisma.nguoiDung.findFirst({
      where: { phone: userSignup.phone },
    });
    if (checkEmail) {
      return errorCode({}, 'The email already exists.');
    }

    if (checkPhone) {
      return errorCode({}, 'The phone already exists.');
    }
    const result = await this.prisma.nguoiDung.create({
      data: userSignup,
    });

    //check create user
    if (!result) {
      return failCode();
    }

    return successCode(userSignup, 'Success registering!');
  }
}
