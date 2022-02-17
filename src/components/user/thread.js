import React from 'react';
import { dbPost } from '../../dexie';
import { Cols, Row, Space  } from '../wrapper';
export class Thread extends React.Component{
      
      constructor(props){
         super(props)
         this.getPost = this.getPost.bind(this)
         this.state = {posts:[]};
      }

      getPost=async()=>{
      	  const getposts = await dbPost.postcomment.toArray();
      	        if(getposts !== undefined){
      	        	return getposts;
      	        }else{
      	        	return null;
      	        }
      }

      componentDidMount(){
      	this.getPost().then((result)=>{
      		console.log('line 23:  ',result)
      		this.setState({posts:result});
      	});
      }

	render(){
        const post = this.state.posts;

    if(post === ""){
		   return <ul className="collection">
		              <Space />
   	                    <Space />
   	                    <Space />
		     		   <li className="collection-item">
		     		    
		     		      <h2 className="black-text">Database was empty...</h2>
		     		   </li>
		     	 </ul>
     }else{

      return<div>
   	          <Space />
   	          <Space />
   	          <Space />
   	           <ul className="collection">
	             { this.state.posts.map((post)=> {
	             	console.log('id value of post:  ',post.id)
				     return (
				     	   <React.Fragment key={post.id} >
				      	     <li className="collection-item">
				      	        <Row>
				      	         <Cols s12 m6>
				                   <div className="card">

				                      <div className="card-image">
				                         <img src={post.file} alt="undefined" />
				                         <span className="card-title card-title-post grey-text text-lighten-4">{post.title}</span>
				                      </div>

				                      <div className="card-content">
	                                     <p className="black-text">{post.post}</p>
	                                     <p className="black-text">{post.company}</p>
				                      </div>
				                   </div>
				                 </Cols> 
				                </Row>  
				      	     </li>
				      	   </React.Fragment>  
	      	          )
				   })
	             } 
	           </ul>
	        </div>
     } 
   }	
}