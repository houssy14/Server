import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import toast, { Toaster } from 'react-hot-toast';


const Login = () => {
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  let navigate = useNavigate();

  const notify  = (e) => {
    e.preventDefault();
    
    axios
      .post("http://localhost:8080/auth/login", {
        email,
        password,
      })
      .then((res) => {
        console.log(res.data);
        localStorage.setItem("token", res.data);
        navigate("/");
        toast.success('Successfully toasted!')

      })
      .catch((err) => {
        console.log(err.message);
        toast.error("This didn't work.")
      

      });
  };

  return (
    <div className="center">
      <nav class="navbar navbar-expand-lg navbar-light bg-light w-100">
      <a class="navbar-brand" href="#">Navbar</a>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav">
          <li class="nav-item active">
            <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Features</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Pricing</a>
          </li>
          <li class="nav-item">
            <a class="nav-link disabled" href="#">Disabled</a>
          </li>
        </ul>
      </div>
    </nav>
      <th>
        <br></br>
        <center>
      <h1>Login Form</h1>
      <br></br>
      <form onSubmit={notify}>
      <label htmlFor="email">Email</label>
      <br></br>
      <br />
        <div>
      
          <input
            type="email"
            name="email"
            id="email"
            onChange={(e) => setemail(e.target.value)}
          />
        </div>
        <div>
          <br></br>
        <label htmlFor="password">Password</label>
        <br></br>
          <br></br>
        
          <input
            type="password"
            name="password"
            id="password"
            onChange={(e) => setpassword(e.target.value)}
          />
        </div>
        <br></br>
        <input type="submit" />
      </form>
      </center>
      <Toaster/>
      </th>
    </div>
    
  );
};

export default Login;