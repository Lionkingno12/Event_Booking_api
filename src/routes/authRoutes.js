import express from 'express'
const router=express.Router()
import User from '../models/User.js';
router.get('/auth',(req,res)=>{
    router.send('auth succeeded')
})
router.post('/auth/register',async (req,res)=>{
    try{
        const {name,email,password}=req.body;
        const user= await User.create({
            name,email,password
        }) 
        res.send(202).json({
            message:'Registored successfully',
            name,
            email
        })

    }catch(error){
        res.send(404).json(
            {message:'Not able to Registor'}
        )
    }
})
router.post('/auth/login',async (req,res)=>{
    try{

    }catch(error){

    }
})
router.get('/auth/me',async (req,res)=>{
    try{

    }catch(error){

    }
})
export const auth_router=router;