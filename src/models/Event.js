//Event: title, description, location, date, totalSeats, seatsLeft, organizer.
import mongoose from "mongoose";
const event_schema=new mongoose.Schema(
    {
        title:{
            type:String,
            required:true
        },

        description:{
            type:String,
            required:true
        },

        location:{
            type:String,
            required:true
        },

        date:{
            type:Date,
            required:true
        },

        totalSeats:{
            type:Number,
            required:true,
            min:1
        },

        seatsLeft:{
            type:Number,
            required:true,
            min:0
        },

        organizer:{
            type:mongoose.Schema.Types.ObjectId,
            ref:"User",
            required:true
        }


    },

    {
        timestamps:true
    }

)

const event=mongoose.model('Event',event_schema)
export default event