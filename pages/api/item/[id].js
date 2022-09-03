import connectDB from "../../../utils/database"
import { ItemModel } from "../../../utils/schemaModels"
import auth from "../../../utils/auth"

const getSingleItem = async(req, res) => {
  await connectDB()
  const singleItem = await ItemModel.findById(req.query.id)
  return res.status(200).send({message: "アイテム読み取り成功（シングル）", singleItem})
}

export default auth(getSingleItem)