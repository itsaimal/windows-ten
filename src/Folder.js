import React from 'react'
import "./Folder.css";
import FolderSharedIcon from '@material-ui/icons/FolderShared';

function Folder() {
    return (
        <div className="folder">
            <FolderSharedIcon style={{fill: "white", fontSize:"40px"}}/>
        </div>
    )
}

export default Folder
