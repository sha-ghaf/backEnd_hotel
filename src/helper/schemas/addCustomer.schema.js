import Joi from 'joi';
const addCustomerSchema = Joi.object({
	email: Joi.string().email().required().messages({
		'string.email': 'Email must be a valid email',
		'string.empty': 'Email cannot be an empty field',
		'any.required': 'Email is a required field',
	}),
	name: Joi.string().min(6).required().messages({
		'string.empty': 'Name cannot be an empty field',
		'string.min': 'Name must be at least 2 characters long',
		'any.required': 'Name is a required field',
	}),
	phoneNumber: Joi.string()
		.regex(/^01[0125][0-9]{8}$/s)
		.required()
		.messages({
			'string.empty': 'Phone number cannot be an empty field',
			'any.required': 'Phone number is a required field',
		}),
});

export default addCustomerSchema;