import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, In } from 'typeorm';
import { Garage } from './garage.entity';
import { Car } from 'src/car/car.entity';
import { CreateGarageDto } from './dto/create-garage.dto';
import { IncompleteGarageDto } from './dto/incomplete-garage.dto';

@Injectable()
export class GarageService {
  constructor(
    @InjectRepository(Garage)
    private garageRepository: Repository<Garage>,
    @InjectRepository(Car)
    private carRepository: Repository<Car>,
  ) {}

  async create(createGarageDto: CreateGarageDto): Promise<Garage> {
    const garage = this.garageRepository.create();
    garage.address = createGarageDto.address;
    garage.capacity = createGarageDto.capacity;
    await this.garageRepository.save(garage);
    return garage;
  }

  async findAll(): Promise<Garage[]> {
    const garages = await this.garageRepository.find({
      relations: {
        cars: true,
      },
    });
    return garages;
  }

  async findOne(id: number): Promise<Garage> {
    const garage = await this.garageRepository.findOne({
      where: { id },
      relations: {
        cars: true,
      },
    });
    return garage;
  }

  async findIncomplete(): Promise<IncompleteGarageDto[]> {
    const garages = await this.garageRepository.find();
    const incompleteGarages: IncompleteGarageDto[] = garages.map((garage) => {
      const incompleteGarage = new IncompleteGarageDto();
      incompleteGarage.address = garage.address;
      incompleteGarage.capacity = garage.capacity;
      return incompleteGarage;
    });
    return incompleteGarages;
  }

  async update(id: number, updateGarage: Garage): Promise<Garage> {
    const garage = await this.garageRepository.findOne({
      where: { id },
      relations: {
        cars: true,
      },
    });
    garage.address = updateGarage.address || garage.address;
    garage.capacity = updateGarage.capacity || garage.capacity;
    if (updateGarage.cars) {
      const cars = await this.carRepository.findBy({
        id: In(updateGarage.cars),
      });
      garage.cars = cars;
    }
    await this.garageRepository.save(garage);
    return garage;
  }

  async delete(id: number): Promise<void> {
    await this.garageRepository.delete(id);
  }
}
