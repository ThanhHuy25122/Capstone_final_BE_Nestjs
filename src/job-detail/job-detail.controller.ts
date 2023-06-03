import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { JobDetailService } from './job-detail.service';
import { ApiTags } from '@nestjs/swagger';
import { JobDetail } from './entities/job-detail.entity';
@ApiTags('JOB DETAIL')
@Controller('job-detail')
export class JobDetailController {
  constructor(private readonly jobDetailService: JobDetailService) {}

  @Post()
  create(@Body() createJobDetailDto: JobDetail) {
    return this.jobDetailService.create(createJobDetailDto);
  }

  @Get()
  findAll() {
    return this.jobDetailService.findAll();
  }

  @Get(':jobDetailId')
  findOne(@Param('jobDetailId') jobDetailId: string) {
    return this.jobDetailService.findOne(+jobDetailId);
  }

  @Patch(':jobDetailId')
  update(
    @Param('jobDetailId') jobDetailId: string,
    @Body() updateJobDetailDto: JobDetail,
  ) {
    return this.jobDetailService.update(+jobDetailId, updateJobDetailDto);
  }

  @Delete(':jobDetailId')
  remove(@Param('jobDetailId') jobDetailId: string) {
    return this.jobDetailService.remove(+jobDetailId);
  }
}
