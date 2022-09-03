import connectDB from "../../../utils/database"
import { UserModel } from "../../../utils/schemaModels"

const registerUser = async(req, res) => {
  try{
    await connectDB()
    await UserModel.create(req.body)
    return res.status(200).json({message: "Register User Success"})
  }catch(err){
    return res.status(400).json({message: "Register User Failer"})
  }
}

export default registerUser