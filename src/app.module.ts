import { MiddlewareConsumer, Module } from '@nestjs/common';
import { UserModule } from './user/user.module';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { StateModule } from './state/state.module';
import { CityModule } from './city/city.module';
import { AddressModule } from './address/address.module';
import { DbModule } from './db/db.module';
import { CacheModule } from './cache/cache.module';
import { AuthModule } from './auth/auth.module';
import { TypeUserModule } from './type_user/type_user.module';
import * as cors from 'cors';
@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: ['.env'], //vendas_online_backend/.env.development
    }),
    UserModule,
    StateModule,
    CityModule,
    AddressModule,
    DbModule,
    CacheModule,
    AuthModule,
    TypeUserModule,
  ],
  controllers: [],
  providers: [
  ],
})
export class AppModule {
  configure(consumer: MiddlewareConsumer){
    consumer.apply(cors({
      origin: ['http://localhost:5000'], // Lista de origens permitidas
      methods: ['GET', 'POST', 'PUT', 'DELETE'], // Métodos HTTP permitidos
      allowedHeaders: ['Content-Type', 'Authorization', 'Access-Control-Allow-Origin'], // Cabeçalhos permitidos
      credentials: true, // Habilita credenciais (cookies, cabeçalhos de autenticação) em requisições CORS
    }))
    .forRoutes('*')
  }
}
