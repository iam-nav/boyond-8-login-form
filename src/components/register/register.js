import React,{useState} from 'react'
import './register.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser,faLock,faEnvelope } from '@fortawesome/free-solid-svg-icons'
import axios from 'axios'
import logo from './logo_light.svg'
import { Link } from 'react-router-dom'
import Cookies from 'js-cookie'
import Alert from '../Alert/alert'
export default function NewUser() {

const [name,setname]= useState('')
const [email,setemail]=useState('')
const [password,setpassword]= useState('')
const [errorMsg,seterrorMsg]=useState('')
const [visible,setvisible]=useState(false)

const settingName = (event)=>{setname(event.target.value)}
const settingEmail = (event)=>{setemail(event.target.value)}
const settingPassword = (event)=>{setpassword(event.target.value)}


const CreatingUser=()=>{
    axios({
        method: 'post',
        url: 'https://navjot-task-app.herokuapp.com/users',
        data: {
          name:name,
          email:email,
          password:password
        }
      }).then((response)=>{
        Cookies.set('user',response.data.token)
        window.location.reload(true)
    }).catch((e)=>{
        setvisible(true)
        seterrorMsg(e.response.data.messageValidation)
    })

}


    return (
        <div>
        <div className="register">
            <div className="reg_container" >
            <img src={logo} viewBox="100"  width="120px" style={{objectFit:"cover",marginLeft:"37.8%"}}></img>
             <h1>R E G I S T E R </h1>
            <FontAwesomeIcon  className="icon" icon={faUser} style={{position:"absolute",top:"36%",left:"36%",fontSize:"20px",color:"lightgrey"}}/><input className="reg" name="name"  value={name} onChange={settingName} placeholder="Name"></input>
            <FontAwesomeIcon  className="emailicon" icon={faEnvelope} style={{position:"absolute",top:"46.3%",left:"36%",fontSize:"20px",color:"lightgrey"}}/><input className="reg" name="email" value={email} onChange={settingEmail} placeholder="Email@example.com"></input>
            <FontAwesomeIcon  className="passwordicon" icon={faLock} style={{position:"absolute",top:"57%",left:"36%",fontSize:"20px",color:"lightgrey"}}/><input className="reg" name="password" type="password" value={password} onChange={settingPassword} placeholder="Password"></input>
<button className="regbtn" onClick={CreatingUser}>Register</button>
<span style={{textAlign:"center"}}><h4 >Already Have Account? 
<Link to="/login">
    <span style={{textDecoration:"underline",cursor:"pointer",color:"#A0D2EB"}}>Login Now</span>
    </Link>  
    </h4></span>
    {visible?<Alert error={errorMsg}></Alert>:null}
            </div>
        </div>
        </div>
    )
}
