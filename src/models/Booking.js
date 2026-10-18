//Booking: user, event, seats, status.
import mongoose from "mongoose";
const booking_schema=mongoose.Schema(
    {
        user:{
            type:mongoose.Schema.Types.ObjectId,
            ref:'User',
            required:true
        },

        event:{
            type:mongoose.Schema.Types.ObjectId,
            ref:'Event',
            required:true
        },

        seats:{
            type:Number,
            required:true,
            min:1
        },

        status:{
            type:String,
            enum:['booked','cancelled'],
            default:'booked'
        }
    },
    {
        timestamps:true
    }
)
const book=mongoose.model('Book',booking_schema)
export default book