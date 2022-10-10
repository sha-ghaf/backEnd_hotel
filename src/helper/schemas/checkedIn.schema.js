import Joi from 'joi';
const checkedInSchema = Joi.object({
	customerId: Joi.number().required().messages({
		'number.base': 'customerId must be a number',
		'any.required': 'customerId is a required field',
	}),
	adminId: Joi.number().required().messages({
		'number.base': 'adminId must be a number',
		'any.required': 'adminId is a required field',
	}),
	roomId: Joi.number().required().messages({
		'number.base': 'roomId must be a number',
		'any.required': 'roomId is a required field',
	}),
	duration: Joi.number().required().messages({
		'number.base': 'duration must be a number',
		'any.required': 'duration is a required field',
	}),
	startAt: Joi.date()
		.required()
		.messages({
			'string.empty': 'startAt cannot be an empty field',
			'any.required': 'startAt is a required field',
		}),
	endAt: Joi.date()
		.required()
		.messages({
			'string.empty': 'endAt cannot be an empty field',
			'any.required': 'endAt is a required field',
		}),
});
// regex(/^[0-9]{2}[/][0-9]{2}[/][0-9]{4}$/s)
export default checkedInSchema;