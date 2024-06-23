import { Module } from '@nestjs/common';
import { TypeUserController } from './type_user.controller';
import { TypeUserService } from './type_user.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TypeUserEntity } from 'src/db/entities/type_user.entity';

@Module({
  imports:[TypeOrmModule.forFeature([TypeUserEntity])],
  controllers: [TypeUserController],
  providers: [TypeUserService]
})
export class TypeUserModule {}
