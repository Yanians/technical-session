
import React from 'react';
import { Switch, Route, useRouteMatch } from 'react-router-dom';
import { SeChartContent } from './sechart';
import { Blog } from './blog';
import { SeSidebar } from './sesidebar';
import { Thread } from '../thread';
import { TechHeader} from './techheader';
import { SeFooterContent } from '../../components';
import { Row, Cols } from '../../wrapper';

export const Se=(props)=>{
 const { path } = useRouteMatch();
 const { data, passwordDestroy } = props;

	   return(<React.Fragment>
	              <header>
	                <div id="header">
	                  <TechHeader userData={data} Logout={passwordDestroy} />
	                </div>
	              </header>

                    <section>
                    <SeSidebar /> {/*fixed sidenav */}
                      <Row>
                        <Cols s12>
                        <Cols m4 l2></Cols>
                         <Cols s12 m8 l10 className="card">                     
                              <Switch>
                                <Route exact path={`${path}/`}>
                                  <Thread />
                                </Route>
                             	<Route path={`${path}/se-chart`}>
                                 <SeChartContent />
                              </Route>
                             	<Route path={`${path}/se-blog`}>
                                <Blog data={data} />
                              </Route>
                                <Route path={`${path}/se-thread`}>
                                  <Thread />
                                </Route>
                             </Switch>   
                         </Cols> 
                        </Cols>                          
                      </Row>  
                    </section>
                    
                      <Row>
                      	<SeFooterContent />   
                      </Row>  
	          </React.Fragment>   
            )  
    }
