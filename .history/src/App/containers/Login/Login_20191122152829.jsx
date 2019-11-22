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
    isNewUser: isNewUserSelector(state)
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    logIn: (value) => dispatch(actions.logIn(value)),
    toggleNewUser: () => dispatch(actions.toggleNewUser())
  }
}



class Login extends Component {
  state = {
    email: "",
    password: ""
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
    const {email, password} = this.state;
    const {isLogin, isNewUser} = this.props;
    if (isLogin) {
      return <Redirect path="/login" to="/dashboard/map"></Redirect>
    }
    return (
      <div>
        <h1>Войти</h1>
        <p>Новый пользователь? Давай зареги</p>
        {isNewUser ? <SignUp></SignUp> : <SignIn></SignIn>}
      </div>
    );
  }
}
 
export default connect(mapStateToProps, mapDispatchToProps)(Login);