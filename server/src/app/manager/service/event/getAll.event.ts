import { Injectable, InternalServerErrorException } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Event } from "src/app/manager/models/event.entity";
import { Repository } from "typeorm";

@Injectable()
export class GetEvents {
    constructor(@InjectRepository(Event) private readonly eventRepository: Repository<Event>) {}

    async call(): Promise<Event[]> {
        try {
            const events = await this.eventRepository.find();
            return events;
        } catch (error) {
            console.error('Error getting events', error);
            throw new InternalServerErrorException('Error getting events');
        }
    }
}
