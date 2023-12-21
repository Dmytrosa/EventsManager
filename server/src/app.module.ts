import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ControllerV1Module } from './app/manager/manager.module';
import { DatabaseModule } from './infrastructure/database/database.module';

@Module({
  imports: [
    ConfigModule.forRoot({isGlobal: true}),
    ControllerV1Module,
  DatabaseModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
