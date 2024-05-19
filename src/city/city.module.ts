import { Module } from '@nestjs/common';
import { CityController } from './city.controller';
import { CityService } from './city.service';
import { CityEntity } from 'src/db/entities/city.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import {CacheModule} from '@nestjs/cache-manager';

@Module({
  imports:[TypeOrmModule.forFeature([CityEntity]), CacheModule.register({
    ttl:900000
  })],
  controllers: [CityController],
  providers: [CityService]
})
export class CityModule {}
