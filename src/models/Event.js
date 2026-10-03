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

        locatoin:{
            type:String,
            required:true
        },

        date:{
            type:Date,
            required:true
        },

        totalSeats:{
            type:Number,
            required:true
        },

        seatLeft:{
            type:Number,
            required:true
        },

        organizer:{
            type:String
        }


    },

    {
        timestamps:true
    }

)

const event=mongoose.model('Event',event_schema)
export default event