import { useState } from "react"
import useAuth from "../../utils/useAuth"

const CreateItem = () => {
  const [title, setTitle] = useState("")
  const [price, setPrice] = useState("")
  const [image, setImage] = useState("")
  const [description, setDescription] = useState("")  
  const handleSubmit = async(e) => {
    e.preventDefault()
    try{
      const response = await fetch("http://nextjs-sample-app-phi.vercel.app/api/item/create", {
        method: "POST",
        headers: {
          "Accept": "application/json",
          "Content-Type": "application/json",
          "authorization": `Bearer ${localStorage.getItem("token")}`
        },
        body: JSON.stringify({
          title: title,
          price: price,
          image: image,
          description: description
        })
      })
      const jsonData = await response.json()
      alert(jsonData.message)
    }catch(err){
      alert("Create Item Failed")
    }
  }

  const loginUser = useAuth()
  if(loginUser){
    return (
      <div>
        <h1>アイテム作成</h1>
        <form onSubmit={handleSubmit}>
          <input type="text" name="title" placeholder="アイテム名" value={title} onChange={(e) => setTitle(e.target.value)} required/>
          <input type="text" name="price" placeholder="価格" value={price} onChange={(e) => setPrice(e.target.value)} required/>
          <input type="text" name="image" placeholder="画像" value={image} onChange={(e) => setImage(e.target.value)} required/>
          <textarea type="text" name="description" placeholder="商品説明" cols="35"  rows="5" value={description} onChange={(e) => setDescription(e.target.value)} required></textarea>
          <button>作成</button>
        </form>
      </div>
    )
  }

}

export default CreateItem