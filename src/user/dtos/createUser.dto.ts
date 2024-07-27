import { IsNumber, IsString } from "class-validator";

export class CreateUserDto {
    
    @IsNumber()
    id: number;

    @IsString()
    name: string;
    
    @IsString()
    email: string;
    
    @IsString()
    phone: string;
    
    @IsString()
    cpf: string;
    
    @IsString()
    password: string;

    @IsNumber()
    type_user:number
   
}