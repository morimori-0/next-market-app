import mongoose from "mongoose"

const connectDB = async() => {
  try{
    await mongoose.connect("mongodb+srv://take_toyo_silence:adorax7171@cluster0.f5r9tip.mongodb.net/appDataBase?retryWrites=true&w=majority")
    console.log("Success: Connected to MongoDB")
  }catch(err){
    console.log("Failure: Unconnected to MongoDB")
    throw new Error()
  }
}

export default connectDB