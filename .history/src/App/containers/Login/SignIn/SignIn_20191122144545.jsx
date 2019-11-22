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
    const {email, password} = this.state;
    return (
      <div>
        <p>Войдите в систему:</p>
        <form onSubmit={this.handleSubmit}>
          <div><input type="email" name="email" value={email} placeholder="Email" onChange={this.handleChange} /></div>
          <div><input type="password" name="password" value={password} placeholder="Password" onChange={this.handleChange} /></div>
        </form>
      </div>
    );
  }
}

export default SignIn;