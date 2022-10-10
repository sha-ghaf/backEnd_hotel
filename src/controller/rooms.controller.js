import { Router } from 'express';

import * as RoomsService from '../services/rooms/index.js';

const roomsRouter = Router();

roomsRouter.get('/', RoomsService.getRooms);
roomsRouter.get('/:id', RoomsService.getRoomsById);
roomsRouter.get('/status/Available', RoomsService.getAvailable);
roomsRouter.get('/status/Disabled', RoomsService.getDisabled);
roomsRouter.get('/status/Reserved', RoomsService.getReserved);

export default roomsRouter;