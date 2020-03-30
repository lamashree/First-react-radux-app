import React from 'react';
import logo from './logo.svg';
import './App.css';
import SignUp from './Components/signUP'
import UserList from './Components/userList';
import Nav from './Components/Nav'
import { BrowserRouter as Router } from 'react-router-dom';
import Route from 'react-router-dom/Route'

function App() {
  return (
    <Router>
      <div>
      <Nav></Nav>
        <Route
          exact path="/" component={SignUp} />
        <Route
          exact path="/userlist" component={UserList} />

      </div>


    </Router>
  );
}

export default App;
