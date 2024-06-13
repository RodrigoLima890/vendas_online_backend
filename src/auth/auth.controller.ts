import {
    Body,
    Controller,
    Get,
    HttpCode,
    HttpStatus,
    Post,
    Request,
    UseGuards
  } from '@nestjs/common';  
import { ReturnUserDto } from 'src/user/dtos/returnUser.dto';
import { LoginDto } from './dtos/login.dto';
import { AuthService } from './auth.service';
import { AuthGuard } from './auth.guard';
import { Public } from './constants';

@Controller('auth')
export class AuthController {
    
    constructor(
        private readonly authService:AuthService
    ){}

    @Public()
    @HttpCode(HttpStatus.OK)
    @Post('login')
    login(@Body() login:LoginDto): Record<string,any> {
        return this.authService.login(login);
    }
}
