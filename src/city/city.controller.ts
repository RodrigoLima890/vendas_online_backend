import { Controller, Get, Param } from '@nestjs/common';
import { CityEntity } from 'src/db/entities/city.entity';
import { CityService } from './city.service';

@Controller('city')
export class CityController {

    constructor(
        private readonly cityService:CityService,
    ){}

    @Get('/:state_id')
    async getAllCityByStateId(@Param("state_id") stateId:number):Promise<CityEntity[]>{
        return this.cityService.getAllCitiesByStateId(stateId)
    }
}
