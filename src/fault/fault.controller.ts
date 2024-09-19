import {Body, Controller, Delete, Get, Param, Put, Post, UsePipes, ValidationPipe} from '@nestjs/common';
import { FaultService } from './fault.service';
import { Fault } from './fault.entity';
import { CreateFaultDto } from './dto/create-fault.dto';
import { ApiTags, ApiOperation } from '@nestjs/swagger';
import { IncompleteFaultDto } from './dto/incomplete-fault.dto';

@ApiTags('Неисправности')
@Controller('faults')
export class FaultController {
  constructor(private readonly faultService: FaultService) {}

  @ApiOperation({ summary: 'Создать новую неисправность' })
  @Post()
  @UsePipes(new ValidationPipe())
  async create(@Body() CreateFaultDto: CreateFaultDto) {
    return await this.faultService.create(CreateFaultDto);
  }

  @ApiOperation({ summary: 'Получить список всех неисправностей' })
  @Get()
  async findAll() {
    return await this.faultService.findAll();
  }

  @ApiOperation({ summary: 'Получить неисправность по ID' })
  @Get(':id')
  async findOne(@Param('id') id: number) {
    return await this.faultService.findOne(id);
  }

  @ApiOperation({ summary: 'Получение неполной информации о неисправностях' })
  @Get('incomplete')
  async findIncomplete(): Promise<IncompleteFaultDto[]> {
    return this.faultService.findIncomplete();
  }

  @ApiOperation({ summary: 'Обновить информацию о конкретной неисправности' })
  @Put(':id')
  @UsePipes(new ValidationPipe())
  async update(@Param('id') id: number, @Body() updateFault: Fault) {
    return await this.faultService.update(id, updateFault);
  }

  @ApiOperation({ summary: 'Удалить неисправность по ID' })
  @Delete(':id')
  async delete(@Param('id') id: number) {
    return await this.faultService.delete(id);
  }
}