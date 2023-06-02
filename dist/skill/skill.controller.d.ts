import { SkillService } from './skill.service';
import { CreateSkillDto } from './dto/create-skill.dto';
import { UpdateSkillDto } from './dto/update-skill.dto';
export declare class SkillController {
    private readonly skillService;
    constructor(skillService: SkillService);
    create(createSkillDto: CreateSkillDto): string;
    findAll(): string;
    findOne(id: string): string;
    update(id: string, updateSkillDto: UpdateSkillDto): string;
    remove(id: string): string;
}
