import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimesCircle } from '@fortawesome/free-solid-svg-icons'

export default function Alert(props) {
    return (
        <div>
             <h4 style={{backgroundColor:"#FFF2F0",padding:"5px",color:"#3F474E", border: "1px dotted red"}}><FontAwesomeIcon  icon={faTimesCircle} style={{color:"#975057"}}/>{props.error}</h4>
        </div>
    )
}
