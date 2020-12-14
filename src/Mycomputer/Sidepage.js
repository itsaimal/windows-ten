import React from 'react'
import "./Sidepage.css";
import DesktopWindowsIcon from '@material-ui/icons/DesktopWindows';
import SidebarOption from "./SidebarOption"
import CloudDownloadIcon from '@material-ui/icons/CloudDownload';
import DescriptionIcon from '@material-ui/icons/Description';
import ImageIcon from '@material-ui/icons/Image';
import SaveIcon from '@material-ui/icons/Save';
import FlipCameraAndroidIcon from '@material-ui/icons/FlipCameraAndroid';
import MusicNoteIcon from '@material-ui/icons/MusicNote';
import MovieCreationIcon from '@material-ui/icons/MovieCreation';
import RouterIcon from '@material-ui/icons/Router';
import FolderSharedIcon from '@material-ui/icons/FolderShared';



function Sidepage() {
    return (
        <div className="sidepage">
            <SidebarOption Icon={DesktopWindowsIcon} option="Desktop" />
            <SidebarOption Icon={CloudDownloadIcon} option="Download" />
            <SidebarOption Icon={DescriptionIcon} option="Description" />
            <SidebarOption Icon={ImageIcon} option="Image" />
            <SidebarOption Icon={SaveIcon} option="Disc" />
            <SidebarOption Icon={FlipCameraAndroidIcon} option="Flip" />
            <SidebarOption Icon={MusicNoteIcon} option="Music" />
            <SidebarOption Icon={MovieCreationIcon } option="Videos" />
            <SidebarOption Icon={RouterIcon } option="Router" />
            <SidebarOption Icon={FolderSharedIcon } option="Info" />
            <SidebarOption Icon={FolderSharedIcon} option="Shared" />
            
           
        </div>
    )
}

export default Sidepage
