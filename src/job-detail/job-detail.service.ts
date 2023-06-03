import { Injectable } from '@nestjs/common';

import { PrismaClient } from '@prisma/client';
import { MyResponse } from 'src/interface/response.dto';
import { errorCode, failCode, successCode } from 'src/config/response';
import { JobDetail } from './entities/job-detail.entity';

@Injectable()
export class JobDetailService {
  prisma = new PrismaClient();

  async create(job: JobDetail): Promise<MyResponse<JobDetail | any>> {
    if (job.id) {
      return errorCode({}, 'Please do not enter an ID.');
    }

    const checkJobDetail = await this.prisma.chiTietCongViec.findFirst({
      where: {
        ten_chi_tiet: job?.ten_chi_tiet,
      },
    });
    const checkJobTypeId = await this.prisma.loaiCongViec.findFirst({
      where: {
        id: job?.ma_loai_cong_viec,
      },
    });

    if (!checkJobTypeId) {
      return errorCode({}, 'The job type does not exist!');
    }

    if (checkJobDetail) {
      return errorCode({}, 'The job detail already exists!');
    }

    const createJobDetail = await this.prisma.chiTietCongViec.create({
      data: job,
    });

    if (createJobDetail) {
      return successCode(createJobDetail, 'Job detail successfully created!');
    }
    return failCode();
  }

  async findAll(): Promise<MyResponse<JobDetail[]>> {
    const data = await this.prisma.congViec?.findMany();
    if (!data) {
      return errorCode({}, 'There are no jobs available.');
    }
    return successCode(data, 'Get job detail successfully!');
  }

  async findOne(jobDetailId: number): Promise<JobDetail> {
    if (!jobDetailId) {
      return errorCode({}, 'Please enter the ID address as a number.');
    }

    const checkJobDetail = await this.prisma.congViec?.findFirst({
      where: { id: jobDetailId },
    });

    if (!checkJobDetail) {
      return errorCode({}, 'Job detail not found!');
    }

    return successCode(checkJobDetail, 'Find job detail successfully!');
  }

  async update(
    jobDetailId: number,
    updateJobDetail: JobDetail,
  ): Promise<MyResponse<JobDetail | null>> {
    if (!jobDetailId) {
      return errorCode({}, 'Please enter the ID address as a number.');
    }

    const checkJobDetailByName = await this.prisma.congViec?.findFirst({
      where: { id: updateJobDetail?.id },
    });

    if (checkJobDetailByName) {
      return errorCode({}, 'The job detail already exists!');
    }

    const checkJobDetailById = await this.prisma.congViec?.findFirst({
      where: { id: jobDetailId },
    });

    if (!checkJobDetailById) {
      return errorCode({}, 'JobDetail not found!');
    }

    const updatedJobDetail = await this.prisma.congViec?.update({
      where: { id: jobDetailId },
      data: updateJobDetail,
    });

    if (updatedJobDetail) {
      return successCode(updatedJobDetail, 'Update job detail successfully!');
    }

    return failCode();
  }

  async remove(jobDetailId: number): Promise<MyResponse<null>> {
    if (!jobDetailId) {
      return errorCode({}, 'Please enter the ID address as a number.');
    }

    const checkJobDetailById = await this.prisma.congViec?.findFirst({
      where: { id: jobDetailId },
    });

    if (!checkJobDetailById) {
      return errorCode({}, 'JobDetail not found!');
    }

    const deleteJobDetail = await this.prisma.congViec?.delete({
      where: { id: jobDetailId },
    });
    if (deleteJobDetail) {
      return successCode({}, 'Delete job detail successfully!');
    }
    return errorCode({}, 'Delete job detail failed. You not valid !');
  }
}
