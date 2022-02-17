
import * as React from 'react';

import cx from 'classnames';

/*MUI*/

import Grid from '@mui/material/Grid'; //able to use sx prop

import Button from '@mui/material/Button';

import CssBaseline from '@mui/material/CssBaseline';

import Container from '@mui/material/Container';

import Box from '@mui/material/Box';

import Card from '@mui/material/Card';

import TextField from '@mui/material/TextField';

import CardHeader from '@mui/material/CardHeader';

import CardMedia from '@mui/material/CardMedia';

import CardContent from '@mui/material/CardContent';

import CardActions from '@mui/material/CardActions';

import Hidden from '@mui/material/Hidden';

import Collapse from '@mui/material/Collapse';

import Avatar from '@mui/material/Avatar';

import IconButton from '@mui/material/IconButton';

// import Typography from '@mui/material/Typography';
import Typography from '@mui/material/Typography';

import  CardActionArea  from '@mui/material/CardActionArea';

// import Stack from '@mui/material/Stack';

export function Boxui(props){
    const {
        children,
        solidgrey1,
        solidgrey2, 
        solidgrey3, 
        solidgrey4, 
        dashgrey1, 
        dashgrey2, 
        dashgrey3, 
        dashgrey4,
        messenger,
        clip,
        nowrap,
        normal,
        ellipsis,
        none,
        block,
        inline,
        hidden,
        visible,
        youtube,
        facebook,
        snapchat,
        linkedin,
        instagram,
        pinterest,
        twitter,
        whatsapp,
        span,
        button,
        div,
        greenish,
        violetish,
        grownish,
        a,
        nav,
        l3,l5,l7,l9,
        form,
        autoComplete,
        noValidate,
        fullWidth,
        with70,
        inherit,pd1,pd2,pd3,pd4,pd5,pd6,pd7,pd8,pd9,
        auto,
        with50,
        m1px,m2px,m3px,m4px,m5px,m10px,m15px,
         } = props;

	const borders = {
         '1px dashed grey':dashgrey1,
         '2px dashed grey':dashgrey2,
         '3px dashed grey':dashgrey3,
         '4px dashed grey':dashgrey4,
         '1px solid grey':solidgrey1,
         '2px solid grey':solidgrey2,
         '3px solid grey':solidgrey3,
         '4px solid grey':solidgrey4
	}

	const backgroundColor = {
    'rgb(60,179,130)':greenish,
    'rgb(238, 130, 238)':violetish,
    'rgb(106, 90, 205)':grownish,
		'rgb(0, 132, 255)':messenger,
		'rgb(255, 48, 108)':instagram,
		'rgb(24, 119, 242)':facebook,
		'rgb(29, 161, 242)':twitter,
		'rgb(230, 0, 35)':pinterest,
		'rgb(22, 102, 197)':linkedin,
		'rgb(255, 252, 0)':snapchat,
		'rgb(255, 0, 0)':youtube,
		'rgb(37, 211, 102)':whatsapp,
	}

	const opacitys = {
		'0.3':l3,
		'0.7':l7,
        '0.5':l5,
        '0.9':l9,
	}

	const el = {
		'span':span,
		'button':button,
		'div':div,
		'a':a,
    'form':form,
		'nav':nav,
	};
  const margins = {
    '1px': m1px,
    '2px': m2px,
    '3px': m3px,
    '4px': m4px,
    '5px': m5px,
    '10px': m10px,
    '15px': m15px,
  };

   const paddings = {
     1:pd1,
     2:pd2,
     3:pd3,
     4:pd4,
     5:pd5,
     6:pd6,
     7:pd7,
     8:pd8,
     55:pd9
   };

   const displays ={
     'inline':inline,
     'block':block,
     'none':none,
   };

   const textOverFlows={
    'ellipsis':ellipsis,
    'clip':clip,
   };

   const overflows={
     'hidden':hidden,
     'visible':visible,
   };

  const flexWidth = {
     '100%':fullWidth,
     'inherit':inherit,
     'auto':auto,
     '70%':with70,
     '50%':with50,
  };

  const whitespace={
    'nowrap':nowrap,
    'normal':normal,
  };

      return <Box 
                  component={cx(el)}
                  autoComplete={autoComplete} 
                  noValidate={noValidate}
                  display={cx(displays)}
                  textOverFlow={cx(textOverFlows)}
                  overflow={cx(overflows)}
                  whiteSpace={cx(whitespace)}
                  fullWidth
                  sx={{
                        border:cx(borders), 
                        opacity:cx(opacitys), 
                        bgcolor:cx(backgroundColor),
                        m:cx(margins),
                        p:cx(paddings),
                        zIndex:'-100',
                        width:{
                          xs:cx(flexWidth),
                          sm:cx(flexWidth),
                          md:cx(flexWidth),
                          lg:cx(flexWidth),
                          xl:cx(flexWidth),
                        },
                      }}
                      {...props}
                        >
                      }
              {children}
             </Box>
}

