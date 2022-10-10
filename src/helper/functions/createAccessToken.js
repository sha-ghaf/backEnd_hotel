import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
dotenv.config();
export default function createAccessToken(customerId, tokenId) {
	return jwt.sign({ customerId, tokenId }, process.env.ACCESS_TOKEN_SECRET, {
		expiresIn: '1d',
	});
}
