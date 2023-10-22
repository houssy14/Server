import { BrowserRouter, Route, Routes } from "react-router-dom";
import './App.css';



function App() {
  return (
    <div className="App">
      
  
            <>
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />
            </>
        
      
    
    </div>
  );
}

export default App;


