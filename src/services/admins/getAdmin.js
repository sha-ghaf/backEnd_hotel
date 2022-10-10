import { okResponse } from '../../helper/functions/ResponseHandler.js';
import { prisma } from '../../index.js';
export async function getAdmins(req, res, next) {
	try {
		const admins = await prisma.admin.findMany({
			select: {
				id: true,
				name: true,
				email: true,
				phoneNumber: true,
			},
		});
		return okResponse(res, 'Admins fetched successfully', admins);
	} catch (err) {
		next(err);
	}
}