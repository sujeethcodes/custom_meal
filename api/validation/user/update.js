import Joi from  "joi";
const updateUser = Joi.object({
    id:Joi.number().required(),
    name:  Joi.string().optional(),
    email: Joi.string().email().optional(),
    password: Joi.string().optional(),
    subscriptionPlan: Joi.string().optional(),
});

const validateUserUpdate = (req, res, next) => {
    const { error } = updateUser.validate(req.body);
    if (error) {
        return res.json({message:error.message});
    }
    next();
};
 export default validateUserUpdate