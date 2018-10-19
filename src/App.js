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
import Search from './Pages/Search';

const App = () => (
  <Router>
    <ContentArea>
      <Header>
        <Navbar account={{image: "https://d1jo5b1m9v3ic.cloudfront.net/user/profile/u298960fd1fabaada9837b2feec5d27bc0dee1eb-small.jpg"}} />
      </Header>

      <Route exact path="/" component={Home} />
      <Route path="/timeline" component={Timeline} />
      <Route path="/unit/:id" component={Unit} />
      <Route path="/artist/:id" component={Artist} />
      <Route path="/search/:keyword" component={Search} />
    </ContentArea>
  </Router>
)

export default App;