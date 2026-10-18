import express from 'express'
import { health_router } from './healthRoutes.js'
import {auth_router} from './authRoutes.js'
const router=express.Router()

//router  used
router.use(health_router)
router.use(auth_router)
//importing router 
export const index_router=router;
