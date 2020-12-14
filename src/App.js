
import './App.css';
import Nav from "./Nav";
//import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Folder from "./Folder";


function App() {
  return (
   // <Router>
    <div className="app">
  
     
    
  <Folder />
  
     <Nav className="taskbar" />
    
    </div>
    //</Router>
  );
}

export default App;
