import {
	badRequestResponse,
	createdResponse,
	notFoundResponse,
    conflictResponse,
} from '../../helper/functions/ResponseHandler.js';
import { prisma } from '../../index.js';
export async function checkedIn(req, res, next) {
	try {
        const { customerId, adminId, roomId, startAt, endAt, duration } = req.body
        // const { id } = req.customers;
		console.log(req.customers)
        const checkCustomerId = await prisma.customers.findUnique({
			where: {  
                id: parseFloat(adminId),
			},
		});
		if (!checkCustomerId) {
			return notFoundResponse(res, 'Customer not found');
		}
        const checkAdminId = await prisma.admin.findUnique({
			where: {  
                id: parseFloat(adminId),
			},
		});
		if (!checkAdminId) {
			return notFoundResponse(res, 'Customer not found');
		}
        const checkRoomId = await prisma.rooms.findMany({
			where: {  
                id: parseFloat(roomId),
                // status: 'Available',
			},
		});
		console.log(checkRoomId)
		if (!checkRoomId) {
			return notFoundResponse(res, 'room not found');
		}
        if (checkRoomId[0].status === 'Reserved') {
            return conflictResponse(res,'room with housekeeping')
        } else if (checkRoomId[0].status === 'Disabled') {
            return badRequestResponse(res,'room already checked')
        }
        const totalCost = parseFloat(duration) * parseFloat(checkRoomId[0].dayCast)
        console.log(checkRoomId[0].dayCast)
        console.log(totalCost)
		const validId = parseFloat(customerId) * parseFloat(adminId) * parseFloat(roomId)
        let newCheck = await prisma.checked_in.create({
			data: {
				id: validId,
				customerId: customerId,
				adminId: adminId,
                roomId: roomId,
                cost: totalCost,
                duration: duration,
                startAt: startAt,
                endAt: endAt,
				checked: 'in',
			},
		});
		const status = 'Disabled'
        await prisma.rooms.update({
            where: {
                id: roomId,
            },
			set: {
				status: status,
			}
        })
        newCheck = await prisma.checked_in.findUnique({
			where: {
				id: newCheck.id,
			},
			select: {
				id: true,
                cost: true,
                duration: true,
                startAt: true,
                endAt: true,
				checked: true,
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
                        id: true,
                        name: true,
                        email: true,
                        phoneNumber: true,
                    },
                },
                Rooms: {
                    select: {
                        id: true,
                        type: true,
                        dayCast: true,
                        description: true,
                    },
                },
			},
		});
		return createdResponse(res, 'CheckedIn successfully', newCheck);
        // { customerId, adminId, roomId, startAt, endAt, duration }
    } catch (err) {
		next(err);
	}
}