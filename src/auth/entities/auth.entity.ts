import { ApiProperty } from '@nestjs/swagger';

export class Auth {}

export class UserLogin {
  @ApiProperty({ description: 'email', type: String })
  email: string;

  @ApiProperty({ description: 'password', type: String })
  password: string;
}

export class Token {
  @ApiProperty({ description: 'token', type: String })
  token: string;
}
