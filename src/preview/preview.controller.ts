import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { PreviewService } from './preview.service';
import { CreatePreviewDto } from './dto/create-preview.dto';
import { UpdatePreviewDto } from './dto/update-preview.dto';

@Controller('preview')
export class PreviewController {
  constructor(private readonly previewService: PreviewService) {}

  @Post()
  create(@Body() createPreviewDto: CreatePreviewDto) {
    return this.previewService.create(createPreviewDto);
  }

  @Get()
  findAll() {
    return this.previewService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.previewService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updatePreviewDto: UpdatePreviewDto) {
    return this.previewService.update(+id, updatePreviewDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.previewService.remove(+id);
  }
}
