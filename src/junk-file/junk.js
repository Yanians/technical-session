return (
       <React.Fragment>
          <div className="row white">
                <form className="col s12" onSubmit={insertToDb}>

                  <div className="row">
                    <div className="input-field col s2 push-s2">
                       <input disabled  type="number"  value={id.length+1} readOnly className="validate" />
                    </div>
                    
                    <div className="input-field col s4 push-s2">
                      <input id="title" type="text" className="validate title" onChange={e=>setTitle(e.target.value)}autoComplete="off" />
                      <label htmlFor="title">Title</label>
                    </div>
                   </div>

                  <div className="row">
                    <div className="input-field col s12">
                      <input  type="number" className="validate item-price" onChange={e=>setPrice(e.target.value)} autoComplete="off" />
                      <label htmlFor="price">Price: </label>
                    </div>
                  </div>
                    <div className="row">
                      <div className="file-field input-field">
                <div className="btn">
                  <span>File</span>
                  <input type="file" className="image" onChange={e=>getFile(e.target.files)} />
                </div>
                <div className="file-path-wrapper">
                  <input className="file-path validate" type="text" />
                </div>
              </div>
                     </div>
                  <div className="row">
                    <div className="input-field col s12">
                      <input id="desc" autoComplete="off" type="text" onChange={e=>setDesc(e.target.value)} className="validate desc" />
                      <label htmlFor="desc">Description:</label>
                    </div>
                  </div>

                  <div className="row">
                      <div className="col s6 center">
                            <button type="submit" className="btn waves-effect waves-riple" onClick={(e)=>insertToDb(e)}>submit</button>
                          </div>
                  </div>
                </form>
              </div>
              <div className="row">
              </div>  
           </React.Fragment> 
      )     

let itemData;
  if(items.length > 0){
  	  
	 itemData = <React.Fragment> 
	    {items.map((item)=>{
				  return <React.Fragment>
				      	    <div className="col s3 m3 l3">
				      	       <div className="card">
			 		                <div className="card-image" key={item.id}>
					                  <img src={item.image} />
					                    <span className="card-title">{item.title}</span>
					                </div>

						              <div className="card-content">
						                 <p>{item.desc}</p>
						              </div>

							        <div className="card-action">
							          <button type="button" className="btn" onClick={()=>DeleteItem(item.id)}>delete</button>
							        </div>
							    </div>   
							</div>  
						 </React.Fragment>  
	    })} 
		        </React.Fragment> 
  }else{
  	itemData = <React.Fragment>
				    <div className="col s12 m7">
				      <div className="card">
				        <div className="card-content">
				          <p>there is no data to show empty database</p>
				        </div>
				       
				      </div>
				    </div>
				</React.Fragment>    
  }


  const DataTable =() => {
const id = allItems.map((item)=>item.id);         
     return (
       <React.Fragment>
          <div className="row white">
                <form className="col s12" onSubmit={getItemInfo}>

                  <div className="row">
                    <div className="input-field col s2 push-s2">
                       <input disabled  type="number"  value={id.length+1} readOnly className="validate" />
                    </div>
                    
                    <div className="input-field col s4 push-s2">
                      <input id="title" type="text" className="validate title" onChange={e=>setTitle(e.target.value)}autoComplete="off" />
                      <label htmlFor="title">Title</label>
                    </div>
                   </div>

                  <div className="row">
                    <div className="input-field col s12">
                      <input  type="number" className="validate item-price" onChange={e=>setPrice(e.target.value)} autoComplete="off" />
                      <label htmlFor="price">Price: </label>
                    </div>
                  </div>
                    <div className="row">
                      <div className="file-field input-field">
                <div className="btn">
                  <span>File</span>
                  <input type="file" className="image" onChange={e=>getFile(e.target.files)} />
                </div>
                <div className="file-path-wrapper">
                  <input className="file-path validate" type="text" />
                </div>
              </div>
                     </div>
                  <div className="row">
                    <div className="input-field col s12">
                      <input id="desc" autoComplete="off" type="text" onChange={e=>setDesc(e.target.value)} className="validate desc" />
                      <label htmlFor="desc">Description:</label>
                    </div>
                  </div>

                  <div className="row">
                      <div className="col s6 center">
                            <button type="submit" className="btn">submit</button>
                          </div>
                  </div>
                </form>
              </div>
              <div className="row">
                 {itemData}      
              </div>  
           </React.Fragment> 
      )     
  }
  '<input id="swal-input1" className="swal2-input">' +
                    '<input id="swal-input2" className="swal2-input">';

             <Col s={12} className="grey darken-1 col-header-fixed">
               <Col s={1}>
                   {/*<RiShoppingCartLine style={{fontSize:'50px'}}/>*/}
               </Col>
                <Col s={1}>
                   {/*<RiShoppingCartLine style={{fontSize:'50px'}}/>*/}
               </Col>
                <Col s={1}>
                   {/*<RiShoppingCartLine style={{fontSize:'50px'}}/>*/}
               </Col>
             </Col>

             const withContext = WrapComponenet => {
             	   const withHOC = props => {
             		return(
                        
                        <Context.Consumer>
                            {content=><WrapComponenet {...props} context={context} />}
                        </Context.Consumer>    
                    
             			)
             	}

             	return withHOC;
             }

             export default withContext;


             let mutate = file;
                         getFile(mutate);
                       if(title !=="" && price !== "" && desc !=="" && mutate !==undefined){
                        
                              // const reader = new FileReader();
                              // // console.log(image);
                              // reader.onload = async(e)=>{
                              //      setFile(e.target.result);
                              // }
                              // reader.readAsDataURL(file[0])
                             // let data = {
                             //  title:title,
                             //  price:price,
                             //  desc:desc,
                             //  image:postFile
                             // }
                              db.items.add({title:title,price:price,desc:desc,image:postFile}).then(async()=>{
                                  let getItems = await db.items.toArray();
                                  setItems(getItems);
                              });
                       }else {                        
                        Swal.fire({
                          title:'Opps! You leave empty Field',
                          icon:'error',
                          timer:1500
                        }).then(()=>{
                          AddItem();
                        });
                    }


                           


