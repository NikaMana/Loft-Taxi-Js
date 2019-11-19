import React from "react";
import { Redirect } from "react-router-dom";
import { compose } from "redux";
import { connect } from "react-redux";
import { SignupForm } from "./SignupForm";
import { Grid } from "@material-ui/core";
import { Logo } from "loft-taxi-mui-theme";
import { Background } from "../shared/Background";

const Signup = ({ loggedIn, classes }) => {
  if (loggedIn) {
    return <Redirect to="/map" />;
  }
};

export default compose(connect(state => ({ loggedIn: state.loggedIn })))(Signup);
