import React, {useState} from 'react'
import "./Menu.css";
import { Link } from "react-router-dom";
import AccountBalanceIcon from '@material-ui/icons/AccountBalance';
import ClearIcon from '@material-ui/icons/Clear';



function Menu() {
    const [sidebar,setSidebar] = useState(false);
    const showSidebar=() => setSidebar(!sidebar);
    return (
        <>
        <div className="navbar">
            <Link to="#" className="menu-bar">
                < AccountBalanceIcon style={{fill: "white"}} onClick={showSidebar}/>
            
            </Link>
            </div>
            <nav className={sidebar ? "nav-menu active" : "nav-menu"}>
                <ul className="nav-menu-items" onClick={showSidebar}>
                    <li className="navbar-toggle">
                   <Link to="#" className="menu-bars">
                       <ClearIcon/>
                   </Link>
                    </li>

                </ul>

            </nav>

        
        
        </>
    )
}

export default Menu
