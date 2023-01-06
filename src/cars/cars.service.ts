import { HttpException, HttpStatus, Injectable, NotFoundException } from '@nestjs/common';
import { Cars } from './cars.interface';

@Injectable()
export class CarsService {
    private cars: Cars[] = [
        {
            id: 1,
            brand: 'Fiesta',
            year: 2005
        },
        {
            id:2,
            brand:'Mustang',
            year: 2018
        },
        {
            id:3,
            brand:'Mercedes',
            year: 2021
        }

    ];

    public findAll(): Cars[]{
        return this.cars;
    }

    public find(id: number): Cars{

        const car = this.cars.find( car => car.id === id );

        if(!car)
            throw new HttpException('Resource not found', HttpStatus.NOT_FOUND);
            // throw new NotFoundException();
        
        return car;
    }

    public create({id, brand, year}: Cars): Cars{

        const car:Cars = {id, brand,year};

        const resul = this.cars.push(car);

        return car;
    }
}
