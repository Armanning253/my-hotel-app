import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Homepage from './pages/home-page/homepage';
import Roomspage from './pages/rooms/roomspage';
import Navbar from './components/navbar/navbar.component';

import './App.css';

function App() {

  const hotel = "Hotel Romano"

  return (
    <div className="App">
      <Navbar hotel={hotel} />

      <switch>
        <Homepage hotel={hotel} />
        <Roomspage />
      </switch>

    </div>
  );
}

export default App;
