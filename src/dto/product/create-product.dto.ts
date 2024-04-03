import { IsBoolean, IsString, IsObject } from 'class-validator';
import { CreateCategoryDto } from '../category/create-category.dto';

export class CreateProductDTO {

    @IsString()
    description: string;

    @IsString()
    price: string;

    @IsString()
    kind: string;

    @IsBoolean()
    discount: boolean;

    @IsObject()
    category: CreateCategoryDto;

}
