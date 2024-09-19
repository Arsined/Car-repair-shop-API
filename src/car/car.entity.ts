import { Column, Entity, JoinTable, ManyToMany, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Fault } from 'src/fault/fault.entity';
import { Garage } from 'src/garage/garage.entity';
import { IsString, IsArray } from 'class-validator';

@Entity('cars')
export class Car {
  @PrimaryGeneratedColumn()
  id: number;

  @IsString()
  @Column()
  brand: string;

  @IsString()
  @Column()
  color: string;

  @IsArray()
  @ManyToMany((type) => Fault, (fault) => fault.cars)
  @JoinTable({
    name: 'car_fault',
    joinColumn: { name: 'car_id' },
    inverseJoinColumn: { name: 'fault_id' },
  })
  faults: Fault[];

  @IsArray()
  @ManyToOne((type) => Garage, (garage) => garage.cars)
  garage: Garage;
}
