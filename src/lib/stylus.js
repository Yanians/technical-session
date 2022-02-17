
import  { alpha, styled, } from '@mui/material/styles';

import { makeStyles, withStyles  } from '@mui/styles';
import *as L from './index';

import PropTypes from 'prop-types';

export const Rotate20Deg = styled((props)=>{
   const {rotate, ...other} = props;
   return <L.Ib {...other} />
})(({theme, rotate})=>({
   transform:rotate ? 'rotate(-20deg' :'rotate(0deg)',
   transition:theme.transitions.create('transform',{
    duration:theme.transitions.duration.complex,   
   })
}));

const TryThisSignature = makeStyles(theme=>({
   root:{
   /*put stylesheet here...*/
   }
}));

export const ToggleShow = styled(props=>{
         const { toggle, ...other } = props;
         return <div {...other} />
  })(({ theme, toggle })=>({
       position:'fixed',
       top:13,
       marginLeft:theme.spacing(20)+10,
       width:'auto',
       marginTop:theme.spacing(15),
       padding:theme.spacing(3),
       border:'1px solid grey',
       background:"inherit",
       height:'auto',
       borderRadius:theme.shape.borderRadius,
       display:toggle ? 'block':'none',
       marginLeft:theme.spacing(2),
       zIndex:999,
     
       [theme.breakpoints.down('sm')]:{
           marginTop:45,
           width:'auto',
           marginRight:theme.spacing(2),
       },

       [theme.breakpoints.up('md')]:{
           width:'60%',
           marginLeft:31,
       },
  }));

const drawerStyleHOC = {
    scale:{
       background:props =>
       props.color === 'ash'    ? 'linear-gradient(360deg, #fafafa 0%, #fafafa 100%)':
       props.color === 'magnum' ? 'linear-gradient(180deg, #f1f8e9 .15%, #cfd8dc 50%)' : 
       props.color === 'chromite' ? 'linear-gradient(150deg, #263238 .15%, #263238 50%)' : 
       props.color === 'trigun' ? 'linear-gradient(25deg, #1a001a 30%, #33001a 90%)' : 
       props.color === 'reigun' ? 'linear-gradient(45deg, #880e4f 0%, #66004d 90%)' : 
       props.color === 'flame'  ? 'linear-gradient(180deg, #ffca28 0%, #f57c00 100%)' :undefined,
       boxShadow:props =>
       props.color === 'magnum' ? '0 1px 1px 1px rgba(255, 255, 255.9)' : 
       props.color === 'trigun' ? '0 1px 1px 1px rgba(51, 0, 0,.3)' : 
       props.color === 'reigun' ? '0 1px 1px 1px rgba(20451, 0, 38,.3)' : 
       props.color === 'flame'  ? '0 2px 3px 2px rgba(255, 163, 102,.3)' : undefined,
       borderTopLeftRadius:props=>props.topleft,
       borderTopRightRadius:props=>props.topright,
       borderBottomRightRadius:props=>props.bottomright,
       borderBottomLeftRadius:props=>props.bottomleft,
       marginRight:props=>props.right,
       position:props=>props.fixed ? 'fixed':props.absolute?'absolute':props.relative?'relative':props.static ? 'static':undefined,
       marginTop:props=>props.top,
      //  borderRight:props=>props.color === 'magnum' ? '1px solid rgba(128,128,128,.3) ':undefined,
      //  borderTop:props=>props.color === 'magnum' ? '1px solid rgba(128,128,128,.3) ':undefined,
       // borderBottom:props=>props.color === 'magnum' ? '1px solid rgba(128,128,128,.3) ':undefined,
       padding:props=>props.padding,
       marginBottom:props=>props.bottom,
       marginLeft:props=>props.left,
       color:'white',
       height:props=>props.height,
       width:props=>props.width,
    }
};

function Divwrapper(props){
const { classes,className,children, ...other } = props;
  return <div className={classes.scale+" "+className} {...other}>
            {children}
         </div>
};

Divwrapper.propTypes = {
   classes:PropTypes.object.isRequired,
 className:PropTypes.string,
   padding:PropTypes.string,
      left:PropTypes.string,
       top:PropTypes.string,
  children:PropTypes.node.isRequired,
    bottom:PropTypes.string,
  absolute:PropTypes.bool,
  relative:PropTypes.bool,
     fixed:PropTypes.bool,
     right:PropTypes.string,
  topright:PropTypes.number,
   topleft:PropTypes.number,
bottomright:PropTypes.number,
bottomleft:PropTypes.number,
    height:PropTypes.oneOf([PropTypes.string, 'auto']),
     width:PropTypes.string,
     color:PropTypes.oneOf(['magnum','trigun','reigun','flame','chromite','ash']),
};

export const Wrapper = withStyles(drawerStyleHOC)(Divwrapper);

export const ModBox = styled('button')(({theme,...other})=>({
    // ...theme.palette.background.dark,
    display:'flex',
    flexFlow:'row wrap',
    // background:'rgba(128,128,128, .5)',
    borderRadius:4,
    padding:theme.spacing(1),
    border:'2px dotted black',
    height:'auto',
}));
