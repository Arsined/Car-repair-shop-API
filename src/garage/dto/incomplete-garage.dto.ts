import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString, IsNumber } from 'class-validator';

export class IncompleteGarageDto {
  @IsNotEmpty()
  @IsString()
  @ApiProperty({ example: 'ул. Пушкина, 10', description: 'Адрес гаража' })
  address: string;

  @IsNotEmpty()
  @IsNumber()
  @ApiProperty({ example: 50, description: 'Вместимость гаража' })
  capacity: number;
}
