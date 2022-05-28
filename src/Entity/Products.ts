import { Column, Entity , PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Product{
    @PrimaryGeneratedColumn()
    productId:string;

    @Column()
    productDetails:string;
}