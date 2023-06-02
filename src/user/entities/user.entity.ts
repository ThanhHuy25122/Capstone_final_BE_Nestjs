import { ApiProperty } from '@nestjs/swagger';

export class UserDto {
  @ApiProperty({ description: 'id', type: Number || null })
  id: number | null;
  @ApiProperty({ description: 'name', type: String })
  name: string;
  @ApiProperty({ description: 'email', type: String })
  email: string;
  @ApiProperty({ description: 'password', type: String })
  password: string;
  @ApiProperty({ description: 'phone', type: String })
  phone: string;
  @ApiProperty({ description: 'birthday', type: String })
  birthday: string;
  @ApiProperty({ description: 'gender', type: String })
  gender: string;
  @ApiProperty({ description: 'role', type: String })
  role: string;
  @ApiProperty({ description: 'skill', type: String })
  skill: string;
  @ApiProperty({ description: 'certification', type: String })
  certification: string;
}
