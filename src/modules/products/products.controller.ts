import {
  Controller,
  Res,
  HttpStatus,
  Get,
  Post,
  Body,
  Put,
  UseInterceptors,
} from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { ProductsService } from './products.service';
import { CoffeeDTO } from '../../dto/products/coffee.dto';
import { CoffeeUpdateCountDTO } from '../../dto/products/coffeeUpdateCount.dto';

@Controller('products')
export class ProductsController {
  constructor(private productsService: ProductsService) {}

  @UseInterceptors(FileInterceptor('formdata'))
  @Post('coffee')
  async addNewConfigCoffee(@Res() res, @Body() cofeeDTO: CoffeeDTO) {
    const cofee = await this.productsService.addNewConfigCoffee(cofeeDTO);
    return res.status(HttpStatus.OK).json(cofee);
  }

  @Get('coffee')
  async getAllConfigsCoffee(@Res() res) {
    const cofeeAll = await this.productsService.getAllConfigsCoffee();
    return res.status(HttpStatus.OK).json(cofeeAll);
  }

  @UseInterceptors(FileInterceptor('formdata'))
  @Put('coffee')
  async updateConfigsCoffeeCount(
    @Res() res,
    @Body() coffeeUpdateCountDTO: CoffeeUpdateCountDTO,
  ) {
    const cofeeAll = await this.productsService.updateConfigsCoffeeCount(
      coffeeUpdateCountDTO,
    );
    return res.status(HttpStatus.OK).json(cofeeAll);
  }
}
