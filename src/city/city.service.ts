import { CACHE_MANAGER, Cache } from '@nestjs/cache-manager';
import { Inject, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CityEntity } from 'src/db/entities/city.entity';
import { Repository } from 'typeorm';

@Injectable()
export class CityService {

    constructor(
        @InjectRepository(CityEntity)
        private readonly cityRepository:Repository<CityEntity>,
        @Inject(CACHE_MANAGER) 
        private cacheManager: Cache
    ){}

    async getAllCitiesByStateId(stateId:number): Promise<CityEntity[]> {

        const citiesCached: CityEntity[] = await this.cacheManager.get(`${stateId}`);

        if(citiesCached){
            return citiesCached
        }

        const cities = await this.cityRepository.find({
            where:{
                stateId:stateId
            }
        })

        await this.cacheManager.set(`${stateId}`, cities)

        return cities;
    }
}
