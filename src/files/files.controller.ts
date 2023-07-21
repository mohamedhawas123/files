import { Controller, Get, Post, Body, Patch, Param, Delete,UseInterceptors, Res , UploadedFile} from '@nestjs/common';
import { FilesService } from './files.service';
import { CreateFileDto } from './dto/create-file.dto';
import { UpdateFileDto } from './dto/update-file.dto';
import { FileInterceptor } from '@nestjs/platform-express';
import { diskStorage } from 'multer';
import type { Multer } from 'multer';
import { Express } from 'express';
import { extname } from 'path';


@Controller('files')
export class FilesController {
  constructor(private readonly filesService: FilesService) {}

  @Post('upload')
  @UseInterceptors(FileInterceptor('file', {
    
    storage: diskStorage({
      destination: './uploads',
      filename: (req, file, callback) => {
        return callback(null, `${file.originalname}`);
      },
    }),
  }))
  async uploadFile(@Res() res, @UploadedFile() file) {
    
    
    const Url = `http://localhost:3000/uploads/${file.filename}`;
    const fileName = `${file.filename}`
    console.log(Url);
   await this.filesService.create(Url, fileName)
    res.send(Url)
   
  }

  @Get()
  findAll() {
    return this.filesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.filesService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateFileDto: UpdateFileDto) {
    return this.filesService.update(+id, updateFileDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.filesService.remove(+id);
  }
}
