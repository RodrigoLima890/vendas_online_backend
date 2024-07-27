import { Body, Controller, Get, Param, Post, Put, UseGuards, UsePipes, ValidationPipe} from '@nestjs/common';
import {CreateUserDto} from "./dtos/createUser.dto";
import { UserService } from './user.service';
import { UserEntity } from '../db/entities/user.entity';
import { ReturnUserDto } from './dtos/returnUser.dto';
import { AuthGuard } from 'src/auth/auth.guard';
import { User } from './user.decorator';

@Controller('user')
export class UserController {
    constructor(private readonly userService:UserService){

    }

    @UsePipes(ValidationPipe)
    @Post()
    async createUser(
        @Body() createUser:CreateUserDto
    ): Promise<UserEntity>
    {
        return this.userService.createUser(createUser);
    }

    @UseGuards(AuthGuard)
    @Get()
    async getAllUser(): Promise<ReturnUserDto[]>{
        return (await this.userService.getAllUser()).map((userEntity) => new ReturnUserDto(userEntity));
    }

    @UseGuards(AuthGuard)
    @Get('/:userId')
    async getUserById(@Param('userId') @User() userId:number):Promise<ReturnUserDto>{
       return new ReturnUserDto(await this.userService.getUserByIdUsingReferences(userId));
    }

    // @UseGuards(AuthGuard)
    @Put('/:userId')
    async atualizarUser(@Param('userId') id:number, @Body() user:CreateUserDto):Promise<Object>{
       return await this.userService.atualizarUser(user, id);
    }
}
