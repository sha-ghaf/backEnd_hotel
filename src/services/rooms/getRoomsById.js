import {
	badRequestResponse,
	okResponse,
} from '../../helper/functions/ResponseHandler.js';
import { prisma } from '../../index.js';

export async function getRoomsById(req, res, next) {
	try {
		const { id } = req.params;
		if (isNaN(Number(id))) {
			return badRequestResponse(res, 'Invalid rooms id');
		}
		const rooms = await prisma.rooms.findUnique({
			where: {
				id: parseInt(id),
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