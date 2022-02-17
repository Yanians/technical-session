import * as React from 'react';

import PropTypes from 'prop-types';

import *as L from './index';

import cx from 'classnames';

import  withStyles from '@mui/material/styles';

/*MUI*/

import Menu_ from '@mui/material/Menu';

import typography  from '@mui/material/Typography';

import Menuitem_ from '@mui/material/MenuItem';

import Button from '@mui/material/Button';

import avatar from '@mui/material/Avatar';

import Box from '@mui/material/Box';

import FormGroup from '@mui/material/FormGroup';

import FormControlLabel from '@mui/material/FormControlLabel';

import Switch from '@mui/material/Switch';

import AppBar from '@mui/material/AppBar';

import Card from '@mui/material/Card';

import CardHeader from '@mui/material/CardHeader';

import CardMedia from '@mui/material/CardMedia';

import CardContent from '@mui/material/CardContent';

import CardActions from '@mui/material/CardActions';

import Collapse from '@mui/material/Collapse';

import CssBaseLines from '@mui/material/CssBaseline';

import drawer from '@mui/material/Drawer';

import divider from '@mui/material/Divider';

import Grid from '@mui/material/Grid';

import Hidden from '@mui/material/Hidden';

import IconButton from '@mui/material/IconButton';

import Input from '@mui/material/Input';

import Inputbase from '@mui/material/InputBase';

import List from '@mui/material/List';

import ListItemIcon from '@mui/material/ListItemIcon';

import ListItem from '@mui/material/ListItem';

import ListItemText from '@mui/material/ListItemText';

import TextField from '@mui/material/TextField';

import Toolbar from '@mui/material/Toolbar';

import  { red } from '@mui/material/colors';

import ShareIcon from '@mui/icons-material/Share';

import MoreVertIcon from '@mui/icons-material/MoreVert';

import paper from '@mui/material/Paper';

import Styling  from './styles';

import Rooted  from './styles';

import makeStyles from '@mui/material/styles';


class Cardplings extends React.Component {

     render(){
const {subheader,content0,content1,content2,content3,title,inside,imageTitle,src,intro, nodeFunction} = this.props;
		return(
			   <React.Fragment>
			   	<Card sx={{maxWidth:345}}>

				   	<CardHeader avatar={ <Avatar sx={{bgcolor:red[500] }} aria-label="recipe">
				   	                          R
				   	                     </Avatar>
				   	                   }
				   	            action={<L.Ib aria-label="settings">
				   	                       <L.MoreVertIcon />
				   	                    </L.Ib>   
				   	                   }
				   	            title={title}
				   	            subheader={subheader}
	                />

	                 <CardMedia style={{
          height: 0,
          paddingTop: '56.25%', // 16:9 px
        }} image={src}  title={imageTitle} />

	                 <CardContent>
	                 	<L.Typographyui normal fantasy shadowblack secondary textContent={intro}/>
	                 </CardContent>

	                 <CardActions disableSpacing>
		                   <L.Ib aria-label="share">
		                     <ShareIcon />
		                   </L.Ib>
		                  {nodeFunction}
	                 </CardActions>
                        <Collapse in={inside} timeout="auto" unmountOnExit>
					        <CardContent>
					          <L.Typographyui paragraph textContent={"Method: "} />
					          <L.Typographyui paragraph textContent={content0} />
					          <L.Typographyui paragraph textContent={content1} />
					          <L.Typographyui paragraph textContent={content2} />
					          <L.Typographyui textContent={content3} />
					        </CardContent>
                        </Collapse>

			   	</Card> 
			   </React.Fragment>
			)
  }
}

 class CardDefault extends React.Component{

	  render(){
	  	const { title, text, sx, btnname1, btnname2, src } = this.props;
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia style={sx}
        image={src}
        title={title}
      />
      <CardContent>
        <L.Typographyui gutterBottom h5 div textContent={title} />
        <L.Typographyui body2 secondary textContent={text} />
          {text}
      </CardContent>
      <CardActions>
        <Button size="small">{btnname1}</Button>
        <Button size="small">{btnname2}</Button>
      </CardActions>
    </Card>
  );
 }
}


