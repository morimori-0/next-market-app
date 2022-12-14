import Image from "next/image"
import useAuth from "../../../utils/useAuth"

const DeleteItem = (props) => {
  const handleSubmit = async(e) => {
    e.preventDefault()
    try{
      const response = await fetch(`https://next-market-app-kappa.vercel.app/api/item/delete/${props.singleItem._id}`, {
        method: "POST",
        headers: {
          "Accept": "application/json",
          "Content-Type": "application/json",
          "Authorization": `Bearer ${localStorage.getItem("token")}`
        }
      })
      const jsonData = await response.json()
      alert(jsonData.message)
    }catch(err){
      alert("Delete Item Failed")
    }
  }

  const loginUser = useAuth()
  if(loginUser === props.singleItem.email){
    return (
      <>
        <h1>アイテム削除</h1>
        <form onSubmit={handleSubmit}>
          <h2>{props.singleItem.title}</h2>
          <Image src={props.singleItem.image} width="750px" height="500px"></Image>
          <h3>¥{props.singleItem.price}</h3>
          <p>{props.singleItem.description}</p>
          <button>削除</button>
        </form>
      </>
    )
  }else{
    return (
      <h1>権限がありません。</h1>
    )
  }
}

export default DeleteItem

export const getServerSideProps = async(context) => {
  const response = await fetch(`https://next-market-app-kappa.vercel.app/api/item/${context.query.id}`)
  const singleItem = await response.json()
  return {
    props: singleItem
  }
}