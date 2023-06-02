import { CreateHireJobDto } from './dto/create-hire-job.dto';
import { UpdateHireJobDto } from './dto/update-hire-job.dto';
export declare class HireJobService {
    create(createHireJobDto: CreateHireJobDto): string;
    findAll(): string;
    findOne(id: number): string;
    update(id: number, updateHireJobDto: UpdateHireJobDto): string;
    remove(id: number): string;
}
