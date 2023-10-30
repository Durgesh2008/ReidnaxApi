import mongoose from "mongoose";

const chartSchema = mongoose.Schema({
    CountryName: {
    type: String,
    required: true
  },
  CountryCode: {
    type: String,
    required: true,

  },
  Value:{
    type:String,
    required:true
  },
  Year:{
    type:String,
    required:true
  },
 
},{timestamps:true});

export default mongoose.model("charts", chartSchema);