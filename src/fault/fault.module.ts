import { Module } from '@nestjs/common';
import { FaultService } from './fault.service';
import { FaultController } from './fault.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Fault } from './fault.entity';
import { Car } from 'src/car/car.entity';

@Module({
  controllers: [FaultController],
  providers: [FaultService],
  imports: [
    TypeOrmModule.forFeature([Fault, Car]),
  ],
})
export class FaultModule {}
