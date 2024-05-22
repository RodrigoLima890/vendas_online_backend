import { CACHE_MANAGER, Cache } from '@nestjs/cache-manager';
import { Inject, Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CacheService } from 'src/cache/cache.service';
import { CityEntity } from 'src/db/entities/city.entity';
import { Repository } from 'typeorm';

@Injectable()
export class CityService {

    constructor(
        @InjectRepository(CityEntity)
        private readonly cityRepository: Repository<CityEntity>,
        private readonly cacheService: CacheService
    ) { }

    async getAllCitiesByStateId(stateId: number): Promise<CityEntity[]> {
        return this.cacheService.getCache<CityEntity[]>(`state_${stateId}`,
            () => this.cityRepository.find({
                where: {
                    stateId: stateId
                }
            }),
        );
    }

    async getCityById(cityId:number): Promise<CityEntity>{
        const city = await this.cityRepository.findOne({
            where:{
                id:cityId
            }
        })
        if(!city){
            throw new NotFoundException("CityId not found")
        }
        return city;
    }
}
