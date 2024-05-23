import { Body, Controller, Get, Param, Post, UsePipes, ValidationPipe } from '@nestjs/common';
import { CreateAddressDto } from './dtos/createAddress.dto';
import { AddressService } from './address.service';
import { AddressEntity } from 'src/db/entities/address.entity';

@Controller('address')
export class AddressController {

    constructor(
        private readonly addressService:AddressService
    ){}

    @Get("")
    async getAllAddress():Promise<AddressEntity[]>{
        return this.addressService.getAllAddress()
    }

    @Post('/:userId')
    @UsePipes(ValidationPipe)
    async createAddress(
        @Body() createAddressDto:CreateAddressDto,
         @Param('userId') userId:number):Promise<AddressEntity>
    {
        return this.addressService.createAddress(createAddressDto, userId)
    }

}
