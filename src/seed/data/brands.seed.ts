import { Brand } from "src/brands/entities/brand.entity";
import { v4 as uuidv4 } from 'uuid';

export const BRAND_SEED: Brand[] = [
    {
        id: uuidv4(),
        name:"Kia",
        createdAt: new Date().getTime(),
        updatedAt: new Date().getTime()
    },
    {
        id: uuidv4(),
        name:"BMW",
        createdAt: new Date().getTime(),
        updatedAt: new Date().getTime()
    },
    {
        id: uuidv4(),
        name:"Ford",
        createdAt: new Date().getTime(),
        updatedAt: new Date().getTime()
    },
];