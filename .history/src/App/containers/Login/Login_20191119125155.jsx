import React, { Component } from "react";
import { Redirect } from 'react-router-dom';
import { isLoginSelector } from '../../store/selectors';
import {actions} from '../../store/duck';
import {connect} from 'react-redux';

const mapStateToProps = (state) => {
  return {
    isLogin: isLoginSelector(state)
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
    const {isLogin} = this.props;
    if (isLogin) {
      return <Redirect path="/login" to="/dashboard/map"></Redirect>
    }
    return (
      <h1></h1>
      <form onSubmit={this.handleSubmit}>
        <input value={email} name="email" placeholder="Email" onChange={this.handleChange}/>
        <input value={password} name="password" placeholder="Password" onChange={this.handleChange}/>
        <button type="submit">SEND</button>
      </form>
    );
  }
}
 
export default connect(mapStateToProps, mapDispatchToProps)(Login);