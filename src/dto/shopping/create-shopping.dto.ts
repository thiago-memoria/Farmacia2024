import { IsObject, IsString } from 'class-validator';
import { CreateUserDto } from '../user/create-user.dto';
import { CreateProductDTO } from '../product/create-product.dto';
import { AddressDto } from '../address/address.dto';


export class CreateShoppingDTO {

    @IsObject()
    user: CreateUserDto;
    
    @IsObject()
    product: CreateProductDTO[];

    @IsString()
    value: string;

    @IsString()
    storeAddress: string;
    
    @IsString()
    deliveryAddress: string;

    @IsString()
    deliveryTime: string;

}
