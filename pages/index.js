import Link from "next/link"
import Image from "next/image"

const ReadAllItems = (props) => {
  console.log(props)
  return (
    <div>
      <h1>こんにちは</h1>
      {props.allItems.map((item) => 
        <Link href={`/item/${item._id}`} key={item._id}>
          <a>
            <Image src={item.image} width="750px" height="500px" alt="item-image"/>
            <h2>{item.price}円</h2>
            <h3>{item.title}</h3>
            <p>{item.description.substring(0, 80)}...</p>
          </a>
        </Link>
      )}
    </div>
  )
}

export const getServerSideProps = async() => {
  const response = await fetch("http://nextjs-sample-app-phi.vercel.app/api/item/readall")
  const allItems = await response.json()
  return {
    props: allItems
  }
}

export default ReadAllItems