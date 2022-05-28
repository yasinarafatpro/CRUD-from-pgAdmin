import { getCustomRepository,getRepository } from "typeorm";
import { User } from "../Entity/User"
import { userRepository } from "../Repository/UserRepository";

const UserController=async(req,res,next)=>{
    try {
    const newUser=new User();
    newUser.userName=req.body.userName;
    newUser.phoneNumber=req.body.phoneNumber;
    newUser.email=req.body.email;
    newUser.password=req.body.password;

    const createUser=getCustomRepository(userRepository);
    const user=await createUser.createUserRepository(newUser);
    res.status(201).send({
        data:{
            name:user.userName
        }
    });
    } catch (error:any) {
        return next(error.message);
    }
}
export default UserController;