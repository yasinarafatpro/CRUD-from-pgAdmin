import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Item{

    @PrimaryGeneratedColumn()
    ItemId:string;

    @Column()
    NumberOfitem:string;
}