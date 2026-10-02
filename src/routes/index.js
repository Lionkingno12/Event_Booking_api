import express from 'express'
import { health_router } from './healthRoutes.js'
const router=express.Router()

//router  used
router.use(health_router)

//importing router 
export const index_router=router;
