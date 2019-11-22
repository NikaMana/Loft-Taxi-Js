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
        <p>Уже зарегистрированы?</p><link to="../Login">Войти</link>
        <div>
          <label>Адрес электронной почты</label>
          <input name="email" placeholder="Email" ref={register}/>
        </div>
        <div>
          <input name="name" placeholder="Имя" ref={register}/>
        </div>
        <div>
          <input name="surname" placeholder="Фамилия" ref={register}/>
        </div>
        <div>
          <label>Пароль</label>
          <input name="password" placeholder="Password" ref={register}/>
        </div>        
        <button type="submit">Войти</button>
      </form>
    );
  }
}
 
export default withRouter(Registration);