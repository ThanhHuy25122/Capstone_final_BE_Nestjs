import { Injectable } from '@nestjs/common';
import { Job } from './entities/job.entity';
import { PrismaClient } from '@prisma/client';
import { errorCode, failCode, successCode } from 'src/config/response';
import { MyResponse } from 'src/interface/response.dto';

@Injectable()
export class JobService {
  prisma = new PrismaClient();

  async create(job: Job): Promise<MyResponse<Job | any>> {
    if (job.id) {
      return errorCode({}, 'Please do not enter an ID.');
    }

    const checkUserId = await this.prisma.nguoiDung?.findFirst({
      where: {
        id: job?.nguoi_tao,
      },
    });

    const checkJob = await this.prisma.congViec?.findFirst({
      where: {
        ten_cong_viec: job?.ten_cong_viec,
      },
    });
    const checkJobDetailId = await this.prisma.chiTietCongViec?.findFirst({
      where: {
        id: job?.ma_chi_tiet_loai,
      },
    });

    if (!checkJobDetailId) {
      return errorCode({}, 'The job detail does not exist!');
    }

    if (!checkUserId) {
      return errorCode({}, 'The user does not exist!');
    }
    if (checkJob) {
      return errorCode({}, 'The job already exists!');
    }
    const createJob = await this.prisma.congViec?.create({
      data: job,
    });

    if (createJob) {
      return successCode(createJob, 'Job successfully created!');
    }
    return failCode();
  }

  async findAll(): Promise<MyResponse<Job[]>> {
    const data = await this.prisma.congViec?.findMany();
    if (!data) {
      return errorCode({}, 'There are no jobs available.');
    }
    return successCode(data, 'Get job successfully!');
  }

  async findOne(jobId: number): Promise<Job> {
    if (!jobId) {
      return errorCode({}, 'Please enter the ID address as a number.');
    }

    const checkJob = await this.prisma.congViec?.findFirst({
      where: { id: jobId },
    });

    if (!checkJob) {
      return errorCode({}, 'Job not found!');
    }

    return successCode(checkJob, 'Find job successfully!');
  }

  async update(jobId: number, updateJob: Job): Promise<MyResponse<Job | null>> {
    if (!jobId) {
      return errorCode({}, 'Please enter the ID address as a number.');
    }

    const checkJobById = await this.prisma.congViec.findFirst({
      where: { id: jobId },
    });

    if (!checkJobById) {
      return errorCode({}, 'Job not found!');
    }

    const checkJobDetailId = await this.prisma.chiTietCongViec.findFirst({
      where: { id: updateJob.ma_chi_tiet_loai },
    });

    if (!checkJobDetailId) {
      return errorCode({}, 'Job detail not found!');
    }

    const checkUserId = await this.prisma.nguoiDung.findFirst({
      where: { id: updateJob.nguoi_tao },
    });

    if (!checkUserId) {
      return errorCode({}, 'User not found!');
    }

    const updatedJob = await this.prisma.congViec.update({
      where: { id: jobId },
      data: updateJob,
    });

    if (updatedJob) {
      return successCode(updatedJob, 'Update job successfully!');
    }

    return failCode();
  }

  async remove(jobId: number): Promise<MyResponse<null>> {
    if (!jobId) {
      return errorCode({}, 'Please enter the ID address as a number.');
    }

    const checkJobById = await this.prisma.congViec?.findFirst({
      where: { id: jobId },
    });

    if (!checkJobById) {
      return errorCode({}, 'Job not found!');
    }

    const deleteJob = await this.prisma.congViec?.delete({
      where: { id: jobId },
    });
    if (deleteJob) {
      return successCode({}, 'Delete job successfully!');
    }
    return errorCode({}, 'Delete job failed. You not valid !');
  }
}
