import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString, IsArray } from 'class-validator';

export class BrandCarDto {
  @IsNotEmpty()
  @IsString()
  @ApiProperty({ example: 'Toyota', description: 'Бренд автомобиля' })
  brand: string;

  @IsArray()
  @ApiProperty({ example: [1, 2, 3], description: 'Список идентификаторов неисправностей' })
  faults: number[];
}