import connectDB from "../../../utils/database";
import { ItemModel } from "../../../utils/schemaModels";
import auth from "../../../utils/auth";

const createItem = async(req, res) => {
  try{
    await connectDB()
    await ItemModel.create(req.body)
    return res.status(200).json({message: "Create Item!"})
  }catch(err){
    return res.status(400).json({message: "Create Item Failer"})
  }
}

export default auth(createItem)