/********************************** SIGNATURE API HOC ***************************************/

function Img(props){
const {h,w,description,src, } = props;
     return (
            <img src={src} height={h} width={w} alt={description} />
     );
}

function AbstractIconButton(Component){
      
  return props => {
      const {small, medium, children, start, end, defaults, inherit, primary, secondary, className, ...other } = props;
      
      return <Component size={small?'small':medium?'medium':undefined}
                        edge={start?'start':end?'end':false}
                        className={className}
                        color={defaults ? 'default':inherit?'inherit':primary?'primary':secondary?'secondary':undefined}
                        {...other}
                        >
              {children}
             </Component>
  }
}

function AbstractInputBase(Component){

  return props => {

            const {
              className,dense,none,
              primary,secondary,v,
              ...other
              } = props; 
            
            return <Component
                className={className} 
                color={primary ? 'primary' :secondary ? 'secondary':undefined}
                value={v}
                margin={dense ? 'dense':none ? 'none':undefined}
                {...other}
             />
          }
        }   


function AbstractInputfield(Component){

	  return props => {

              const {
              	text, search, number, email, password, time, file,
              	one, two, three, four, five,six,
              	tiny, semi, small, medium, large,
              	outlined, filled, standard, disabled,readOnly,
              	dense, none, normal, primary, secondary, 
              	multiline, v, inputRef, ref,label,
                ...other
              	} = props; 
   
         if(search || text || number || email || password || time || file ){
         	     return <Component 
         	                    size={small? 'small':undefined}                               
                                variant={outlined?'outlined':filled?'filled':standard?'standard':undefined}
                                value={v}
                                ref={ref}
                                label={label}
                                type={search?'search':text?'text':number?'number':email?'email':password?'password':time?'time':file?'file':undefined}
                                inputProps={{'id':tiny?'input-resize':semi?'input-search2':medium ? 'input-search3':large ? 'input-search4':undefined}}
                                margin={dense?'dense':none?'none':normal?'normal':undefined}
                                color={primary?'primary':secondary?'secondary':undefined}
                        {...other} />        
         }else if(multiline){     
              return <Component 
                                variant={outlined?'outlined':filled?'filled':standard?'standard':undefined}
                                value={v}
                                id="outline-multiline-flexible"
                                maxRows={one?1:two?2:three?3:four?4:five?5:six?6:undefined}
                                margin={dense?'dense':none?'none':normal?'normal':undefined}
                                multiline
                                color={primary?'primary':secondary?'secondary':undefined}
                                {...other}
                     />
        }else if(disabled){
                  <Component disabled
                    size={tiny?'tiny':small? 'small':medium?'medium':large?'large':undefined}
                    value={v}
                    variant={outlined?'outlined':filled?'filled':standard?'standard':undefined}
                    {...other}
                  /> 
        }else if(readOnly){
        	return <Component id="read-only-input"
                           readOnly
                           value={v}
                           size={tiny?'tiny':small? 'small':medium?'medium':large?'large':undefined}
                           inputProps={{readOnly:true,}}
                           variant={outlined?'outlined':filled?'filled':standard?'standard':undefined}
                           {...other}
                      />     
        }else{
        	<Component {...other} />
        }             
	  };
}

function AbstractDrawer(Component){

	return props=>{
		
	const {temporary, persistent, permanent, children, statics, bottom, left, right, top, ...other} = props;
          return<Component
               
                anchor={bottom ? 'bottom' : left ? 'left' : right ? 'right' : top ? 'top' : undefined}
                variant={permanent ? 'permanent' : persistent ? 'persistent' :temporary ? 'temporary' : statics ? 'static' : undefined }
                {...other}
               >
                 {children}
             </Component>
    	}
}

/*****************************************************<<< Gateway Default >>>**************************************************/

