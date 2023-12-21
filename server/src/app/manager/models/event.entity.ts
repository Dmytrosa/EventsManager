import {
    Column,
    Entity,
    PrimaryGeneratedColumn,
  } from 'typeorm';
import { Category } from 'src/app/manager/models/category.enum';  
  
  @Entity('manager_event')
  export class Event {
    @PrimaryGeneratedColumn()
    id: number;
  
    @Column({ default: '' })
    title: string;
  
    @Column()
    date: Date;
  
    @Column('double precision') 
    latitude: number;
  
    @Column('double precision') 
    longitude: number;
  
    @Column({
      type: 'enum',
      enum: Category,
      default: Category.CATEGORY1,
    })
    category: Category;
  
    @Column()
    description: string;
  }
  