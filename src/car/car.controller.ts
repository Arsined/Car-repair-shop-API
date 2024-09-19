import { Body, Controller, Delete, Get, Param, Put, Post, UsePipes, ValidationPipe} from '@nestjs/common';
import { CarService } from './car.service';
import { BrandCarDto } from './dto/brand-car.dto';
import { Car } from './car.entity';
import { CreateCarDto } from './dto/create-car.dto';
import { ApiTags, ApiOperation } from '@nestjs/swagger';

@ApiTags('Автомобили')
@Controller('cars')
export class CarController {
  constructor(private readonly carService: CarService) {}

  @ApiOperation({ summary: 'Создать новый автомобиль' })
  @Post()
  @UsePipes(new ValidationPipe())
  async create(@Body() createCarDto: CreateCarDto) {
    return await this.carService.create(createCarDto);
  }

  @ApiOperation({ summary: 'Получить список всех автомобилей' })
  @Get()
  async findAll() {
    return await this.carService.findAll();
  }

  @ApiOperation({ summary: 'Получить автомобиль по ID' })
  @Get(':id')
  async findOne(@Param('id') id: number) {
    return await this.carService.findOne(id);
  }

  @ApiOperation({ summary: 'Получить список неисправностей для каждой марки автомобиля' })
  @Get('brand')
  async getFaultsByBrand(): Promise<BrandCarDto[]> {
    return await this.carService.getFaultsByBrand();
  }

  @ApiOperation({ summary: 'Обновить информацию о конкретном автомобиле' })
  @Put(':id')
  @UsePipes(new ValidationPipe())
  async update(@Param('id') id: number, @Body() updateCar: Car) {
    return await this.carService.update(id, updateCar);
  }

  @ApiOperation({ summary: 'Удалить автомобиль по ID' })
  @Delete(':id')
  async delete(@Param('id') id: number) {
    return await this.carService.delete(id);
  }
}