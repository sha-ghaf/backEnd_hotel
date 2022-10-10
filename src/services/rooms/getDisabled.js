import {
	okResponse,
} from '../../helper/functions/ResponseHandler.js';
import { prisma } from '../../index.js';

export async function getDisabled(req, res, next) {
	try {
		const rooms = await prisma.rooms.findMany({
			where: {
				status: String('Disabled'),
			},
			select: {
				id: true,
				type: true,
				dayCast: true,
				description: true,
				status: true,
			},
		});
		return okResponse(res, 'rooms fetched successfully', rooms);
	} catch (err) {
		next(err);
	}
}