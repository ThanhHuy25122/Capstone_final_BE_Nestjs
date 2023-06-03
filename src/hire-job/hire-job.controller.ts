import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { HireJobService } from './hire-job.service';
import { ApiTags } from '@nestjs/swagger';
import { HireJob } from './entities/hire-job.entity';

@ApiTags('HIRE JOB')
@Controller('hire-job')
export class HireJobController {
  constructor(private readonly hireJobService: HireJobService) {}

  @Post()
  create(@Body() createHireJobDto: HireJob) {
    return this.hireJobService.create(createHireJobDto);
  }

  @Get()
  findAll() {
    return this.hireJobService.findAll();
  }

  @Get(':hireJobId')
  findOne(@Param('hireJobId') hireJobId: string) {
    return this.hireJobService.findOne(+hireJobId);
  }

  @Patch(':hireJobId')
  update(
    @Param('hireJobId') hireJobId: string,
    @Body() updateHireJobDto: HireJob,
  ) {
    return this.hireJobService.update(+hireJobId, updateHireJobDto);
  }

  @Delete(':hireJobId')
  remove(@Param('hireJobId') hireJobId: string) {
    return this.hireJobService.remove(+hireJobId);
  }
}
