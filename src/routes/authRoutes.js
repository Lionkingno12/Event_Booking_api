import express from 'express'
import { protect } from '../../middleware/protect.js'
import { restrictTo } from '../../middleware/restrictTo.js'
import { registor_user,login_user,me_user } from '../controllers/authController.js'
const router=express.Router()
router.get('/',(req,res)=>{
    res.send('auth succeeded')
})
router.post('/register',registor_user)
router.post('/login',login_user)
router.get('/me',protect,restrictTo('attendee','organizer'),me_user)
export const auth_router=router;