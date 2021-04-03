import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Login } from './components/Login';
import { Books } from './components/Books';
import { Users } from './components/Users';
import { MyFavorite } from './components/MyFavorite';
import { AddBook } from './components/AddBook';

export default function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route exact path="/books">
            <Books />
          </Route>
          <Route exact path="/users">
            <Users />
          </Route>
          <Route exact path="/favorite">
            <MyFavorite />
          </Route>
          <Route exact path="/book">
            <AddBook />
          </Route>
          <Route exact path="/">
            <Login />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}
