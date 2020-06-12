import React from 'react'
import axios from 'axios'
import Cookies from 'js-cookie'
import './home.css'
import ReactLoading from 'react-loading';
const logout = ()=>{
    const token = Cookies.get('user')
    axios.defaults.headers.common['Authorization'] = `Bearer${token}`
    const result =axios({
    method: 'post',
    url: 'https://navjot-task-app.herokuapp.com/users/logout'
  }).then(()=>window.location.reload(true))
}



export default function Home() {
    return (
        <div>
<div className="card">
<div>
<h1 style={{fontSize:"30px"}}>User Loged In<button className="btn" style={{marginTop:"100px"}} onClick={logout} >Logout</button></h1>

<button className="btn" style={{marginTop:"20px"}} >View Code</button>
</div>
</div>
        </div>
    )
}
