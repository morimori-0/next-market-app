import mongoose from "mongoose"

const { MONGODB_URI: uri } = process.env

const connectDB = async() => {
  try{
    await mongoose.connect(uri)
    console.log("Success: Connected to MongoDB")
  }catch(err){
    console.log("Failure: Unconnected to MongoDB")
    throw new Error()
  }
}

export default connectDB