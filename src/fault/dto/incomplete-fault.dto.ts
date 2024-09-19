import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString, IsNumber } from 'class-validator';

export class IncompleteFaultDto {
  @IsNotEmpty()
  @IsString()
  @ApiProperty({ example: 'Трансмиссия', description: 'Название неисправности' })
  name: string;

  @IsNotEmpty()
  @IsNumber()
  @ApiProperty({ example: 5000, description: 'Цена неисправности' })
  price: number;
}