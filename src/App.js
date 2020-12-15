
import './App.css';
import Nav from "./Nav";
//import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Folder from "./Folder";
import Mainpage from "./Mycomputer/Mainpage"
import useVisiblityToggler from "./useVisiblityToggler";
import Menu from "./Menu"
import useStartButton from "./useStartButton";
import LaptopWindowsTwoToneIcon from '@material-ui/icons/LaptopWindowsTwoTone';

import VolumeUpIcon from '@material-ui/icons/VolumeUp';
import Volume from "./Volume"


function App() {
  const [PageInfo, togglerInfo] = useVisiblityToggler(<Mainpage/>,false)
  const [MainInfo, togglerPage] = useStartButton(<Menu/>,false)
  const [VolumeInfo, togglerVolume] = useStartButton(<Volume/>,false)
  return (
   // <Router>
    <div className="app">
  
     <div className="app__folder">
    
  <button onClick={togglerInfo}  className="btn__size"><Folder /></button>
    {PageInfo}
    </div>
   
     <div className="app__volume">
    
  <button onClick={togglerVolume}  className="btn__volume"><VolumeUpIcon /></button>
    {VolumeInfo}
    </div>
    

    <div className="app__start">
    <button onClick={togglerPage}  className="btn__main">< LaptopWindowsTwoToneIcon style={{fill: "white"}}/></button>
  {MainInfo}
  </div>
  
    
     <Nav className="taskbar" />
    
    </div>
    //</Router>
  );
}

export default App;
