import { EntityRepository, Repository } from "typeorm";
import { User } from "../Entity/User";

@EntityRepository(User)
export class userRepository extends Repository<User>{
    createUserRepository(user){
        return this.save(user);
    }
}