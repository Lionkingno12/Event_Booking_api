//Booking: user, event, seats, status.
import mongoose from "mongoose";
const booking_schema=mongoose.Schema(
    {
        user:{
            type:String,
            required:true
        },

        event:{
            type:String,
            required:true
        },

        seats:{
            type:Number,
            required:true
        },

        status:{
            type:Boolean,
            required:true
        }
    }
)
const book=mongoose.model('Book',booking_schema)
export default book