export class Buttonui extends React.Component{render(){

	const {primary, className, fullWidth, small, sIcon, eIcon, large, fab, medium, defaults, inherit, contained, outlined, onClick, name, hrefoutlined, secondary, disabled, disableElevation,
         lidgid, messenger,instagram,facebook,twitter,pinterest,linkedin,snapchat,youtube,whatsapp,
   } = this.props;
   
   const colors = {
    '#cfe8fc':lidgid,
    'rgb(0, 132, 255)':messenger,
    'rgb(255, 48, 108)':instagram,
    'rgb(24, 119, 242)':facebook,
    'rgb(29, 161, 242)':twitter,
    'rgb(230, 0, 35)':pinterest,
    'rgb(22, 102, 197)':linkedin,
    'rgb(255, 252, 0)':snapchat,
    'rgb(255, 0, 0)':youtube,
    'rgb(37, 211, 102)':whatsapp,
};

	   if(hrefoutlined){

	   	  return <Button onClick={onClick} 
                       size={small ? 'small' :medium ? 'medium' :large ? 'large':undefined}  
                       color={defaults ? 'default':primary ? 'primary':secondary ? 'secondary':inherit ? 'inherit':undefined} 
                      fullWidth={fullWidth}
                       variant="outlined" 
                       href="#outlined-buttons" 
                       disabled={disabled}
                       startIcon={sIcon}
                       endIcon={eIcon} 
                       className={className}
                       disableElevation={disableElevation}>
	   	             {name}
	   	         </Button>

	   }else if(outlined){

        return <Button onClick={onClick} 
                       size={small ? 'small' :medium ? 'medium' :large ? 'large':undefined} 
                       color={defaults ? 'default':primary ? 'primary':secondary ? 'secondary':inherit ? 'inherit':undefined}
                       fullWidth={fullWidth} 
                       variant="outlined" 
                       disabled={disabled} 
                       startIcon={sIcon}
                       endIcon={eIcon}
                       className={className}
                       style={{color:cx(colors),border:'1px solid '+cx(colors)}}
                       disableElevation={disableElevation}>
           {name}
         </Button>
		
	   }else if(contained){

	   	 return <Button onClick={onClick} 
                      size={small ? 'small' :medium ? 'medium' :large ? 'large':undefined}  
                      color={defaults ? 'default':primary ? 'primary':secondary ? 'secondary':inherit ? 'inherit':undefined}
                      fullWidth={fullWidth} 
                      variant="contained" 
                      disabled={disabled}
                      startIcon={sIcon}
                      className={className} 
                      disableElevation={disableElevation}>
           {name}
         </Button>

	   }else if(fab){

       return <Button onClick={onClick} 
                      size={small ? 'small' :medium ? 'medium' :large ? 'large':undefined} 
                      fullWidth={fullWidth} 
                      color={defaults ? 'default':primary ? 'primary':secondary ? 'secondary':inherit ? 'inherit':undefined}
                      variant="fab" 
                      disabled={disabled} 
                      startIcon={sIcon}
                      disableElevation={disableElevation}>
           {name}
         </Button>

     }else{

	   	return <Button onClick={onClick}
                     startIcon={sIcon} 
                     size={small ? 'small' :medium ? 'medium' :large ? 'large':undefined}  
                     color={defaults ? 'default':primary ? 'primary':secondary ? 'secondary':inherit ? 'inherit':undefined}
                     fullWidth={fullWidth} 
                     variant="text" 
                     disabled={disabled} 
                     disableElevation={disableElevation} >
           {name}
         </Button>
	   }
}}

export class Gridui extends React.Component{

