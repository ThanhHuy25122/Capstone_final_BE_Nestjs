import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { JobTypeService } from './job-type.service';
import { ApiTags } from '@nestjs/swagger';
import { JobTypeDto } from './entities/job-type.entity';

@ApiTags('JOB TYPE')
@Controller('job-type')
export class JobTypeController {
  constructor(private readonly jobTypeService: JobTypeService) {}

  @Post('/create-job-type')
  create(@Body() jobType: JobTypeDto) {
    return this.jobTypeService.create(jobType);
  }

  @Get('/get-job-type')
  findAll() {
    return this.jobTypeService.findAll();
  }

  @Get('/get-job-type/:jobTypeId')
  findOne(@Param('jobTypeId') jobTypeId: string) {
    return this.jobTypeService.findOne(+jobTypeId);
  }

  @Patch('/update-job-type/:jobTypeId')
  update(
    @Param('jobTypeId') jobTypeId: string,
    @Body() updateJobTypeDto: JobTypeDto,
  ) {
    return this.jobTypeService.update(+jobTypeId, updateJobTypeDto);
  }

  @Delete('/delete-job-type/:jobTypeId')
  remove(@Param('jobTypeId') jobTypeId: string) {
    return this.jobTypeService.remove(+jobTypeId);
  }
}
