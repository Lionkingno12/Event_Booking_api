import mongoose from "mongoose";
import dotenv from 'dotenv'
dotenv.config()
const database=async ()=>{
    try{
    await mongoose.connect(process.env.MONGO_URI)
    console.log('you connected to the database successfully')
    }
    catch(error){
        console.log('connection failed to database')
    }
}
export const db=database;