if(allValues){
         let recon = allValues.map(item=>item);
         let image = recon[4]
            if(image){
                   let reader = new FileReader()
              reader.onload = (e) => {
                      const data = {
                        id:recon[0],
                        title:recon[1],
                        price:recon[2],
                        desc:recon[3],
                        image:e.target.result
                      };

                     db.items.add(data).then(async()=>{
                      let allItems = await db.items.toArray()
                         setItems(allItems);
                     });
                   reader.readAsDataURL(e)
              }
                
            }
                         
       let json = JSON.stringify(allValues)


         // console.log(recon[4]);
      }

  const insertToDb =(e)=> {
     e.preventDefault();
     if(title !== '' && price !== '' && desc !== '' && postFile !== ''){
        Swal.fire({
          text:'you submitted Successfully',
          timer:1500,
          className:'card'
        }).then(()=>{
          let datas = {
        title:title,
        price:price,
        desc:desc,
        image:postFile
        }
      db.items.add(datas).then(async()=>{
      //retrieve all items inside the database
       let allItems = await db.items.toArray();
       //set the items
       setItems(allItems);
       })  
    });
  }else{

    Swal.fire({
      text:'Please Check field! Do not leave empty!',
      className:'swal-overlay',
      timer:1500,
      button:false,
      dangerMode:true
    });
  }
}

const repl = this.props.data;
const output = repl.map((item)=>{
       let data ={
        title:item.title,
        price:item.price,
        desc:item.desc,
        image:item.image
       }


})


