import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateCatDTO } from './dto/cat.dto';
import { Cat, CatDocument } from './schemas/cat.schemas';

@Injectable()
export class CatService {
    constructor(@InjectModel(Cat.name)
    private catModel: Model<CatDocument>
    ){}

    async findAll(): Promise<Cat[]>{
        return await this.catModel.find().exec();
    }

    async findById(id): Promise<Cat>{
        const data = await this.catModel.findById(id).exec();
        return data
    }

    async create(createCatDTO: CreateCatDTO): Promise<Cat>{
        const createdCat = new this.catModel(createCatDTO);
        return createdCat.save();
    }

    async deleteCat(id): Promise<any>{
        const deletion = await this.catModel.deleteOne({_id: id}).exec();
        return deletion;
    }

    async updateCat(id, createCatDTO: CreateCatDTO): Promise<any>{
        const update = await this.catModel.updateOne({_id: id}, createCatDTO).exec();
        return update;
    }
}
