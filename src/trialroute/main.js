
import { Switch, Route, Link, useRouteMatch } from 'react-router-dom';

import { withRouter } from 'react-router';

import PropTypes from 'prop-types';

import queryString from 'query-string';

import React from 'react';

import  Navigation  from './navigation';

import  Content  from './content';

import { Cols, Row } from '../components/wrapper';

class Main extends React.Component{

render(){

	return(
        <React.Fragment>
          <Row>
              <Navigation />
          </Row>         
          <Row>
               <Content />
          </Row>
        </React.Fragment>
		)
   }
}

export default withRouter(Main);