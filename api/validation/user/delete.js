import Joi from  "joi";
const deleteUser = Joi.object({
    id:Joi.number().required(),
});

const validateUserDelete = (req, res, next) => {
    const { error } = deleteUser.validate(req.body);
    if (error) {
        return res.json({message:error.message});
    }
    next();
};
 export default validateUserDelete