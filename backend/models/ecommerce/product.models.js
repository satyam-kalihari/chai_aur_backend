import mongoose from "mongoose";

const productSchema = new mongoose.Schema(
  {
    discription: {
      type: String,
      required: true,
    },

    name: {
      type: String,
      required: true,
    },

    productImage: {
      type: String,
    },

    price: {
      type: Number,
      required: true,
    },

    soldOut: {
      type: Boolean,
      default : false
    },

    stock : {
        type : Number,
        required : true
    },

    category : {
        type : mongoose.Schema.Types.ObjectId,
        ref : "Category"
    }
  },
  { timestamps: true }
);

export const Product = mongoose.model("Product", productSchema);
