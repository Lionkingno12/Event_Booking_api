import express from 'express'
const router=express.Router()
import User from '../models/User.js';
import bcrypt from 'bcrypt'
router.get('/auth',(req,res)=>{
    res.send('auth succeeded')
})
router.post('/auth/register',async (req,res)=>{
    try{
        const {name,email,password}=req.body;

        const exist_user= await User.findOne({
            email
        })

        if (exist_user){
            return res.status(409).json({
                message:'User already exists '
            })
        }

        //now going to hash the password
        const saltRound=11;
        const new_password=await bcrypt.hash(password,saltRound)
        const user= await User.create({
            name,email,password:new_password
        }) 
        res.status(201).json({
            message:'Registored successfully',
            name,
            email
        })

    }catch(error){
        res.status(500).json(
            {message:'Not able to Registor'}
        )
    }
})
router.post('/auth/login',async (req,res)=>{
    try{
        const {email,password}=req.body
        const user=await User.findOne({
            email
        }).select('+password')
        if ( !user ){
            return res.status(404).json({
                messgae:'User dose not  exists'
            })
        }
        const same_password=await bcrypt.compare(password,user.password)
        if (!same_password){
            return res.status(404).json({
                message:'user password is not correct '
            })
        }
        res.status(202).json({
            message:'login successfully',
            user:{
                name:user.name,
                email:user.email
            }

        })
    }catch(error){

    }
})
router.get('/auth/me',async (req,res)=>{
    try{

    }catch(error){

    }
})
export const auth_router=router;