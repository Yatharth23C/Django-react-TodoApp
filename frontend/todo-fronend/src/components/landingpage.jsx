import NavBar from './NavBar'
import {useState,useEffect} from 'react'

export default function App(){

const [title, settitle] = useState("")
const [desc, setdesc] = useState("")
const [bool, setdone] = useState(false)
const [csrfToken, setCsrfToken] = useState('');

  useEffect(() => {
    
    fetch("http://your-backend-domain/your-csrf-endpoint/", {
      method: "GET",
      credentials: "include", 
    })
      .then((response) => {
        if (response.ok) {
         
          const token = document.cookie
            .split("; ")
            .find((row) => row.startsWith("csrftoken="))
            ?.split("=")[1];

          if (token) {
            setCsrfToken(token); 
          }
        }
      })
      .catch((error) => console.error("Error fetching CSRF token:", error));
  }, []);

    return( <>
        <NavBar/>
        <div className='main w-full h-full flex flex-row justify-center'>
          <div className=' w-[800px] flex flex-col h-[500px] bg-blue-300 m-10 '>
            Enter the tite<input  className= 'm-2 p-2 outline-none rounded-md'type="text" />
            Enter the description<input className= 'm-2 p-2 outline-none rounded-md' type="text" />
            <input type='checkbox'/>
            <button onClick={Addtask} >Add task</button>
            <div className='Tasks'>
            </div>
          </div>
        </div>
      </>)
}