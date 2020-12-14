
import './App.css';
import Nav from "./Nav";
//import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Folder from "./Folder";
import Mainpage from "./Mycomputer/Mainpage"


function App() {
  return (
   // <Router>
    <div className="app">
  
     
    
  <Folder />
  <Mainpage/>
  
     <Nav className="taskbar" />
    
    </div>
    //</Router>
  );
}

export default App;
