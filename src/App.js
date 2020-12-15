
import './App.css';
import Nav from "./Nav";
//import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Folder from "./Folder";
import Mainpage from "./Mycomputer/Mainpage"
import useVisiblityToggler from "./useVisiblityToggler";
import Menu from "./Menu"
import useStartButton from "./useStartButton";

function App() {
  const [PageInfo, togglerInfo] = useVisiblityToggler(<Mainpage/>,false)
  const [MainInfo, togglerPage] = useStartButton(<Menu/>,false)
  return (
   // <Router>
    <div className="app">
  
     <div className="app__folder">
    
  <button onClick={togglerInfo}  className="btn__size"><Folder /></button>
    {PageInfo}
    </div>

    <div className="app__start">
    <button onClick={togglerPage}  className="btn__main">button</button>
  {MainInfo}
  </div>
    
     <Nav className="taskbar" />
    
    </div>
    //</Router>
  );
}

export default App;
