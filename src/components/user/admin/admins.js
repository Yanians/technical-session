import React from 'react';

import { Switch, Route } from 'react-router-dom';

import  Sidebar  from './sidebar';

import CreateUser from './createuser';

import { Thread } from '../thread';

import { useRouteMatch } from 'react-router-dom';

import { AdminHeader } from './adminheader';

import { VertexChart } from '../index';

import { SeFooterContent } from '../../components';

import { Row, Cols } from '../../wrapper';

export const Admin=(props)=>{

 const { path } = useRouteMatch();

 const { data, passwordDestroy } = props;
	   return(
			  <React.Fragment>
	              <header>
	                <div id="header">
	                  <AdminHeader userData={data} Logout={passwordDestroy} />
	                </div>
	              </header>  
                    <section>
                      <Row>
                        <Cols s12>
                        <Cols m4 l2></Cols>
                         <Cols s12 m8 l10 className="card">
                         <Sidebar /> {/*fixed sidenav */}
                             <Switch>
                             	<Route exact path={`${path}`}>
                                   <VertexChart />        
                             	</Route>
                             	<Route path={`${path}/create-user`}>
                             		<CreateUser />
                             	</Route>
                                <Route path={`${path}/se-chart`}>
                                    <VertexChart />
                                </Route>
                             	<Route path="/thread">
                             		<Thread />
                             	</Route>

                             	<Route>
                             		
                             	</Route>

                             	<Route>
                             		
                             	</Route>

                             	<Route>
                             		
                             	</Route>

                             	<Route>
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