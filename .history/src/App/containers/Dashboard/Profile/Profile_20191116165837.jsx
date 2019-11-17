import React from 'react';

export interface ProfileProps {}
 
export interface ProfileState {}
 
class Profile extends React.Component<ProfileProps, ProfileState> {
  state = { }
  render() { 
    return ( <div>
        <h1>Profile</h1>
        
    </div> );
  }
}
 
export default Profile;