import React from 'react';
import logo from './logo.svg';
import './App.css';
import SignUp from './Components/signUP'
import UserList from './Components/userList';
import { BrowserRouter as Router } from 'react-router-dom';
import Route from 'react-router-dom/Route'

function App() {
  return (
    <Router>
      <div>
        <Route
          exact path="/" component={SignUp} />
        <Route
          exact path="/userlist" component={UserList} />

      </div>


    </Router>
  );
}

export default App;
