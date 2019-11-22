import React from "react";

class SignIn extends React.Component {
  state={
    email: '',
    password: ''
  };

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = e => {
    e.preventDefault();
  };
  
  render() {
    return <div>SignIn</div>;
  }
}

export default SignIn;