  
  ****************** S K E L E T O N 1 *******************

  <ul> --parent --stable --collapsible

      <li></li> --stable
      <li></li> --stable

	  <li> --iterated
	    
	    <div> --header
	        <div col s12>
	           <div col s12></div>
	        </div>
	    </div>

	    <div> --body
	        <ul>
	           <li></li> --iterated
	        </ul>
	         <div> --inputs section
	         </div>
	    </div>

	  </li>
  </ul>	  

  ****************** S K E L E T O N 2  MAPPING *******************

  <ul> --parent --stable --collapsible

      <li></li> --stable --handler
      <li></li> --stable --handler

   map(()=>{

	  <li key> --iterated-parent
-------------- comments -------------	    
	    <div> --header
	        <div col s12>
	           <div col s12></div>
	        </div>
	    </div>
-------------- reply -------------
	    <div> --body
	        <ul>
		         map(()=>{
		           <li key> --iterated
		           </li> 
	             })  
	        </ul>
	         <div> --inputs section
	         </div>
	    </div>

	  </li>
	})  
  </ul>	  

  ****************** S K E L E T O N 3  RELATIONAL EXTRACTION VALUE *******************

  <ul> --parent --stable --collapsible popout

      <li></li> --stable --handler
      <li></li> --stable --handler

   map(()=>{
       
	  <li key> --iterative-parent
-------------- comments -------------	    
	    <div> --header
	        <div col s12>
	           <div col s12></div>
	        </div>
	    </div>
-------------- reply -------------
	    <div> --body
	        <ul>
		         map(()=>{
		         	if(comments.ref === reply.ref){ --extraction occured
			           return<li key> --iterative
			                 </li> 
			        }   
	             })  
	        </ul>

	         <div> --inputs section
	         </div>
	    </div>

	  </li>
	})  
  </ul>	  



const li = document.createElement('li')
const div = document.createElement('div')
const cloneDiv = div.cloneNode(true);






