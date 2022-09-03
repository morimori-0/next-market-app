import Image from "next/image"
import Link from "next/link"

const ReadSingleItem = (props) => {
  console.log(props)
  return (
    <>
      <div>
        <Image src={props.singleItem.image} width="750px" height="500px"></Image>
      </div>
      <div>
        <h1>{props.singleItem.title}</h1>
        <h2>¥{props.singleItem.price}</h2>
        <hr />
        <p>{props.singleItem.description}</p>
        <div>
          <Link href={`/item/update/${props.singleItem._id}`}><a>アイテム編集</a></Link>
          <Link href={`/item/delete/${props.singleItem._id}`}><a>アイテム削除</a></Link>
        </div>
      </div>
    </>
  )
}

export const getServerSideProps = async(context) => {
  const response = await fetch(`http://nextjs-sample-app-phi.vercel.app/api/item/${context.query.id}`)
  const singleItem = await response.json()
  return {
    props: singleItem
  }
}

export default ReadSingleItem