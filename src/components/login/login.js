import React,{useState} from 'react'
import './login.css'
import axios from 'axios'
import Cookies from 'js-cookie'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser,faLock } from '@fortawesome/free-solid-svg-icons'
import logo from './logo_light.svg'
import { Link } from 'react-router-dom'
import Alert from '../Alert/alert'

export default function Login() {
const [username,Setusername] = useState('')
const [password,Setpassword] = useState('')
const [visible,setvisible] = useState(false)
const [errorMsg,seterrorMsg] = useState('')
const user=(event)=>{Setusername(event.target.value) }
const pass=(event)=>{Setpassword(event.target.value) }






const login_user=async()=>{
    await axios({
      method: 'post',
      url: 'https://navjot-task-app.herokuapp.com/users/login',
      data: {
        email:username,
        password:password
      }
    }).then((res)=>{
      Cookies.set('user',res.data.token)
      window.location = '/'
      })
      .catch((e)=>{
        setvisible(true)
        seterrorMsg(e.response.data)
    })
    }









    return (
        <div>
        <div className="login">
            <div className="container" >
            <img src={logo} width="120px" style={{objectFit:"cover",marginLeft:"37.8%"}}></img>
             <h1 style={{textAlign:"center",fontSize:"20px"}}>L O G I N </h1>
            <FontAwesomeIcon  icon={faUser} style={{position:"absolute",top:"40%",left:"36%",fontSize:"20px"}}/>
            <input className="username" value={username} name="username" onChange={user} placeholder="Username"></input>
            <FontAwesomeIcon  icon={faLock} style={{position:"absolute",top:"52%",left:"36%",fontSize:"20px"}}/>
            <input className="username" name="password" onChange={pass} type="password" placeholder="Password"></input>
<button className="loginbtn" onClick={login_user}  >Login</button>
<span style={{textAlign:"center"}}><h4 >Dont Have Account? 
<Link to="/">
    <span style={{textDecoration:"underline",cursor:"pointer",color:"#A0D2EB"}}> Create New Account</span>
    </Link>
    </h4></span>
    {visible?<Alert error={errorMsg}></Alert>:null}
            </div>
        </div>
        </div>
    )
}
