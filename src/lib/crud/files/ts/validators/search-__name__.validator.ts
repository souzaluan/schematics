import { ApiProperty } from '@nestjs/swagger';
import { IsNumberString, IsOptional, IsString } from 'class-validator';

export class Search<%= classify(name) %>Query {
  @ApiProperty()
  @IsNumberString()
  @IsOptional()
  page?: number;

  @ApiProperty()
  @IsNumberString()
  @IsOptional()
  limit?: number;

  @ApiProperty()
  @IsString()
  @IsOptional()
  search?: string;

  @ApiProperty()
  @IsString()
  @IsOptional()
  sortBy?: string;

  @ApiProperty()
  @IsString()
  @IsOptional()
  order?: 'asc' | 'desc';
}
