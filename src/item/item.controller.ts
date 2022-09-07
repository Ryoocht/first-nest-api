import { Controller, Get, Post, Put, Delete } from '@nestjs/common';

@Controller('item')
export class ItemController {
    @Get()
    findAll(): string {
        return 'Get all items';
    }

    @Post
    create():string {
        return 'Create Item';
    }
}
