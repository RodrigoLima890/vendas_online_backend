import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { AddressEntity } from 'src/db/entities/address.entity';
import { Repository } from 'typeorm';
import { CreateAddressDto } from './dtos/createAddress.dto';
import { UserService } from 'src/user/user.service';
import { CityService } from 'src/city/city.service';

@Injectable()
export class AddressService {

    constructor(
        @InjectRepository(AddressEntity)
        private readonly addressRepository: Repository<AddressEntity>,
        private readonly userService:UserService,
        private readonly cityService:CityService
    ){};

    async createAddress(createAddressDto:CreateAddressDto, userId:number):Promise<AddressEntity>{
        await this.userService.getUserById(userId);
        await this.cityService.getCityById(createAddressDto.cityId);
        return this.addressRepository.save({
            ...createAddressDto,
            userId
        })
    }

    async getAllAddress():Promise<AddressEntity[]>{
        return this.addressRepository.find();
    }

    async getAddressByUserId(userId:number):Promise<AddressEntity[]>{
        const user = await this.userService.getUserById(userId)
        return await this.addressRepository.find({
            where:{
                userId:user.id
            }
        })
    }
}
