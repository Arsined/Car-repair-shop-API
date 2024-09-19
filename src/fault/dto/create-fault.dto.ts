import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString, IsNumber } from 'class-validator';

export class CreateFaultDto {
  @IsNotEmpty()
  @IsString()
  @ApiProperty({ example: 'Поломка двигателя', description: 'Название неисправности' })
  name: string;

  @IsNotEmpty()
  @IsString()
  @ApiProperty({ example: 'Двигатель перестал работать', description: 'Описание неисправности' })
  description: string;

  @IsNotEmpty()
  @IsNumber()
  @ApiProperty({ example: 1000, description: 'Стоимость ремонта неисправности' })
  price: number;
}