  render(){

     const {

     	 children,container,item,columns,auto, //props

     	 nospace,s1,s2,s3,s4,s5,s6,s7,s8,s9,s10, //spacing

     	 wrap,nowrap,wrapreverse, //wrap

     	 stretch,center,flexend,flexstart,spacebetween,spacearound, //alignContent

     	 blackborder, greenborder, //style

     	 spaceevenly, //justify

     	 column,colreverse,rowreverse,//direction

       flex, table, grid, inline, block, none, // display

       baseline,length,sub,supers,top,textTop,middle,bottom,textBottom,initial,inherit, //vertical-align

       xs1, xs2, xs3, xs4, xs5, xs6, xs7, xs8, xs9, xs10, xs11, xs12,

       sm1, sm2, sm3, sm4, sm5, sm6, sm7, sm8, sm9, sm10, sm11, sm12,

       md1, md2, md3, md4, md5, md6, md7, md8, md9, md10, md11, md12,

       lg1, lg2, lg3, lg4, lg5, lg6, lg7, lg8, lg9, lg10, lg11, lg12,

       xl1, xl2, xl3, xl4, xl5, xl6, xl7, xl8, xl9, xl10, xl11, xl12,

       ...other

      } = this.props;

     const styles = {

     	border:{
     	'1px solid black':blackborder,
     	'1px solid green':greenborder,
     },
     alignment:{
         baseline,
         length,
         sub,
        'super':supers,
         top,
         textTop,
         middle,
         bottom,
         textBottom,
         initial,
         inherit,
  },
   displays:{
        flex,
        table,
        grid,
        inline,
        block,
        none,
       },
  };

        if(item){
           return <Grid item
                   xs={xs1?1:xs2?2:xs3?3:xs4?4:xs5?5:xs6?6:xs7?7:xs8?8:xs9?9:xs10?10:xs11?11:xs12?12:undefined} 
                   sm={sm1?1:sm2?2:sm3?3:sm4?4:sm5?5:sm6?6:sm7?7:sm8?8:sm9?9:sm10?10:sm11?11:sm12?12:undefined} 
                   md={md1?1:md2?2:md3?3:md4?4:md5?5:md6?6:md7?7:md8?8:md9?9:md10?10:md11?11:md12?12:undefined} 
                   lg={lg1?1:lg2?2:lg3?3:lg4?4:lg5?5:lg6?6:lg7?7:lg8?8:lg9?9:lg10?10:lg11?11:lg12?12:undefined}
                   xl={xl1?1:xl2?2:xl3?3:xl4?4:xl5?5:xl6?6:xl7?7:xl8?8:xl9?9:xl10?10:xl11?11:xl12?12:undefined}
                   style={{
                        display:cx(styles.displays),
                 justifyContent:flexstart?'flex-start':flexend?'flex-end':spacearound?'space-around':spacebetween?'space-between':spaceevenly?'space-evenly':center?'center':undefined,
                     alignItems:flexstart?'flex-start':flexend?'flex-end':baseline?'baseline':stretch?'stretch':center?'center':undefined,
                         border:cx(styles.border),
                  verticalAlign:cx(styles.alignment)
                 }}
                   columns={columns} 
                   zeroMinWidth={this.props.zeroMinWidth}
                   {...other}
             >          
                  { children }
                 </Grid>    
        }else if(container){

    	return <Grid container wrap={wrap?'wrap':nowrap?'nowrap':wrapreverse?'wrap-reverse':undefined}
    	                       justifyContent={flexstart?'flex-start':flexend?'flex-end':spacearound?'space-around':spacebetween?'space-between':spaceevenly?'space-evenly':center?'center':undefined} 
    	                       alignItems={flexstart?'flex-start':flexend?'flex-end':baseline?'baseline':stretch?'stretch':center?'center':undefined}  
    	                       alignContent={flexstart?'flex-start':flexend?'flex-end':spacearound?'space-around':spacebetween?'space-between':stretch?'stretch':center?'center':undefined}
    	                       direction={rowreverse?'row-reverse':column?'column':colreverse?'column-reverse':undefined} 
    	                       spacing={nospace?0:s1?1:s2?2:s3?3:s4?4:s5?5:s6?6:s7?7:s8?8:s9?9:s10?10:undefined}
    	                       style={{border:cx(styles.border)}}
                             {...other}
             >
                  { children }
               </Grid>  	

        }else if(auto){

    	return <Grid item
                    xs={auto} 
                    sm={auto} 
                    md={auto} 
                    lg={auto}
                    xl={auto}
                    spacing={nospace?0:s1?1:s2?2:s3?3:s4?4:s5?5:s6?6:s7?7:s8?8:s9?9:s10?10:undefined}
                   style={{
                            display:cx(styles.displays),
                     justifyContent:flexstart?'flex-start':flexend?'flex-end':spacearound?'space-around':spacebetween?'space-between':spaceevenly?'space-evenly':center?'center':undefined,
                         alignItems:flexstart?'flex-start':flexend?'flex-end':baseline?'baseline':stretch?'stretch':center?'center':undefined,
                             border:cx(styles.border),
                      verticalAlign:cx(styles.alignment)
                   }}
             >
                 { children }
               </Grid>	
        }else{
            return <Grid item container zeroMinWidth
                     spacing={nospace?0:s1?1:s2?2:s3?3:s4?4:s5?5:s6?6:s7?7:s8?8:s9?9:s10?10:undefined}
                     xs={xs1?1:xs2?2:xs3?3:xs4?4:xs5?5:xs6?6:xs7?7:xs8?8:xs9?9:xs10?10:xs11?11:xs12?12:undefined} 
                     sm={sm1?1:sm2?2:sm3?3:sm4?4:sm5?5:sm6?6:sm7?7:sm8?8:sm9?9:sm10?10:sm11?11:sm12?12:undefined} 
                     md={md1?1:md2?2:md3?3:md4?4:md5?5:md6?6:md7?7:md8?8:md9?9:md10?10:md11?11:md12?12:undefined} 
                     lg={lg1?1:lg2?2:lg3?3:lg4?4:lg5?5:lg6?6:lg7?7:lg8?8:lg9?9:lg10?10:lg11?11:lg12?12:undefined}
                     xl={xl1?1:xl2?2:xl3?3:xl4?4:xl5?5:xl6?6:xl7?7:xl8?8:xl9?9:xl10?10:xl11?11:xl12?12:undefined}
                   style={{
                            display:cx(styles.displays),
                     justifyContent:flexstart?'flex-start':flexend?'flex-end':spacearound?'space-around':spacebetween?'space-between':spaceevenly?'space-evenly':center?'center':undefined,
                         alignItems:flexstart?'flex-start':flexend?'flex-end':baseline?'baseline':stretch?'stretch':center?'center':undefined,
                             border:cx(styles.border),
                      verticalAlign:cx(styles.alignment)
                   }}
                   {...other}
             >
                 { children }
               </Grid>  
        }
      
}}

