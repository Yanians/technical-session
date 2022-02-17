
import React, { useState, useEffect, useMemo, } from 'react';

import { Route, useHistory, Switch } from 'react-router-dom';

import store from '../redux/store';

import *as action from '../redux';

import { Provider } from 'react-redux';

import { useLiveQuery as Live } from 'dexie-react-hooks';

import Swal from 'sweetalert2';

import { Se } from './user/technical/se';

import { Main } from './main';

import { Admin } from './user';

import { jsonpost } from './servicedata';

import { CustomerHome } from './index';

import { dbClientUser, OnetimeSave, OnetimeLogin, dbPost } from '../dexie';

import { getTimeAgoString, } from '../components/wrapper';

export const Application=()=>{

 const historyLen = window.history.length;

 const homepage = useHistory();

 const url = window.location.href;

 console.log('history Length: ',historyLen)

 const [ adminData, setAdminData ] = useState("");

 const [ clientData, setClientData ] = useState("");

 const [ techData, setTechData ] = useState("");

 const [ onetime, setOnetime ] = useState(""); //during registration data saves here temporarily upon logout this will empty

 const [ onetimeLogin, setOnetimeLogin ] = useState("");// if users login the page data saves here temporarily upon logout this will empty

 const [ managementData, setManagementData ] = useState("");
 
 const [ password, setPassword ] = useState(""); // one way password checking...

 const [ registerinfo, setClientDataInfo ] = useState("") //after the user registered successfully this data contains user information

 Live(async()=>{
  try{
       await dbPost.jsonpost.toArray().then((response)=>{
             if(response.length > 0){
                return
             }else{
               jsonpost.map(item=>{
                  dbPost.jsonpost.add(item).then(()=>{
                  }).catch(err=>{
                     console.error('nothing stored in the store: postcomment ',err)
                  }).finally(()=>{
                      dbPost.open();
                  });
              })
             }
       }).catch(err=>{
          console.error('Error occured during first render:',err.message);
       }).finally(async()=>{
          dbPost.open();
       });

       await OnetimeSave.items.toArray().then(result=>{
              try{
                if(result.length > 0){
                  console.log('result save to OnetimeSave db.')
                  result.map(i=>{
                                 const data = {
                                  id:i.id,
                                  firstname:i.firstname,
                                  lastname:i.lastname,
                                  contact:i.contact,
                                  email:i.email,
                                  address:i.address,
                                  position:i.position,
                                  company:i.company,
                                  image:i.image,
                                  password:i.password,
                                }
                                    setOnetime(data)
                                    setPassword(data.password)       
                                    if(window.location.reload){
                                      setOnetime(data)
                                      setPassword(data.password)       
                                    }
                                })
                 }else{
                  return
                 }
              }catch(err){
                console.error('Error catch at Line 106 (app.js)',err)
              }
            }).catch((err)=>{
               
            });

              await OnetimeLogin.items.toArray().then(async(result)=>{
                try{
                    if(result.length > 0){
                        result.map(state=>{
                                    setOnetimeLogin(state)
                                    setPassword(state.password)
                                    if(window.location.reload){
                                      setOnetimeLogin(state)
                                      setPassword(state.password)
                                    }else{
                                      return null
                                    }
                          });
                    }
                   }catch(err){
                      console.error('line 142 Error occured here... app.js',err.message)
                   }
              }).catch(async(err)=>{
                console.error('Another connection wants to use parameter active: ',err.stack)                
                         
              })
       
              await dbClientUser.client.toArray().then(async(users)=>{  

                    const purchase = await dbClientUser.purchase.toArray().then((purchase)=>{
                        console.log('now ready for async state!');
                          return purchase
                    }).catch((err)=>{
                        console.log('no update database empty!',err)
                    })
                    
                    const comments = await dbClientUser.comments.toArray().then((content)=>{
                        console.log('now ready for async state!');
                          return content
                    }).catch((err)=>{
                        console.log('no update database empty!',err)
                    })

                    const reply = await dbClientUser.reply.toArray().then((content)=>{
                        console.log('now ready for async state!');
                          return content
                    }).catch((err)=>{
                        console.log('no update database empty!',err)
                    })

                    const issue = await dbClientUser.issue.toArray().then((content)=>{
                        console.log('now ready for async state!');
                          return content
                    }).catch((err)=>{
                        console.log('no update database empty!',err)
                    })

                    const jsonpost = await dbPost.jsonpost.toArray().then((content)=>{
                                return content;
                    }).catch((err)=>{
                        console.log('no update dbPost database empty!',err)
                    })
                     let messageCount = 0
                    await dbClientUser.message.toArray().then(result=>{
                                  result.map(item=>messageCount = item.messageCount)
                    }).catch((err)=>{
                       console.log('no update of messageCount!');
                    })
                          const objects = {
                             users,
                             purchase,
                             jsonpost,
                             comments,
                             reply,
                             issue,
                             messageCount,
                          };
                    store.dispatch(action.RegisteredInfo(objects)); //relational database to redux state
              }).catch(err=>{
                console.log('dbClientUser this time is empty! first time used')
              })
             
      }catch(err){
          console.error('error end of the line 124 app.js',err);  
      }finally{   
      }
 });

useEffect(()=>{


/*
 * This line will execute upon Loading the entire DOM and waiting for first time used of application.
 * indexdb will sets back to empty state
 * history count default value is absolute 1 during first time used so it will only run for the first time
 */

 const root = document.getElementById('root');

 const childs = root.firstChild;

 console.log(childs); // display html element tag

 const childContenthistoryLength = childs.childNodes.length; // count the child nodes in the dom default value is 1

 console.log('div children count ',childContenthistoryLength); // 1 always

 const childrenCount = childs.children[0] === undefined ? 0 : childs.children[0].childNodes.length; // if no element children down  value === 0

 console.log('children ',childrenCount);

/*
 * history Length value in development is 1
 * production default value is 2
 * it does not encountered in production because history in production is 2
 */

  async function waiting(){

     if(registerinfo !== ""){
           setClientData("")
              await OnetimeSave.items.add(registerinfo).then((result)=>{
              }).catch(err=>{
               // console.error('user did not save to onetimeSave! refreshing this page will be dangerous');
              })

     }else if(clientData !== ""){
              await OnetimeLogin.items.add(clientData).then((result)=>{
              }).catch(err=>{

              })
     }else{
       return
     }
  }
  waiting();
   
if(url && historyLen === 1 && onetime.password === ""){ 
   try{
         setTimeout(()=>{
             OnetimeLogin.delete().then((result)=>{
             console.log('first attempt cleared!')
           }).catch(err=>{
              console.log('could not delete from app.js line 142')
           }).finally(()=>{
              OnetimeLogin.open();
           });

         },50)
          
          setTimeout(()=>{
              OnetimeSave.delete().then((result)=>{
             console.log('second attempt cleared!')
           }).catch(err=>{
              console.log('could not delete from app.js line 153')
           }).finally(()=>{
              OnetimeSave.open();
           })
          },100)
      
      }catch(err){
        console.error('Error encountered during first session history ',err)
      }finally{
          // setPassword("");
          console.log('password credential cleared!')
      }   
          console.log('history length value is 1 database cleared!')

/*
 * web running in web hosting default value === 2
 * production
 *
 */
}else if(url && historyLen === 2 && registerinfo.password === ""){
       try{
         setTimeout(()=>{
             OnetimeLogin.delete().then((result)=>{
             console.log('first attempt cleared!')
           }).catch(err=>{
              console.log('could not delete from app.js line 142')
           }).finally(()=>{
              OnetimeLogin.open();
           });

         },50)
          
          setTimeout(()=>{
              OnetimeSave.delete().then((result)=>{
             console.log('second attempt cleared!')
           }).catch(err=>{
              console.log('could not delete from app.js line 153')
           }).finally(()=>{
              OnetimeSave.open();
           })
          },100)
      
      }catch(err){
        console.error('Error encountered during first session history ',err)
      }finally{
        setPassword("");
          console.log('password credential cleared!')
      }   
          console.log('history length value is 2 database cleared!')      
   
  }else if((onetimeLogin.password !== "" || onetime.password !== "") && password !== "" && (historyLen === 2 || childContenthistoryLength === 0)){
             console.log('siht si eht tuptuo')
              homepage.push('/client-path');
  }else if(historyLen === 2 && childContenthistoryLength === 0 && childrenCount === 0){
    console.log('siht si eht tuptuo')
              // homepage.push('/client-path');
  }else if((onetime.password === "" || onetimeLogin.password === "") && password === ""){
              // homepage.push('/');
  }else{
      console.log('reach this line *safe data flow*')
      return
  }

},[ onetime, clientData, adminData, techData, onetimeLogin, managementData, password ]);

 const adminInfo=(data)=>{
   setAdminData(data);//object format
 }

 const passwordDestroy=(destroy)=>{
         setPassword(destroy) //generated by props.key
 }

 const clientInfo=(data)=>{
   setClientData(data);//object format
 }

 const techInfo=(data)=>{
   setTechData(data);//object format
 }

 const manageInfo=(data)=>{
   setManagementData(data);//object format
 }

 const LoginPassword=(password)=>{
  setPassword(password);
 }

 const clientDataInfo=(data)=>{
   setClientDataInfo(data); //object format
 }

 const passwordValue=(passwordValue)=> {
          setPassword(passwordValue);//object format
 }

 const showRegister=(e)=>{
  console.log('from app.js showRegister: ',e);
       return e;
 }
/*******************************************************************************************************************************************************/
  let output = []
  if(password === clientData.password){
        console.log('render status: Client logging in...')
              output =  <div>
                        <Route path="/client-path">
                         <Provider store={store}>
                             <CustomerHome Logout={e=>passwordDestroy(e)} data={clientData} />
                         </Provider>       
                        </Route>
                     </div> 
  }else if(techData.password === password){
             output = <div>
                      <Route path="/tech-path">
                         <Provider store={store}>
                           <Se data={techData} passwordDestroy={e=>passwordDestroy(e)} />
                         </Provider>  
                      </Route>
                     </div> 
        // return output;
  }else if(registerinfo.password === password){
       //the client finished registration redirecting to customer page.
        console.log('render status: finished registration redirecting to Client Home page ')
          output = <div>
                    <Provider store={store}>
                      <Route path="/client-path">
                          <CustomerHome Logout={e=>passwordDestroy(e)} data={onetime} />
                      </Route>
                    </Provider>  
                   </div> 
            // return output;
  }else if(onetime.password === password){
       //user click refresh the page now change data to updated database
        console.log('render status: you are now in redirecting Login  due to refreshing the page')
            output =  <div>
                    <Provider store={store}>
                      <Route path="/client-path">
                          <CustomerHome Logout={e=>passwordDestroy(e)} data={onetime} />
                      </Route>
                    </Provider>  
                   </div> 
            // return output;
  }else if(onetimeLogin.password === password){
        //user click refresh the page now change data to updated database
        console.log('render status: you are now redirecting Login existing users account')
                  output = <div className="client-path">
                          <Provider store={store}>
                            <Route path="/client-path">
                                <CustomerHome Logout={e=>passwordDestroy(e)} data={onetimeLogin} />
                            </Route>
                          </Provider>  
                         </div> 
  }else if(adminData.password === password){
        // admin login
             output = <Route path="/admin-path">
                           <Admin data={adminData} passwordDestroy={e=>passwordDestroy(e)} />
                      </Route>
        // return output
  }else if(managementData.password === password){
       //management login
        return console.log('password match:  the owner is: ',managementData.firstname)
  }else{
  console.log('render status:  default state ')
         output =  <div className="this is the default state">
                   <Provider store={store}>
                     <Main  managePass={e=>manageInfo(e)} 
                             techPass={e=>techInfo(e)} 
                           clientPass={e=>clientInfo(e)} //from login
                            adminPass={e=>adminInfo(e)}
                            passValue={e=>passwordValue(e)}
                        loginPassword={e=>LoginPassword(e)}
                           clientInfo={e=>clientDataInfo(e)} // from registration
                         showRegister={e=>showRegister(e)} 
                     />
                   </Provider>  
                 </div>  
  }

  return output;
  
}
