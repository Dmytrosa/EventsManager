import { Module } from "@nestjs/common";
import { EventController } from "./controllers/event.controller";
import { EventModule } from "./service/event/event.module";

@Module({
    imports:[EventModule],
    controllers:[EventController]
})
export class ControllerV1Module{}