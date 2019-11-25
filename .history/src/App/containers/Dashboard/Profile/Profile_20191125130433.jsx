import React, { Component } from "react";
import { Redirect } from 'react-router-dom';
import { isLoginSelector, isNewUserSelector } from '../../store/selectors';
import {actions} from '../../store/duck';
import {connect} from 'react-redux';
import BankCard from './Card';

const mapStateToProps = (state) => {
  return {
    isCard: isLoginSelector(state),
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    bankCard: (value) => dispatch(actions.bankCard(value))
  }
}



class Profile extends Component {
  state = {
    cardNumber: "0000 0000 0000 0000",
    expiryDate: "",
    cardName: "",
    cvc: "",
    token: ""
  };

  handleChange = (e) => {
    this.setState({
      [e.target.name]:e.target.value
    })
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const {cardnumber, expirydate, cardname, cvc, token} = this.state;
    const {bankCard} = this.props;

    if (cardnumber && expirydate && cardname && cvc && token) {
      bankCard(this.state)
    }
  };
  render() {
    const {cardnumber, expirydate, cardname, cvc, token} = this.state;
    const {isProfile} = this.props;
    if (isProfile) {
      return <Redirect path="/login" to="/dashboard/map"></Redirect>
    }
    return (
      <div>
        <h1>Профиль</h1>
         <p>Способ оплаты</p>
         <form>
           <div>
             <div>
                 <label>Номер карты</label>
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
 
export default connect(mapStateToProps, mapDispatchToProps)(Profile);
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
 
