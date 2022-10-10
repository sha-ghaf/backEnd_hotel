import { Router } from 'express';

import * as customerService from '../services/customer/index.js';
import JoiMiddleware from '../helper/middleWares/joiMiddleware.js';
import addCustomer from '../helper/schemas/addCustomer.schema.js'

const customerRouter = Router();

customerRouter.get('/', customerService.getCustomers);
customerRouter.get('/:id', customerService.getCustomerById);
customerRouter.post('/addCustomer', JoiMiddleware(addCustomer), customerService.addCustomer);

export default customerRouter;