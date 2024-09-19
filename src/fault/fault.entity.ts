import { Column, Entity, JoinTable, ManyToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Car } from 'src/car/car.entity';
import { IsString, IsNumber } from 'class-validator';

@Entity('faults')
export class Fault {
  @PrimaryGeneratedColumn()
  id: number;

  @IsString()
  @Column()
  name: string;

  @IsString()
  @Column()
  description: string;

  @IsNumber()
  @Column()
  price: number;

  @ManyToMany((type) => Car, (car) => car.faults)
  @JoinTable({
    name: 'car_fault',
    joinColumn: { name: 'fault_id' },
    inverseJoinColumn: { name: 'car_id' },
  })
  cars: Car[];
}
