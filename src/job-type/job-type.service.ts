import { PrismaClient } from '@prisma/client';
import { Injectable } from '@nestjs/common';
import { errorCode, failCode, successCode } from 'src/config/response';
import { JobTypeDto } from './entities/job-type.entity';

@Injectable()
export class JobTypeService {
  prisma = new PrismaClient();

  async create(jobType: JobTypeDto) {
    const checkJobType = await this.prisma.loaiCongViec.findFirst({
      where: { ten_loai_cong_viec: jobType?.ten_loai_cong_viec },
    });

    const createJobType = await this.prisma.loaiCongViec.create({
      data: jobType,
    });

    if (checkJobType) {
      return errorCode({}, 'The job type already exists!');
    }

    if (createJobType) {
      return successCode(createJobType, 'Job Type successfully created!');
    }
    return failCode();
  }

  async findAll(): Promise<JobTypeDto[]> {
    const data = await this.prisma.loaiCongViec.findMany();
    if (!data) {
      return errorCode({}, 'There are no job types available.');
    }
    return successCode(data, 'Get job type successfully!');
  }

  async findOne(jobTypeId: number): Promise<JobTypeDto> {
    if (!jobTypeId) {
      return errorCode({}, 'Please enter the ID address as a number.');
    }

    const checkJobType = await this.prisma.loaiCongViec.findFirst({
      where: { id: jobTypeId },
    });

    if (!checkJobType) {
      return errorCode({}, 'Job type not found ');
    }

    return successCode(checkJobType, 'Find job type successfully!');
  }

  async update(jobTypeId: number, updateJobTypeDto: JobTypeDto) {
    if (!jobTypeId) {
      return errorCode({}, 'Please enter the ID address as a number.');
    }

    const checkJobTypeByName = await this.prisma.loaiCongViec.findFirst({
      where: { ten_loai_cong_viec: updateJobTypeDto?.ten_loai_cong_viec },
    });

    if (checkJobTypeByName) {
      return errorCode({}, 'The job type already exists!');
    }

    const checkJobTypeById = await this.prisma.loaiCongViec.findFirst({
      where: { id: jobTypeId },
    });

    if (!checkJobTypeById) {
      return errorCode({}, 'Job type not found ');
    }

    const updateJobType = await this.prisma.loaiCongViec.update({
      where: { id: jobTypeId },
      data: updateJobTypeDto,
    });

    if (updateJobType) {
      return successCode(updateJobType, 'Update job type successfully!');
    }

    return failCode();
  }

  async remove(jobTypeId: number) {
    if (!jobTypeId) {
      return errorCode({}, 'Please enter the ID address as a number.');
    }

    const checkJobTypeById = await this.prisma.loaiCongViec.findFirst({
      where: { id: jobTypeId },
    });

    if (!checkJobTypeById) {
      return errorCode({}, 'Job type not found ');
    }

    const deleteJobType = await this.prisma.loaiCongViec.delete({
      where: { id: jobTypeId },
    });
    if (deleteJobType) {
      return successCode({}, 'Delete job type successfully!');
    }
    return errorCode({}, 'Delete job type failed. You not valid !');
  }
}
