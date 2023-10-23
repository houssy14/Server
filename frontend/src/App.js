import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./Pages/Login";
import Register from "./programme/Register";
import Home from "./programme/Home";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
        <>
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />
              <Route path="/Home" element={<Home/>} />
            </>
            </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
