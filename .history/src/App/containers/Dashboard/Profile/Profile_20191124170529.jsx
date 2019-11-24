import React, { Component } from "react";
import { Redirect } from 'react-router-dom';
import { isLoginSelector, isNewUserSelector } from '../../store/selectors';
import {actions} from '../../store/duck';
import {connect} from 'react-redux';
import BankCard from './Card';

const mapStateToProps = (state) => {
  return {
    isLogin: isLoginSelector(state),
    isNewUser: isNewUserSelector(state)
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    logIn: (value) => dispatch(actions.logIn(value)),
    signUp: (value) => dispatch(actions.signUp(value)),
    toggleNewUser: () => dispatch(actions.toggleNewUser())
  }
}



class BankCard extends Component {
  state = {
    cardNumber: "0000 0000 0000 0000",
    expiryDate: "",
    cardName: "",
    
  };

  handleChange = (e) => {
    this.setState({
      [e.target.name]:e.target.value
    })
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const {email, password} = this.state;
    const {logIn} = this.props;

    if (email && password) {
      logIn(this.state)
    }
  };
  render() {
    const {email, password} = this.state;
    const {isLogin, isNewUser, toggleNewUser, signUp} = this.props;
    if (isLogin) {
      return <Redirect path="/login" to="/dashboard/map"></Redirect>
    }
    return (
      <div>
        <h1>Войти</h1>
        {!isNewUser && (
          <div>
            <p>Новый пользователь? Давай зарегистрируемся!</p>
            <div>
              <button onClick={() => toggleNewUser()}>
                Зарегистрироваться
              </button>
            </div>
          </div>
        )}
      </div>
    );
  }
}
 
export default connect(mapStateToProps, mapDispatchToProps)(BankCard);
// class Profile extends React.Component {
//   render() { 
//     return ( <div>
//         <h1>Профиль</h1>
//         <p>Способ оплаты</p>
//         <form>
//           <div>
//             <div>
//                 <label>Номер карты</label>
//             </div>
//             <div>
//                 <input type="text" name="CardNumber" placeholder="0000 0000 0000 0000" />
//             </div>
//             <div>
//                 <input type="text" name="Date" placeholder="11/19" />
//             </div>
//           </div>
//           <div>
//             <div>
//                 <label>Имя владельца</label>
//             </div>
//             <div>
//                 <input type="text" name="CardName" placeholder="User Name" />
//             </div>
//             <div>
//               <label>CVC</label>
//               <input type="text" name="cvc" placeholder="CVC" />
//             </div>
//           </div>
//           <div>
//             <button>Сохранить</button>
//           </div>
//         </form>
//     </div> 
//     );
//   }
// }
 