export class Containerui extends React.Component{render(){

	const { fixed, xs, sm, md, lg,xl, string, className, children, disableGutters, vh100, lidgid, messenger, id, tabIndex,
	        youtube,
	        facebook,
	        snapchat,
	        linkedin,
	        instagram,
	        pinterest,
	        twitter,
	        whatsapp, } = this.props;

    const maxwidth = {
    	'xs':xs,
    	'sm':sm,
    	'md':md,
    	'lg':lg,
    	'xl':xl,
    	string,
    };

    const bgcolors = {
    '#cfe8fc':lidgid,
    'rgb(0, 132, 255)':messenger,
		'rgb(255, 48, 108)':instagram,
		'rgb(24, 119, 242)':facebook,
		'rgb(29, 161, 242)':twitter,
		'rgb(230, 0, 35)':pinterest,
		'rgb(22, 102, 197)':linkedin,
		'rgb(255, 252, 0)':snapchat,
		'rgb(255, 0, 0)':youtube,
		'rgb(37, 211, 102)':whatsapp,
    };

    const containerheight = {
    	'100vh':vh100,
    }

      if(fixed){

	return <React.Fragment>
	         <CssBaseline />
		       <Container fixed={fixed} tabIndex={tabIndex} id={id} className={className}>
		          <Box sx={{bgcolor:'#cfe8fc',height:'100vh',maxWidth:'100vh'}}>
		            {children}
		          </Box>
		       </Container>
	      </React.Fragment> 

	}else if(xl || xs || md || lg || sm ){
        return <React.Fragment>
           <CssBaseline />
           <Container tabIndex={tabIndex} maxWidth={cx(maxwidth)} disableGutters={disableGutters} id={id} className={className}>
              <Box sx={{bgcolor:cx(bgcolors),height:'auto'}}>
                 {children}
              </Box>
           </Container>
        </React.Fragment> 

  }else if(disableGutters){
        return <React.Fragment>
	         <CssBaseline />
		       <Container disableGutters tabIndex={tabIndex} id={id} className={className}>
		          <Box sx={{bgcolor:cx(bgcolors),height:'100vh'}}>
		            {children}
		          </Box>
		       </Container>
	      </React.Fragment> 		
	}else{
		  return <React.Fragment>
	         <CssBaseline />
		       <Container tabIndex={tabIndex} className={" "+className} id={id} className={className}>
		          <Box sx={{bgcolor:cx(bgcolors), height:cx(containerheight)}} >
		            {children}
		          </Box>
		       </Container>
	      </React.Fragment> 		
	}      
}}


export class Cardui extends React.Component{render(){

  const { onefourth,children,raised,twothird,onehalf,outlined,contained } = this.props;

  const variants = {
     'outlined':outlined,
     'contained':contained,
  };

