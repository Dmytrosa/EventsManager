import { Injectable, NotFoundException } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Event } from "src/app/manager/models/event.entity";
import { Not, Repository } from "typeorm";

@Injectable()
export class GetEvent {
    constructor(@InjectRepository(Event) private readonly eventRepository: Repository<Event>) {}

    async call(id: number): Promise<{ mainEvent: Event; relatedEvents: Event[] }> {
        const mainEvent = await this.eventRepository.findOne(id);

        if (!mainEvent) {
            throw new NotFoundException(`Event with id ${id} not found`);
        }

        const relatedEvents = await this.eventRepository.find({
            where: {
                category: mainEvent.category,
                id: Not(mainEvent.id), 
            },
        });

        return { mainEvent, relatedEvents };
    }
}