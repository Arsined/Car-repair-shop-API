import { Injectable } from '@nestjs/common';
import { InjectRepository} from '@nestjs/typeorm';
import { Repository, In } from 'typeorm';
import { Car } from '../car/car.entity';
import { Fault } from 'src/fault/fault.entity';
import { BrandCarDto } from './dto/brand-car.dto';
import { Garage } from 'src/garage/garage.entity';
import { CreateCarDto } from './dto/create-car.dto';

@Injectable()
export class CarService {
  constructor(
    @InjectRepository(Car)
    private readonly carRepository: Repository<Car>,
    @InjectRepository(Fault)
    private readonly faultRepository: Repository<Fault>,
    @InjectRepository(Garage)
    private readonly garageRepository: Repository<Garage>,
  ) {}

  async create(createCarDto: CreateCarDto): Promise<Car> {
    const car = this.carRepository.create();
    car.brand = createCarDto.brand;
    car.color = createCarDto.color;
    const faults = await this.faultRepository.findBy({
      id: In(createCarDto.faults),
    });
    car.faults = faults;
    const garage = await this.garageRepository.findOne({
      where: { id: createCarDto.garageId },
    });
    car.garage = garage;
    await this.carRepository.save(car);
    return car;
  }

  async findAll(): Promise<Car[]> {
    const cars = await this.carRepository.find({
      relations: {
        faults: true,
        garage: true
      },
    });
    return cars;
  }

  async findOne(id: number): Promise<Car> {
    const car = await this.carRepository.findOne({
      where: { id },
      relations: {
        faults: true,
        garage: true
      },
    });
    return car;
  }

  async getFaultsByBrand(): Promise<BrandCarDto[]> {
    const cars = await this.carRepository.find({
      relations: {
        faults: true,
        garage: true
      },
    });
    const result: BrandCarDto[] = [];
    cars.forEach((car) => {
      const faults: number[] = [];
      car.faults.forEach((fault) => {
        faults.push(fault.id);
      });
      result.push({ brand: car.brand, faults: faults });
    });
    return result;
  }

  async update(id: number, updateCar: Car): Promise<Car> {
    const car = await this.carRepository.findOne({
      where: { id },
      relations: {
        faults: true,
        garage: true
      },
    });
    car.brand = updateCar.brand;
    car.color = updateCar.color;
    if (updateCar.faults) {
      const faults = await this.faultRepository.findBy({
        id: In(updateCar.faults),
      });
      car.faults = faults;
    }
    if (updateCar.garage) {
      const garage = await this.garageRepository.findOne({
        where: { id: updateCar.garage.id },
      });
      car.garage = garage;
    }
    await this.carRepository.save(car);
    return car;
  }

  async delete(id: number): Promise<void> {
    await this.carRepository.delete(id);
  }
}