  const minWidth = {
    275:onefourth,
    345:twothird,
    500:onehalf,
  };

  return(
     <Card style={{minWidth:cx(minWidth)}} 
           variant={cx(variants)}
           raised={raised}
            >
       {children}
     </Card>
    );
}}   
  
export class CardContentui extends React.Component{render(){
  const { children, className, component } = this.props;

  return (
    <CardContent className={className} component={component} >
       {children}
    </CardContent>
    )
}}

export class CardActionui extends React.Component{render(){
  const { disablespacing, className,classes,children } = this.props;

     if(disablespacing){
    return<React.Fragment>
           <CardActions  className={className} classes={classes} disableSpacing>
             {children}
           </CardActions>
          </React.Fragment> 
    }else{
      return<React.Fragment>
             <CardActions  className={className} classes={classes}>
               {children}
             </CardActions>
          </React.Fragment> 
    }
}}

export class CardMediaui extends React.Component{render(){

  const { className,src, title,video,audio,picture,iframe,img, image,h } = this.props;
    const options = {
      'video':video,
      'audio':audio,
      'iframe':iframe,
      'picture':picture,
      'img':img,
    }

    if(img || audio || iframe || picture || video){
        return(
           <CardMedia style={{height:h}} 
                   image={image} 
                   component={cx(options)}
                   src={src} 
                   title={title}
                   className={className} /> 
          );  
         }else{

          return(
           <CardMedia style={{height:h}} 
                   image={image} 
                   title={title}
                   className={className} /> 
          );
    } 
  }
}

export class CardActionAreaui extends React.Component{render(){
   const { children } = this.props;
  return(
      <CardActionArea >
          {children}
      </CardActionArea>
    )
}}

export class Typographyui extends React.Component{render(){

  const { h1,h3, h4, h5, h6,h2,body1,body2, textContent, div, span, poster,button,classes,className,noWrap,sx,
    center,right,left,justify, block,inline,paragraph,gutterBottom,
         shadowsofia,shadow1red,shadow2red,shadow3red,shadow1grey,shadow2grey,shadow3grey,shadow1black,shadow2black,shadow3black,shadowblack,shadowgrey,shadowred,shadowgreylight,
         grownish,greenish,violetish,facebook,messenger,
         youtube,whatsapp,linkedin,instagram,twitter,pinterest,snapchat,regular,//colors
         nega1,positive1,positive2,positive3,positive4,positive5,_5,subtitle1,subtitle2,caption,
         monospace,arial,timesnewroman,tahoma,georgia,garamond,cursive,sansserif,cursive_mt,fantasy,sofia, // font-family
         uppercase,lowercase,initial,capitalize,inherit,
         overline,linethrough,underline, //
         normaltext,italic,oblique, //font-style
         normal,bold, // font-weight
         responsiveText1,responsiveText2,responsiveText3,responsiveText4,responsiveText5,responsiveText6,responsiveText7,responsiveText8,responsiveText9,responsiveText10,responsiveText11,responsiveText12,px40,px18,px12,px16,px24,px30,r24,r32,r18,r16,r12,r36,r72, // font-size 10vw
        ...other
   } = this.props;
   
  const options = {
    'h1':h1,
    'h3':h3,
    'h4':h4,
    'h5':h5,
    'h6':h6,
    'h2':h2,
    'span':body1,
    'p':body2,
    'subtitle1':subtitle1,
    'subtitle2':subtitle2,
    'body1':body1,
    'body2':body2,
    'caption':caption,
    'inherit':inherit,
  };    

  const fontfamily = {
    '\'Sofia\',sans-serif':sofia,
    '\'Courier New\',Courier,monospace':monospace, //monospace fonts
    '\'Trebuchet MS\', Helvetica, sans-serif':sansserif, //sans-serif fonts
    'Arial,Helvetica,\'sans-serif\'':arial, //arial fonts
    '\'Times New Roman\',Times,serif':timesnewroman,
    'Tahoma,Verdana,sans-serif':tahoma,
    'Georgia,serif':georgia, // georgia fonts
    'Copperplate,Papyrus,fantasy':fantasy,
    'Garamond,serif':garamond, //garamond fonts
    '\'Brush Script\', cursive':cursive, //cursive fonts
    '\'Brush Script MT\', cursive':cursive_mt, //cursive MT fonts
  };
  
  const el = {
    'div':div,
    'span':span,
    'button':button,
  };

