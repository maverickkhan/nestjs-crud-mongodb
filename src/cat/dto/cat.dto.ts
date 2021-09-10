import { ApiProperty } from "@nestjs/swagger";
import { IsArray, IsNotEmpty, IsNumber, IsOptional, IsString } from "class-validator";

export class CreateCatDTO{
    
    @ApiProperty()
    @IsNotEmpty()
    @IsString()
    name: string;

    @ApiProperty()
    @IsOptional()
    @IsNumber()
    age: number;

    @ApiProperty()
    @IsNotEmpty()
    @IsString()
    breed: string;

    @ApiProperty()
    @IsOptional()
    @IsArray()
    tag: string[];
}