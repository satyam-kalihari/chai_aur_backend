import mongoose, { model } from "mongoose";

const userSchema = new mongoose.Schema({
    username : {
        type : String,
        required : true,
        unique : true,
    },

    email : {
        type : String,
        required : true,
        unique : true,
    },

    password : {
        type : String,
        required : true
    },

    address : {
        type : mongoose.Schema.Types.ObjectId,
        ref : "Address"
    }

}, {timestamps : true})

export const User = mongoose.model("User", userSchema)