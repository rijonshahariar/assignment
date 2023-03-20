import React, { useEffect } from "react";
import {
  useAuthState,
  useCreateUserWithEmailAndPassword,
  useUpdateProfile,
} from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
import { Link, useLocation, useNavigate } from "react-router-dom";
import SocialLogin from "../SocialLogin/SocialLogin";
import Loading from "../Loading/Loading";
import useToken from "../../Required/useToken";

const Register = () => {
  const [authUser] = useAuthState(auth);
  const [createUserWithEmailAndPass, user, loading, error] =
    useCreateUserWithEmailAndPassword(auth);
  const [token] = useToken(user);
  const [updateProfile] = useUpdateProfile(auth);
 
  const navigate = useNavigate();
  const location = useLocation();
  const from = location?.state?.from?.pathname || "/";

  const handleForm = async (event) => {
    event.preventDefault();
    const name = event.target.name.value;
    // const username = event.target.username.value;
    const email = event.target.email.value;
    const pass = event.target.pass.value;
    if (loading) {
      return <Loading></Loading>;
  }
    await createUserWithEmailAndPass(email, pass);
    await updateProfile({ displayName: name});
   
  };
 

  useEffect(() => {
    if (token || user) {
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
                  <input required type="name" name="name" placeholder="Full name" id="form3Example3" className="form-control" />
                </div>
                {/* <div className="form-outline mb-4">
                  <input required type="text" name="username" placeholder="Matric ID" id="form3Example3" className="form-control" />
                </div> */}
                <div className="form-outline mb-4">
                  <input required type="email" name="email" placeholder="Email Address" id="form3Example3" className="form-control" />
                </div>

                <div className="form-outline mb-4">
                  <input required type="password" name="pass" placeholder="Password" id="form3Example4" className="form-control" />
                </div>
                {error && (
            <p className=" mb-5 mt-[-25px] text-red-500">{error.message}</p>
          )}

                <button type="submit" className="btn btn-primary btn-block mb-2">
                  Register
                </button>
                <p>Already have an account? <Link classNameName="form_link" to="/login">Login Here</Link></p>

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
};

export default Register;
