import React from 'react';

export interface ProfileProps {}
 
export interface ProfileState {}
 
class Profile extends React.Component<ProfileProps, ProfileState> {
  state = { }
  render() { 
    return ( <div>
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
                <input type="text" name="CardNumber" placeholder="0000 0000 0000 0000" />
            </div>
            <div>
                <input type="text" name="Date" placeholder="11/19" />
            </div>
          </div>
            <button>signup</button>
        </form>
    </div> );
  }
}
 
export default Profile;