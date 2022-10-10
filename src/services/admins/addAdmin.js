import {
	conflictResponse,
	okResponse,
} from '../../helper/functions/ResponseHandler.js';
import { prisma } from '../../index.js';
import bcrypt from 'bcrypt';
import createAccessToken from '../../helper/functions/createAccessToken.js';
export async function addAdmin(req, res, next) {
	try {
		const { name, email, password, phoneNumber } = req.body;
		const checkEmail = await prisma.admin.findUnique({
			where: {
				email,
			},
		});
		if (checkEmail) {
			return conflictResponse(res, 'Email already exists');
		}
		const checkPhoneNumber = await prisma.admin.findUnique({
			where: {
				phoneNumber,
			},
		});
		if (checkPhoneNumber) {
			return conflictResponse(res, 'Phone Number already exists');
		}
		const encryptedPassword = await bcrypt.hash(password, 10);
		const newAdmin = await prisma.admin.create({
			data: {
				email,
				password: encryptedPassword,
				name,
				phoneNumber,
			},
		});
		const newToken = await prisma.admintokens.create({
			data: {
				adminId: newAdmin.id,
				expiresAt: new Date(Date.now() + 1000 * 60 * 60 * 24),
			},
		});
		const accessToken = createAccessToken(newAdmin.id, newToken.id);
		delete newAdmin.password;
		return okResponse(res, 'admin created successfully', {
			...newAdmin,
			accessToken,
		});
	} catch (err) {
		next(err);
	}
}