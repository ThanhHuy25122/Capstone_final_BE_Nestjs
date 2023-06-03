import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { JobService } from './job.service';

import { ApiTags } from '@nestjs/swagger';
import { Job } from './entities/job.entity';
@ApiTags('JOB')
@Controller('job')
export class JobController {
  constructor(private readonly jobService: JobService) {}

  @Post('/create-job')
  create(@Body() createJobDto: Job) {
    return this.jobService.create(createJobDto);
  }

  @Get('/get-job')
  findAll() {
    return this.jobService.findAll();
  }

  @Get('/get-job/:jobId')
  findOne(@Param('jobId') jobId: string) {
    return this.jobService.findOne(+jobId);
  }

  @Patch('/update-job/:jobId')
  update(@Param('jobId') jobId: string, @Body() updateJobDto: Job) {
    return this.jobService.update(+jobId, updateJobDto);
  }

  @Delete('/delete-job/:jobId')
  remove(@Param('jobId') jobId: string) {
    return this.jobService.remove(+jobId);
  }
}
