import { Body, Controller, Get, Param, Post, UseGuards, UsePipes, ValidationPipe } from '@nestjs/common';
import { CreateAddressDto } from './dtos/createAddress.dto';
import { AddressService } from './address.service';
import { AddressEntity } from 'src/db/entities/address.entity';
import { ReturnAddressDto } from './dtos/returnAddress.dto';
import { AuthGuard } from 'src/auth/auth.guard';

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

    @UseGuards(AuthGuard)
    @Get('/:userId')
    async getAddressByUserId(@Param('userId') userId:number):Promise<ReturnAddressDto[]>
    {
        return (await this.addressService.getAddressByUserId(userId)).map(address => new ReturnAddressDto(address))
    }
}
