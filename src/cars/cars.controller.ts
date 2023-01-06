import { Controller, Get, Param, ParseIntPipe } from '@nestjs/common';
import { CarsService } from './cars.service';
import { Cars } from './cars.interface';
import { Body, Delete, Patch, Post } from '@nestjs/common/decorators';

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

    @Post()
    create(@Body() body: Cars){
        const { id, brand, year } = body;
        const car = this.carsService.create(body);
        return car;
    }

    @Patch(':id')
    update(
        @Param('id', ParseIntPipe) id: number, 
        @Body() body: Cars){
        return body;
    }

    @Delete(':id')
    delete(@Param('id', ParseIntPipe) id: number){
        return id;
    }



}
