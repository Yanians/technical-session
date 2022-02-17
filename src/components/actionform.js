import React,{ useState, useEffect} from 'react';
import dbconstructor from '../dexie/dexiedb';
// import { insertItems } from '../redux';
// import store from '../redux/store';
import { useLiveQuery } from 'dexie-react-hooks';
import Swal from 'sweetalert2';
// import option1 from '../images/circles-white-gradient.png';
// import {BrowserRouter as Router, Redirect, Route } from 'react-router-dom';

 const db = dbconstructor('Biometrics',{items:`++id, title, price, desc, image`})
  
export function AddForm(props){

  const [postFile, setFile] = useState("");
  const [items, setItems] = useState("");
  const [ title, setTitle ] = useState("");
  const [ price, setPrice ] = useState("");
  const [ desc, setDesc ] = useState("");
  // const addForm = React.createRef();
  // const [ changeClass, setClass ] = useState(false);
  const [ showAddForm, setForm ] = useState(false);
  const allItems = useLiveQuery(()=> db.items.toArray(),[]);

  const GetItems = async() => {
     let flag
     let isExist = await db.items.toArray();
     // console.log(typeof isExist);
         if(isExist ===""){
              flag = false
              let data = {
                  title:'the Lord of the Rings',
                  price:456,
                  desc:'The bst choice ever',
                  image:'1.jpg'
              };
              db.items.add(data);
         }else if(isExist !== ""){
              flag = true
          Swal.fire({title:'Loading please wait...',
                                  timer:1000,
                       timerProgressBar:true,
                                didOpen:()=>{
                                    Swal.showLoading()
                                }
               });
          return flag;
         }else{
          window.alert('Items doest not Exist empty Table')
          return flag = false;
         }
  return flag;
}
   
  // const ReduxStore = async()=> {
  //         const allItem = await db.items.toArray();
  //         const all = allItem.map(item=>item);
  //         console.log('redux value: ', all)
  //         return all;
  // }
   
     const clearField=async()=>{
        return[
              setTitle(""),
              setPrice(""),
              setDesc(""),
              setFile("")
         ] 
     }

   const insertToDb =(e)=> {
     e.preventDefault();
     if(title !== '' && price !== '' && desc !== '' && postFile !== ''){
        Swal.fire({
          text:'you submitted Successfully',
          timer:400,
          className:'card'
        }).then(()=>{
          let datas = {
        title:title,
        price:price,
        desc:desc,
        image:postFile
        }

         clearField().then(()=>{
            setForm(false);
         });

        
      db.items.add(datas).then(async()=>{
      //retrieve all items inside the database
       let allItems = await db.items.toArray();
       //set the items
       setItems(allItems);
       })  
    })
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

const DeleteItem = async(id)=>{
  db.items.delete(id);
  let allItem = await db.items.toArray();
  setItems(allItem);
}

 const getFile = (e)=> {
    const reader = new FileReader()
          reader.onload =(e)=> {
                
                setFile(reader.result)
          }
          reader.readAsDataURL(e[0])
 }

 const getItemById= async(id)=>{
        const item = await db.items.get(id);
         item.map(id=>{
            return (
              <div className="card-panel horizontal">
                   <div className="card">
                     <div className="col s12">
                          <div className="card-title">
                              <h2>{item.title}</h2>
                          </div>
                            <div className="card-image">
                                <img className="img" width="150" height="150" alt="mag buot man ka" src={item.image} /> 
                            </div>
                            <div className="card-content">
                            </div>
                     </div>
                   </div>  
              </div>      
            )  
         })
 } 

   const onChangeValue=(e)=> {
         console.log('line 148: ',e);
   }

  useEffect(()=>{
       // console.log(showAddForm) false
      GetItems().then(async(flag)=>{
        console.log('is Items Exist ? : ',flag)
           if(flag === false){
           console.log('Loading entry data... 1 item') 
           }
        const stored = await db.items.toArray()
             setItems(stored);
        }).catch((error)=>{
           console.error('problem with loading data: ',error);
        });
     
  },[]); //please provide '[]' to avoid infinite looping
    
  const AddItem = () =>{
       const id = allItems.map(item=>item.id);
      
  return (
       <React.Fragment>

          <div className="container-table">
            <div className="container-body">
             <div className="w3-animate-zoom">
                <form className="card col s12 card-radius" onSubmit={insertToDb}>
                   <div className="row">
                     <div className-="card-title">
                       <span className="center red-text">ADD ITEM</span>
                     </div>  
                     <div className="col s12">
                        <div className="input-field col s2">
                           <input disabled  type="number"  value={id.length+1} readOnly className="validate" />
                        </div>
                        <div className="col s10">    
                             <div className="input-field">
                               <input id="title" type="text" className="validate title" onChange={e=>setTitle(e.target.value)}autoComplete="off" />
                               <label htmlFor="title">Title</label>
                             </div>  
                        </div>
                     </div>   
                      
                     <div className="col s12">   
                        <div className="input-field">
                          <input  type="text" className="validate item-price" onChange={e=>setPrice(e.target.value)} autoComplete="off" />
                          <label htmlFor="price">Price: </label>
                        </div>
                     </div>   
                     
                     <div className="col s12">
                        <div className="input-field">
                          <input id="desc" autoComplete="off" type="text" onChange={e=>setDesc(e.target.value)} className="validate desc" />
                          <label htmlFor="desc">Description:</label>
                        </div>
                     </div>   
                     
                     <div className="col s12">
                         <div className="file-field input-field">
                               <div className="btn">
                                <span>File</span>
                                <input type="file" className="image" onChange={e=>getFile(e.target.files)} />
                               </div>
                               <div className="file-path-wrapper">
                                <input className="file-path validate" type="text" placeholder="Upload image: "/>
                               </div>
                         </div>
                     </div>    
                     
                     <div className="col s12">    
                             <div className="col s3"></div>
                             <div className="col s3"></div>
                             <div className="col s3">
                                <button type="submit" className="btn waves-effect waves-riple" onClick={(e)=>insertToDb(e)}>submit</button>
                              </div>
                               <div className="col s3">
                                <button type="submit" className="btn waves-effect waves-riple red" onClick={()=>clearField().then(()=>{setForm(false)})}>cancel</button>
                              </div>
                     </div>
                     <div className="col s12"><p></p></div>
                   </div>       
                </form>
              </div>
            </div>
          </div>
           </React.Fragment> 
      )
 };

  let table = []

  const biomR = 'bio_record',
        xpassR='xpass_record',
        cardscannerR = 'scanner_record',
        turnstyleR='style_record',
        cctvR='cctv_record';

 if(items.length > 0 ){
    table = <div className="card-panel white">
              <div className="card-panel grey lighten-2">
                 <div className="row">
                     <div className="col s12 m12 l12 xl12">
                        <div className="col s4 l4">
                          <div className="col s2">
                              {showAddForm ? AddItem():false}     
                            <button onClick={()=>setForm(true)} className="btn btn waves-effect waves-riple cyan">ADD ITEM</button>
                          </div>
                          <div className="col s2 push-s2">
                            <button className="btn btn waves-effect waves-riple cyan">SEARCH</button>
                          </div>
                        </div>
                        
                        <div className="col s5 m5 l5">  
                            <div className="push-s2">
                              <div className="search-wrapper">
                                <input id="search" type="search" className="table-search browser-default" placeholder="Find item:" />
                                   <label className="label-icon" htmlFor="search"></label>
                              </div>
                            </div>
                        </div>
                        

                        <div className="col s3 m3 l3 x3">
                              <div className="input-field">
                                <select className="icons">
                                  <option value="" disabled selected>Select Category</option>
                                  <option value={biomR} onChange={(e)=> onChangeValue(e)} className="left">Biometrics</option>
                                  <option value={cctvR} data-icon="images/office.jpg" className="left">Cctv Camera</option>
                                  <option value={cardscannerR} data-icon="images/yuna.jpg" className="left">Card Scanner</option>
                                  <option value={xpassR} data-icon="images/yuna.jpg" className="left">Xpass Card</option>
                                  <option value={turnstyleR} data-icon="images/yuna.jpg" className="left">Turnstyle</option>
                                </select>
                              </div>
                        </div>

                     </div>
                 </div>
                
                <table className="tablerecord striped">
                      <thead className="thead-fixed">
                          <tr>
                              <th>Item no.</th>
                              <th>NAME</th>
                              <th>PRICE</th>
                              <th>DESC</th>
                              <th>IMAGE</th>
                              <th>MANAGE</th>
                          </tr>
                      </thead>
                      <tbody>
                       
           { table = items.map((item)=>{
              return (
                      <React.Fragment key={item.id}>  
                        <tr>
                          <td>{item.id}</td>
                          <td>{item.title}</td>
                          <td>{item.price}</td>
                          <td>{item.desc}</td>
                          <td>
                             <img className="img" alt="undefined" width="50" height="50" src={item.image}/>
                          </td>
                          <td>
                            <ul className="ul-manage-button">
                              <li className="edit"><span onClick={()=>getItemById(item.id)} className="new badge yellow darken-3 edit-target">view</span></li>
                              <li className="delete"><span onClick={()=>DeleteItem(item.id)} className="new badge red delete-target">Delete</span></li>
                            </ul>
                          </td>
                        </tr>  
                      </React.Fragment>
                     )
              })                  
            }           
                      </tbody>
                </table>
             </div>
           </div>  
  }   
   return table;

}

