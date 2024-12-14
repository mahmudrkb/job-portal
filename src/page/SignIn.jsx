import Lottie from "lottie-react";
import React, { useContext } from "react";
import loginAnimation from "../assets/lottie/Animation - 1733917800254.json";
import AuthContext from "../context/AuthContext";
import { useLocation, useNavigate } from "react-router-dom";

const SignIn = () => {
  const { userLogin } = useContext(AuthContext);
  const location=useLocation()
  const navigate =useNavigate()

  const handleSignIn = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    console.log(email, password);
    userLogin(email, password)
      .then((result) => {
        console.log(result.user);
        navigate(location.state || "/")

      })
      .catch((error) => {
        console.log(error.message);
      });
  };
  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="text-center max-w-96 lg:text-left">
          <Lottie animationData={loginAnimation}></Lottie>
        </div>
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
          <h1 className=" ml-8 mt-5 text-5xl font-bold">Sign In now!</h1>
          <form onSubmit={handleSignIn} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                name="email"
                placeholder="email"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                placeholder="password"
                name="password"
                className="input input-bordered"
                required
              />
              {/* <label className="label">
                  <a href="#" className="label-text-alt link link-hover">
                    Forgot password?
                  </a>
                </label> */}
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-primary">Sign In</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
