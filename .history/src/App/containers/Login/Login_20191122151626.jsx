import React, { Component } from "react";
import { Redirect } from 'react-router-dom';
import { isLoginSelector, isNewUserSelector } from '../../store/selectors';
import {actions} from '../../store/duck';
import {connect} from 'react-redux';
import SignIn from "./SignIn";
import SignUp from "./SignUp";

const mapStateToProps = (state) => {
  return {
    isLogin: isLoginSelector(state),
    isNewuser: isNewUserSelector(state)
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    logIn: (value) => dispatch(actions.logIn(value))
  }
}



class Login extends Component {
  state = {
    email: "",
    password: "",
    isNew: false
  };

  handleChange = (e) => {
    this.setState({
      [e.target.name]:e.target.value
    })
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const {email, password} = this.state;
    const {logIn} = this.props;

    if (email && password) {
      logIn(this.state)
    }
  };
  render() {
    const {email, password, isNew} = this.state;
    const {isLogin} = this.props;
    if (isLogin) {
      return <Redirect path="/login" to="/dashboard/map"></Redirect>
    }
    return (
      <div>
        <h1>Войти</h1>
        <p>Новый пользователь?</p>
        {isNew ? <SignUp></SignUp> : <SignIn></SignIn>}
      </div>
    );
  }
}
 
export default connect(mapStateToProps, mapDispatchToProps)(Login);