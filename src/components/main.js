import React from 'react';

import { Route, Switch } from 'react-router-dom';

import Cctv, { Biometrics, TurnStyles, CardScanners, Xpassed, FormAdd }  from './productcontent/productpage';

import Container, { Row, Space, } from './wrapper';

import { ServicesContent } from './components';

import  ServiceNavigation from './services-navigation';

export const Main = (props) => {
        return(
          <React.Fragment>
            <Container>
                <Row>
                    <div id="services-navbar">  
                      <ServiceNavigation 
                           loginPassword={props.loginPassword} 
                               passValue={props.passValue}
                                 isLogin={props.isLogin}
                                techPass={props.techPass}
                               adminPass={props.adminPass}
                              managePass={props.managePass}
                              clientPass={props.clientPass}
                              clientInfo={props.clientInfo} // from registration
                            showRegister={props.showRegister}
                      />
                    </div>
                </Row>
                       <Row>
                         <div className="col s12">
                          <div className="hide-on-small-only" id="biometric-sidenav"></div>
                          <div className="services-content-grid">
                                <Switch>
                                     <Route exact path="/">
                                        <ServicesContent />
                                        <Space />
                                        <Space />
                                        <Space />
                                        <Space />
                                     </Route>
                                     <Route path="/productpage">
                                       <Cctv />
                                     </Route>  
                                     <Route path="/servicescontent">
                                       <ServicesContent />
                                       <Space />
                                        <Space />
                                        <Space />
                                        <Space />
                                     </Route>
                                     <Route path="/biometric-cards">
                                       <Biometrics />
                                     </Route>
                                     <Route path="/cctv-cards">
                                       <Cctv />
                                     </Route>
                                     <Route path="/turnstyle-cards">
                                        <TurnStyles />
                                     </Route>
                                     <Route path="/cardscanner-cards">
                                        <CardScanners />
                                     </Route>
                                     <Route path="/xpass-cards">
                                        <Xpassed />
                                     </Route>
                                     <Route path="/add-form">
                                        <FormAdd />
                                     </Route>
                                   </Switch>  
                          </div>
                         </div>
                </Row>   
            </Container>
            <Space />
            <Space />
               <footer className="page-footer cyan darken-3">
                <div className="container">
                  <div className="row">
                    <div className="col l6 s12">
                      <h5 className="white-text">Footer Content</h5>
                      <p className="grey-text text-lighten-4">You can use rows and columns here to organize your footer content.</p>
                    </div>
                    <div className="col l4 offset-l2 s12">
                      <h5 className="white-text">Links</h5>
                      <ul>
                        <li><a className="grey-text text-lighten-3" href="#!">Link 1</a></li>
                        <li><a className="grey-text text-lighten-3" href="#!">Link 2</a></li>
                        <li><a className="grey-text text-lighten-3" href="#!">Link 3</a></li>
                        <li><a className="grey-text text-lighten-3" href="#!">Link 4</a></li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="footer-copyright">
                  <div className="container">
                  © 2014 Copyright Text
                  <a className="grey-text text-lighten-4 right" href="#!">More Links</a>
                  </div>
                </div>
              </footer>
       </React.Fragment> 
        );
   }