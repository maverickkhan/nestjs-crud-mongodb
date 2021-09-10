import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";

export type CatDocument = Cat & Document;

@Schema()
export class Cat {

    @Prop({ required: true })
    name: string;

    @Prop()
    age: number;

    @Prop({ required: true })
    breed: string;

    @Prop([String])
    tag: string[];
    
}

export const CatSchema = SchemaFactory.createForClass(Cat); 