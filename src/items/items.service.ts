import { Injectable } from '@nestjs/common';
import { Item } from './interfaces/item.interface';

@Injectable()
export class ItemsService {
  private readonly items: Item[] = [
    {
      id: '324523235',
      name: 'Item One',
      description: 'This is a item one',
      qty: 100,
    },
    {
      id: '235572523',
      name: 'Item Two',
      description: 'This is a item two',
      qty: 99,
    },
  ];

  findAll(): Item[] {
    return this.items;
  }

  findOne(id: string): Item {
    return this.items.find((item) => item.id === id);
  }
}