function AbstractDefault(Component){

    return props => {

         return <Component {...props} />
    };
};

/*****************************************************<AppBar /*signature* />**************************************************/

function AbstractNavigation(Component){ //done
  
     return function (props){
                 const { 
                   ToolbarId,
                   color,
                 	 className,ToolbarClassName, classes, children, statics, absolute, fixed, relative,sticky,id,...other
                 	 } = props;
  
           return (
                     <Component 
                           className={className}
                           classes={classes}
                           id={id}
                           position={absolute ? 'absolute' :statics ? 'static' :fixed ? 'fixed' : relative ? 'relative' : sticky ? 'sticky' : undefined }
                           color={color}
                           {...other}
                          >
                          <Toolbar id={ToolbarId} className={ToolbarClassName}>
                            {children}
                          </Toolbar>
                     </Component>    
               )   
   }
}

/*********************************************************<ListItem/> * as <Item /> *********************************************************/

export function AbstractListItem(Component){

	  return props => {

	const {onClick, divider, textContent, outlined, children, p, className, autofocus, ContainerProps, disableGutters,Containercomponents, div,a,span,button, dense, start, center,
		   shadow1red,shadow2red,shadow3red,shadow1grey,shadow2grey,shadow3grey,shadow1black,shadow2black,shadow3black,shadowblack,shadowgrey,shadowred,shadowgreylight, //shadows
         grownish,greenish,violetish,facebook,messenger,
         inherits,youtube,whatsapp,linkedin,instagram,twitter,pinterest,snapchat,regular,//colors
         nega1,positive1,positive2,positive3,positive4,positive5,_5,
         monospace,arial,timesnewroman,tahoma,georgia,garamond,cursive,sansserif,cursive_mt,fantasy,  // font-family
         uppercase,lowercase,initial,capitalize,inherit,
         overline,linethrough,underline, //
         normaltext,italic,oblique, //font-style
         normal,bold, // font-weight
         selected,classes,
         colreverse,rowreverse,column,leftIcon,rightIcon,
         responsiveText1,responsiveText2,responsiveText3,responsiveText4,responsiveText5,responsiveText6,responsiveText7,responsiveText8,responsiveText9,responsiveText10,responsiveText11,responsiveText12,px24,px18,px12,px16, r40,r24,r32,r18,r16,r12,r36,r72, // font-size 10vw
         ...other
	 } = props;

   const stylelish = L.StyleSolution(props);

        if(button && leftIcon && rightIcon){
         return <div>
                   <Component button
                     
	                    className={stylelish.root+" "+className}
                       selected={selected}
                           classes={classes}
	                    alignItems={start ? 'flex-start': center ? 'center' : undefined}
                      {...props}
	                 >
      	               <Grid container spacing={2} wrap="nowrap" direction={column ? 'column' :colreverse ? 'col-reverse' : rowreverse ? 'row-reverse' :undefined}>
      	                   <Grid item style={{marginLeft:'-15px'}} zeroMinWidth xs="auto">
      	                     {leftIcon}
      	                   </Grid>
      	                   <Grid item zeroMinWidth xs="auto">
      	                     <ListItemText>
      	                         <div className={stylelish.root+" "+className}>
      	                           {textContent}
      	                          </div>
      	                     </ListItemText>
      	                   </Grid>
      	                   <Grid item style={{marginRight:'-15px'}} zeroMinWidth xs="auto">
      	                       {rightIcon}
      	                   </Grid>
      	               </Grid>
	                </Component>
                </div>
         }else if(button && leftIcon){
           return <div>
                   <Component button className={stylelish.root+" "+className}
                           selected={selected}
                           classes={classes}
	                    alignItems={start ? 'flex-start': center ? 'center' : undefined}
                      {...props}
	               >
	                <Grid container spacing={2} wrap="nowrap" direction={column ? 'column' :colreverse ? 'col-reverse' : rowreverse ? 'row-reverse' :undefined}>
	                   <Grid item xs="auto">
	                     {leftIcon}
	                   </Grid>
	                   <Grid item xs="auto">
	                        <ListItemText>
	                          <div className={stylelish.root+" "+className}>
	                              {textContent}
	                          </div> 
	                        </ListItemText>  
	                   </Grid>
	               </Grid>
	               </Component>
                </div>   
            }else if(button){
            return <div>
                     <Component button
	                    className={stylelish.root+" "+className}
	                    alignItems={start ? 'flex-start': center ? 'center' : undefined}
                           {...props}
	                 >
                     {children}
	                <ListItemText>
                      
	                	  <div className={stylelish.root+" "+className}>
                               {textContent}
	                    </div> 
	                </ListItemText>
	               </Component>
                </div>   

           }else if(a || span || div || p ){
               return <Component className={stylelish.root+" "+className} 
	                    component={a ? 'a': span ? 'span' : div ? 'div' : p ? 'p' : undefined}
	                    ContainerComponent={Containercomponents} 
	                    alignItems={start ? 'flex-start': center ? 'center' : undefined}{...other}>
	   	                  {textContent} 
	                </Component>
             }else{
             	return <Component className={stylelish.root+" "+className} {...props} />
             }
        }
}