  const fontsizing = {
   '1vw':responsiveText1,
   '2vw':responsiveText2,
   '3vw':responsiveText3,
   '4vw':responsiveText4,
   '5vw':responsiveText5,
   '6vw':responsiveText6,
   '7vw':responsiveText7,
   '8vw':responsiveText8,
   '9vw':responsiveText9,
   '10vw':responsiveText10,
   '11vw':responsiveText11,
   '12vw':responsiveText12,
   '2.5em':px40,
   '1.125em':px18,
   '1em':px16,
   '0.75em':px12,
   '1.5em':px24,
   '1.875em':px30,
     'normal small-caption white 100%/72px cursive,\'Helvetica\'':r72,
     '100%/24px':r24,
     '100%/32px':r32,
     '100%/18px':r18,
     '100%/16px':r16,
     '100%/12px':r12,
     '100%/36px':r36,
  };

  const shadows = {
    '1px 1px 1px black':shadowblack,
    '1px 2px 1px black':shadow1black,
    '1px 2px 2px black':shadow2black,
    '2px 2px 2px black':shadow3black,
    '1px 1px 1px red':shadowred,
    '3px 3px 3px #ababab':shadowsofia,
    '1px 2px 1px red':shadow1red,
    '1px 2px 2px red':shadow2red,
    '2px 2px 2px red':shadow3red,
    '1px 1px 1px grey':shadowgrey,
    '1px 1px 1px rgba(163,167,167,.6)':shadowgreylight,
    '1px 1px 2px grey':shadow1grey,
    '1px 2px 1px grey':shadow2grey,
    '2px 2px 2px grey':shadow3grey,
  };

  const colors = {
    'rgb(0,0,0)':regular,
    'rgb(60,179,130)':greenish,
    'rgb(238, 130, 238)':violetish,
    'rgb(106, 90, 205)':grownish,
    'rgb(0, 132, 255)':messenger,
    'rgb(255, 48, 108)':instagram,
    'rgb(24, 119, 242)':facebook,
    'rgb(29, 161, 242)':twitter,
    'rgb(230, 0, 35)':pinterest,
    'rgb(22, 102, 197)':linkedin,
    'rgb(255, 252, 0)':snapchat,
    'rgb(255, 0, 0)':youtube,
    'rgb(37, 211, 102)':whatsapp,
  };

  const fontstyles = {
    'normal':normaltext,
    'oblique':oblique,
    'italic':italic,
  };

  const fontweight = {
    'bold':bold,
    'normal':normal,
  };

  const spacing = {
    '-1px':nega1,
    '0.5px':_5,
    '1px':positive1,
    '2px':positive2,
    '3px':positive3,
    '4px':positive4,
    '5px':positive5,
  };

  const transform = {
    'uppercase':uppercase,
    'lowercase':lowercase,
    'capitalize':capitalize,
    'initial':initial,
    'inherit':inherit,
  };

  const decoration = {
      'overline':overline,
      'line-through':linethrough,
      'underline':underline,
  };
       return(
            <Typography style={{
                           textShadow:cx(shadows),
                           letterSpacing:cx(spacing),
                           textTransform:cx(transform),
                           textDecoration:cx(decoration),
                           fontWeight:cx(fontweight),
                           fontStyle:cx(fontstyles),
                           fontFamily:cx(fontfamily),
                           fontSize:cx(fontsizing),
                           color:cx(colors)}}
                           variant={cx(options)}
                           component={cx(el)}
                           gutterBottom={gutterBottom}
                           classes={classes}
                           noWrap={noWrap}
                           sx={sx}
                           className={className}
                           paragraph={paragraph}
                           display={block ? 'block' : inline ? 'inline' :initial ? 'initial': undefined }
                           align={ center ? 'center' : left ? 'left' :right ? 'right' : justify ? 'justify' : undefined } 
                           {...other}
                          >
                {textContent}
            </Typography>
       );      
 }
}

export class Inputfieldui extends React.Component{
     
     constructor(props){
        super(props);
        this.handleinput = this.handleinput.bind(this);
        this.state = {textareavalue:''};
     }

     handleinput(event){
      console.log(event);
      this.setState({textareavalue:event.target.value});
     };

