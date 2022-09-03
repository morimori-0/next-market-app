import { useState } from "react"

const Register = () => {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const handleSubmit = async(e) => {
    e.preventDefault()
    try{
      const response = fetch("http://nextjs-sample-app-phi.vercel.app/api/user/register",{
        method: "POST",
        headers: {
          "Accept": "application/json",
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          name: name,
          email: email,
          password: password
        })
      })
      .then(res => res.json())
      .then(data => {
        alert(data.message)
      })
    }catch(err){
      alert("Regist user failed")
      console.log(err)
    }
  }
  return (
    <>
      <h1>ユーザー登録</h1>
      <form onSubmit={handleSubmit} >
        <input type="text" name="name" placeholder="名前" value={name} onChange={(e) => setName(e.target.value)} required />
        <input type="text" name="email" placeholder="メールアドレス" value={email} onChange={(e) => setEmail(e.target.value)} required />
        <input type="password" name="password" placeholder="パスワード" value={password} onChange={(e) => setPassword(e.target.value)} required />
        <button>登録</button>
      </form>
    </>
  )
}

export default Register