AbstractListItem.propTypes = {
  instagram:PropTypes.bool,
  youtube:PropTypes.bool,
};

function AbstractSwitch(Component, Childs, SubChilds){
     return props =>{
         const {onClick,primary,secondary,error,info,label, warning,onChange,checked,row,color, ...other } = props;

         return <Component row={row} {...props}>
                   <Childs control={<SubChilds checked={checked} onClick={onClick} onChange={onChange} color={color} {...props} />}
                           label={label} {...props} />
                </Component>
     }
}

function AbstractList(Component){
	  return props=>{
        const {
        	children, component, className, ...other
        } = props;
        
			 return <Component  className={className} {...props} />                
	   }
}

function AbstractCssBaseLine(Component){
     return props=>{
        const {children,...other} = props;

        return <Component {...props} />
     }
}

/***************************************** ListItemIcon as <AlignIcon /> *********************************************************/

  function AbstractListItemIcon(Component){
  	return props =>{
  		const { children, classes, className, ...other} = props;
  		return <Component 
                  {...props}
  		            classes={classes}
  		            className={className}
                 
  		/>
  	}
  };

/************************************************* I C O N *********************************************************/

export function AbstractIcon(Component){
	  return props => {

	  	 const {
	  	 	       primary, secondary, warning, success, children, tiny, small, className, classes,left,right,
	  	 	       medium, large, inherit, component, action, error, marginTop, disabled,
	  	 	       ...other
              } = props;

	  	 const sizes = {
          '16px':tiny,
          '24px':small,
          '28px':medium,
          '36px':large,
	  	 };

       const aligns = {
          'left':left,
          'right':right,
       };

           return <Component 
                            component={component}
                            style={{fontSize:cx(sizes),marginTop:marginTop,float:cx(aligns)}}
                            classes={classes}
                            className={className}
                            color={primary ? 'primary':inherit?'inherit':secondary ? 'secondary': action ? 'action':warning ? 'warning':success ? 'success': error ? 'error':disabled ? 'disabled':undefined}
                            {...props}
                  />
	  }
};

