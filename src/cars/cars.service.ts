import { HttpException, HttpStatus, Injectable, NotFoundException } from '@nestjs/common';
import { v4 as uuidV4 } from 'uuid';
import { Car } from './interfaces/cars.interface';
import { CreateCarDto } from './dtos/create-car.dto';
import { UpdateCarDto } from './dtos/update-car.dto';

@Injectable()
export class CarsService {
    private cars: Car[];
    // = [
    //     {
    //         id: uuidV4(),
    //         brand: 'Fiesta',
    //         year: 2005
    //     },
    //     {
    //         id:uuidV4(),
    //         brand:'Mustang',
    //         year: 2018
    //     },
    //     {
    //         id: uuidV4(),
    //         brand:'Mercedes',
    //         year: 2021
    //     }

    // ];

    public findAll(): Car[]{
        return this.cars;
    }

    public find(id: string): Car{

        const car = this.cars.find( car => car.id === id );

        if(!car)
            throw new HttpException('Resource not found', HttpStatus.NOT_FOUND);
            // throw new NotFoundException();
        
        return car;
    }

    public create({ brand, year}: CreateCarDto): Car{
        const car:Car = {id:uuidV4(), brand,year};
        this.cars.push(car);

        return car;
    }

    public update(id: string, updateCarDto: UpdateCarDto): Car {
        
        let cardb = this.find(id);

        this.cars = this.cars.map( car => {
            if( car.id === id ){
                cardb = {
                        ...car,
                        ...updateCarDto,
                        id
                    };
                return cardb;
            }
            return car;
        });

        return cardb;
    }

    public delete(id: string){
        const car = this.find( id );
        this.cars = this.cars.filter( c => c.id !== id );
        
        return car;
    }

    factories( cars: Car[]){
        this.cars = cars;
    }
}
