import { useState,useEffect } from "react"
export default function Page(){

const [Email,setEmail] = useState("")
const [password,setpassword] = useState("")
const [csrfToken, setCsrfToken] = useState('');

useEffect(() => {
    fetch("https://localhost:8000/api/set-csrf-cookie/", {
        method: "GET",
        credentials: "include",  // Include cookies with the request
      })
        .then((response) => {
          if (response.ok) {
            console.log("CSRF cookie set successfully.");
          } else {
            console.error("Failed to set CSRF cookie.");
          }
        })
        .catch((error) => console.error("Error fetching CSRF token:", error));
  }, []);
  
  const handleLogin = ()=>{
    console.log(csrfToken);
    
    fetch("http://127.0.0.1:8000/login/", {
      method: "POST",
      credentials: "include", 
      headers: {
        "Content-Type": "application/json",
        "X-CSRFToken": csrfToken, 
      },
      body: JSON.stringify({email:"kajhsdkjahs", password: "123" }),
    })
      .then((response) => response.json())
      .then((data) => console.log("Response:", data))
      .catch((error) => console.error("Error:", error));
  }
    return(<div className="mx-auto w-[600px] h-[400px] bg-zinc-500 flex flex-col">
    <input onChange={(event)=>(setEmail(event.target.value))} className="m-2 p-2 outline-none" value={Email} type="text" placeholder="Enter your Email"/>
    <input onChange={(event)=>(setpassword(event.target.value))} className="m-2 p-2 outline-none" value={password} type="password" placeholder="Enter your Password"/>
    <button onClick={handleLogin} className="m-2 p-2 border boder-black bg-green-300">Login</button>
    </div>)
}