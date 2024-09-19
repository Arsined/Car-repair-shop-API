import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString, IsArray, IsNumber } from 'class-validator';

export class CreateCarDto {
  @IsNotEmpty()
  @IsString()
  @ApiProperty({ example: 'Toyota', description: 'Бренд автомобиля' })
  brand: string;

  @IsNotEmpty()
  @IsString()
  @ApiProperty({ example: 'white', description: 'Цвет автомобиля' })
  color: string;

  @IsArray()
  @ApiProperty({ example: [1, 2, 3], description: 'Список идентификаторов неисправностей' })
  faults: number[];

  @IsNotEmpty()
  @IsNumber()
  @ApiProperty({ example: 1, description: 'Идентификатор гаража' })
  garageId: number;
}