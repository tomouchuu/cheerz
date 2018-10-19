import React, {Component} from 'react';

import { BrowserRouter as Router } from 'react-router-dom';

import { library } from '@fortawesome/fontawesome-svg-core';
import { faClock, faCrown, faFlag, faHeart, faHome, faNewspaper, faSearch } from '@fortawesome/free-solid-svg-icons';
import { faQuestionCircle } from '@fortawesome/pro-regular-svg-icons';
import { faVolume } from '@fortawesome/pro-solid-svg-icons';

library.add(faClock, faCrown, faFlag, faHeart, faHome, faNewspaper, faQuestionCircle, faSearch, faVolume);

export default class Wrapper extends Component {
    render() {
      return (
        <Router>
            {this.props.children}
        </Router>
      )
    }
}