CctvTable:[
    { 
      items:{++id, title, price, desc, image},
        bio:{}
      ]

       readData =async() => {
                  const jsonData = await this.props.data;
                  const items = await database.cctv.toArray();
                      let all = items.map((i,e)=>i.cctv)
                      // console.log(all);
                  // const data = items.map(({id,title,price,desc,image})=>{return{id,title,price,desc,image}});
                  // const idExist = items.map((item)=> item.id);
               
                  let timerInterval;
                  const item = jsonData.map(item=>{
                   
                      let dataArray =  (idExist == "" && idExist <= 0 ) ? database.cctv.add({
                      title:item.title,
                      price:item.price,
                      desc:item.desc,
                      image:item.image 
                    }
                      ) :  
                            (Swal.fire({
                              title: 'Wait a minute...',
                              timer: 500,
                              timerProgressBar: true,
                              didOpen: () => {
                                Swal.showLoading();
                              },
                              willClose: () => {
                                clearInterval(timerInterval)
                              }
                            }).then((result) => {
                              if (result.dismiss === Swal.DismissReason.timer) {
                                     // console.clear();
                                    console.log('field was cleared');
                              }
                            })
                          )
                          // return dataArray;  
                  },[]);
                  return data;
           };

//data,

            
      function insertToDb(data){
        return await dbRecord.add(data)
      }

     readData=()=> {

     }


<MinimalFunction jsonData={} defaultDb={} reqDbRecordArray={} insertToDb={} />

           fetchData=()=>{
              const { jsonData, defaultDb, reqDbRecordArray, insertToDb } = this.props;

              const isIdExist = reqDbRecord.map((i)=>i.id)
              const req = reqDbRecord.map(({id,title,price,desc,image})=>{return{id,title,price,desc,image}})

              let timerInterval

              const item = jsonData.map((item)=>{
                        const data = {
                          title:item.title,
                          price:item.price,
                          desc:item.desc,
                          image:imte.image
                        }
                    let dataArray = (isIdExist ! == "" && isIdExist <= 0) ? defaultDb.add(data) : ( Swal.fire({
                              title: 'Wait a minute...',
                              timer: 500,
                              timerProgressBar: true,
                              didOpen: () => {
                                Swal.showLoading();
                              },
                              willClose: () => {
                                clearInterval(timerInterval)
                              }
                            }).then((result) => {
                              if (result.dismiss === Swal.DismissReason.timer) {
                                     // console.clear();
                                    console.log('field was cleared');
                              }
                            })
                           )
                          return dataArray;
                    },[])

              }

    biometrics(data);
  


           async function miometrics(dbtype, c){
                    await biometricsdb.biometrics.add(c)

                let object = {}
                   object = {
                     c.title,
                     c.price,
                     c.desc,
                     c.image
                   }

                                   
              return object
           }

           
<div className="w3-overlay w3-hide-large w3-animate-opacity" onClick={null} style={{cursor:'pointer'}} title="close side menu" id="myOverlay"></div>

<div className="w3-main" style={{marginLeft:'300px',marginTop:'43px'}}>


  <header className="w3-container" style={{paddingTop:'22px'}}>
    <h5><b><i className="fa fa-dashboard"></i> My Dashboard</b></h5>
  </header>

  <div className="w3-row-padding w3-margin-bottom">
    <div className="w3-quarter">
      <div className="w3-container w3-red w3-padding-16">
        <div className="w3-left"><i className="fa fa-comment w3-xxxlarge"></i></div>
        <div className="w3-right">
          <h3>52</h3>
        </div>
        <div className="w3-clear"></div>
        <h4>Messages</h4>
      </div>
    </div>
    <div className="w3-quarter">
      <div className="w3-container w3-blue w3-padding-16">
        <div className="w3-left"><i className="fa fa-eye w3-xxxlarge"></i></div>
        <div className="w3-right">
          <h3>99</h3>
        </div>
        <div className="w3-clear"></div>
        <h4>Views</h4>
      </div>
    </div>
    <div className="w3-quarter">
      <div className="w3-container w3-teal w3-padding-16">
        <div className="w3-left"><i className="fa fa-share-alt w3-xxxlarge"></i></div>
        <div className="w3-right">
          <h3>23</h3>
        </div>
        <div className="w3-clear"></div>
        <h4>Shares</h4>
      </div>
    </div>
    <div className="w3-quarter">
      <div className="w3-container w3-orange w3-text-white w3-padding-16">
        <div className="w3-left"><i className="fa fa-users w3-xxxlarge"></i></div>
        <div className="w3-right">
          <h3>50</h3>
        </div>
        <div className="w3-clear"></div>
        <h4>Users</h4>
      </div>
    </div>
  </div>

  <div className="w3-panel">
    <div className="w3-row-padding" style={{margin:'-16'}}>
      <div className="w3-third">
        <h5>Regions</h5>
        <img src={null} style={{width:'100%'}} alt="Google Regional Map" />
      </div>
      <div className="w3-twothird">
        <h5>Feeds</h5>
        
        <table className="w3-table w3-striped w3-white">
        <>
          <tr>
            <td><i className="fa fa-user w3-text-blue w3-large"></i></td>
            <td>New record, over 90 views.</td>
            <td><i>10 mins</i></td>
          </tr>
          <tr>
            <td><i className="fa fa-bell w3-text-red w3-large"></i></td>
            <td>Database error.</td>
            <td><i>15 mins</i></td>
          </tr>
          <tr>
            <td><i className="fa fa-users w3-text-yellow w3-large"></i></td>
            <td>New record, over 40 users.</td>
            <td><i>17 mins</i></td>
          </tr>
          <tr>
            <td><i className="fa fa-comment w3-text-red w3-large"></i></td>
            <td>New comments.</td>
            <td><i>25 mins</i></td>
          </tr>
          <tr>
            <td><i className="fa fa-bookmark w3-text-blue w3-large"></i></td>
            <td>Check transactions.</td>
            <td><i>28 mins</i></td>
          </tr>
          <tr>
            <td><i className="fa fa-laptop w3-text-red w3-large"></i></td>
            <td>CPU overload.</td>
            <td><i>35 mins</i></td>
          </tr>
          <tr>
            <td><i className="fa fa-share-alt w3-text-green w3-large"></i></td>
            <td>New shares.</td>
            <td><i>39 mins</i></td>
          </tr>
          </>
        </table>
      </div>
    </div>
  </div>
  
  <div className="w3-container">
    <h5>General Stats</h5>
    <p>New Visitors</p>
    <div className="w3-grey">
      <div className="w3-container w3-center w3-padding w3-green" style={{width:'25%'}}> +25%</div>
    </div>

    <p>New Users</p>
    <div className="w3-grey">
      <div className="w3-container w3-center w3-padding w3-orange" style={{width:'50%'}}>50%</div>
    </div>

    <p>Bounce Rate</p>
    <div className="w3-grey">
      <div className="w3-container w3-center w3-padding w3-red" style={{width:'75%'}}>75%</div>
    </div>
  </div>
  

  <div className="w3-container">
    <h5>Countries</h5>
    <table className="w3-table w3-striped w3-bordered w3-border w3-hoverable w3-white">
      <React.Fragment>
      <tr>
        <td>United States</td>
        <td>65%</td>
      </tr>
      <tr>
        <td>UK</td>
        <td>15.7%</td>
      </tr>
      <tr>
        <td>Russia</td>
        <td>5.6%</td>
      </tr>
      <tr>
        <td>Spain</td>
        <td>2.1%</td>
      </tr>
      <tr>
        <td>India</td>
        <td>1.9%</td>
      </tr>
      <tr>
        <td>France</td>
        <td>1.5%</td>
      </tr>
      </React.Fragment>
    </table>
    <button className="w3-button w3-dark-grey">More Countries<i className="fa fa-arrow-right"></i></button>
  </div>
  
  <div className="w3-container">
    <h5>Recent Users</h5>
    <ul className="w3-ul w3-card-4 w3-white">
      <li className="w3-padding-16">
        <img src="../w3images/avatar2.png" className="w3-left w3-circle w3-margin-right" style={{width:'35px'}} />
        <span className="w3-xlarge">Mike</span>
      </li>
      <li className="w3-padding-16">
        <img src="../w3images/avatar5.png" className="w3-left w3-circle w3-margin-right" style={{width:'35px'}} />
        <span className="w3-xlarge">Jill</span>
      </li>
      <li className="w3-padding-16">
        <img src="../w3images/avatar6.png" className="w3-left w3-circle w3-margin-right" style={{width:'35px'}} />
        <span className="w3-xlarge">Jane</span>
      </li>
    </ul>
  </div>
  

  <div className="w3-container">
    <h5>Recent Comments</h5>
    <div className="w3-row">
      <div className="w3-col m2 text-center">
        <img className="w3-circle" src="../w3images/avatar3.html" style={{width:'96px',height:'96px'}} />
      </div>
      <div className="w3-col m10 w3-container">
        <h4>John <span className="w3-opacity w3-medium">Sep 29, 2014, 9:12 PM</span></h4>
        <p>Keep up the GREAT work! I am cheering for you!! Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
      </div>
    </div>

    <div className="w3-row">
      <div className="w3-col m2 text-center">
        <img className="w3-circle" src="../w3images/avatar1.html" style={{width:'96px',height:'96px'}} />
      </div>
      <div className="w3-col m10 w3-container">
        <h4>Bo <span className="w3-opacity w3-medium">Sep 28, 2014, 10:15 PM</span></h4>
        <p>Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
      </div>
    </div>

  </div>

  <div className="w3-container w3-dark-grey w3-padding-32">
    <div className="w3-row">
      <div className="w3-container w3-third">
        <h5 className="w3-bottombar w3-border-green">Demographic</h5>
        <p>Language</p>
        <p>Country</p>
        <p>City</p>
      </div>
      <div className="w3-container w3-third">
        <h5 className="w3-bottombar w3-border-red">System</h5>
        <p>Browser</p>
        <p>OS</p>
        <p>More</p>
      </div>
      <div className="w3-container w3-third">
        <h5 className="w3-bottombar w3-border-orange">Target</h5>
        <p>Users</p>
        <p>Active</p>
        <p>Geo</p>
        <p>Interests</p>
      </div>
    </div>
  </div>
  <footer className="w3-container w3-padding-16 w3-light-grey">
    <h4>FOOTER</h4>
    <p>Powered by <a href="default.html" target="_blank">w3.css</a></p>
  </footer>

  /**LOADER sweetalert ***/

  let timerInterval
                            Swal.fire({
                        timer:300,
                        width:145,
                        text:'Processing',
                        timerProgressBar: false,
                        showClass: {
                          popup: 'swal2-noanimation',
                          backdrop: 'swal2-noanimation'
                        },
                        hideClass: {
                          popup: 'showClass',
                          backdrop: 'hideClass'
                        },
                        didOpen: () => {
                          Swal.showLoading();
                        },
                        willClose: () => {
                          clearInterval(timerInterval)
                        }
                      }).then((result) => {
                        if (result.dismiss === Swal.DismissReason.timer) {
                               // console.clear();
                               card[i].className = "on-hide"
                              console.log('field was cleared');
                        }
                      })
                      
if(fullname  !== "" && Address !== "" && cellno !== "" && company !== "" && email !== "" && position !== "" && (password === password ? password === confirm : Swal.fire({title:'PASSWORD UNMATCHED!',icon:'danger',timer:1500}))){
                  Swal.fire({
                      title:'Completed',
                      icon:'Success',
                      timer:1000,
                      text:'Submitted',
                      showButton:false,
                      confirmed:(e)=>{
                        Swal.showLoading()
                      }
                }).then(async(result)=>{
                  const data = { fullname,Address,cellno,company,email,password,position,confirm }
                  await dbRegister.register.add(data);
                });
     }else{
      Swal.fire({title:'You Might Enter unmatched password!',text:'please checked empty field!',timer:2000});

     }            
      }
     
        let output = [];

         if(password == ""){
                     output = <App managePass={e=>manageInfo(e)} 
                                   techPass={e=>techInfo(e)} 
                                 clientPass={e=>clientInfo(e)} 
                                  adminPass={e=>adminInfo(e)}
                              loginPassword={e=>LoginPassword(e)} 
                            />
         }else if(password === clientData.password){
                  output = <CustomerHome data={clientData} />
         }else if(password === techData.password){
                  output = <Se data={techData} />
         }else if(password === adminData.password){
             console.log('password match:  the owner is: ',adminData.firstname)
         }else if(password === managementData.password){
             console.log('password match:  the owner is: ',clientData.firstname)
         }else{
             return output = <App  managePass={e=>manageInfo(e)} 
                                     techPass={e=>techInfo(e)} 
                                   clientPass={e=>clientInfo(e)} 
                                    adminPass={e=>adminInfo(e)}
                                loginPassword={e=>LoginPassword(e)} 

                       />
          }

          function grtinvlove(person){
            const newObjects = Object.assign({},person,{
              terminolot:'new geginniung'
            })
          }

          person = {
            address:'',
            fullname:'',
            school:'',
            contacts:''
         }

          function newVars(person){
            const newliet = Object.assign({},person,{
              property:'bidibldft'
            });

            return newliet;
          }
                          

    //react concepts....

    /*right method second form of setState */
    
    this.setState((state, props)=>{
       counter:this.state.counter + this.props.comments,
    })                    

  /*wrong method*/

  this.setsTate({
    counter:this.state.counter +this. props.comments,
  })


