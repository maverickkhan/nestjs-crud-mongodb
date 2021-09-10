import { Module } from '@nestjs/common';
import { Mongoose } from 'mongoose';
import { Cat, CatSchema } from './schemas/cat.schemas';
import { CatController } from './cat.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { CatService } from './cat.service';

@Module({
    imports: [MongooseModule.forFeature([{ name: Cat.name, schema: CatSchema}])],
    controllers: [CatController],
    providers: [CatService],
})
export class CatModule {}
