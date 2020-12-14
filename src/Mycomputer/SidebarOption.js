import React from 'react'
import "./SidebarOption.css";

function SidebarOption({ option = "test", Icon }) {
    return (
    <div className="scroll" >
        <div className="sidebarOption">
               {Icon && <Icon className="sidebarOption__icon" />}
      {Icon ? <h4>{option}</h4> : <p>{option}</p>}
      
        </div>
        </div>
    )
}

export default SidebarOption
