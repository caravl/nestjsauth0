import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { ItemsService } from './items.service';
import { Items } from '../items';
import { Item } from '../item';

@Controller('items') // argument passed to Controller decorator defines the route path prefix, path shared by all the endpoints defined within the controller
export class ItemsController {
  constructor(private readonly itemsService: ItemsService) {} // allows access to ItemsService

  @Get()
  async findAll(): Promise<Items> {
    return this.itemsService.findAll();
  }

  @Get(':id') // `:id` is the route parameter
  async find(@Param('id') id: number): Promise<Item> {
    return this.itemsService.find(id);
  }

  @Post()
  create(@Body('item') item: Item) { // @Body parameter decorator used to extract properties from payload data from the body property of the `request` object that the route handler recieves, it takes the name of the property you want from the body, in this case, item property
    this.itemsService.create(item);
  }

  @Put()
  update(@Body('item') item: Item) {
    this.itemsService.update(item);
  }

  @Delete(':id')
  delete(@Param('id') id: number) { // the params decorators allow you to grab properties from request params
    this.itemsService.delete(id);
  }
}

// @Params() and @Body() are both decorators that extract data from the request object.
