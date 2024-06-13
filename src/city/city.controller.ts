import { Controller, Get, Param, UseGuards } from '@nestjs/common';
import { CityEntity } from 'src/db/entities/city.entity';
import { CityService } from './city.service';
import { AuthGuard } from 'src/auth/auth.guard';

@Controller('city')
export class CityController {

    constructor(
        private readonly cityService:CityService,
    ){}

    @Get('/:state_id')
    @UseGuards(AuthGuard)
    async getAllCityByStateId(@Param("state_id") stateId:number):Promise<CityEntity[]>{
        return this.cityService.getAllCitiesByStateId(stateId)
    }
}
