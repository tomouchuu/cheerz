import React, {Component} from 'react';

import { BrowserRouter as Router } from 'react-router-dom';

import { library } from '@fortawesome/fontawesome-svg-core';
import { faCircle, faClock, faCommentAlt, faCrown, faFlag, faHeart, faHome, faImage, faKey, faNewspaper, faSearch, faStar, faTrophy } from '@fortawesome/free-solid-svg-icons';
import { faQuestionCircle } from '@fortawesome/pro-regular-svg-icons';
import { faVolume } from '@fortawesome/pro-solid-svg-icons';

library.add(faCircle, faClock, faCommentAlt, faCrown, faFlag, faHeart, faHome, faImage, faKey, faNewspaper, faQuestionCircle, faSearch, faStar, faTrophy, faVolume);

export default class Wrapper extends Component {
    render() {
      return (
        <Router>
            {this.props.children}
        </Router>
      )
    }
}
