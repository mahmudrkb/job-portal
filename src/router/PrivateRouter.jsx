import React, { Children, useContext } from "react";
import AuthContext from "../context/AuthContext";
import { Navigate, useLocation } from "react-router-dom";

const PrivateRouter = ({children}) => {
  const { user, loading } = useContext(AuthContext);
  const location = useLocation();
  if (loading) {
    return <span className="loading loading-dots loading-lg"></span>;
  }

  if (user) {
    return children;
  }

  return <Navigate to={"/signin"} state={location?.pathname}></Navigate>;
};

export default PrivateRouter;
