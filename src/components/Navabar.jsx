import { Link } from "react-router-dom"
import axios from "axios"
import { useEffect, useMemo, useState } from "react"

export default function Navbar(){
    
    const [auth, setAuth] = useState(null)

    const LogOut = () => {
        axios.defaults.withCredentials = true
        axios.get(`https://arogya-backend-t515.onrender.com/user/signIn/logout`)
        .then(result => {
            setAuth(!auth)
        })
        console.log("logged out")
    }
    useEffect(()=>{
        axios.defaults.withCredentials = true;
        axios.get(`https://arogya-backend-t515.onrender.com/user/signIn/userdetail`)
        .then(res=>{
            // console.log(res.data.message)
            res.data.message.name? setAuth(res.data): setAuth(!auth)
        })
        .catch(err=>console.log(err))
    },[]);

    function LoggedOut(){
                return(
                    <div className={" items-center p-2 flex"} >
                        <Link to='/login' className={"px-3 py-2 hover:bg-red-300 rounded"}>Login</Link>
                        
                        <Link to='/signup' className="px-3 py-2 hover:bg-red-300 rounded">SignUp</Link>
                    </div>
                )
            }
            
        
    function LogedIn(){
            return(
                <div className={" items-center p-2 flex"} >
                    <Link to='/purchase' className="px-3 py-2 hover:bg-red-300 rounded">Purchase</Link>
                    <div className="px-3 py-2 hover:bg-red-300 rounded" onClick={LogOut}>Logout</div>
                    <span>Hello! {auth.message.name}</span>
                </div>
            )
        }
    return(
        <div className="top-0 left-0 right-0 h-14 w-screen font-mono flex justify-between pl-3 pr-3 backdrop-blur-lg items-center cursor-pointer shadow-sm shadow-black text-white ">
            <div>
                <Link to='/' className="font-mono">AROGYA</Link>
            </div>
            
           {useMemo(()=>auth ? <LogedIn/> :<LoggedOut/>,[auth])  }
        </div>
    )
}