/*******************************************************************************************/

function BoilingVerdict(props){
  if(props.celcius >= 100) {
    return<p>The water would boiled</p>
  }

  return <p>The water would not boil.</p>
}



class Calculator extends React.Component{

  render(){
    const temperature = this.state.temperature;

    return(
      <div>
        <TemperatureInput scale="c" />
        <TemperatureInput scale="f" />
      </div>  
      );
  }
}


const scaleNames = {
  c:'Celcius',
  f:'fahrenheight'
}

class TemperatureInput extends React.Component{

  constructor(props){
      super(props)
      this.handleChange = this.handleChange.bind(this);
      this.state = {temperature:''}
  }

  handleChange(e){
      this.setState({temperature:e.target.value})
  }

  render(){

    const temperature = this.state.temperature;
    const scale = this.props.scale;

    return (
       <fieldset>
         <legend>Enter temperature in {scaleNames[scale]}:</legend>
           <input value={temperature}
               onChange={this.handleChange} />
       </fieldset>
      )
  }
}

/*****************************************************************************************************************/
Swal.fire({
              title:'Sorry for Inconvenience',
              icon:'info',
               html:`<i>The System does not support versioning database yet, since it uses indexedDB</i>  (<b style="color:red">Stay tune for the next update</b>)`,
  showConfirmButton:false,
  timerProgressBar:true,
  allowOutsideClick:()=>!Swal.isLoading(),
           didOpen:()=>{
              Swal.showLoading()
          },
          timer:10000,
}).then((result)=>{
     if(result.dismiss === Swal.DismissReason.timer){
        setTimeout(async()=>{
          await OnetimeSave.items.toArray().then(async(result)=>{
              if(result.length > 0 ){
                    await OnetimeSave.delete().then((result)=>{
                       console.log('OnetimeSave cleared')
                    }).catch(err=>{
                        console.log('not deleted')
                    }).finally(()=>{
                      OnetimeSave.open();
                    })
              }
           }).catch((err)=>{
            console.log('not deleted')
           }).finally(()=>{

           });
          },500)

/*************************************************************************************************************************************/
switch(password){
      case clientData.password:{ // client login the page...
        console.log('render status: Client logging in...')
      const output = <div>
                        <Route path="/client-path">
                         <Provider store={store}>
                             <CustomerHome Logout={e=>passwordDestroy(e)} data={clientData} />
                         </Provider>       
                        </Route>
                     </div> 
        return output
    }

      case techData.password:{ //tech login.
      const output = <div>
                      <Route path="/tech-path">
                         <Provider store={store}>
                           <Se data={techData} passwordDestroy={e=>passwordDestroy(e)} />
                         </Provider>  
                      </Route>
                     </div> 
        return output;
      }

      case registerinfo.password:{ //the client finished registration redirecting to customer page.
        console.log('render status: finished registration redirecting to Client Home page ')
    const output = <div>
                    <Provider store={store}>
                      <Route path="/client-path">
                          <CustomerHome Logout={e=>passwordDestroy(e)} data={onetime} />
                      </Route>
                    </Provider>  
                   </div> 
            return output;
      }

       case onetime.password:{ //user click refresh the page now change data to updated database
        console.log('render status: you are now in redirecting Login  due to refreshing the page')
    const output = <div>
                    <Provider store={store}>
                      <Route path="/client-path">
                          <CustomerHome Logout={e=>passwordDestroy(e)} data={onetime} />
                      </Route>
                    </Provider>  
                   </div> 
            return output;
      }

       case onetimeLogin.password:{ //user click refresh the page now change data to updated database
        console.log('render status: you are now in one-time Login existing users account')
    const output = <div>
                    <Provider store={store}>
                      <Route path="/client-path">
                          <CustomerHome Logout={e=>passwordDestroy(e)} data={onetimeLogin} />
                      </Route>
                    </Provider>  
                   </div> 
            return output;
      }

      case adminData.password:{ // admin login
        const output =
                      <Route path="/admin-path">
                           <Admin data={adminData} passwordDestroy={e=>passwordDestroy(e)} />
                      </Route>
        return output
      }

      case managementData.password:{ //management login
        return console.log('password match:  the owner is: ',managementData.firstname)
      }

default:{
  console.log('render status:  default state ')
  const output = <div>
                   <Provider store={store}>
                     <Main  managePass={e=>manageInfo(e)} 
                             techPass={e=>techInfo(e)} 
                           clientPass={e=>clientInfo(e)} 
                            adminPass={e=>adminInfo(e)}
                            passValue={e=>passwordValue(e)}
                        loginPassword={e=>LoginPassword(e)}
                           clientInfo={e=>clientDataInfo(e)}
                         showRegister={e=>showRegister(e)} 
                     />
                   </Provider>  
                 </div>  
           return output;     
         }


module.exports = () => {
     const data = { user:[] };

     for(let i = 0; i < 1000; i++){
         data.user.push(
                {
                   id:i,
                   name:`${i}`,
                }
        )
     }  
}
