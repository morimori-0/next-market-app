import { useState } from "react"
import useAuth from "../../../utils/useAuth"

const UpdateItem = (props) => {
  const [title, setTitle] = useState(props.singleItem.title)
  const [price, setPrice] = useState(props.singleItem.price)
  const [image, setImage] = useState(props.singleItem.image)
  const [description, setDescription] = useState(props.singleItem.description)
  const handleSubmit = async(e) => {
    e.preventDefault()
    try{
      const response = await fetch(`https://next-market-app-kappa.vercel.app/api/item/update/${props.singleItem._id}`, {
        method: "POST",
        headers: {
          "Accept": "application/json",
          "Content-Type": "application/json",
          "Authorization": `Bearer ${localStorage.getItem("token")}`
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
      alert("Update Item Failed")
    }
  }

  const loginUser = useAuth()
  if(loginUser === props.singleItem.email) {
    return (
      <>
        <div>
          <h1>アイテム編集</h1>
        </div>
        <div>
          <form onSubmit={handleSubmit}>
            <input type="text" name="title" value={title} onChange={(e) => setTitle(e.target.value)} required/>
            <input type="text" name="price" value={price} onChange={(e) => setPrice(e.target.value)} required/>
            <input type="text" name="image" value={image} onChange={(e) => setImage(e.target.value)} required/>
            <textarea name="description" value={description} onChange={(e) => setDescription(e.target.value)} cols="30" rows="3" required></textarea>
            <button>更新</button>
          </form>
        </div>
      </>
    )
  }else{
    return (
      <h1>権限がありません。</h1>
    )
  }
}

export default UpdateItem

export const getServerSideProps = async(context) => {
  const response = await fetch(`https://next-market-app-kappa.vercel.app/api/item/${context.query.id}`)
  const singleItem = await response.json()
  return {
    props: singleItem
  }
}