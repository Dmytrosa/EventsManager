import { Injectable, InternalServerErrorException, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Event } from 'src/app/manager/models/event.entity';
import { Repository } from 'typeorm';

@Injectable()
export class DeleteEvent {
  constructor(@InjectRepository(Event) private readonly eventRepository: Repository<Event>) {}

  async call(id): Promise<void> {
    const event = await this.eventRepository.findOne(id);
    if (!event) {
      throw new NotFoundException('Resource not found');
    }
    try {
      await this.eventRepository.remove(event);
    } catch (error) {
      console.error('Error deleting event', error);
      throw new InternalServerErrorException('Error deleting event');
    }
  }
}
