import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateUserDto } from './dtos/createUser.dto';
import { UserEntity } from '../db/entities/user.entity';
import {hash} from 'bcrypt';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class UserService {
    constructor(
        @InjectRepository(UserEntity)
        private readonly userRepository: Repository<UserEntity>,
    ){}

    async createUser(createUserDto: CreateUserDto): Promise<UserEntity>{
        console.log(createUserDto)
        const saltOrRounds = 10;
        const passwordHash = await hash(createUserDto.password, saltOrRounds);

        return this.userRepository.save({
            ...createUserDto,
            password: passwordHash
        })
    }

    async getAllUser(): Promise<UserEntity[]>{
        return this.userRepository.find({
            relations:[
                'typeUser'
            ]
        });
    }

    async getUserById(userId: number):Promise<UserEntity>{
        const user = await this.userRepository.findOne({
            where: {
                id: userId
            }
        })

        if(!user){
            throw new NotFoundException('User Not Found')
        }

        return user;
    }

    async getUserByIdUsingReferences(userId:number):Promise<UserEntity>{
        const user = await this.userRepository.findOne({
            where:{
                id:userId
            },
            relations:[
                'typeUser',
                'addresses',
                'addresses.city'
            ]

        })
        if(!user){
            throw new NotFoundException('Usuario não encontrado')
        }
        return user;
    }
    async getUserByEmail(email: string):Promise<UserEntity>{
        const user = await this.userRepository.findOne({
            where: {
                email: email
            }
        })

        if(!user){
            throw new NotFoundException(`Email ${email} Not Found`)
        }

        return user;
    }
}
