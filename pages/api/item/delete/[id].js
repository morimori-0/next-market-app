import connectDB from "../../../../utils/database";
import { ItemModel } from "../../../../utils/schemaModels";
import auth from "../../../../utils/auth";

const deleteItem = async(req, res) => {
  try{
    await connectDB()
    const singleItem = await ItemModel.findById(req.query.id)
    if(singleItem && singleItem.email === req.body.email){
      await ItemModel.deleteOne({_id: req.query.id })
      return res.status(200).send({message: "Success Delete Item"})
    }else{
      throw new Error()
    }
  }catch(err){
    return res.status(400).send({message: "Failed Delete Item"})
  } 
}

export default auth(deleteItem)