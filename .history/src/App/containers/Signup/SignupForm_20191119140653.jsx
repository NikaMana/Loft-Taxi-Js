import React, { Component } from "react";
import { Redirect } from 'react-router-dom';
import { isLoginSelector } from '../../store/selectors';
import {actions} from '../../store/duck';
import {connect} from 'react-redux';

const Registration = props => {
  const { register, handleSubmit } = useForm();
  const { action } = useStateMachine(updateAction);
  const onSubmit = data => {
    action(data);
  }
}
    return (
      <form onSubmit={handleSubmit(onSubit)}>
        <h1>Регистрация</h1>
        <p>Уже зарегистрированы?</p><link to="../Login">Войти</link>
        <div>
          <label>Адрес электронной почты</label>
          <input name="email" placeholder="Email" ref={register}/>
        </div>
        <div>
          <input name="name" placeholder="Имя" />
        </div>
        <div>
          <input name="surname" placeholder="Фамилия" />
        </div>
        <div>
          <label>Пароль</label>
          <input value={password} name="password" placeholder="Password" onChange={this.handleChange}/>
        </div>        
        <button type="submit">Войти</button>
      </form>
    );
  }
}
 
export default connect(mapStateToProps, mapDispatchToProps)(Login);