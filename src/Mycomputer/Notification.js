import React from 'react'
import "./Notification.css";
import MinimizeIcon from '@material-ui/icons/Minimize';
import AspectRatioIcon from '@material-ui/icons/AspectRatio';
import CloseIcon from '@material-ui/icons/Close';

function Notification() {
    return (
        <div className="notification">
            <div className="top__right">
             <MinimizeIcon/>
             < AspectRatioIcon/>
             <CloseIcon />

            </div>
            
        </div>
    )
}

export default Notification
