import Joi from 'joi';
const CheckedOutSchema = Joi.object({
    adminId: Joi.number().required().messages({
		'number.base': 'adminId must be a number',
		'any.required': 'adminId is a required field',
	}),
    idChecked: Joi.number().required().messages({
		'number.base': 'idChecked must be a number',
		'any.required': 'idChecked is a required field',
	}),
	feedback: Joi.string().min(10).required().messages({
		'string.empty': 'feedback cannot be an empty field',
		'string.min': 'feedback must be at least 10 characters long',
		'any.required': 'feedback is a required field',
	}),
});

export default CheckedOutSchema;