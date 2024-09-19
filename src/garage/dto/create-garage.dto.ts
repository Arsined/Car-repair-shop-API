import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString, IsNumber } from 'class-validator';

export class CreateGarageDto {
  @IsNotEmpty()
  @IsString()
  @ApiProperty({ example: 'ул. Главная, 123', description: 'Адрес гаража' })
  address: string;

  @IsNotEmpty()
  @IsNumber()
  @ApiProperty({ example: 10, description: 'Вместимость гаража (количество автомобилей, которые могут обслуживаться одновременно)' })
  capacity: number;
}
