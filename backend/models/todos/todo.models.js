import mongoose, { mongo } from "mongoose";
import { User } from "../user.models";

const todoSchema = new mongoose.Schema({
    content : {
        type  : String,
        required : true,
    },

    complete : {
        type : true,
        default : false,
    },

    createdBy : {
        type : mongoose.Schema.Types.ObjectId,
        ref : "User"
    },

    subTodo : [{
        type : mongoose.Schema.Types.ObjectId,
        ref : "SubTodo"
    }]//array of sub-todos

}, { timestamps: true });

export const Todo = mongoose.model("Todo", todoSchema)
