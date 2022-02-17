import React, { Component } from 'react';
// import { connect } from 'react-redux';
import { View, Devices } from '../../components';
import { insertItems } from '../../../redux';
import store from '../../../redux/store';
export class Routed extends Component {
   constructor(props){
        super(props);
          this.viewItems = this.viewItems.bind(this);
          this.remove = this.remove.bind(this);
          this.refresh = this.refresh.bind(this);
          this.readData = this.readData.bind(this);
          this.clickPurchase = this.clickPurchase.bind(this);
          this.bookThis = this.bookThis.bind(this);
          
          this.state = {
              classChange: ["display-none"],
                  indexes: 1,
                  onHover: ["btn-edited"],
                  returnersdata:[],
                  refresh:"",
                  toHide:["do-nothing "],
                  count:0,
                  itemPurchased:[],
                  itemDetails:[]
                  } // One way data flow the source of truth
     }

      viewItems(e){
           const action = e.target.value;
           const i = parseInt(action)
             // const details = await this.props.defaultDb.get(i); 
             this.props.defaultDb.map(item=>{
                  if(i === item.id){
                     this.setState({itemDetails:item});                     
                   }  
                   return item;         
             })
             
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

    clickPurchase(){
      
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
                  // const item = await this.props.defaultDb.get(parseId);
                  this.props.defaultDb.map((item)=>{
                               if(parseId === item.id){
                                store.dispatch(insertItems(item));
                               }
                               return item;
                  })

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
                  // const item = await this.props.defaultDb.get(parseId);
                  // this.props.defaultDb.map((item)=>{
                  //              if(parseId === item.id){
                  //               store.dispatch(insertItems(item));
                  //              }
                  //              return item;
                  // })

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

       readData = async()=>{
              const { defaultDb } = this.props;
              // const counting = await defaultDb.count();
              // this.setState({count:counting});
              // const result = await defaultDb.toArray();
              // const req = result.map(({id,title,price,desc,image})=>{return{id,title,price,desc,image}})
              const counting = defaultDb.map((i,index)=>index)
              // console.log(counting.length);
              this.setState({count:counting.length})
              const req = defaultDb.map((i,index)=>{
                     const data = {
                              id:i.id,
                              title:i.title,
                              price:i.price,
                              desc:i.desc,
                              image:i.image,
                           }
                       return data;
                    })
              return req;
              }      

componentDidMount(){
  this.readData().then((data)=>{
         this.setState({returnersdata:data})
      });
}

render(){
  
   const i = this.state.itemDetails;
   console.log(i.title)
   const wait = <View change={this.state.classChange} image={i.image} price={i.price} desc={i.desc} title={i.title} onClick={this.remove} />
   return(
	   	  <Devices
                 details={wait} 
                viewItem={this.viewItems} 
          clickAddToCart={this.clickPurchase} 
                bookThis={this.bookThis}
             removeClass={this.remove} 
               showClass={this.add} 
                   index={this.state.indexes} 
                    data={this.state.returnersdata} />                 
       ); 
   }
}
