import jwt from 'jsonwebtoken'
import User from '../src/models/User.js'
export const protect=async (req,res,next)=>{
    const auth_header=req.headers.authorization 
    if (!auth_header){
        return res.status(500).json({
            message:'no key has send'
        })
    }
    const token=auth_header.split(' ')[1]
    const type=auth_header.split(' ')[0]
    if (type!=="Bearer"){
        return res.status(500).json({
            message:"user have send worng key type"
        })
    }
    // console.log(auth_header.split(' ')[0],auth_header.split(' ')[1])
    try{
    const payload= await jwt.verify(token,process.env.JWT_SECRET)
    if (!payload){
        return res.status(500).json({
            message:'user have entired wrong key'
        })
    }
    const id=payload.id 
    const user=await User.findOne({_id:id})
    if (!user){
        return res.status(500).json({
            message:'user no longer exists'
        })
    }
    req.user=user;
    next()
    }catch(error){
        return res.status(500).json({
            message:'user have worng key or expired key'
        })
    }
}