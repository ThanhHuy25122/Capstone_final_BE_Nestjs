import { PrismaClient } from '@prisma/client';
import { JobTypeDto } from './entities/job-type.entity';
export declare class JobTypeService {
    prisma: PrismaClient<import(".prisma/client").Prisma.PrismaClientOptions, never, import(".prisma/client").Prisma.RejectOnNotFound | import(".prisma/client").Prisma.RejectPerOperation>;
    create(jobType: JobTypeDto): Promise<never>;
    findAll(): Promise<JobTypeDto[]>;
    findOne(jobTypeId: number): Promise<JobTypeDto>;
    update(jobTypeId: number, updateJobTypeDto: JobTypeDto): Promise<never>;
    remove(jobTypeId: number): Promise<never>;
}
