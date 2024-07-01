import { Injectable, NotFoundException, UnauthorizedException } from '@nestjs/common';
import { UserEntity } from 'src/db/entities/user.entity';
import { LoginDto } from './dtos/login.dto';
import { UserService } from 'src/user/user.service';
import {compare} from 'bcrypt';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
    constructor(
        private readonly userService: UserService,
        private jwtService:JwtService
    ) { }
    async login(loginDto: LoginDto): Promise<{access_token: string}> {
        const user: UserEntity | undefined = await this.userService.getUserByEmail(loginDto.email).catch(() => undefined);

        const isMatch = await compare(loginDto.password, user?.password||'');

        if (!user || !isMatch) {
            throw new UnauthorizedException("Email or password invalid");
        }
        const payload = {username: user.name, email: user.email, type_user: user.typeUser}
        return {
            access_token: await this.jwtService.signAsync(payload)
        }
    }
}
