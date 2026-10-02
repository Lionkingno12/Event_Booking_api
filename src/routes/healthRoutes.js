import express from 'express'
const router=express.Router()
router.get('/health',(req,res)=>{
    res.send('hello i am just too good ')
})
export const health_router=router;