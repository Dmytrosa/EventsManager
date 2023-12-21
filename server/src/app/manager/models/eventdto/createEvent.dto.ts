import { Category } from "src/app/manager/models/category.enum";

export class CreateEventDTO{
    id: number;
    title: string;
    date: Date;
    latitude: number;
    longitude: number;
    category: Category;
    description: string;
}