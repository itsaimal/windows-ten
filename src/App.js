
import './App.css';
import Nav from "./Nav";
//import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Folder from "./Folder";
import Mainpage from "./Mycomputer/Mainpage"
import useVisiblityToggler from "./useVisiblityToggler";


function App() {
  const [PageInfo, togglerInfo] = useVisiblityToggler(<Mainpage/>,false)
  return (
   // <Router>
    <div className="app">
  
     
    
  <button onClick={togglerInfo}  className="btn__size"><Folder className="folder__size"/></button>
    {PageInfo}
  
  
     <Nav className="taskbar" />
    
    </div>
    //</Router>
  );
}

export default App;
