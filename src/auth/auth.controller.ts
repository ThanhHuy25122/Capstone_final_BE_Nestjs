import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { AuthService } from './auth.service';
import { ApiTags } from '@nestjs/swagger';
import { UserLogin } from './entities/auth.entity';
import { UserDto } from 'src/user/entities/user.entity';

@ApiTags('AUTH')
@Controller('/auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('/login')
  login(@Body() body: UserLogin) {
    return this.authService.login(body);
  }

  @Post('/register')
  signup(@Body() body: UserDto) {
    return this.authService.register(body);
  }
}
