import {
	badRequestResponse,
	okResponse,
} from '../../helper/functions/ResponseHandler.js';
import { prisma } from '../../index.js';

export async function getAdminById(req, res, next) {
	try {
		const { id } = req.params;
		if (isNaN(Number(id))) {
			return badRequestResponse(res, 'Invalid admin id');
		}
		const admin = await prisma.admin.findUnique({
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
		return okResponse(res, 'admin fetched successfully', admin);
	} catch (err) {
		next(err);
	}
}