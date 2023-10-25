import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import toast, { Toaster } from 'react-hot-toast';
import Home from "./Home";


const Login = () => {
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  let navigate = useNavigate(Home);

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
    <div>
        <div className="center">
    <nav class="navbar navbar-expand-lg navbar-bleu bg-light w-100">
    <a class="navbar-brand" href="http://localhost:3000/">Navbar</a>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item active">
          <a class="nav-link" href="http://localhost:3000/Home">Menu <span class="sr-only">(current)</span></a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="http://localhost:3000/">Features</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Pricing</a>
        </li>
        <li class="nav-item">
          <a class="nav-link disabled" href="#">About</a>
        </li>
      </ul>
    </div>
  </nav>
    </div>
 
      <img src="https://1000logos.net/wp-content/uploads/2017/03/Kfc_logo.png"width={260}height={180}></img>


      <form onSubmit={notify}>
      <label htmlFor="email"><b>Email :</b></label>
        <div>
     
          <input
            type="email"
            name="email"
            id="email"
            onChange={(e) => setemail(e.target.value)}
          />
        </div>
        <div>
        <label htmlFor="password"><b>Password :</b></label>
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
      <Toaster/>
    </div>
    
  );
};


export default Login;
