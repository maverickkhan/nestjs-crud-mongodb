import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { CatService } from './cat.service';
import { CreateCatDTO } from './dto/cat.dto';
import { Cat } from './schemas/cat.schemas';

@Controller('cat')
export class CatController {
    constructor(
        private catService: CatService,
    ){}

    @Post()
    create(
        @Body() createCatDTO: CreateCatDTO 
        ):Promise<Cat> {
      return this.catService.create(createCatDTO);
    }

    @Get('getById/:id')
    getbyId(
        @Param('id') id: string
    ):Promise<Cat>
    {
        console.log(id)
        return this.catService.findById(id);
    }

    @Get()
    getAll():Promise<Cat[]> 
    {
        return this.catService.findAll();
    }

    @Delete(':id')
    deletById(
        @Param('id') id: string
    ):Promise<any>
    {
        return this.catService.deleteCat(id);
    }

    @Patch(':id')
    updateById(
        @Param('id') id: string,
        @Body() createCatDTO: CreateCatDTO
    ):Promise<any>{
        return this.catService.updateCat(id, createCatDTO);
    }
}
