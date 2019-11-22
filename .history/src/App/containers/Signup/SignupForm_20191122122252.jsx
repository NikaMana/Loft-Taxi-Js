// import React from "react";
// import useForm from 'react-hook-dom';
// import { withRouter } from 'react-router-dom';
// import {useStateMachine} from 'little-state-machine';
// import updateAction from './updateAction';

// const Registration = props => {
//   const { register, handleSubmit } = useForm();
//   const { action } = useStateMachine(updateAction);
//   const onSubmit = data => {
//     action(data);
//   }
// }
//     return (
//       <form onSubmit={handleSubmit(onSubit)}>
//         <h1>Регистрация</h1>
//         <p>Уже зарегистрированы?</p>
//         <div>
//           <label>Адрес электронной почты</label>
//           <input name="email" placeholder="Email" />
//         </div>
//         <div>
//           <input name="name" placeholder="Имя" />
//         </div>
//         <div>
//           <input name="surname" placeholder="Фамилия" />
//         </div>
//         <div>
//           <label>Пароль</label>
//           <input name="password" placeholder="Password" />
//         </div>        
//         <button type="submit">Войти</button>
//       </form>
//     );
//   };
// };

import React, { Component } from "react";
import { Redirect } from 'react-router-dom';
import { isRegisterSelector } from '../../store/selectors';
import {actions} from '../../store/duck';
import {connect} from 'react-redux';

const mapStateToProps = (state) => {
  return {
    isRegister: isRegisterSelector(state)
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    register: (value) => dispatch(actions.register(value))
  }
}



class Register extends Component {
  state = {
    email: "DelMare@mail.ru",
    password: "555"
  };

  handleChange = (e) => {
    this.setState({
      [e.target.name]:e.target.value
    })
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const {email, password} = this.state;
    const {register} = this.props;

    if (email && password) {
      register(this.state)
    }
  };
  render() {
    const {email, password} = this.state;
    const {isRegister} = this.props;
    if (isRegister) {
      return <Redirect path="/login" to="/dashboard/map"></Redirect>
    }
    return (
      <div>
        <h1>Регистрация</h1>
        <p>Уже зарегистрированы?</p>
        <form onSubmit={this.handleSubmit}>
          <label>Адрес электронной почты</label>
          <input value={email} name="email" placeholder="Email" onChange={this.handleChange}/>
          <label>Пароль</label>
          <input value={password} name="password" placeholder="Password" onChange={this.handleChange}/>
          <button type="submit">SEND</button>
        </form>
      </div>
    );
  }
}
 
export default connect(mapStateToProps, mapDispatchToProps)(Register);

{/* <label for="inputEmail" className="sr-only">Email address</label>
<input type="email" onChange={this.handleEmailChange} id="inputEmail" className="form-control" placeholder="Email address" required autofocus />
<label for="inputPassword" className="sr-only">Password</label>
<input type="password" onChange={this.handlePasswordChange} id="inputPassword" className="form-control" placeholder="Password" required /> */}

// handleEmailChange(e){
//   this.setState({email:e.target.value})
// }
// handlePasswordChange(e){
//   this.setState({password:e.target.value})
// }

// class Signin extends React.Component {
//   render() {
//       return (
//       <form className="form-signin">
//               <h2 className="form-signin-heading"> Please sign in </h2>
//               <label for="inputEmail" className="sr-only"> Email address
//               </label>
//               <input type="email" id="inputEmail" className="form-control" placeholder="Email address" required autofocus />
//               <label for="inputPassword" className="sr-only"> Password</label>
//               <input type="password" id="inputPassword" className="form-control" placeholder="Password" required />
//               <button className="btn btn-lg btn-primary btn-block" type="button"> Sign in
//               </button>
//           </form>
//       )
//   }
// }
 
// export default withRouter(Registration);