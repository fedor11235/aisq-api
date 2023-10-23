import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import type { CoffeeType } from 'src/types/products';
import type { Coffee } from '@prisma/client';

@Injectable()
export class ProductsService {
  constructor(private prisma: PrismaService) {}
  async addNewConfigCoffee(data: CoffeeType): Promise<Coffee> {
    const coffee = await this.prisma.coffee.create({
      data: data,
    });
    return coffee;
  }
  async getAllConfigsCoffee(): Promise<Coffee[]> {
    const coffee = await this.prisma.coffee.findMany();
    return coffee;
  }
}
