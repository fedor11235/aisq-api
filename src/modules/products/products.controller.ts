import {
  Controller,
  Res,
  HttpStatus,
  Get,
  Post,
  Body,
} from '@nestjs/common';
import { ProductsService } from './products.service';
import { CoffeeDTO } from '../../dto/products/coffee.dto';

@Controller('commerce')
export class ProductsController {
  constructor(private productsService: ProductsService) {}

  @Post()
  async addNewConfigCoffee(@Res() res, @Body() cofeeDTO: CoffeeDTO) {
    const cofee = await this.productsService.addNewConfigCoffee(cofeeDTO);
    return res.status(HttpStatus.OK).json(cofee);
  }

  @Get()
  async getAllConfigsCoffee(@Res() res) {
    const cofeeAll = await this.productsService.getAllConfigsCoffee();
    return res.status(HttpStatus.OK).json(cofeeAll);
  }
}
