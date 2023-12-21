import { Injectable, NotFoundException } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import {  UpdateEventDTO } from "src/app/manager/models/eventdto/updateEvent.dto";
import { Event } from "src/app/manager/models/event.entity";
import { Repository } from "typeorm";

@Injectable()
export class UpdateEvent {
    constructor(@InjectRepository(Event) private readonly eventRepository: Repository<Event>) {}

    async call(id : number, eventDTO: UpdateEventDTO){
        const event = await this.eventRepository.findOne(id)
        if(!event)
            throw new NotFoundException("Event not exist");
        
    const updateEvent = Object.assign(event, eventDTO);
    return await this.eventRepository.save(updateEvent)
    
    }
    async callDos(id : number, eventDTO: UpdateEventDTO){
      return this.eventRepository.update(id, eventDTO)
    }
}