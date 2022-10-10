import { Router } from 'express';
import * as CheckedOutService from '../services/checkedOut/index.js';
import JoiMiddleware from '../helper/middleWares/joiMiddleware.js';
import CheckOutSchema from '../helper/schemas/checkOut.schema.js';
import authenticateWithJWT from '../helper/functions/authenticateWithJWT.js';
const checkedOutRouter = Router();

checkedOutRouter.post(
	'/',
	authenticateWithJWT,
	JoiMiddleware(CheckOutSchema),
	CheckedOutService.checkedOut,
);


export default checkedOutRouter;