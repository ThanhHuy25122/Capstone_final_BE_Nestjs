import { ApiProperty } from '@nestjs/swagger';
import { ChiTietCongViec } from '@prisma/client';
export class JobDetail {
  id: number;
  @ApiProperty({ description: 'ten_chi_tiet', type: String })
  ten_chi_tiet: string;
  @ApiProperty({ description: 'hinh_anh', type: String })
  hinh_anh: string;
  @ApiProperty({ description: 'ma_loai_cong_viec', type: Number })
  ma_loai_cong_viec: number;
}
