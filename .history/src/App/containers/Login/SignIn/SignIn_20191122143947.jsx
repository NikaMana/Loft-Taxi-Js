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
    return (
      <div>
        <p>Войдите в систему:</p>
        <form onSubmit={this.handleSubmit}>
          <input  />
        </form>
      </div>
    );
  }
}

export default SignIn;