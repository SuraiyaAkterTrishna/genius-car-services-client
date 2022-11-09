import React from "react";
import google from "../../../images/Social logo/google.png";
import facebook from "../../../images/Social logo/facebook.png";
import github from "../../../images/Social logo/github.png";
import auth from "../../../firebase.init";
import { useSignInWithGoogle } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";

const SocialLogin = () => {
    const navigate = useNavigate();
  const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
  let errorElement;
  if (error) {
    errorElement = <div>
        <p>Error: {error.message}</p>
      </div>
  }
  if (user) {
    navigate('/home');
  }
  return (
    <div>
      <div className="d-flex align-items-center">
        <div style={{ height: "1px" }} className="bg-primary w-50"></div>
        <p className="mt-2 px-2">or</p>
        <div style={{ height: "1px" }} className="bg-primary w-50"></div>
      </div>
      {errorElement}
      <div>
        <button onClick={() => signInWithGoogle()} className="btn btn-info text-white w-35 me-2 my-2">
          <img style={{ width: "25px" }} src={google} alt="image1" />
          <span className="px-2">Google</span>
        </button>
        <button className="btn btn-info text-white w-35 me-2 my-2">
          <img style={{ width: "25px" }} src={facebook} alt="image2" />
          <span className="px-2">Facebook</span>
        </button>
        <button className="btn btn-info text-white w-35 my-2">
          <img style={{ width: "25px" }} src={github} alt="image3" />
          <span className="px-2">GitHub</span>
        </button>
      </div>
    </div>
  );
};

export default SocialLogin;
