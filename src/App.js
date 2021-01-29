import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Homepage from './pages/home-page/homepage';
import Roomspage from './pages/rooms/roomspage';
import Navbar from './components/navbar/navbar.component';

import './App.css';

function App() {

  return (
    <div className="App">
      <Navbar />

      <Switch>
        <Route exact path="/" component={Homepage} />
        <Route path="/rooms" component={Roomspage} />
      </Switch>

    </div>
  );
}

export default App;
