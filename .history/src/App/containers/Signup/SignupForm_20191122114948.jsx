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
  };
};

{/* <div class="form-display hide" id="register">
        <h1>Register</h1>
        <form action="" method="post" novalidate="">
            <fieldset>
                <ul>
                    <li>
                        <div class="item">
                            <input data-validate-length-range="6" name="name" placeholder="Username" required="required" type="text">
                        </div>
                    </li>
                    <li>
                        <div class="item">
                            <input data-validate-length="6,8" name="password"  placeholder="Password" required='required' type="text">
                        </div>
                    </li>
                    <li>
                        <div class="item">
                            <input class='email' name="email" placeholder="Email" required="required" type="email">
                        </div>
                    </li>
                    <li>
                        <div class="item">
                            <label><input name="url" placeholder="Website link"  required="required" type="url"></label>
                        </div>
                    </li>
                    <li><input class="button-register" id='send' type="submit" value="Sign Up"></li>
                </ul>
            </fieldset>
        </form>
    </div> */}
 
export default withRouter(Registration);