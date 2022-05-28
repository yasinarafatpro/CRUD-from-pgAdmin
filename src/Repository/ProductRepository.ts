import { EntityRepository, Repository } from "typeorm";
import { Product } from "../Entity/Products";

@EntityRepository(Product)
export class productPerository extends Repository<Product>{
    createProductRepository(user){
        return this.save(user)
    }
}