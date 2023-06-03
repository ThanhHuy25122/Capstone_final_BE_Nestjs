import { ApiProperty } from '@nestjs/swagger';
export class Job {
  id: number;
  @ApiProperty({ description: 'Job Name', type: String })
  ten_cong_viec: string;
  @ApiProperty({ description: 'rating', type: Number })
  danh_gia: number;
  @ApiProperty({ description: 'price', type: Number })
  gia_tien: number;
  @ApiProperty({ description: 'image', type: String })
  hinh_anh: string;
  @ApiProperty({ description: 'description', type: String })
  mo_ta: string;
  @ApiProperty({ description: 'short description', type: String })
  mo_ta_ngan: string;
  @ApiProperty({ description: '....Number', type: Number })
  sao_cong_viec: number;
  @ApiProperty({ description: 'job detail id', type: Number })
  ma_chi_tiet_loai: number;
  @ApiProperty({ description: 'create member id', type: Number })
  nguoi_tao: number;
}
