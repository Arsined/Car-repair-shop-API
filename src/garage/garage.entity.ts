import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Car } from 'src/car/car.entity';
import { IsString, IsArray } from 'class-validator';

@Entity('garages')
export class Garage {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  @IsString()
  address: string;

  @Column()
  @IsString()
  capacity: number;

  @IsArray()
  @OneToMany(() => Car, (car) => car.garage)
  cars: Car[];
}
