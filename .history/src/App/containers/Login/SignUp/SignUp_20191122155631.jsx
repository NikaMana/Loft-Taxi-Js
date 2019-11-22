import React from "react";

class SignUp extends React.Component {
  state={
    email: "",
    password: "",
    name: "",
    surname: ""
  };

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = e => {
    const {signUp} = this.props;
    e.preventDefault();
    signUp(this.state)
  };

  render() {
    const {email, password, name, surname} = this.state;
    return (
      <div>
        <p>Зарегистрируйтесь:</p>
        <form onSubmit={this.handleSubmit}>
          <div><input type="email" name="email" value={email} placeholder="Email" onChange={this.handleChange} /></div>
          <div><input type="password" name="password" value={password} placeholder="Password" onChange={this.handleChange} /></div>
          <div><input type="text" name="name" value={name} placeholder="Name" onChange={this.handleChange} /></div>
          <div><input type="text" name="surname" value={surname} placeholder="Surname" onChange={this.handleChange} /></div>
          <button type="submit">Зарегистрироваться</button>
        </form>
      </div>
    );
  }
}

export default SignUp;