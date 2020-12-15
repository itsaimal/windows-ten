import React from 'react'
import "./Nav.css"

import FolderOpenIcon from '@material-ui/icons/FolderOpen';
import OpenInBrowserIcon from '@material-ui/icons/OpenInBrowser';
import EvStationIcon from '@material-ui/icons/EvStation';
import RssFeedIcon from '@material-ui/icons/RssFeed';
import VolumeUpIcon from '@material-ui/icons/VolumeUp';
import MessageIcon from '@material-ui/icons/Message';

import LaptopWindowsTwoToneIcon from '@material-ui/icons/LaptopWindowsTwoTone';

function Nav() {
    return (
        <div className="nav">
           
          
            <div className="nav__left">
         
            <div className="navleft__one">
           < LaptopWindowsTwoToneIcon style={{fill: "white"}}/>
            </div>
            <div className="navleft__two">
         <FolderOpenIcon style={{fill: "yellow"}}/>
         </div>
         <div className="navleft__two">
         <OpenInBrowserIcon style={{fill: "white"}}/>
         </div>
        
            </div>

          

            <div className="nav__right">

            <div className="navright__one">
            <EvStationIcon style={{fill: "white"}}/>
            </div>

            <div className="navright__two">
            <RssFeedIcon style={{fill: "white"}} />
            </div>

            <div className="navright__three">
            <VolumeUpIcon style={{fill: "white"}} />
            </div>

            <div className="navright__four">
            <MessageIcon style={{fill: "white"}} />
            </div>

            </div>

        </div>
    )
}

export default Nav
