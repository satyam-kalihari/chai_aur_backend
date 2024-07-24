import mongoose from 'mongoose'

const patientSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },

    diagonseWith: {
      type: String,
      required: true,
    },

    age: {
      type: Number,
      required: true,
    },

    address: {
      type: mongoose.Schema.Types.ObjectId,
      ref : "Address",
      required: true,
    },

    bloodGroup: {
      type: String,
      required: true,
    },

    gender: {
      type: String,
      enum : ["MALE", "FEMALE", "OTHER"],
      required: true,
    },

    admittedIn : {
        type : mongoose.Schema.Types.ObjectId,
        ref : "Hospital"
    }
  },
  { timestamps: true }
);

export const Patient = mongoose.model("Patient", patientSchema)