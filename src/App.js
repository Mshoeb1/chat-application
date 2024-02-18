
import {Route, Routes} from "react-router-dom"
import Home from "./components/Home"
import Login from "./components/Login"

import './App.css';

function App() {
  return (
    <Routes>
      <Route exact path="/" element={<Login/>}/>
      <Route exact path = "/home" element={<Home/>} />
    </Routes>
  );
}

export default App;