/******************************************GRID AND HIDE COMPONENT***********************************/
function AbstractLayout(Component){

    return props=>{ 
       const { 
       	       children, container, auto, item, zeroMinWidth,
               
       	       hide_on_small_only, hide_on_small_and_up, hide_on_large, hide_on_med_and_up, hide_on_med_and_down, hide_on_med_only, hide_on_large_only,

       	       hide_on_xs_only,hide_on_xl_only, hide_on_small_and_down,

       	       show_on_small_and_down, show_on_large, show_on_med_and_up, show_on_small_and_up, divider,

       	       wrap,nowrap, form,span,button,a,div,Box,noValidate,autoComplete,nav,box,
       	       
               row, column, colreverse, rowreverse, //direction

               acenter, astart, aend, aaround, abetween, stretch,  // aligncontent

               jcenter, jstart, jend, jaround, jbetween, even, // justifyContent

		       x1, x2, x3, x4, x5, x6, x7, x8, x9, x10, x11, x12, //extra small

		       s1, s2, s3, s4, s5, s6, s7, s8, s9, s10, s11, s12, // spacing

           sm1, sm2, sm3, sm4, sm5, sm6, sm7, sm8, sm9, sm10, sm11, sm12, // small

		       m1, m2, m3, m4, m5, m6, m7, m8, m9, m10, m11, m12, // medium

		       l1, l2, l3, l4, l5, l6, l7, l8, l9, l10, l11, l12, // large

		       xl1, xl2, xl3, xl4, xl5, xl6, xl7, xl8, xl9, xl10, xl11, xl12, // extra large

           ...other

             } = props;
     let output        
        if(container){   
           output = (
                   <Component container zeroMinWidth={zeroMinWidth}
                              wrap={wrap ? 'wrap':nowrap? 'nowrap':'wrap'}
                              direction={row? 'row' : rowreverse ? 'row-reverse' : column ? 'column' : colreverse ? 'col-reverse' : 'row'}
                              justifyContent={even ? 'space-evenly':jcenter ? 'center':jstart ? 'flex-start' : jend ? 'flex-end' : jbetween ? 'space-between' :jaround ? 'space-around': undefined}
                              alignContent={stretch ? 'stretch':acenter? 'center':astart ? 'flex-start' : aend ? 'flex-end' : abetween ? 'space-between' : aaround ? 'space-around': undefined}
                              rowSpacing={s1 ? 1: s2 ? 2 : s3 ? 3 : s4 ? 4 : s5 ? 5 : s6 ? 6 : s7? 7 : s8 ? 8 : s9 ? 9 : s10 ? 10 : s11 ? 11 : s12 ? 12 : undefined }
                              columnSpacing={{
                                     xs:x1 ? 1: x2 ? 2 : x3 ? 3 : x4 ? 4 :x5 ? 5 : x6 ? 6 : x7 ? 7 : x8 ? 8 : x9 ? 9 : x10 ? 10 :x11 ? 11 : x12 ? 12 : undefined,
                                     sm:sm1 ? 1: sm2 ? 2 : sm3 ? 3 : sm4 ? 4 :sm5 ? 5 : sm6 ? 6 : sm7 ? 7 : sm8 ? 8 : sm9 ? 9 : sm10 ? 10 :sm11 ? 11 : sm12 ? 12 : undefined,
                                     md:m1 ? 1: m2 ? 2 : m3 ? 3 : m4 ? 4 :m5 ? 5 : m6 ? 6 : m7 ? 7 : m8 ? 8 : m9 ? 9 : m10 ? 10 :m11 ? 11 : m12 ? 12 : undefined,
                                     lg:l1 ? 1: l2 ? 2 : l3 ? 3 : l4 ? 4 :l5 ? 5 : l6 ? 6 : l7 ? 7 : l8 ? 8 : l9 ? 9 : l10 ? 10 :l11 ? 11 : l12 ? 12 : undefined,
                                     xl:xl1 ? 1: xl2 ? 2 : xl3 ? 3 : xl4 ? 4 :xl5 ? 5 : xl6 ? 6 : xl7 ? 7 : xl8 ? 8 : xl9 ? 9 : xl10 ? 10 :xl11 ? 11 : xl12 ? 12 :undefined,
                                   }}
                                      {...props}
                   >{children}</Component>
          ); 
        }else if(container && item){			
			   output=(
                   <Component item={item} container={container} zeroMinWidth={zeroMinWidth}
                              wrap={wrap ? 'wrap':nowrap? 'nowrap':undefined}
                              xs={x1 ? 1: x2 ? 2 : x3 ? 3 : x4 ? 4 :x5 ? 5 : x6 ? 6 : x7 ? 7 : x8 ? 8 : x9 ? 9 : x10 ? 10 :x11 ? 11 : x12 ? 12 : undefined }
                              sm={sm1 ? 1: sm2 ? 2 : sm3 ? 3 : sm4 ? 4 :sm5 ? 5 : sm6 ? 6 : sm7 ? 7 : sm8 ? 8 : sm9 ? 9 : sm10 ? 10 :sm11 ? 11 : sm12 ? 12 : undefined }
                              md={m1 ? 1: m2 ? 2 : m3 ? 3 : m4 ? 4 :m5 ? 5 : m6 ? 6 : m7 ? 7 : m8 ? 8 : m9 ? 9 : m10 ? 10 :m11 ? 11 : m12 ? 12 : undefined }
                              lg={l1 ? 1: l2 ? 2 : l3 ? 3 : l4 ? 4 :l5 ? 5 : l6 ? 6 : l7 ? 7 : l8 ? 8 : l9 ? 9 : l10 ? 10 :l11 ? 11 : l12 ? 12 : undefined }
                              xl={xl1 ? 1: xl2 ? 2 : xl3 ? 3 : xl4 ? 4 :xl5 ? 5 : xl6 ? 6 : xl7 ? 7 : xl8 ? 8 : xl9 ? 9 : xl10 ? 10 :xl11 ? 11 : xl12 ? 12 :undefined }
                              direction={row? 'row' : rowreverse ? 'row-reverse' : column ? 'column' : colreverse ? 'col-reverse' : undefined}
                              justifyContent={even ? 'space-evenly':jcenter ? 'center':jstart ? 'flex-start' : jend ? 'flex-end' : jbetween ? 'space-between' :jaround ? 'space-around': undefined}
                              alignContent={stretch ? 'stretch':acenter? 'center':astart ? 'flex-start' : aend ? 'flex-end' : abetween ? 'space-between' : aaround ? 'space-around': undefined}
                              /*spacing={s1 ? 1: s2 ? 2 : s3 ? 3 : s4 ? 4 :s5 ? 5 : s6 ? 6 : s7
                                          ? 7 : s8 ? 8 : s9 ? 9 : s10 ? 10 : s11 ? 11 : s12 ? 12 : undefined 
                                      }*/
                                      {...props}
                   />
			   	);
		  }else if(auto){
		  	  output=(
                	  <Component item
                                xs={auto}
                                sm={auto}
                                md={auto}
                                lg={auto}
                                xl={auto}
                                {...props}
	                  > 
                        {children}
                      </Component>                  
               ); 
		  }else if(item){	
                output=(
                	  <Component item zeroMinWidth={zeroMinWidth}
		               xs={x1 ? 1: x2 ? 2 : x3 ? 3 : x4 ? 4 :x5 ? 5 : x6 ? 6 : x7 ? 7 : x8 ? 8 : x9 ? 9 : x10 ? 10 :x11 ? 11 : x12 ?12 : undefined }
		               sm={sm1 ? 1: sm2 ? 2 : sm3 ? 3 : sm4 ? 4 :sm5 ? 5 : sm6 ? 6 : sm7 ? 7 : sm8 ? 8 : sm9 ? 9 : sm10 ? 10 :sm11 ? 11 : sm12 ? 12 : undefined }
		               md={m1 ? 1: m2 ? 2 : m3 ? 3 : m4 ? 4 :m5 ? 5 : m6 ? 6 : m7 ? 7 : m8 ? 8 : m9 ? 9 : m10 ? 10 :m11 ? 11 : m12 ?12 : undefined }
		               lg={l1 ? 1: l2 ? 2 : l3 ? 3 : l4 ? 4 :l5 ? 5 : l6 ? 6 : l7 ? 7 : l8 ? 8 : l9 ? 9 : l10 ? 10 :l11 ? 11 : l12 ? 12 : undefined }
		               xl={xl1 ? 1: xl2 ? 2 : xl3 ? 3 : xl4 ? 4 :xl5 ? 5 : xl6 ? 6 : xl7 ? 7 : xl8 ? 8 : xl9 ? 9 : xl10 ? 10 :xl11 ? 11 : xl12 ? 12 : undefined }
	                  {...props}>{children}</Component> 
               ); 
      		 }else if(hide_on_small_only){
                        output=<Component only={['sm']}{...props} />
      	 	 }else if(hide_on_large_only){
                        output=<Component only={['lg']}{...props} />
           }else if(hide_on_med_only){
                        output=<Component only={['md']}{...props} />
			  	 }else if(hide_on_xl_only){
                        output=<Component only={['xl']}{...props} />
			  	 }else if(hide_on_xs_only){
                        output = <Component only={['xs']}{...props} />
			  	 }else if(hide_on_med_and_up){
                        output = <Component only={['md','xl','lg']}{...props} />
			  	 }else if(show_on_small_and_down){
                        output = <Component only={['sm','md','xl','lg']}{...props} />
			  	 }else if(hide_on_med_and_down){
                        output = <Component only={['xs','sm','md']}{...props} />
			  	 }else if(hide_on_large){
                        output = <Component only={['lg','xl']}{...props} />
			  	 }else if(hide_on_small_and_down){
                        output = <Component only={['xs','sm']}{...props} />
			  	 }else if(show_on_large){
                        output = <Component only={['xs','sm','md']} {...props} />
			  	 }else if(show_on_small_and_up){
                        output = <Component only={['xs']} {...props} />
			  	 }else if(box){
                        output = <Component {...props} />
           }else if(form){
            const el = {
              'span':span,
              'button':button,
              'div':div,
              'a':a,
              'form':form,
              'nav':nav,
            };
                output = <Box component={cx(el)}
                                  noValidate={noValidate}
                                  autoComplete={autoComplete}                                  {...props} />

           }else{

			  	 	const colItems = {
		  		        '30px':props.width30px,
		  		        '40px':props.width40px,
		  		        '50px':props.width50px,
		  		        '60px':props.width60px,
                  '100%':props.auto,
		  	        }
			  	 output =  <Component style={{width:cx(colItems)}} {...props}/>
			  }
        return output;	   
		}
};

