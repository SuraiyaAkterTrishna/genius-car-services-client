import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Register.css";
import { useCreateUserWithEmailAndPassword } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
import SocialLogin from "./SocialLogin/SocialLogin";
import { useState } from "react";

const Register = () => {
  const [createUserWithEmailAndPassword, user] =
    useCreateUserWithEmailAndPassword(auth);
  const navigate = useNavigate();
  const navigateLogin = () => {
    navigate("/login");
  };
  const [agree, setAgree] =useState(false);
  const handleRegister = (event) => {
    event.preventDefault();
    // const name = event.target.name.value;
    const email = event.target.email.value;
    const password = event.target.password.value;

    // terms 
    const agree = event.target.terms.checked;
    if(agree){
      createUserWithEmailAndPassword(email, password);
    }
  };
  if(user){
    navigate('/');
  }
  return (
    <div className="register-form">
      <h1 className="text-primary" style={{ textAlign: "center" }}>
        Register Now
      </h1>
      <form onSubmit={handleRegister} action="">
        <input type="text" name="name" placeholder="Your Name" />
        <input type="email" name="email" id="" placeholder="Your Email" />
        <input
          type="password"
          name="password"
          id=""
          placeholder="Your Password"
        />
        <input onClick={() => setAgree(!agree)} type="checkbox" name="terms" id="terms" /> 
        {/* <label className={agree ? 'text-primary' : 'text-danger'} htmlFor="terms">Accept Genius Car Terms and Conditions</label> */}
        <label className={`ps-2 ${agree ? 'text-primary' : 'text-danger'}`} htmlFor="terms">Accept Genius Car Terms and Conditions</label>
        <input className="btn btn-primary w-100 d-block mx-auto mt-4" type="submit" value="Register" />
      </form>
      <p>
        Already have an account? {" "}
        <Link
          to="/login"
          className="text-primary text-decoration-none"
          onClick={navigateLogin}
        >
          Login Now.
        </Link>{" "}
      </p>
      <SocialLogin></SocialLogin>
    </div>
  );
};

export default Register;
