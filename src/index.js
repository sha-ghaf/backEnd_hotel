import express from 'express';
import dotenv from 'dotenv';
import { PrismaClient } from '@prisma/client';
import logger from './helper/middleWares/logger.js';
import errorHandler from './helper/middleWares/errorHandler.js';
import registerStrategies from './helper/functions/registerStrategies.js';
import customerRouter from './controller/customer.controller.js'
import adminRouter from './controller/admin.controller.js'
import roomRouter from './controller/rooms.controller.js'
import checkedInRouter from './controller/checkedIn.controller.js'
import checkedOutRouter from './controller/checkedOut.controller.js'
// import { CronJob } from 'cron';
const prisma = new PrismaClient();
dotenv.config();

const app = express();
registerStrategies();

// -- MiddleWares --
app.use(express.json());
app.use(logger);

// -- Routes --
app.use('/customer', customerRouter)
app.use('/admin', adminRouter)
app.use('/room', roomRouter)
app.use('/checkedIn', checkedInRouter)
app.use('/checkedOut', checkedOutRouter)

app.use(errorHandler);

app.listen(process.env.PORT, () => {
	console.log(`Server is listening on port ${process.env.PORT}`);
});

export { prisma };