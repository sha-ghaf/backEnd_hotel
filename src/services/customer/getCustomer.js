import { okResponse } from '../../helper/functions/ResponseHandler.js';
import { prisma } from '../../index.js';
export async function getCustomers(req, res, next) {
	try {
		const customers = await prisma.customers.findMany({
			select: {
				id: true,
				name: true,
				email: true,
				phoneNumber: true,
			},
		});
		return okResponse(res, 'customers fetched successfully', customers);
	} catch (err) {
		next(err);
	}
}

