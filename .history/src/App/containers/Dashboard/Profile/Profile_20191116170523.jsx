import React from 'react';

export interface ProfileProps {}
 
export interface ProfileState {}
 
class Profile extends React.Component<ProfileProps, ProfileState> {
  state = { }
  render() { 
    return ( <form>
      <div>
          <input type="email" name="email" label="email" placeholder="Email" />
      </div>
      <div>
          <input type="password" name="password" label="password" placeholder="Password" />
      </div>
      <div>
          <input type="name" name="name" label="name" placeholder="Name" />
      </div>
      <div>
          <input type="surname" name="surname" label="surname" placeholder="Surname" />
      </div>
      <button>signup</button>
  </form> );
  }
}
 
export default Profile;