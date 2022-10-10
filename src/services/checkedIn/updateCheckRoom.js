import {
	createdResponse,
} from '../../helper/functions/ResponseHandler.js';
import { prisma } from '../../index.js';
export async function updateCheckedIn(req, res, next) {
    try {
        const { adminId, roomId, startAt, endAt, duration } = req.body
        const { id } = req.customer;
        const totalCost = parseFloat(duration) * parseFloat(prisma.rooms.dayCast)
        let newUpdate = await prisma.checked_in.update({
            data: {
                adminId: adminId,
                customerId: id,
                roomId: roomId,
                cost: totalCost,
                duration: duration,
                startAt: startAt,
                endAt: endAt,
            },
        })
        newUpdate = await prisma.checked_in.findUnique({
            where: {
                id: newUpdate.id,
            },
            select: {
                id: true,
                customerId: true,
                adminId: true,
                roomId: true,
                cost: true,
                duration: true,
                startAt: true,
                endAt: true,
            },
        });
        return createdResponse(res, 'Update successfully', newUpdate);
    } catch (err) {
        next(err);
    }
}