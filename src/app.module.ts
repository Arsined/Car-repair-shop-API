import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CarController } from './car/car.controller';
import { CarService } from './car/car.service';
import { Car } from './car/car.entity';
import { Garage } from './garage/garage.entity';
import { Fault } from './fault/fault.entity';
import { GarageService } from './garage/garage.service';
import { FaultService } from './fault/fault.service';
import { GarageController } from './garage/garage.controller';
import { FaultController } from './fault/fault.controller';
import { ConfigModule } from '@nestjs/config';
import { ConfigService } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: `.env`,
    }),
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.DATABASE_HOST,
      port: 5432,
      username: 'education',
      password: '123',
      database: process.env.DATABASE_NAME,
      entities: ['dist/**/*.entity{.ts,.js}'],
      synchronize: false,
      logging: 'all',
    }),
    TypeOrmModule.forFeature([Car, Garage, Fault]),
  ],
  controllers: [CarController, GarageController, FaultController],
  providers: [CarService, GarageService, FaultService],
})
export class AppModule {}
