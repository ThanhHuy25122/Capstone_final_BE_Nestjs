import { Injectable } from '@nestjs/common';
import { HireJob } from './entities/hire-job.entity';
import { PrismaClient } from '@prisma/client';
import { MyResponse } from 'src/interface/response.dto';
import { errorCode, failCode, successCode } from 'src/config/response';

@Injectable()
export class HireJobService {
  prisma = new PrismaClient();

  async create(hireJob: HireJob): Promise<MyResponse<HireJob | any>> {
    if (hireJob.id) {
      return errorCode({}, 'Please do not enter an ID.');
    }

    const checkUserId = await this.prisma.nguoiDung?.findFirst({
      where: {
        id: hireJob?.ma_nguoi_thue,
      },
    });
    if (!checkUserId) {
      return errorCode({}, 'The user does not exist!');
    }

    const checkHireJob = await this.prisma.congViec?.findFirst({
      where: {
        id: hireJob?.ma_cong_viec,
      },
    });
    if (checkHireJob) {
      return errorCode({}, 'The job already exists!');
    }

    const createHireJob = await this.prisma.thueCongViec?.create({
      data: hireJob,
    });

    if (createHireJob) {
      return successCode(createHireJob, 'Hire job successfully created!');
    }
    return failCode();
  }

  async findAll(): Promise<MyResponse<HireJob[]>> {
    const data = await this.prisma.congViec?.findMany();
    if (!data) {
      return errorCode({}, 'There are no jobs available.');
    }
    return successCode(data, 'Get job successfully!');
  }

  async findOne(hireJobId: number): Promise<HireJob> {
    if (!hireJobId) {
      return errorCode({}, 'Please enter the ID address as a number.');
    }

    const checkHireJob = await this.prisma.congViec?.findFirst({
      where: { id: hireJobId },
    });

    if (!checkHireJob) {
      return errorCode({}, 'Hire job not found!');
    }

    return successCode(checkHireJob, 'Find job successfully!');
  }

  async update(
    hireJobId: number,
    updateHireJob: HireJob,
  ): Promise<MyResponse<HireJob | null>> {
    if (!hireJobId) {
      return errorCode({}, 'Please enter the ID address as a number.');
    }

    const checkHireJobById = await this.prisma.congViec.findFirst({
      where: { id: hireJobId },
    });

    if (!checkHireJobById) {
      return errorCode({}, 'Hire job not found!');
    }

    const checkHireJobDetailId = await this.prisma.congViec.findFirst({
      where: { id: updateHireJob.ma_cong_viec },
    });

    if (!checkHireJobDetailId) {
      return errorCode({}, 'Hire job detail not found!');
    }

    const checkUserId = await this.prisma.nguoiDung.findFirst({
      where: { id: updateHireJob.ma_nguoi_thue },
    });

    if (!checkUserId) {
      return errorCode({}, 'User not found!');
    }

    const updatedHireJob = await this.prisma.congViec.update({
      where: { id: hireJobId },
      data: updateHireJob,
    });

    if (updatedHireJob) {
      return successCode(updatedHireJob, 'Update job successfully!');
    }

    return failCode();
  }

  async remove(hireJobId: number): Promise<MyResponse<null>> {
    if (!hireJobId) {
      return errorCode({}, 'Please enter the ID address as a number.');
    }

    const checkHireJobById = await this.prisma.congViec?.findFirst({
      where: { id: hireJobId },
    });

    if (!checkHireJobById) {
      return errorCode({}, 'Hire job not found!');
    }

    const deleteHireJob = await this.prisma.congViec?.delete({
      where: { id: hireJobId },
    });
    if (deleteHireJob) {
      return successCode({}, 'Delete job successfully!');
    }
    return errorCode({}, 'Delete job failed. You not valid !');
  }
}
