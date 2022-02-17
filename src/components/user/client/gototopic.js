import React,{ useState, useEffect } from 'react';

import { connect } from 'react-redux';

import M from 'materialize-css';

import Swal from 'sweetalert2';

import { dbClientUser } from '../../../dexie'

import { FaComments } from 'react-icons/fa';

import { Cols, Row, ColItem, Img, TextArea } from '../../wrapper';

function GotoTopic(props){

    const { users, posts, } = props;

    const { firstname, image, password, } = users;

    const [ comments, setComments ] = useState('');

    const [ showHide, setShowHide ] = useState(false);

    const [ toggleButton, setToggleButton ] = useState('post');

    const [ dbreply, setDbReply ] = useState([]);

    const [ toggle, setToggle ] = useState(false);

    const [ toggleReply, setToggleReply ] = useState('');

    const [ replyInput, setReplyInput ] = useState('');

    const [ refId, setRefId ] = useState(0);

    useEffect(()=>{

    async function Run(){

      const dis = await dbClientUser.temporarysave.toArray().then((result)=>{          
           result.map(item=>{
              setRefId(item.refId);
           })
      });

    }
    
    Run();  

    let collapsible = document.querySelectorAll('.collapsible')	

    M.Collapsible.init(collapsible,{})

   	},[comments, toggleButton, refId]);

    const submitPost=async()=>{
   
		  const data = {
					name:firstname,
					image:image,
          password,
					comment:comments,
					refId,
				};
		 return data
   };

    const handleTextArea=(event)=>{
            event.preventDefault();
    	const value = event.target.value;
    	const path = event.nativeEvent.path[4];
    	const appendElem = path.lastElementChild;
    	const content = appendElem.firstChild;
    	 const submitBtn = document.createElement('button');
                  submitBtn.className="col s3 m3 btn waves-effect waves-ripple white-text cyan content"
                  submitBtn.style.marginTop="1rem";
                  submitBtn.textContent = `${toggleButton}`;
                  submitBtn.onclick = (e)=>submitComments(e); 
        if(value.length > 300){
        	Swal.fire('Oops!','More than required characters','error');
        	return
         }else if(value.length === 0){
         	      setComments('');
           	    content.removeChild(content.childNodes[1]);
         }else{	
        	    setComments(value);
       	    if(content.childNodes.length > 1){
       	    	content.removeChild(content.childNodes[1]);
       	    }
           content.appendChild(submitBtn);	    
         }
    };

     const submitComments=async(e) =>{
            e.preventDefault()
     	  const parent = e.path[1];
             if(parent.childNodes[1].textContent === 'post'){
                submitPost().then(async(data)=>{
                  console.log(data.refId);
                    posts.map(async post=>{
                          if(post.id === data.refId){
                              const objects = {
                                ...data,
                                userIdentityFirstName:post.identity.firstname,
                                userIdentityLastName:post.identity.lastname,
                              }
                              await dbClientUser.comments.add(objects).then((res)=>{
                                  console.log('dbComments status: ',res);
                                   setComments('');
                                   setToggle(!toggle) 
                                 setShowHide(!showHide)
                                   parent.removeChild(parent.childNodes[1]);         
                              });
                              await dbClientUser.message.toArray().then(result=>{
                                  if(result.length === 1){
                                      console.log('message  count = 1',result.length)
                                      result.map(item=>{
                                        dbClientUser.message.update(item.messageCount,{messageCount:item.messageCount+1})
                                      })
                                  }else{
                                    dbClientUser.message.put({messageCount:1});
                                    console.log('message  count = 1',result.length)
                                  }
                              })
                          }
                    });
		        }).catch((err)=>{
		    		console.error('problem loading request please wait...',err)
		    	}).finally(async()=>{
		    		await dbClientUser.open();
		    	})
	        }
	};

    const handleReply=(e)=>{

    const value = e.target.value;
    const path = e.nativeEvent.path
    const content = path.map((item)=>item);
    const parent = content[3] //collapsible-body
    const ul = parent.lastElementChild //<ul></ul>
    const buttonReply = document.createElement('button');
          buttonReply.className="reply-li col s12 m4 l4 btn  waves-effect waves-light waves-ripple cyan"
          buttonReply.textContent = "reply"
          buttonReply.onclick = (e)=>submitUserReply(e)                  	                        
      if(value.length > 255){
          Swal.fire('Oops!','More than required characters','error');
	  }else if(value.length === 0 ){
    	  setReplyInput('')
    	  ul.removeChild(ul.childNodes[2])   
      }else{
		  setReplyInput(value)
		  if(ul.childNodes.length > 2){
		  	  try{
		  	      ul.removeChild(ul.childNodes[2]);   	
		  	  }catch(err){
		  	  	console.error('Error encountered here Line 149 gototopic.js', err);
		  	  }
		  }
		   ul.appendChild(buttonReply);
	    }	
    }

    const submitUserReply=async(e)=>{
    	    const row = e.path[1];
    	    const input = row.firstChild.value;
    	    const textInput = row.childNodes[1].firstChild
    	    const button = row.lastElementChild;
			     	const { firstname, image } = props.users;
			    	 const ref = parseInt(input);
			    	 const reply = replyInput;

				    	const data = {
				    		  reply,
				    		  firstname,
				    		  image,
				    		  ref,
				    	}

    	    await dbClientUser.reply.add(data);
    	    setTimeout(()=>{
    	    	  return [
    	    	     setReplyInput(''),
    	    	     textInput.value = '',
    	    	     row.removeChild(row.childNodes[2])
    	    	  ]
    	    },200)
  }

     const showComments=(e)=>{
	     	setToggle(!toggle)
	     	setShowHide(!showHide)
	     	setComments('');
     }
    
	  const getStyle=()=>{
	  	return {
	  		font:{
	  			fontStyle:'bold',
	  			textIndent:'.5em',
	  			textDecoration:'underline'
	  		},
  		paragraph:{
  			textIndent:'1.2em'
  		}
	  	}
	  }
		const styles = getStyle();
	return (
			<React.Fragment>

	{/**************************************** P O S T  F R O M JSON ******************************************************************/}
		{
			props.posts ? props.posts.map(item=>{

       if(refId === item.id){ //when the page is refresh.. refId becomes 0 so no post here...
      return <ColItem key={item.id}>
                 <Row>
                    <Cols s12>
                      <Cols style={{float:'right'}} ><b>Date:&nbsp; </b>{item.dated}</Cols>

                        <Cols s12 className="center">
                           <Img src={item.file} h="55" w="55" description="undefine" />
                        </Cols>

                        <Cols s12><span tyle={styles.font}><b>Posted By:</b>&nbsp;<i>{item.identity.firstname} {item.identity.lastname}</i></span></Cols>
                 	    <Cols s12><span tyle={styles.font}><b>Issue:</b>&nbsp;<i>{item.type}</i></span></Cols>
                 	    <Cols s4></Cols>
                 	 </Cols>

                 	  <Cols s12>
                 	    <p style={styles.paragraph}>{item.post}</p>
                 	  </Cols>
                 </Row>
             </ColItem>  	
       }
          {/* do not return item */}

          }) : null
	  }
	        <ul className="collapsible popout" id="parent-ul">

{/******************************************************** SUBMIT COMMENTS *****************************************************************/}          	         

           	  <li className={(showHide) ? 'display-none' : 'display-block'}>
           	    <ul className="collapsible popout">
           	      <div className="collapsible-header" onClick={e=>showComments(e)}>
           	        <h5>What's on your mind...</h5>
               	        <i className="material-icons cyan-text">
               	          <FaComments className="small" />
               	        </i>
           	       </div>
           	    </ul>   
           	  </li>

           	  <li className={(toggle) ? 'display-block':'display-none'}>
               	  <ul className="collapsible popout">
               	      <div className="collapsible-header">
	                 	  <TextArea s={12} m={12} label="write a comment..." v={comments} onChange={e=>handleTextArea(e)} datalength="255" error="only write 300 messages" />
	                  </div> 	
                  </ul> 	
           	  </li>

       	{ props.comments ? props.comments.map((comments, index)=>{
     	  if(refId === comments.refId){
     	  	  let temp = [];
     	  	      temp = props.reply !== undefined ? props.reply.filter(state=>state.ref ===  comments.id ? state.ref : 0) : temp ;
     	  	   const replyCount = temp.length;

 {/**************************************** C O M M E N T S ******************************************************************/}
 
        return <li key={comments.id}>
         	   <div className="collapsible-header">
         	  	  <div className={'col s12 contain header-reply'}>
         	  	     <Img className={comments.id % 2 === 1 ? 'img circle' : 'img circle right'} w="20" h="20" src={comments.image}/>
	         	  	        <b className={comments.id % 2 === 1 ? '' : 'right'}>
	         	  	            &nbsp;{comments.name}
	         	  	        </b>

	         	  	         <p className={comments.id % 2 === 1 ? '' : 'right'}>
	         	  	            {comments.comment}
	         	  	         </p>

	         	  	       <div className="col s12">
	         	  	         <div className={comments.id % 2 === 1 ? "reply col s6 m3 l2 cyan-text darken-4" :" col s6 m6 push-m3 l2 push-l1 cyan-text darken-4 right"} style={{fontSize:'9px',textDecoration:'none'}}>
	         	  	            {replyCount}&nbsp;reply
	         	  	         </div>
       	         	  	     <div className={comments.id % 2 === 1 ? "col s6 m4 l3 red-text left" :" col s6 m6 push-m6 l2 push-l9 red-text"} style={{fontSize:'9px'}}>
       	         	  	       1 hour ago
       	         	  	     </div>
	         	  	       </div>
	         	    </div>
         	  	</div>

{/************************************************************ R E P L Y *************************************************************************/}               	         	  	
              
        <div className="collapsible-body">
	           <ul className="comments-section">
	             { props.reply ? props.reply.map((item,index)=>{

             if(comments.id === item.ref){
	 			return <li key={item.id}>
    	         	  	     <Img className={item.id % 2 === 1 ? 'img circle' : 'img circle right'} w="20" h="20" src={item.image}/>
    	         	  	        <b className={item.id % 2 === 1 ? '' : 'right'}>&nbsp;{item.firstname}</b>
        	         	  	         <p className={item.id % 2 === 1 ? 'left grey lighten-5 z-depth-1 grey-background' : 'right grey lighten-5 z-depth-1 grey-background'}>
        	         	  	            {item.reply}
        	         	  	         </p>
    	         	  	       <Cols s12>
    	         	  	         <Cols  s6 m3 l2 className={item.id % 2 === 1 ? "reply cyan-text darken-4" :" col s6 m6 push-m3 l2 push-l1 cyan-text darken-4 right"} style={{fontSize:'9px',textDecoration:'underline'}}>
    	         	  	            {/*&nbsp;reply*/}
    	         	  	         </Cols>

        	         	  	     <Cols s6 m4 l3 className={item.id % 2 === 1 ? "red-text left" :" col s6 m6 push-m6 l2 push-l9 red-text"} style={{fontSize:'9px'}}>
        	         	  	       {/*1 hour ago*/}
        	         	  	     </Cols>
    	         	  	       </Cols>
                        </li>
                      }     
	                  }) : null
	            }  
             </ul>
                <div className="row">
                  <input type="hidden" value={comments.id} className="user-comment-reference" />
	               <TextArea s={12} m={8} l={8} onChange={e=>handleReply(e)} datalength="255" error="255 characters only"  placeholder={"reply to "+comments.name+"'s post..."} className="reply-comments" />
  	            </div>
         </div>
  	   </li>
     	  }//end of top if statement
     }) : null }
     </ul>
    </React.Fragment>   
		 ) 
	}

	const mapStateToProps=state=> {
		return {
			reply:state.RegisterTable.reply,
			posts:state.RegisterTable.jsonpost,
			comments:state.RegisterTable.comments,
		}
	}

export default connect(mapStateToProps)(GotoTopic);
// export const Gototopic = (data)=>(<GotoTopic post={data} params={useLocation()} />)
