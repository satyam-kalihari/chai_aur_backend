import mongoose from "mongoose";

const addressSchema = new mongoose.Schema({

    house : {
        type :String
    },

    street : {
        type : String
    },

    area : {
        type : String
    },

    city : {
        type : String,
        required : true
    },

    state : {
        type : String,
        required : true
    },

    pincode : {
        type : Number,
        required : true,
    }
}, {timestamps : true})

export const Address = mongoose.model("Address", addressSchema)