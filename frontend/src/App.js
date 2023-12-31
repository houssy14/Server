import './App.css';
import { BrowserRouter, Route, Router, Routes } from "react-router-dom";
import Login from "./Pages/Login";
import Register from "./Pages/Register";
import Home from './Pages/Home';
import Price from './Component/Price1';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
        <>
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />
            
            </>
            </Routes>
            <Routes>
              <Route path="/Home" element={<Home/>} />
             <Route path="/Price" element={<Price/>} /> 
            
            </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
