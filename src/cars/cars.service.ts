import { Injectable } from '@nestjs/common';
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
        return this.cars.find( car => car.id === id );
    }
}
