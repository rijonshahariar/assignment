import React, { useEffect, useRef } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import {
  useAuthState,
  useSignInWithEmailAndPassword,
} from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
import SocialLogin from "../SocialLogin/SocialLogin";
import "./Login.css"
import Loading from "../Loading/Loading";
import useToken from "../../Required/useToken";
const Login = () => {
  const [authUser] = useAuthState(auth);

  const [emailAndPassLogin, user, loading, error] =
    useSignInWithEmailAndPassword(auth);
  const [token] = useToken(user);

  const emailRef = useRef("");
  const navigate = useNavigate();
  const location = useLocation();
  const from = location?.state?.from?.pathname || "/";

  const handleForm = async (event) => {
    event.preventDefault();
    const email = event.target.email.value;
    const pass = event.target.pass.value;
  if (loading) {
    return <Loading></Loading>;
}
    await emailAndPassLogin(email, pass);
  };



  useEffect(() => {
    if (token || authUser) {
      navigate(from, { replace: true });
    }
  }, [token, from, navigate]);

  return (
    <section className="">
    <div className="px-4 py-5 px-md-5 text-center text-lg-start" >
      <div className="container">
        <div className="row gx-lg-5 align-items-center">
          <div className="col-lg-6 mb-5 mb-lg-0">
            <h1 className="my-5 display-3 fw-bold ls-tight">
              IIUCBOOK <br />
              <span className="text-primary display-4">connecting students</span>
            </h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Eveniet, itaque accusantium odio, soluta, corrupti aliquam
              quibusdam tempora at cupiditate quis eum maiores libero
              veritatis? Dicta facilis sint aliquid ipsum atque?
            </p>
          </div>
  
          <div className="col-lg-6 mb-5 mb-lg-0">
            <div className="card">
              <div className="card-body py-5 px-md-5">
                <form onSubmit={handleForm}>
  
                  <div className="form-outline mb-4">
                    <input required ref={emailRef} type="email" name="email" placeholder="Email Address" id="form3Example3" className="form-control" />
                  </div>
  
                  <div className="form-outline mb-4">
                    <input required type="password" name="pass" placeholder="Password" id="form3Example4" className="form-control" />
                  </div>
               
  
                  <button type="submit" className="btn btn-primary btn-block">
                   Login
                  </button>
                  {error && (
            <p className="mt-2 text-danger">{"Incorrect Email or Password"}</p>
          )}
                  <div className="">
              <p className="mt-2">New to IIUCBOOK? <Link className="form_link" to="/register">Create a new account</Link></p>
              <p>Forgot Password? <button className='links'>Reset Password</button> </p>
                            </div>
  
  
                  <div className="text-center">
                  <SocialLogin/>
                 
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  );
}

export default Login;