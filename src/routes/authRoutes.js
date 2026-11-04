import express from 'express'
const router=express.Router()
import { registor_user,login_user,me_user } from '../controllers/authController.js'
router.get('/',(req,res)=>{
    res.send('auth succeeded')
})
router.post('/register',registor_user)
router.post('/login',login_user)
router.get('/me',me_user)
export const auth_router=router;