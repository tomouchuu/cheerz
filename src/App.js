import React from 'react';

import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';

import { library } from '@fortawesome/fontawesome-svg-core';
import { faCircle, faClock, faCommentAlt, faCrown, faFlag, faHeart, faHome, faImage, faKey, faNewspaper, faSearch, faStar, faTrophy } from '@fortawesome/free-solid-svg-icons';
import { faQuestionCircle } from '@fortawesome/pro-regular-svg-icons';
import { faVolume } from '@fortawesome/pro-solid-svg-icons';

import Header from './Components/Utils/Header';
import ContentArea from './Components/Utils/Content';
import Navbar from './Components/Navbar';

import Home from './Pages/Home';
import Timeline from './Pages/Timeline';
import Unit from './Pages/Unit';
import Artist from './Pages/Artist';
import Search from './Pages/Search';

library.add(faCircle, faClock, faCommentAlt, faCrown, faFlag, faHeart, faHome, faImage, faKey, faNewspaper, faQuestionCircle, faSearch, faStar, faTrophy, faVolume);

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