import { ApiProperty } from '@nestjs/swagger';
export class HireJob {
  id: number | null;
  @ApiProperty({ description: 'Job ID', type: Number })
  ma_cong_viec: number;
  @ApiProperty({ description: 'User ID', type: Number })
  ma_nguoi_thue: number;
  @ApiProperty({ description: 'Date hire job ID', type: Date })
  ngay_thue: Date;
  @ApiProperty({ description: 'Complete', type: Boolean })
  hoan_thanh: boolean;
}