  render(){
   const {
       helperText, label,disabled,autoComplete,required,value,onChange,placeholder,defaultValue,readonly,error,
       multiline,_1,_2,_3,_4,_5,_6,rows,fullWidth,medium,small,
       outlined,filled,standard, // variants
       standardnumber, outlinednumber,fillednumber,
       top1,top2,top3,top4,top5,top6,top7,top8,top9,top10,top11,top12, //marigin-top
       outlinederror,
       standardbasic,filledbasic,outlinedbasic,
       standardsearch,outlinedsearch,filledsearch,
       standardreadonlyinput,outlinedreadonlyinput,filledreadonlyinput, // options
      text,password,search,number,email, //types
      standardpasswordinput,outlinedpasswordinput,filledpasswordinput,
    } = this.props;
    
   const options = {
    'outlined-basic':outlinedbasic,
    'filled-basic':filledbasic,
    'standard-basic':standardbasic,

    'standard-search':standardsearch,
    'outlined-search':outlinedsearch,
    'filled-search':filledsearch,

    'outlined-error':outlinederror,
    
    'standard-read-only-input':standardreadonlyinput,
    'outlined-read-only-input':outlinedreadonlyinput,
    'filled-read-only-input':filledreadonlyinput,

    'standard-number':standardnumber,
    'outlined-number':outlinednumber,
    'filled-number':fillednumber,

    'standard-password-input':standardpasswordinput,
    'outlined-password-input':outlinedpasswordinput,
    'filled-password-input':filledpasswordinput,
   };

   const variants = {
    'outlined':outlined,
    'filled':filled,
    'standard':standard,
   };
   
   const types = {
    'text':text,
    'password':password,
    'search':search,
    'number':number,
    'email':email,
   };

   const topadjust = {
    '1px':top1,
    '2px':top2,
    '3px':top3,
    '4px':top4,
    '5px':top5,
    '6px':top6,
    '7px':top7,
    '8px':top8,
    '9px':top9,
    '10px':top10,
    '11px':top11,
    '12px':top12,
   }

   const sizes = {
    'small':small,
    'medium':medium,
   }
          if(disabled){
               return <TextField 
                           disabled
                           size={cx(sizes)}
                           value={value}
                           variant={cx(variants)} 
            />     
          }else if(readonly){
               return <TextField id="read-only-input"
                           value={value}
                           size={cx(sizes)}
                           inputProps={{readOnly:true,}}
                           variant={cx(variants)} 
                      />     
          }else if(multiline){
            const maxrows = {
               1:_1,
               2:_2,
               3:_3,
               4:_4,
               5:_5,
               6:_6,
            };
               return <TextField 
                       multiline
                       id="outline-multiline-flexible"
                       placeholder={placeholder}
                       maxRows={cx(maxrows)}
                       rows={rows}
                       label={label}
                       value={this.state.textareavalue}
                       onChange={this.handleinput}
                       fullWidth={fullWidth}
                       variant={cx(variants)}
                     />     
          }else{  
         return <TextField id={cx(options)}
                       error={error}
                       size={cx(sizes)}
                       fullWidth={fullWidth}
                       placeholder={placeholder}
                       helperText={helperText} 
                       required={required}
                       type={cx(types)} 
                       label={label}
                       value={value}
                       style={{marginTop:cx(topadjust)}}
                       onChange={onChange}
                       autoComplete={autoComplete}
                       defaultValue={defaultValue}
                       variant={cx(variants)} 
            />
       }       
 }
}


export class Stackui extends React.Component{render(){
  
  const {
          container, item, children, nospace, s1, auto, s2, s3, s4, s5, s6, s7, s8, s9, s10, s11, s12,
        } = this.props;

  let output = [];

