import { Module } from '@nestjs/common';
import { UserModule } from './user/user.module';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal:true,
      envFilePath:['.env.development.local'], //vendas_online_backend/.env.development
    }),
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.POSTGRES_HOST,
      username: process.env.POSTGRES_USER,
      database: process.env.POSTGRES_DB,
      port: parseInt(process.env.POSTGRES_PORT),
      password: process.env.POSTGRES_PASSWORD,
      entities:[`${__dirname}/**/*.entity{.js,.ts}`],
      synchronize:true// ideal é ser false
    }),
    UserModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