AbstractLayout.propTypes = {
  
}

const O = AbstractLayout(Box);

const Paper = AbstractLayout(paper);

const Ib = AbstractIconButton(IconButton);

const Row = AbstractLayout(Grid);

const Col = AbstractLayout(Grid);

const Eye = AbstractLayout(Hidden);

const Hide = AbstractLayout(Hidden);

const Avatar = AbstractLayout(avatar);

const Nav = AbstractNavigation(AppBar);

const Lists = AbstractList(List);

const Drawer = AbstractDrawer(drawer);

const Divider = AbstractLayout(divider);

const Inputfield = AbstractInputfield(TextField);

const Inputs = AbstractInputfield(Input);

const InputBase = AbstractInputBase(Inputbase);

const Item = AbstractListItem(ListItem);

const CssBaseline = AbstractCssBaseLine(CssBaseLines);

const SwitchMe = AbstractSwitch(FormGroup,FormControlLabel,Switch);

const Menu = AbstractDefault(Menu_);

const Typography = AbstractDefault(typography);

const MenuItem = AbstractDefault(Menuitem_);

const AlignIcon = AbstractListItemIcon(ListItemIcon);

Row.propTypes = {
   props:PropTypes.bool.isRequired
}

export {
	 AlignIcon,
   Avatar,
	 Col,
   Typography,
	 Row,
	 Eye,
   O,
   Divider,
   MenuItem,
   CssBaseline,
   Img,
   InputBase,
   Ib,
	 Hide,
	 Inputs,
   SwitchMe,
	 Lists,
   Inputfield,
	 Drawer,
	 Cardplings,
	 CardDefault,
	 Nav,
	 Item,
   Menu,
   Paper,
};
