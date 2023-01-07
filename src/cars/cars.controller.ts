import { Controller, Get, Param, ParseUUIDPipe, UsePipes, ValidationPipe } from '@nestjs/common';
import { Body, Delete, Patch, Post } from '@nestjs/common/decorators';
import { CarsService } from './cars.service';
import { CreateCarDto } from './dtos/create-car.dto';
import { UpdateCarDto } from './dtos/update-car.dto';
import { Car } from './interfaces/cars.interface';


@Controller('cars')
export class CarsController {

    constructor(
        private readonly carsService: CarsService
    ){}
    
    @Get()
    find(): Car[]{
        return this.carsService.findAll();
    }

    @Get(':id')
    findAll(@Param('id', ParseUUIDPipe) id: string): Car {
        return this.carsService.find(id);
    }

    @Post()
    create(@Body() createCarDto: CreateCarDto){
        const car = this.carsService.create(createCarDto);
        return car;
    }

    @Patch(':id')
    update(
        @Param('id', ParseUUIDPipe) id: string, 
        @Body() body: UpdateCarDto){

        const car = this.carsService.update(id, body);
        return car;
    }

    @Delete(':id')
    delete(
        @Param('id', new ParseUUIDPipe({ version:'4' })) id: string){
        
            const car = this.carsService.delete(id);
            return car;
    }

}
