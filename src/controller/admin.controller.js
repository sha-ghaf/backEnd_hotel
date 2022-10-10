import { Router } from 'express';

import * as AdminService from '../services/admins/index.js';
import JoiMiddleware from '../helper/middleWares/joiMiddleware.js';
import addAdminSchema from '../helper/schemas/addAdmin.schema.js'
import loginSchema from '../helper/schemas/login.schema.js'

const AdminRouter = Router();

AdminRouter.get('/', AdminService.getAdmins);
AdminRouter.get('/:id', AdminService.getAdminById);
AdminRouter.post('/addAdmin', JoiMiddleware(addAdminSchema), AdminService.addAdmin);
AdminRouter.post('/login', JoiMiddleware(loginSchema), AdminService.login);

export default AdminRouter;