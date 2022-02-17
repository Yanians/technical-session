import React, { Component } from 'react';

import { withRouter } from 'react-router';

import { PropTypes } from 'prop-types';

import { PageOne, PageTwo, PageThree } from './other';

import {Cols, Card } from '../components/wrapper';

import { useRouteMatch, Route, Switch, Link } from 'react-router-dom';

  export default class Content extends Component{

	render(){
		const { match } = this.props;
		console.log(match)
				return (
					  <>
                      <Cols s9>
                       <ul className="collection">
                         <li className="collection-item">
                            <div className="card-content">
	                       	  <p className="black-text">this is the content of the card</p>
	                       	</div>
                         </li>
                       </ul>  
                      </Cols>   

                      <Cols s3>

                       <ul className="collection">
                       	<li className="collection-item">
                          <div class="row">
						    <div className="col hide-on-small-only m12 l12">
						      <ul className="section table-of-contents">
						        <li><a href="#introduction">Introduction</a></li>
						        <li><a href="#structure">Structure</a></li>
						        <li><a href="#initialization">Intialization</a></li>
						        <li><a href="#introduction">Blog Review</a></li>
						        <li><a href="#structure">Onsite Training</a></li>
						        <li><a href="#initialization">technical Support and sampling</a></li>
						        <li><a href="#introduction">Introduction</a></li>
						        <li><a href="#structure">Structure</a></li>
						        <li><a href="#initialization">Intialization</a></li>
						        <li><a href="#introduction">Introduction</a></li>
						        <li><a href="#structure">Structure</a></li>
						        <li><a href="#initialization">Intialization</a></li>
						        <li><a href="#introduction">Introduction</a></li>
						        <li><a href="#structure">Structure</a></li>
						        <li><a href="#initialization">Intialization</a></li>
						        <li><a href="#introduction">Introduction</a></li>
						        <li><a href="#structure">Structure</a></li>
						        <li><a href="#initialization">Intialization</a></li>
						        <li><a href="#introduction">Introduction</a></li>
						        <li><a href="#structure">Structure</a></li>
						        <li><a href="#initialization">Intialization</a></li>
						        <li><a href="#introduction">Introduction</a></li>
						        <li><a href="#structure">Structure</a></li>
						        <li><a href="#initialization">Intialization</a></li>
						        <li><a href="#introduction">Introduction</a></li>
						        <li><a href="#structure">Structure</a></li>
						        <li><a href="#initialization">Intialization</a></li>
						      </ul>
						    </div>
						  </div>
                       	</li>
                       	<li className="collection-item">
                       		<h3 className="black-text">right side nav</h3> 		
                       	</li>

                       </ul>
                      </Cols>   

                      </>
					)
			}
    }







