import { Injectable, NotFoundException } from '@nestjs/common';
import { v4 as uuidv4 } from 'uuid';
import { CreateBrandDto } from './dto/create-brand.dto';
import { UpdateBrandDto } from './dto/update-brand.dto';
import { Brand } from './entities/brand.entity';

@Injectable()
export class BrandsService {

  private brands: Brand[];
  // = [
  //   {
  //     id: uuidv4(),
  //     name:"Toyota",
  //     createdAt: new Date().getTime(),
  //     updatedAt: new Date().getTime(),
  //   },
  //   {
  //     id: uuidv4(),
  //     name:"Kia",
  //     createdAt: new Date().getTime(),
  //     updatedAt: new Date().getTime(),
  //   },
  //   {
  //     id: uuidv4(),
  //     name:"Ferrari",
  //     createdAt: new Date().getTime(),
  //     updatedAt: new Date().getTime(),
  //   },
  // ];

  create({ name }: CreateBrandDto) {
    const brand: Brand = {
      id: uuidv4(),
      name: name,
      createdAt: new Date().getTime(),
      updatedAt: new Date().getTime()
    };

    this.brands.push(brand);
    return brand;
  }

  findAll() {
    const brands = this.brands;
    return brands;
  }

  findOne(id: string) {
    const brand = this.brands.find( b => b.id === id);
    if(!brand) throw new NotFoundException()

    return brand
  }

  update(id: string, updateBrandDto: UpdateBrandDto) {
    let brand: Brand = this.findOne(id);

    this.brands = this.brands.map( b => {
      if( b.id === id ){
        brand = {
          ...brand,
          ...updateBrandDto,
          updatedAt: new Date().getTime()
        };
        return brand;
      }
      return b;
    });
    return brand;
  }

  remove(id: string) {
    const brand =  this.findOne(id);
    this.brands = this.brands.filter( b => b.id !== id);
    return brand;
  }

  factories( brand: Brand[]){
    this.brands =  brand;
  }
}
