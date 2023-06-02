import { JobTypeService } from './job-type.service';
import { JobTypeDto } from './entities/job-type.entity';
export declare class JobTypeController {
    private readonly jobTypeService;
    constructor(jobTypeService: JobTypeService);
    create(jobType: JobTypeDto): Promise<never>;
    findAll(): Promise<JobTypeDto[]>;
    findOne(jobTypeId: string): Promise<JobTypeDto>;
    update(jobTypeId: string, updateJobTypeDto: JobTypeDto): Promise<never>;
    remove(jobTypeId: string): Promise<never>;
}
