const Joi =require('joi')
const schema = Joi.object({
    userName: Joi.string()
        .alphanum()
        .min(3)
        .max(30)
        .required(),

    phoneNumber:Joi.number()
        .required(),
    email: Joi.string()
        .email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } })
        .required(),
    password: Joi.string()
        .pattern(new RegExp('^[a-zA-Z0-9]{3,30}$')),

    repeat_password: Joi.ref('password'),
})
const UserValidator=async(req,res,next)=>{
    try {
        await schema.validateAsync(req.body);
        return next();

    } catch (error:any) {
        return next("Error from validator",error.message)
    }
}
export default UserValidator;