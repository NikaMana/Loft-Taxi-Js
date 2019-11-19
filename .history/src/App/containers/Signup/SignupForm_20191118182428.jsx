import React from 'react';
 
class Profile extends React.Component {
  render() { 
    return ( <div>
        <h1>Регистрация</h1>
        <p>Уже зарегистрированы?</p><link>Войти</link>
        <form>
          <div>
            <div>
                <label>Адрес электронной почты</label>
            </div>
            <div>
                <input type="text" name="CardNumber" placeholder="0000 0000 0000 0000" />
            </div>
            <div>
                <input type="text" name="Date" placeholder="11/19" />
            </div>
          </div>
          <div>
            <div>
                <label>Имя владельца</label>
            </div>
            <div>
                <input type="text" name="CardName" placeholder="User Name" />
            </div>
            <div>
              <label>CVC</label>
              <input type="text" name="cvc" placeholder="CVC" />
            </div>
          </div>
          <div>
            <button>Сохранить</button>
          </div>
        </form>
    </div> 
    );
  }
}
 
export default Profile;