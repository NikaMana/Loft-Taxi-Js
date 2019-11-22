import React, { Component } from "react";
import { Switch, Route } from 'react-router-dom';
import Map from './Map';
import Profile from './Profile';
import Login from '../Login/Login';

class Dashboard extends Component {
  render() {
    return <div>
      <Switch>
        <Route path="/dashboard/profile" commponent={Profile}></Route>
        <Route path="/dashboard/map" commponent={Map}></Route>
        <Route path="" commponent={Map}></Route>
      </Switch>
    </div>;
  }
}

export default Dashboard;

// const buttons = [
//   {path: 'map'},
//   {path: 'profile'},
//   {path: 'login'}
// ]

// export interface NavProps {
//   setPath: (path: string) => void;
// }
 
// export interface NavState {}
 
// class Nav extends React.Component<NavProps, NavState> {
//   state = { }
//   render() { 
//     const {setPath} = this.props;
//     return <div>
//       <ul>
//         {buttons.map(el => (
//         <li key={el.path}>
//             <button type="button" onClick={() => setPath(el.path)}>{el.path}</button>
//         </li>
//         ))}
//       </ul>
//     </div>;
//   }
// }
 
// export default Nav;