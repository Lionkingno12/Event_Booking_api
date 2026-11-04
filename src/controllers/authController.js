import bcrypt from 'bcrypt'
import User from '../models/User.js'

//Registor User
export const registor_user=async (req,res)=>{
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
}

//Login 
export const login_user=async (req,res)=>{
    try{
        const {email,password}=req.body
        const user=await User.findOne({
            email
        }).select('+password')
        if ( !user ){
            return res.status(404).json({
                message:'User dose not  exists'
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
        res.status(404).json({
            message:'you have done something wrong'
        })
    }
}

//Me
export const me_user=async (req,res)=>{
    try{

    }catch(error){
        res.status(404).json({
            message:'you have done something wrong'
        })
    }
}