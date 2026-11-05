import jwt from 'jsonwebtoken'

//jwt
export const generateToken=async (userId)=>{
    return jwt.sign(
        {id:userId},
        process.env.JWT_SECRET,
        {
            expiresIn:process.env.JWT_EXPIRES_IN
        }
    )
}