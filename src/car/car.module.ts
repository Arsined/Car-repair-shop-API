import { Module } from '@nestjs/common';
import { CarService } from './car.service';
import { CarController } from './car.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Car } from './car.entity';
import { Fault } from 'src/fault/fault.entity';
import { Garage } from 'src/garage/garage.entity';

@Module({
  controllers: [CarController],
  providers: [CarService],
  imports: [
    TypeOrmModule.forFeature([Car, Fault, Garage]),
  ],
})
export class CarModule {}
