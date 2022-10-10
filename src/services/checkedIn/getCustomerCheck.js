import { okResponse } from '../../helper/functions/ResponseHandler.js';
import { prisma } from '../../index.js';

export async function getCustomerCheck(req, res, next) {
	try {
		const { id } = req.customer;
		const Customer = await prisma.checkedin.findMany({
			where: {
				customerId: id,
			},
			select: {
				id: true,
				cost: true,
				feedback: true,
				duration: true,
				startAt: true,
				endAt: true,
				Customers: {
					select: {
						id: true,
						name: true,
						email: true,
						phoneNumber: true,
					},
				},
                Admin: {
                    select: {
                        // id: true,
                        name: true,
                        email: true,
                        phoneNumber: true,
                    },
                },
                Rooms: {
                    select: {
                        // id: true,
                        type: true,
                        dayCast: true,
                        description: true,
                    },
                },
			},
		});
		return okResponse(res, 'Customer fetched successfully', Customer);
	} catch (err) {
		next(err);
	}
}