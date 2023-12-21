import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Event } from "src/app/manager/models/event.entity";
import { CreatEvent } from "./create.event";
import { DeleteEvent } from "./delete.event";
import { GetEvents } from "./getAll.event";
import { GetEvent } from "./getOne.event";
import { UpdateEvent } from "./update.event";


@Module({
    imports:[TypeOrmModule.forFeature([Event])],
    providers:[GetEvent,GetEvents,CreatEvent,UpdateEvent,DeleteEvent],
    exports:[GetEvent,GetEvents,CreatEvent,UpdateEvent,DeleteEvent]
})
export class EventModule{}