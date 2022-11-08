import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Register.css";
import { useCreateUserWithEmailAndPassword } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";

const Register = () => {
  const [createUserWithEmailAndPassword, user, loading, error] =
    useCreateUserWithEmailAndPassword(auth);
  const navigate = useNavigate();
  const navigateLogin = () => {
    navigate("/login");
  };

  const handleRegister = (event) => {
    event.preventDefault();
    const name = event.target.name.value;
    const email = event.target.email.value;
    const password = event.target.password.value;

    createUserWithEmailAndPassword(email, password);
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
        <input type="submit" value="Register" />
      </form>
      <p>
        Already have an account?{" "}
        <Link
          to="/login"
          className="text-danger text-decoration-none"
          onClick={navigateLogin}
        >
          Login Now.
        </Link>{" "}
      </p>
    </div>
  );
};

export default Register;
