import React from 'react'
import "./Mainpage.css";
import Notification from "./Notification";
import Page from "./Page";

function Mainpage() {
    return (
        <div className="main">
            <Notification/>
            <Page/>
        </div>
    )
}

export default Mainpage
