import React from "react";
import google from "../../../images/Social logo/google.png";
import auth from "../../../firebase.init";
import { useSignInWithGoogle } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import Loading from "../../Shared/Loading/Loading";

const SocialLogin = () => {
  const navigate = useNavigate();
  const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);

  let errorElement;

  if(loading){
    return <Loading></Loading>
}
  if (error ) {
    errorElement = ( <p>Error: {error?.message}</p>
    );
  }

  if (user) {
    navigate("/home");
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
        <button
          onClick={() => signInWithGoogle()}
          className="btn btn-info text-white w-100 me-2 my-2"
        >
          <img style={{ width: "25px" }} src={google} alt="image1" />
          <span className="px-2">Google</span>
        </button>
      </div>
    </div>
  );
};

export default SocialLogin;