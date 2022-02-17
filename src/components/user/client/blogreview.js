import React from 'react';

import { useRouteMatch, Link, Route, Switch, useHistory } from 'react-router-dom';

import { Cols, Row, ColItem, Space, Img } from '../../wrapper';

import { FaRegHandPointRight } from 'react-icons/fa';

import { dbClientUser, dbPost, } from '../../../dexie';

import  GotoTopic  from './gototopic';

  class BlogReview extends React.Component{
       
 	      constructor(props){
 	      	super(props)
            this.toggleBtn = this.toggleBtn.bind(this);
            this.asynchronousAction = this.asynchronousAction.bind(this);
 	      	  this.state = { post:[],id:0,activeComments:[]}
 	      }

 	      async asynchronousAction(){
             
            const posts = await dbPost.jsonpost.toArray();

            const comments = await dbClientUser.comments.toArray();

            const objects = {posts, comments,};

            return objects;
 	      };

 	      componentDidMount(){

          this.asynchronousAction().then((objects)=>{
                const { posts, comments,} = objects;
              this.setState({post:posts});  
              this.setState({activeComments:comments})
          }).catch(error=>{
              console.error('error request! Line 32 (BlogReview.js) ',error);
          });
          this.toggleBtn();
 	      };	
        
        componentDidUpdate(){

           const topicId = document.querySelectorAll('.topic-id');

           const commentRef = document.querySelectorAll('.comment-ref');

           const inputId = document.querySelectorAll('.input-id');

                topicId.forEach((el,i)=>{
                     el.addEventListener('click',async(e)=>{
                      e.stopPropagation();
                       this.props.history.push(`${this.props.match.path}/gototopic`);
                       const refId = parseInt(inputId[i].value);
                       await dbClientUser.temporarysave.toArray().then(result=>{
                          if(result.length === 1){
                            console.log('result === 1')
                             result.map(async ref=>{
                                 dbClientUser.temporarysave.update(ref.refId, {refId:refId})
                             })
                             
                          }else{
                            console.log('result !== 1')
                            dbClientUser.temporarysave.put({refId})      
                          }
                       })
                   });
                  });

                commentRef.forEach((el,i)=>{
                     el.addEventListener('click',async(e)=>{
                      e.stopPropagation();
                      const parent = e.path[4].parentElement;
                      const idRef = parent.childNodes[5].childNodes[0].childNodes[1].childNodes[1].value
                      const refId = parseInt(idRef);
                        await dbClientUser.temporarysave.toArray().then(result=>{
                          if(result.length === 1){
                            console.log('result === 1')
                             result.map(async ref=>{
                                 dbClientUser.temporarysave.update(ref.refId, {refId:refId})
                             })
                             
                          }else{
                            console.log('result !== 1')
                            dbClientUser.temporarysave.put({refId})      
                          }
                       })
                        this.props.history.push(`${this.props.match.path}/gototopic`)
                  })  
               })
      }   
        toggleBtn(){

             const btns = document.querySelectorAll('.button-default');
             const hide = document.querySelectorAll('.truncate');
                  btns.forEach((el,i)=>{
                    el.addEventListener('click',(x)=>{
                          x.stopPropagation();
                          const els = btns[i];
                          const sh = hide[i];
                          if(els.textContent === 'read more'){                              

                                 sh.className = 'dots';
                                 els.textContent = 'read less';

                          }else if(els.textContent === 'read less'){

                                 sh.className = 'truncate';
                                 els.textContent = 'read more';

                          }else{
                                 sh.className = 'dots';
                                 els.textContent = 'read more';
                          }
                    });
                  });
        };

         getStyle(){
         	return {

         		link:{
              textDecoration:'underline',  
         			cursor:'pointer',
              fontStyle:'italic',
         		},

         		topic:{
                   textDecoration:'underline',
                   cursor:'pointer',
                   lineHeight:'.10',
                   padding:'0 0 0 8px',
                   textIndent:'0',
                   fontSize:'.8em'
         		},

         		liAdjust:{
         			lineHeight:'.12',
         			padding:'8px',
         			margin:'0',
         			textSizeAdjust:'100%'
         		},

         		font:{
              fontSize:'.7em',
         			txtIndent:'0',
         			lineHeight:'.12',
         			padding:'0 8px 0 -8px',
         			textSizeAdjust:'100%'
         		}
         	}
         }

	render(){
    const { post, id, activeComments, } = this.state;

        const styles = this.getStyle();

        const ids = parseInt(id); // this will check the database if match the reference data;

		   return(
               <React.Fragment>
                <Switch>
                  <Route exact path={`${this.props.match.path}`}>
                  {/*<div id="col-hide">*/}
                   { post.map((item,index)=>{
                       {/*const temp = dbClientUser.comments.toArray();*/}
                    const filtered = activeComments.filter(state=>state.refId === item.id ? state.refId : 0);
                    
            return<ColItem key={index}>
                 		<Row>
                 			<Cols s12>
                 			 <Cols s4 className="left"><h6><b>Thread</b></h6></Cols>
                       {/*<Cols s8></Cols>*/}
                 			  <Cols m2 className="hide-on-small-only"></Cols>

                 {/****************************************** TITLE ****************************************************/}						  

                 			       <Cols s12 m8 className="center">
                 			           Title: <span className="card-title" >{item.title}</span>
                 			       </Cols>
                 			       <Cols m2 className="hide-on-small-only"></Cols>
                 			       <Cols s12 m8 className="center">
                 			           {/*Type: <Link style={styles.link} to="/" >{item.type}</Link>*/}
                                 Type: <i>{item.type}</i>
                 			       </Cols>
                 			       <Cols m2 className="hide-on-small-only"></Cols>
                 			</Cols>

                 {/****************************************** DATE ****************************************************/}			

                 			<Cols s12>Date: <b>{item.dated}</b></Cols>
                 			<Space />

                 {/******************************************COMPANY NAME****************************************************/}			

                 			<Cols m2 l3 className="hide-on-med-and-down">
                 			   Company: <span>{item.company}</span>
                 			</Cols>

                 			<Cols s12 m12 className="hide-on-large-only center">
                 			   Company: <span><b>{item.company}</b></span>
                 			</Cols>

                 {/****************************************** RCA ****************************************************/}						

                 			<Cols s5 m6 l5>
                 			  <p className="primary-content">{item.title}{/*<b>...</b>*/}
                 			     <div className="truncate">
                 			       {item.post}
                             <input type="hidden" value={item.id} readOnly className="input-id" />

                      {/****************************************** SHOW || HIDE ****************************************************/}                                         
                 			     </div>
                 			    <button onClick={this.toggleBtn} className="button-default browser-default black-text">read more</button>
                 			  </p>
                 			</Cols>

                {/****************************************** PROFILE SIDE ****************************************************/}			 			

                 			<Cols s7 m6 l4>
                 			     <Cols s12 style={{padding:'2px'}}>
                 			       	<ColItem>
                 			       		<b>Posted by</b>:&nbsp;{item.identity.firstname} <div className="secondary-content"><Img w="25" h="25" src={item.file}/></div>
                 			       	</ColItem>
                 			       	<ColItem>
                 			       		{item.identity.position}
                 			       	</ColItem>
                 			       <ColItem>
                 			       	{item.identity.years}
                 			       </ColItem>
                 			         <ColItem>
                 			       	   143 <b style={styles.font} className="blue-text accent-4">Likes</b>
                 			        </ColItem>
                              <ColItem>
                                <div className="red-text comment-ref">{filtered.length}<b>&nbsp;{filtered.length > 1 ?"Comments":"Comment"}</b></div>
                              </ColItem>
                 			     </Cols>
                 			     <Cols s4></Cols>

                {/*************************************************** TOPIC LINK **********************************************************/}                                       
                 			     <Cols s12>
                              <Cols s3>
                                  <FaRegHandPointRight className="cyan-text small" />
                              </Cols>
                              <Cols s9>
                                   <button className="btn btn-small waves-ripple cyan topic-id">goto topic</button>
                              </Cols>
                              
                           </Cols>
                 			</Cols>
                 		</Row>
                 	</ColItem>

                 }) //end of map(()=>{}) method
               }   
               </Route>

           {/****************************************** ROUTE ****************************************************/}                       

               <Route path={`${this.props.match.path}/gototopic`}>
                    <GotoTopic posts={post} users={this.props.users} />
               </Route>
              </Switch> 
          </React.Fragment>
			 )
	 }
 }

const Blogreview = (props)=>(<BlogReview {...props} history={useHistory()} match={useRouteMatch()} />);

export default Blogreview;