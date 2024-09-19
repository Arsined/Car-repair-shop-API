import { Body, Controller, Delete, Get, Param, Put, Post, UsePipes, ValidationPipe} from '@nestjs/common';
import { GarageService } from './garage.service';
import { CreateGarageDto } from './dto/create-garage.dto';
import { Garage } from './garage.entity';
import { ApiTags, ApiOperation, ApiProperty } from '@nestjs/swagger';
import { IncompleteGarageDto } from './dto/incomplete-garage.dto';

@ApiTags('Гаражи')
@Controller('garages')
export class GarageController {
  constructor(private readonly garageService: GarageService) {}

  @ApiOperation({ summary: 'Создать новый гараж' })
  @Post()
  @UsePipes(new ValidationPipe())
  async create(@Body() createGarageDto: CreateGarageDto) {
    return await this.garageService.create(createGarageDto);
  }

  @ApiOperation({ summary: 'Получить список всех гаражей' })
  @Get()
  async findAll() {
    return await this.garageService.findAll();
  }

  @ApiOperation({ summary: 'Получить гараж по ID' })
  @Get(':id')
  async findOne(@Param('id') id: number) {
    return await this.garageService.findOne(id);
  }

  @ApiOperation({ summary: 'Получение неполной информации о гаражах' })
  @Get('incomplete')
  async findIncomplete(): Promise<IncompleteGarageDto[]> {
    return this.garageService.findIncomplete();
  }

  @ApiOperation({ summary: 'Обновить информацию о конкретном гараже' })
  @Put(':id')
  @UsePipes(new ValidationPipe())
  async update(@Param('id') id: number, @Body() updateGarage: Garage) {
    return await this.garageService.update(id, updateGarage);
  }

  @ApiOperation({ summary: 'Удалить гараж по ID' })
  @Delete(':id')
  async delete(@Param('id') id: number) {
    return await this.garageService.delete(id);
  }
}