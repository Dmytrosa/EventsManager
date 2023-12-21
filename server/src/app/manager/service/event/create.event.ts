import { Injectable, BadRequestException, InternalServerErrorException } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { CreateEventDTO } from "src/app/manager/models/eventdto/createEvent.dto";
import { Event } from "src/app/manager/models/event.entity";
import { Repository } from "typeorm";

@Injectable()
export class CreatEvent {
    constructor(@InjectRepository(Event) private readonly eventRepository: Repository<Event>) {}
    
    async call(eventDTO: CreateEventDTO): Promise<Event> {
        try {
            const createEvent = this.eventRepository.create(eventDTO);
            const savedEvent = await this.eventRepository.save(createEvent);
            return savedEvent;
        } catch (error) {
            console.error('Error creating event', error);

            if (error.code === '23505') {
                throw new BadRequestException('Event with the same data already exists');
            }
            throw new InternalServerErrorException('Error creating event');
        }
    }
}
