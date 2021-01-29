import React from "react";
import { useForm } from "react-hook-form";
import "./LoginForm.css";

// import { Link } from "react-router-dom"; 

const LoginForm = () => {
  const { register, handleSubmit, errors } = useForm();

  function onSubmit(data) {
    const generateUsername = require('generate-username-from-email')
    var username = generateUsername(data.email)
    console.log("username",username);
    console.log("Data submitted: ", data);
    alert("Welcome , "+username+" you have successfully login!",
    // <div><Link to="/Admin" className="btn btn-primary">Login</Link></div>
    window.location.replace("/Admin")
    );
    
  }

  return (
    
    <div className="login-form">
      <form onSubmit={handleSubmit(onSubmit)} noValidate>
        <label htmlFor="inputEmail">E-mail</label>
        <input
          type="email"
          id="inputEmail"
          name="email"
          ref={register({
            required: "Enter your e-mail",
            pattern: {
              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
              message: "Enter a valid e-mail address",
            },
          })}
        />
        {errors.email && <p className="error">{errors.email.message}</p>}

        <label htmlFor="inputPassword">Password</label>
        <input
          type="password"
          id="inputPassword"
          name="password"
          ref={register({ required: "Enter your password" })}
        />
        {errors.password && <p className="error">{errors.password.message}</p>}

        <button type="submit">Login</button>
        {/* <button type="submit">
        <Link to="/Admin" className="btn btn-primary">Login</Link>
        </button> */}
      </form>
    </div>
  
  );
};

export default LoginForm;
