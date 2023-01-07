import { IsString, IsNumber } from "class-validator";

export class CreateCarDto{
   
    @IsString()
    public readonly brand: string;

    @IsNumber()
    public readonly year: number;


}