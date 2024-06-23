import { Controller, Get } from '@nestjs/common';
import { TypeUserService } from './type_user.service';
import { ReturnTypeUserDto } from './dtos/returnTypeUserDto';

@Controller('typeuser')
export class TypeUserController {
    constructor(private readonly userTypeService:TypeUserService){}

    @Get('/getAll')
    async getAllTypesUser():Promise<ReturnTypeUserDto[]>{
        return (await (this.userTypeService.getAllTypesUser())).map((type)=> new ReturnTypeUserDto(type))
    }
}
