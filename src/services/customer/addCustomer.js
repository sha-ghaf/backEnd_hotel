import {
	conflictResponse,
	okResponse,
} from '../../helper/functions/ResponseHandler.js';
import { prisma } from '../../index.js';
import createAccessToken from '../../helper/functions/createAccessToken.js';
export async function addCustomer(req, res, next) {
	try {
		const { email, name, phoneNumber } = req.body;
		const checkEmail = await prisma.customers.findUnique({
			where: {
				email,
			},
		});
		if (checkEmail) {
			return conflictResponse(res, 'Email already exists');
		}
		const newCustomer = await prisma.customers.create({
			data:{
				email,
				name,
				phoneNumber,
			}
		})
		const newToken = await prisma.tokens.create({
			data: {
				customerId: newCustomer.id,
				expiresAt: new Date(Date.now() + 1000 * 60 * 60 * 24),
			},
		});
		const accessToken = createAccessToken(newCustomer.id, newToken.id);
		return okResponse(res, 'Customer created successfully', {
			...newCustomer,
			accessToken,
		});
	} catch (err) {
		next(err);
	}
}
// eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJjdXN0b21lcklkIjozLCJ0b2tlbklkIjoxLCJpYXQiOjE2NjUzNDg0MTgsImV4cCI6MTY2NTQzNDgxOH0.ZXwPpTn9ru58DmnXynEo9BwxF7MHJW3LYbbkP-HsWt8