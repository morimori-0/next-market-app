import connectDB from "../../../utils/database";
import { UserModel } from "../../../utils/schemaModels";
import jwt from "jsonwebtoken";

const secret_key = "nextmarket"

const loginUser = async(req, res) => {
  try{
    await connectDB()
    const savedUserData = await UserModel.findOne({email: req.body.email})

    if(savedUserData){
      if(savedUserData.password !== req.body.password){
        return res.status(400).send({message: "password failed"})
      }
      const payload = {email: req.body.email}
      const token = jwt.sign(payload, secret_key, {expiresIn: "23h"})
      return res.status(200).send({message: "Login Success", token: token})
    }else{
      return res.status(400).send({message: "Login Failed. Please regist user"})
    }
  }catch(err){
    return res.status(500).send({message: "Login Failed"})
  }
}

export default loginUser