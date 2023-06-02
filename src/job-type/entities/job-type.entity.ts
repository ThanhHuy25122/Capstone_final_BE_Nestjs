import { ApiProperty } from '@nestjs/swagger';

export class JobTypeDto {
  id: number | null;

  @ApiProperty({ description: 'email', type: String })
  ten_loai_cong_viec: string;
}
