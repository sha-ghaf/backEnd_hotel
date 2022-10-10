import {
	badRequestResponse,
	okResponse,
} from '../../helper/functions/ResponseHandler.js';
import { prisma } from '../../index.js';

export async function getCustomerById(req, res, next) {
	try {
		const { id } = req.params;
		if (isNaN(Number(id))) {
			return badRequestResponse(res, 'Invalid customer id');
		}
		const customer = await prisma.customers.findUnique({
			where: {
				id: parseInt(id),
			},
			select: {
				id: true,
				name: true,
				email: true,
				phoneNumber: true,
			},
		});
		return okResponse(res, 'customer fetched successfully', customer);
	} catch (err) {
		next(err);
	}
}