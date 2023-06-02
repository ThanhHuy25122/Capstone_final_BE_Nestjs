import { CreatePreviewDto } from './dto/create-preview.dto';
import { UpdatePreviewDto } from './dto/update-preview.dto';
export declare class PreviewService {
    create(createPreviewDto: CreatePreviewDto): string;
    findAll(): string;
    findOne(id: number): string;
    update(id: number, updatePreviewDto: UpdatePreviewDto): string;
    remove(id: number): string;
}
