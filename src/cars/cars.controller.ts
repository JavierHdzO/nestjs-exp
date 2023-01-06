import { Controller, Get, Param, ParseIntPipe } from '@nestjs/common';
import { CarsService } from './cars.service';
import { Cars } from './cars.interface';

@Controller('cars')
export class CarsController {

    constructor(
        private readonly carsService: CarsService
    ){}
    
    @Get()
    find(): Cars[]{
        return this.carsService.findAll();
    }

    @Get(':id')
    findAll(@Param('id', ParseIntPipe) id: number): Cars {
        return this.carsService.find(Number(id));
    }

}
