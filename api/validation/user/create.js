import Joi from  "joi";
const createUser = Joi.object({
    name:  Joi.string().required().messages({
        'string.empty': 'Name is required',
    }),
    email: Joi.string().email().required().messages({
        'string.empty': 'Email is required',
    }),
    password: Joi.string().required().messages({
        'string.empty': 'Password is required',
    }),
    subscriptionPlan: Joi.string().required().messages({
        'string.empty': 'Password is required',
    }),
});

const validateUserCreate = (req, res, next) => {
    const { error } = createUser.validate(req.body);
    if (error) {
        return res.json({message:error.message});
    }
    next();
};
 export default validateUserCreate