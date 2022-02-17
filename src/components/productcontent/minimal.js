import React  from 'react';

import { Links, View } from '../components';

import { Devices } from '../components';

import Swal from 'sweetalert2';

import store from '../../redux/store';

import M from 'materialize-css';

import { insertItems } from '../../redux';

import { CardContent } from '../wrapper';

class DeviceType extends React.Component{
  
  render(){ 
    return<Links>
           <Devices 
                  details={this.props.details} 
                 addClass={this.props.add} 
              removeClass={this.props.remove} 
                showClass={this.props.classChange}
           clickAddToCart={this.props.clickAddToCart} 
                 bookThis={this.props.bookThis}
                    index={this.props.index} 
                     data={this.props.dataArray}
                 viewItem={this.props.viewItem} 
           />
          </Links>
}}

export class Minimal extends React.Component{
     constructor(props){
     	  super(props);
          this.add = this.add.bind(this);
          this.remove = this.remove.bind(this);
          this.refresh = this.refresh.bind(this);
          this.readData = this.readData.bind(this);
          this.viewItems = this.viewItems.bind(this);
          this.bookThis = this.bookThis.bind(this);
          this.clickAddToCart = this.clickAddToCart.bind(this);
          this.state = {
              classChange: ["display-none"],
                  indexes: 1,
                  onHover: ["btn-edited"],
                  allItems:[],
                  refresh:"",
                  count:0,
                  itemDetails:[]
                  } // One way data flow the source of truth
     }

      add(e){
           const action = e.target.value;
           const i = parseInt(action)
           const gets = async () => {
             const details = await this.props.defaultDb.get(i); 
             this.setState({itemDetails:details});
           }
           gets();
           
          this.setState({indexes:i});
          const add = this.state.classChange.concat(["display-block"])
          this.setState({classChange:add});
         }

         refresh(){
          this.setState({itemDetails:this.state.refresh});
         }

         remove(){
          const remove = this.state.classChange.slice()
                remove.splice(1,1)
                  this.setState({classChange:remove})
                  this.refresh()
         }


       readData = async()=>{
              const { defaultDb } = this.props;
               const req = defaultDb.map((i)=>{
                     const data = {
                        id:i.id,
                        title:i.title,
                        price:i.price,
                        desc:i.desc,
                        image:i.image,
                     };
                     return data;
              });
        
                return req;
              }

        bookThis(){
          const card = document.querySelectorAll('.hide-this');
          const btns = document.querySelectorAll('.book-me-edited');
          const play = document.querySelectorAll('.play-aria');
          const contents = document.createElement('div')
              contents.className ="contents";
              const spinner = contents.cloneNode(true)     
              spinner.className = "loader";
              contents.appendChild(spinner)

              btns.forEach((el,i)=>{
                el.addEventListener('click',async(e)=>{
                  e.stopPropagation()
                  const refId = el.value;
                  const parseId = parseInt(refId);
                   M.toast({
                    html:'Check your Book in notification area',
                    classes:'rounded',
                   });
                  this.props.defaultDb.map((item)=>{
                               if(parseId === item.id){
                                store.dispatch(insertItems(item));
                               }
                               return item;
                  })
                  play[i].className ="animated zoomOut"
                  card[i].insertBefore(contents, play[i])
                   setTimeout(()=>{
                   try{ 
                    card[i].removeChild(contents)
                    card[i].removeChild(play[i])
                    card[i].className = "on-hide"
                  }catch(errr){
                    console.log('please wait.. loading')
                  }finally{
                  }
                   },1000)
                });
            })
          }

          clickAddToCart(e){
          const card = document.querySelectorAll('.hide-this');
          const btns = document.querySelectorAll('.btn-edited');
          const play = document.querySelectorAll('.play-aria');
          const contents = document.createElement('div')
              contents.className ="contents";
              const spinner = contents.cloneNode(true)     
              spinner.className = "loader";
              contents.appendChild(spinner)

              btns.forEach((el,i)=>{
                el.addEventListener('click',async(e)=>{
                  e.stopPropagation()
                  const refId = el.value;
                  const parseId = parseInt(refId);
                
                  // this.props.defaultDb.map((item)=>{
                  //              if(parseId === item.id){
                  //               store.dispatch(insertItems(item));
                  //              }
                  //              return item;
                  // })

                  play[i].className ="animated hinge"
                  card[i].insertBefore(contents, play[i])
                   setTimeout(()=>{
                   try{ 
                    card[i].removeChild(contents)
                    card[i].removeChild(play[i])
                    card[i].className = "on-hide"
                  }catch(errr){
                    console.log('please wait.. loading')
                  }finally{
                  }
                   },1000)
                });
            })
            
          }

