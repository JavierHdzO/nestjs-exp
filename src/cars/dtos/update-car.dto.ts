import { IsString, IsNumber, IsOptional, IsUUID } from 'class-validator';

export class UpdateCarDto {;
    @IsString()
    @IsOptional()
    public readonly brand?: string;

    @IsNumber()
    @IsOptional()
    public readonly year?: number;
}