import userRouter from './user-route'
import { Router } from 'express'

const router = Router();

router.use(userRouter);

export default router;