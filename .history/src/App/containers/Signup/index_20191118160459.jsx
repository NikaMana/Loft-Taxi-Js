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
  return (
    <Background>
      <Grid
        container
        spacing={0}
        direction="row"
        alignItems="center"
        justify="center"
        style={{ minHeight: "100vh" }}
      >
        <Grid item xs={3}>
          <Logo white animated />
        </Grid>
        <Grid item xs={3}>
          <SignupForm />
        </Grid>
      </Grid>
    </Background>
  );
};

export default compose(connect(state => ({ loggedIn: state.loggedIn })))(Signup);
