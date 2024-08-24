import { Controller, Delete, Get, Post, Put } from '@nestjs/common';
import { SongsService } from './songs.service';

@Controller('songs')
export class SongsController {
  constructor(private songService: SongsService) {}

  @Post()
  create() {
    return this.songService.create('New Song');
  }
  @Get()
  findAll() {
    return this.songService.findAll();
  }

  @Get(':id')
  findOne() {
    return `fetched Song with ID`;
  }

  @Put(':id')
  update() {
    return `update Song with ID: `;
  }

  @Delete(':id')
  remove() {
    return `remove Song with ID: `;
  }
}
