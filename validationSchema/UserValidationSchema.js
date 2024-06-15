const joi = require('joi');

const CreateUser = joi.object({
    full_names: joi.string().required().min(6),
    phone_number: joi.string().required().min(10).max(13),
    email: joi.string().email().required(),
    password: joi.string().required().min(4),

});

module.exports = {
    CreateUser,
}