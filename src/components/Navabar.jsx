import { Link } from "react-router-dom"
import axios from "axios"
import { useEffect, useMemo, useState } from "react"

export default function Navbar(){
    
    const [auth, setAuth] = useState(null)

    const LogOut = () => {
        axios.defaults.withCredentials = true
        axios.get(`http://localhost:8000/user/signIn/logout`)
        .then(result => {
            setAuth(!auth)
        })
        console.log("logged out")
    }
    useEffect(() => {
        axios.get('http://localhost:8000/user/signIn/userdetail', {
          withCredentials: true,  // Add this line to include cookies
          headers: {
             "Content-Type": "application/json"
          }
        })
        .then(res => {
          console.log("res", res.data); 
          res.name ? setAuth(res.data) : setAuth(!auth);
        })
        .catch(err => console.log(err));
     }, []);
     
    // useEffect(() => {
      
    //     axios.get('http://localhost:8000/user/signIn/userdetail', 
    //         {
    //             withCredentials: true, 
            
    //         {
    //       headers: {
    //          "Content-Type":"application/json"
    //       }
    //     }
    //     })
    //     .then(res => {
    //       console.log("res",res);
    //     //   res.data.message.name ? setAuth(res.data) : setAuth(!auth);
    //     })
    //     .catch(err => console.log(err));
    //   }, []);
      

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
                    <span>Hello! {auth.name}</span>
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