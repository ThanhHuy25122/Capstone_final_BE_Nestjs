import { PreviewService } from './preview.service';
import { CreatePreviewDto } from './dto/create-preview.dto';
import { UpdatePreviewDto } from './dto/update-preview.dto';
export declare class PreviewController {
    private readonly previewService;
    constructor(previewService: PreviewService);
    create(createPreviewDto: CreatePreviewDto): string;
    findAll(): string;
    findOne(id: string): string;
    update(id: string, updatePreviewDto: UpdatePreviewDto): string;
    remove(id: string): string;
}
