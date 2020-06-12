
import React,{useEffect,useState} from 'react'
import  {BrowserRouter as Router,Route,Switch, useLocation} from 'react-router-dom'
import {
    TransitionGroup,
    CSSTransition
  } from "react-transition-group";
  import axios from 'axios'
  import Cookies from 'js-cookie'
import './App.css'
import Register from './components/register/register'
import Login from './components/login/login'
import HomePage from './components/home/home'



const App= ()=>{
    const [visible, setvisible] = useState(true);

    useEffect(() => {
    checkUserLoged()
    },[]);

    
const checkUserLoged=()=>{
    const token = Cookies.get('user')
    axios.defaults.headers.common['Authorization'] = `Bearer${token}`
    const url ="https://navjot-task-app.herokuapp.com/users/me"
    axios.get(url)
  .then(setvisible(false))
  .catch((error=>setvisible(true)))
  }
  
   return(
   <div>
      
<Router>
    <Route render={({location})=>(<TransitionGroup>
<CSSTransition key={location.key}
    timeout={600}
    classNames="item"
>
<Switch location={location}>
    <Route path="/" exact component={visible?Register:HomePage} />
    <Route path="/login" component={Login} />
    <Route path="/home" component={HomePage}/>
</Switch>
</CSSTransition>
</TransitionGroup>)}></Route>
    

</Router>

</div>
   )
    };

export default App;