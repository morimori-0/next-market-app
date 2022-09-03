import { useState } from "react"

const Login = () => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const handleSubmit = (e) => {
    e.preventDefault()
    try{
      fetch("http://localhost:3000/api/user/login",{
        method: "POST",
        headers: {
          "Accept": "application/json",
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          email: email,
          password: password
        })
      })
      .then(res => res.json())
      .then(data => {
        alert(data.message)
        localStorage.setItem("token", data.token)
      })
    }catch(err){
      alert("login failed")
    }
  }

  return (
    <>
      <h1>ログイン</h1>
      <form onSubmit={handleSubmit}>
        <input type="text" name="email" value={email} placeholder="メールアドレス" onChange={(e) => setEmail(e.target.value)} required/>
        <input type="password" name="password" value={password} placeholder="パスワード" onChange={(e) => setPassword(e.target.value)} required/>
        <button>ログイン</button>
      </form>
    </>
  )
}

export default Login