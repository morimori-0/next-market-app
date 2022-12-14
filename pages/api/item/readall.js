import connectDB from "../../../utils/database"
import { ItemModel } from "../../../utils/schemaModels"
import auth from "../../../utils/auth"

const getAllItems = async(req, res) => {
  try{
    await connectDB()
    const allItems = await ItemModel.find()
    return res.status(200).send({message: "アイテム読み取り成功（オール）", allItems })
  }catch(err){
    return res.status(400).send({message: "アイテム読み取り失敗（オール）"})
  }
}

export default auth(getAllItems)