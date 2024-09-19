import { Module } from '@nestjs/common';
import { GarageService } from './garage.service';
import { GarageController } from './garage.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Garage } from './garage.entity';
import { Car } from 'src/car/car.entity';


@Module({
  controllers: [GarageController],
  providers: [GarageService],
  imports: [
    TypeOrmModule.forFeature([Garage, Car]),
  ],
})
export class GarageModule {}
