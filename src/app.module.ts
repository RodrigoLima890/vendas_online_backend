import { Module } from '@nestjs/common';
import { UserModule } from './user/user.module';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { StateModule } from './state/state.module';
import { CityModule } from './city/city.module';
import { AddressModule } from './address/address.module';
import { DbModule } from './db/db.module';
import { CacheModule } from './cache/cache.module';
import { AuthModule } from './auth/auth.module';
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
  ],
  controllers: [],
  providers: [
  ],
})
export class AppModule {}
