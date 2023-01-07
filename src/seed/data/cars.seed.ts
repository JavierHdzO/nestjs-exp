import { Car } from "src/cars/interfaces/cars.interface";
import { v4 as uuidv4 } from 'uuid';

export const CARS_SEED: Car[] = [
    {
        id: uuidv4(),
        brand: 'Kia',
        year: 2021
    },
    {
        id: uuidv4(),
        brand: 'BMW',
        year: 2011
    },
    {
        id: uuidv4(),
        brand: 'Acura',
        year: 2021
    },
];