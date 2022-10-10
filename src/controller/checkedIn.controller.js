import { Router } from 'express';
import * as CheckedInService from '../services/checkedIn/index.js';
import JoiMiddleware from '../helper/middleWares/joiMiddleware.js';
import CheckedInSchema from '../helper/schemas/checkedIn.schema.js';
import authenticateWithJWT from '../helper/functions/authenticateWithJWT.js';
const checkedInRouter = Router();

checkedInRouter.get('/CustomerCheck', authenticateWithJWT, CheckedInService.getCustomerCheck);
checkedInRouter.post(
	'/',
	authenticateWithJWT,
	JoiMiddleware(CheckedInSchema),
	CheckedInService.checkedIn,
);
checkedInRouter.patch(
	'/',
	authenticateWithJWT,
	JoiMiddleware(CheckedInSchema),
	CheckedInService.updateCheckedIn,
);


export default checkedInRouter;