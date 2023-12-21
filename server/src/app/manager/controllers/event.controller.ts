import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { CreateEventDTO } from 'src/app/manager/models/eventdto/createEvent.dto';
import { UpdateEventDTO } from 'src/app/manager/models/eventdto/updateEvent.dto';
import { GetEvents } from '../service/event/getAll.event';
import { GetEvent } from '../service/event/getOne.event';
import { CreatEvent } from '../service/event/create.event';
import { UpdateEvent } from '../service/event/update.event';
import { DeleteEvent } from '../service/event/delete.event';

@Controller('event')
export class EventController {
  constructor(
    private readonly getEvents: GetEvents,
    private readonly getEvent: GetEvent,
    private readonly createEvent: CreatEvent,
    private readonly updateEvent: UpdateEvent,
    private readonly deleteEvent: DeleteEvent,
  ) {}

  @Get()
  async getAll()  {
    return await this.getEvents.call();
  }

   @Get(':id')
  async getOne(@Param('id') id: number) {
    return await this.getEvent.call(id);
  }

  @Post()
  async create(@Body() eventDTO: CreateEventDTO) {
    return await this.createEvent.call(eventDTO);
  }

  @Put(':id')
  async update(@Body() eventDTO: UpdateEventDTO, @Param('id') id: number)  {
    return await this.updateEvent.callDos(id, eventDTO);
  }

  @Delete(':id')
  delete(@Param('id') id: string) {
    return this.deleteEvent.call(id);
  }
}
