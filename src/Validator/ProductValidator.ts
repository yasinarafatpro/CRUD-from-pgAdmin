import Joi from "joi";

const schema=Joi.object({
    productDetails:Joi.string()
    .alphanum()
    .min(5)
    .max(50)
    .required()
})

export const productValidator=async(req,res,next)=>{
   try {
    await schema.validateAsync(req.body);
    return next()
   } catch (error:any) {
       return next(error.message)
   }
}