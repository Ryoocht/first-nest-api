import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Body,
  Param,
} from '@nestjs/common';
import { CreateItemDto } from './dto/create-item.dto';

@Controller('item')
export class ItemController {
  @Get()
  findAll(): string {
    return 'Get All Items';
  }

  @Get(':id')
  findOne(@Param() param): string {
    return `Item ${param.id}`;
  }

  @Post()
  create(@Body() createItemDto: CreateItemDto): string {
    return `Create name: ${createItemDto.name} Description: ${createItemDto.description} Qty: ${createItemDto.qty}`;
  }
}