        if(container){

          output = (<Grid container
                          spacing={nospace ? 0 : s1 ? 1 : s2 ? 2 :s3 ? 3 : s4 ? 4 :s5 ? 5 : s6 ? 6 :s7 ? 7 : s8 ? 8 :s9 ? 9 :s10 ? 10 : undefined}>                          
                             {children}
                    </Grid>
                   ); 

        }else if(item && (s1 ? s1 : s2 ? s2 : s3 ? s3 : s4 ? s4 : s5 ? s5 : s6 ? s6 : s7 ? s7 :s8 ? s8 :s9 ? s9 : s10 ? s10 :s11 ? s11 : s12 ? s12 : undefined)){
              output =  (<Grid item 
                           xs={s1 ? 1 : s2 ? 2 :s3 ? 3 : s4 ? 4 :s5 ? 5 : s6 ? 6 :s7 ? 7 : s8 ? 8 :s9 ? 9 :s10 ? 10 :s11 ? 11 : s12 ? 12 : undefined}
                           sm={s1 ? 1 : s2 ? 2 :s3 ? 3 : s4 ? 4 :s5 ? 5 : s6 ? 6 :s7 ? 7 : s8 ? 8 :s9 ? 9 :s10 ? 10 :s11 ? 11 : s12 ? 12 : undefined}
                           md={s1 ? 1 : s2 ? 2 :s3 ? 3 : s4 ? 4 :s5 ? 5 : s6 ? 6 :s7 ? 7 : s8 ? 8 :s9 ? 9 :s10 ? 10 :s11 ? 11 : s12 ? 12 : undefined}
                           lg={s1 ? 1 : s2 ? 2 :s3 ? 3 : s4 ? 4 :s5 ? 5 : s6 ? 6 :s7 ? 7 : s8 ? 8 :s9 ? 9 :s10 ? 10 :s11 ? 11 : s12 ? 12 : undefined}
                           xl={s1 ? 1 : s2 ? 2 :s3 ? 3 : s4 ? 4 :s5 ? 5 : s6 ? 6 :s7 ? 7 : s8 ? 8 :s9 ? 9 :s10 ? 10 :s11 ? 11 : s12 ? 12 : undefined}
                      >
                       {children}
                     </Grid>
                    );
     
        }else if(auto){
             
          output = (<Grid item xs={auto} sm={auto} md={auto} lg={auto} xl={auto} >
                   {children}
                 </Grid>
                ); 
        }else if(container && item){
           output = (<Grid container item
                           xs={s1 ? 1 : s2 ? 2 :s3 ? 3 : s4 ? 4 :s5 ? 5 : s6 ? 6 :s7 ? 7 : s8 ? 8 :s9 ? 9 :s10 ? 10 :s11 ? 11 : s12 ? 12 : undefined}
                           sm={s1 ? 1 : s2 ? 2 :s3 ? 3 : s4 ? 4 :s5 ? 5 : s6 ? 6 :s7 ? 7 : s8 ? 8 :s9 ? 9 :s10 ? 10 :s11 ? 11 : s12 ? 12 : undefined}
                           md={s1 ? 1 : s2 ? 2 :s3 ? 3 : s4 ? 4 :s5 ? 5 : s6 ? 6 :s7 ? 7 : s8 ? 8 :s9 ? 9 :s10 ? 10 :s11 ? 11 : s12 ? 12 : undefined}
                           lg={s1 ? 1 : s2 ? 2 :s3 ? 3 : s4 ? 4 :s5 ? 5 : s6 ? 6 :s7 ? 7 : s8 ? 8 :s9 ? 9 :s10 ? 10 :s11 ? 11 : s12 ? 12 : undefined}
                           xl={s1 ? 1 : s2 ? 2 :s3 ? 3 : s4 ? 4 :s5 ? 5 : s6 ? 6 :s7 ? 7 : s8 ? 8 :s9 ? 9 :s10 ? 10 :s11 ? 11 : s12 ? 12 : undefined}
                    >
                   {children}
                 </Grid>
                ); 
        }else{
             output = (<Grid item >
                   {children}
                 </Grid>
                ); 
        }
     return output;     
}}

export class Hideui extends React.Component{render(){
  const {
    children,
    xsup, 
    xsdown,
    smup,
    smdown,
    mdup,
    mddown,
    lgdown,
    lgup,
    xlup,
    xldown,
    onlyXs,
    onlyXsSm,
    onlyMdLgXl,
    onlySmMdLgXl,
  } = this.props;

      if(xsup){
          return <Hidden xsUp>
              {children}
          </Hidden>      
        
         }else if(xsdown){
           return<Hidden xsDown>
             {children}
          </Hidden>         
      }else if(smup){
         return<Hidden smUp>
             {children}
          </Hidden>      
      }else if(smdown){
        return<Hidden smDown>
             {children}
          </Hidden>      
      }else if(mdup){
        return <Hidden mdUp>
             {children}
          </Hidden>      
      }else if(mddown){
        return <Hidden mdDown>
             {children}
          </Hidden>      
      }else if(lgdown){
         return <Hidden lgDown>
             {children}
          </Hidden>      
      }else if(lgup){
        return <Hidden lgUp>
             {children}
          </Hidden>      
      }else if(xlup){
         return <Hidden xlUp>
             {children}
          </Hidden>      
      }else if(xldown){
         return <Hidden xlDown>
             {children}
          </Hidden>      
      }else if(onlyXsSm){
        return <Hidden only={['xs','sm']}>
             {children}
          </Hidden>      
      }else if(onlyXs){
          return <Hidden only="xs">
             {children}
          </Hidden>      
      }else if(onlySmMdLgXl){
          return <Hidden only={['sm','md','lg','xl']}>
             {children}
          </Hidden>      
      }else if(onlyMdLgXl){
          return <Hidden only={['md','lg','xl']}>
             {children}
          </Hidden>      
      }else{
        return <Hidden {...this.props} />
      }
  
}}