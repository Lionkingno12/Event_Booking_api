import mongoose from "mongoose";
const user_schema=mongoose.Schema(
    {
        //Name
        name:{
            type:String,
            required:true,
        },

        //Gender
        // Gender:{
        //     type:String
        // },

        //Email
        email: {
            type: String,
            required: true,
            unique:true,
            lowercase:true,
            trim:true 
        },

        //Age
        // age:{
        //     type: Number,
        //     required: true,
        // },

        //Password
        password:{
            type:String,
            required:true,
            select:false
        },

        //role
        role:{
            type:String,
            required:true,
            enum:['organizer','attendee'],
            default:'attendee'
        }



    },
    {
        timestamps:true
    }
)
const User=mongoose.model('User',user_schema)
export default User;