import { okResponse } from '../../helper/functions/ResponseHandler.js';
import { prisma } from '../../index.js';
export async function getRooms(req, res, next) {
	try {
		const rooms = await prisma.rooms.findMany({
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