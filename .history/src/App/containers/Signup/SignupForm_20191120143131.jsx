import React from "react";
import useForm from 'react-hook-dom';
import { withRouter } from 'react-router-dom';
import {useStateMachine} from 'little-state-machine';
import updateAction from './updateAction';

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
        <p>Уже зарегистрированы?</p>
        <div>
          <label>Адрес электронной почты</label>
          <input name="email" placeholder="Email" />
        </div>
        <div>
          <input name="name" placeholder="Имя" />
        </div>
        <div>
          <input name="surname" placeholder="Фамилия" />
        </div>
        <div>
          <label>Пароль</label>
          <input name="password" placeholder="Password" />
        </div>        
        <button type="submit">Войти</button>
      </form>
    );
  }
}
 
export default withRouter(Registration);