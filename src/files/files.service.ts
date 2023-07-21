import { Injectable } from '@nestjs/common';
import { CreateFileDto } from './dto/create-file.dto';
import { UpdateFileDto } from './dto/update-file.dto';
import { PrismaClient } from '@prisma/client';

@Injectable()
export class FilesService {
  prisma = new PrismaClient();
 async create(file_url: string, file_name: string){
    return await this.prisma.files.create({
      data:{
        file_url:file_url,
        file_name:file_name
      }
    })
  }
  

 async findAll() {
    return await this.prisma.files.findMany({})
  }

 async findOne(id: number) {
    return await this.prisma.files.findFirst({
      where:{
        id: + id
      }
    })
  }

  update(id: number, updateFileDto: UpdateFileDto) {
    return `This action updates a #${id} file`;
  }

  remove(id: number) {
    return `This action removes a #${id} file`;
  }
}
