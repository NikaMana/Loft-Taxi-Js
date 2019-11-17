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
                <label>Номер карты</label>
            </div>
            <div>
                <input type="text" name="CardNumber" placeholder="0000 0000 0000 0000" />
            </div>
            <div>
                <input type="name" name="name" label="name" placeholder="Name" />
            </div>
            <div>
                <input type="surname" name="surname" label="surname" placeholder="Surname" />
            </div>
            <button>signup</button>
        </form>
    </div> );
  }
}
 
export default Profile;