               viewItems(e){
                   const action = e.target.value;
                   const i = parseInt(action);
                     // const details = await this.props.defaultDb.get(i); 
                     this.props.defaultDb.map(item=>{
                          if(i === item.id){
                            const objects = {
                                title:item.title,
                                price:item.price,
                                desc:item.desc,
                                image:item.image,
                            }
                             this.setState({itemDetails:objects});                     
                            }
                           return item;         
                     })
                     
                  this.setState({indexes:i});
                  const add = this.state.classChange.concat(["display-block"])
                  this.setState({classChange:add});
              }
           
   componentDidMount(){

      this.readData().then((data)=>{
         this.setState({allItems:data})
      });
   }

    render(){
      const i = this.state.itemDetails;
      const index = this.state.indexes;
      const wait = <View change={this.state.classChange} image={i.image} price={i.price} desc={i.desc} title={i.title} onClick={this.remove} /> 
      return<DeviceType clickAddToCart={this.clickAddToCart} bookThis={this.bookThis} details={wait} viewItem={this.viewItems} index={index} add={this.add} remove={this.remove} classChange={this.state.classChange} dataArray={this.state.allItems} />
    }
}

export class Source extends React.Component{

  constructor(props){
    super(props)
    this.read = this.read.bind(this);
    this.state = {total:0,img:[],title:[],desc:[],click:false}
  }

  read = async() => {
    const { data } = this.props;
      // const i = await this.props.data.count(); //last item in the store
      const count = data.map((item)=>item.id)
      const i = count.length      
      // await this.props.data.get(i,(key)=>{
            data.map((item)=>{
             if(i === item.id){
              const data = item;
              const { image, desc, } = data;
               this.setState({img:image});
               this.setState({desc:desc});    
               this.setState({total:i})
             }
             return data
      });
  };

  componentDidMount(){
    this.read().then(()=>{
        let timerInterval
             Swal.fire({
                        timer:300,
                        width:90,
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
                        }
                      })
    })
  }

  render(){
    const numbers = this.state.total;
    const img = this.state.img;
    const desc = this.state.desc;
    return(
      <CardContent title={numbers+" Items "} link={this.props.link} onClick={this.props.click} text={desc} src={img} />
      )
  }
}

   /*this is from inside readData */   

         //      const insertToDb = await defaultDb;
         //      const counting = await defaultDb;
         //      this.setState({count:defaultDb});
         //      const result = await defaultDb.toArray();
         //      const isIdExist = result.map((i)=>i.id);
         //      const req = result.map(({id,title,price,desc,image})=>{return{id,title,price,desc,image}});

         //      let timerInterval;

         //      jsonData.map((item)=>{
         //                const data = {
         //                  title:item.title,
         //                  price:item.price,
         //                  desc:item.desc,
         //                  image:item.image
         //                }
         //            let dataArray = (isIdExist !== "" && isIdExist <= 0) ? insertToDb.add(data) : ( Swal.fire({
         //                      timer:this.state.count,
         //                      width:90,
         //                      timerProgressBar: false,
         //                      showClass: {
                //   popup: 'swal2-noanimation',
                //   backdrop: 'swal2-noanimation'
                // },
                // hideClass: {
                //   popup: '',
                //   backdrop: ''
                // },
         //                      didOpen: () => {
         //                        Swal.showLoading();
         //                      },
         //                      willClose: () => {
         //                        clearInterval(timerInterval)
         //                      }
         //                    }).then((result) => {
         //                      if (result.dismiss === Swal.DismissReason.timer) {
         //                             // console.clear();
         //                            console.log('field was cleared');
         //                      }
         //                    })
         //                   )
         //                  return dataArray;
         //            },[])