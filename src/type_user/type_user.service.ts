import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { TypeUserEntity } from 'src/db/entities/type_user.entity';
import { Repository } from 'typeorm';

@Injectable()
export class TypeUserService {

    constructor(
        @InjectRepository(TypeUserEntity)
        private readonly typeUserRepo: Repository<TypeUserEntity>
    ){}

    async getAllTypesUser():Promise<TypeUserEntity[]>{
        return await this.typeUserRepo.find();
    }
}
