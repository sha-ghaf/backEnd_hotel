// import { string } from 'joi';
import {
	// badRequestResponse,
	okResponse,
} from '../../helper/functions/ResponseHandler.js';
import { prisma } from '../../index.js';

export async function getReserved(req, res, next) {
	try {
		// const { status } = req.params;
        // console.log(status)
        // if (status !== "Available") {
        //     return badRequestResponse(res, 'Invalid rooms status');
        // }
		// // if (isNaN(Number(id))) {
		// // 	return badRequestResponse(res, 'Invalid rooms id');
		// // }
		const rooms = await prisma.rooms.findMany({
			where: {
				status: String('Reserved'),
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