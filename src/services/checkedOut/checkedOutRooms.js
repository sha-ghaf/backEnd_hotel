import { createdResponse } from '../../helper/functions/ResponseHandler.js';
import { prisma } from '../../index.js';
export async function checkedOut(req, res, next) {
	try {
		const { idChecked, feedback, adminId } = req.body
		const { idCustomer } = req.customers;
		await prisma.tokens.delete({
			where: {
				id: idCustomer,
			},
		});
		const checkIn = await prisma.checked_in.findFirst({
			where: {
				id: idChecked,
				customerId: idCustomer,
			},
		})
		let newCheckOut = await prisma.checked_out.create({
			data: {
				id: checkIn.id,
				customerId: checkIn.customerId,
				adminId: adminId,
                roomId: checkIn.roomId,
                cost: checkIn.cost,
                duration: checkIn.duration,
                startAt: checkIn.startAt,
                endAt: checkIn.endAt,
				feedback: feedback,
			},
		})
		await prisma.checked_in.update({
			where: {
				id: idChecked,
				customerId: idCustomer,
			},
			set: {
				checked: 'out'
			}
		})
		await prisma.rooms.update({
            where: {
                id: checkIn.roomId,
            },
			set: {
				status: 'Reserved',
			}
        })
		newCheckOut = await prisma.checked_out.findUnique({
			where: {
				id: newCheckOut.id,
			},
			select: {
				id: true,
                cost: true,
                duration: true,
                startAt: true,
                endAt: true,
				checked: true,
				feedback: true,
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
		return createdResponse(res, 'CheckedOut successfully', newCheckOut);
	} catch (err) {
		next(err);
	}
}