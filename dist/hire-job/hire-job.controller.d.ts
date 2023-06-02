import { HireJobService } from './hire-job.service';
import { CreateHireJobDto } from './dto/create-hire-job.dto';
import { UpdateHireJobDto } from './dto/update-hire-job.dto';
export declare class HireJobController {
    private readonly hireJobService;
    constructor(hireJobService: HireJobService);
    create(createHireJobDto: CreateHireJobDto): string;
    findAll(): string;
    findOne(id: string): string;
    update(id: string, updateHireJobDto: UpdateHireJobDto): string;
    remove(id: string): string;
}
