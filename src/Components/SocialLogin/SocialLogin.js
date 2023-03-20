import React, { useEffect } from "react";
import { useAuthState, useSignInWithGoogle } from "react-firebase-hooks/auth";
import { useLocation, useNavigate } from "react-router-dom";
import auth from "../../firebase.init";
import Loading from "../Loading/Loading";
import "./SocialLogin.css";
import google from '../../Images/google.png'
import useToken from "../../Required/useToken";
const SocialLogin = () => {
    const [signInWithGoogle, googleUser, loading, error] =
        useSignInWithGoogle(auth);
    const [token] = useToken(googleUser);

    const [authUser] = useAuthState(auth);
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || "/";

    useEffect(() => {
        if (token || authUser) {
          navigate(from, { replace: true });
        }
      }, [token, from, navigate]);
    if (loading) {
        return <Loading></Loading>;
    }



    return (
        <div className="text-center">
            <div className="d-flex justify-content-center align-items-center">
                <span className="hr-sign-in d-inline-block"></span>
                <span className="d-inline-block px-2">or</span>
                <span className="hr-sign-in d-inline-block"></span>
            </div>
          
            <button
               onClick={() => signInWithGoogle()}
                className="btn btn-light btn-outline-primary w-75 mt-3"
            ><span><img className="mx-2" width={20} src={google} alt="" /></span>
                Continue with Google
            </button>
        </div>
    );
};

export default SocialLogin;