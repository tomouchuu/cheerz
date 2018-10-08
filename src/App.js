import React from 'react';

import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';

import Header from './Components/Utils/Header';
import ContentArea from './Components/Utils/Content';
import Navbar from './Components/Navbar';

import Home from './Pages/Home';
import Timeline from './Pages/Timeline';
import Unit from './Pages/Unit';
import Artist from './Pages/Artist';

const App = () => (
  <Router>
    <ContentArea>
      <Header>
        <Navbar />
      </Header>

      <Route exact path="/" component={Home} />
      <Route path="/timeline" component={Timeline} />
      <Route path="/unit/:id" component={Unit} />
      <Route path="/artist/:id" component={Artist} />
    </ContentArea>
  </Router>
)

export default App;