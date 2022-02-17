import React from 'react';

import PropTypes from 'prop-types';

import samplenavBackgroundImage from '../images/circle-bubble.jpg';

import { ThemeProvider, createBox,createTheme,palette, } from '@mui/system';

import {green, common,deepPurple,amber,blue,blueGrey,brown, cyan, deepOrange,grey,indego,lightBlue,lightGreen, lime,orange, pink, purple, red, teal, yellow,}  from '@mui/material/colors';

import {alpha, withStyles,useTheme,createMuiTheme,styled, } from '@mui/material/styles';

import { makeStyles } from '@mui/styles';

const customTheme = createTheme({

      components:{
        MyThemeComponent:{

           styleOverrides:{
                
                root:{
                  color:'darkslategray',
                },

                primary:{
                  color:'darkblue',
                },

                secondary:{
                   color:'darkred',
                   backgroundColor:'pink'
                },
           },

           variants:[
              {
                props:{variant:'dashed',color:'primary'},

                style:{
                  border:'1px dashed darkblue',
                },
              },

              {
                props:{variant:'dashed',color:'secondary'},

                style:{
                  border:'1px dashed darkred',
                },
              },
            ],
         },
      },
});

const MyThemeComponents = styled('div',{
  shouldForwardProp:(prop) => prop !== 'color' && prop !== 'variant' && prop !== 'sx',
               name:'MyThemeComponents',
               slot:'Root',
    overridesResolver:(props, styles) =>[
        styles.root,
        props.color === 'primary'&& styles.primary,
        props.color === 'secondary' && styles.secondary,
    ],
})(({ theme }) => ({
  backgroundColor:'aliceblue',
  padding:theme.spacing(1),
}));

const DefaultTheme = createTheme({
     width:'auto',
     height:'auto',
     padding:'0 0',
     margin:'0 0',
     border:'5px solid grey',
     borderRadius:props=>props.radius,
     bgColor:props=>props.color,
});


const Box = createBox({DefaultTheme});

Box.propTypes = {
  color:PropTypes.string,
  radius:PropTypes.string,
};

Box.defaultProps = {
  color:'',
  radius:'',
};

export default Box;

export const theme = createTheme({

  breakpoints:{
    values:{
      xs:0,
    duos:400,
      sm:600,
      md:960,
      lg:1280,
      xl:1920,
    },
  },

  shape:{
   borderRadius60:{
     border:'transparent',
     borderRadius:'6px',
  },
},

  // linearGrey:{
  //   background:'linear-gradient(50deg, #f2f2f2 50%, #ffffff 90%)',
  //  },

  palette:{
       
    neutral:{
     main:'red',
    },

    type:'dark',

    constrastThreshold:3,
    tonalOffset:0.2,

    primary:{
       main:grey[600],
       light:'#0066ff',
       contrastText:'white',
    },

    secondary:{
       main:blue[700],
    },

    ripple:{
      main:'green',
    },

    typography:{
      fontFamily:'Quicksand',
      fontWeightLight:400,
      fontWeightRegular:500,
      fontWeightMedium:600,
      fontWeightBold:700,
    },
  },
});

export const TP =props=>{
    const{ children,} = props;
      return <ThemeProvider theme={theme}>{children}</ThemeProvider>
}

const miniDrawerWidth = 200;

const responsiveDrawerWidth = 180;

/*******************************************************************RESPONSIVE DRAWER*************************************************************/

export const responsiveDrawer = makeStyles((theme)=>({

     root:{
       display:'flex',
       flexGrow:1,
     },

     header: {
        fontWeight: 900,
        minWidth: 0,
        fontSize: 18,
     },

     drawer:{
         [theme.breakpoints.up('sm')]:{
            width:responsiveDrawerWidth,
            flexShrink:0,
         },
      },   

      appBar:{
          [theme.breakpoints.up('sm')]:{
          width:`calc(100% - ${responsiveDrawerWidth}px)`,
         },
      },

      menuButton:{
         marginRight:theme.spacing(2),
         [theme.breakpoints.up('sm')]:{
            display:'none',
         },
      },

      toolbar:theme.mixins.toolbar,

      search:{
             border:'1px dotted grey',
             position:'relative',
             borderRadius:theme.shape.borderRadius,
             backgroundColor:alpha(theme.palette.common.white, 0.15),
             '&:hover':{
              backgroundColor:alpha(theme.palette.common.white, 0.25),
             },
             marginRight:theme.spacing(2),
             marginLeft:0,
             width:'100%',

             [theme.breakpoints.up('sm')]:{
                width:'auto'  ,
             },
       },

         searchIcon:{
             position:'absolute',
             padding:theme.spacing(0,2),
             height:'100%',
             pointerEvents:'none',
             display:'flex',
             alignItems:'center',
             justifyContent:'center',
         },

         inputRoot:{
            color:'inherit',
         },

         inputInput:{
            padding:theme.spacing(1,1,1,0),
            //vertical padding + font size from search icon
            paddingLeft:`calc(1em + ${theme.spacing(4)}px)`,
            transition:theme.transitions.create('width'),
            [theme.breakpoints.up('sm')]:{
              width:'18ch',
              '&:focus':{
               width:'24ch',
              },
            },
         },

     paperWidth:{
         width:responsiveDrawerWidth,
     },

     content:{
         flexGrow:1,
         flexShrink:0,
         width:'100%',
         height:'auto',
     },
}));

/******************************************************* MINI DRAWER *******************************************************************/
export const miniDrawer = makeStyles(theme=>({
      
      root:{
        display:'flex',
        flexGrow:1,
      },
      
      drawer:{
          width:miniDrawerWidth,
          flexShrink:0,
          whiteSpace:'nowrap',
      },

      drawerOpen:{
        width:miniDrawerWidth,
        transition:theme.transitions.create('width',{
          easing:theme.transitions.easing.sharp,
          duration:theme.transitions.duration.enteringScreen,
        }),
        [theme.breakpoints.down('xs')]:{
          width:150,
        },
      },

      drawerClose:{
        transition:theme.transitions.create('width',{
          easing:theme.transitions.easing.sharp,
          duration:theme.transitions.duration.leavingScreen,
        }),
        overflowX:'hidden',
        width:theme.spacing(7) + 1,
        [theme.breakpoints.up('sm')]:{
          width:theme.spacing(8.8) + 1,
        },
        [theme.breakpoints.down('xs')]:{
            width:theme.spacing(7.8) + 1,
        },
      },
      appBar:{
        zIndex:theme.zIndex.drawer + 1,
        transition:theme.transitions.create(['width','margin'], {
           easing:theme.transitions.easing.sharp,
           duration:theme.transitions.duration.enteringScreen,
        }),
      },
      appBarShift:{
         // marginLeft:miniDrawerWidth,
         width:`calc(100% - ${miniDrawerWidth}px)`,
             transition:theme.transitions.create(['width','margin'],{
                 easing:theme.transitions.easing.sharp,
               duration:theme.transitions.duration.enteringScreen,  
         }),
         [theme.breakpoints.down('xs')]:{
          width:`calc(100% - 150px)`,
         },
      },

      search:{
        border:'1px dotted grey',
        borderRadius:theme.shape.borderRadius,
        position:'relative',
        width:'100%',
        marginLeft:0,
        backgroundColor:alpha(theme.palette.common.white,0.15),
        '&:hover':{
          backgroundColor:alpha(theme.palette.common.white,0.25),
        },

        [theme.breakpoints.up('sm')]:{
           width:'auto',
           marginLeft:theme.spacing(1),
        },
      },

      searchIcon:{
         position:'absolute',
         padding:theme.spacing(0,2),
         display:'flex',
         justifyContent:'center',
         alignItems:'center',
         pointerEvents:'none',
         height:'100%',
      },

      menuButton:{
        marginRight:36,
      },

      hide:{
        display:'none',
      },

      hideProfile:{
        [theme.breakpoints.down('xs')]:{
          display:'none',
        },
      },

      inputRoot:{
        color:'inherit',
        width:'100%',
      },

      inputInput:{
         padding:theme.spacing(1,1,1,0),
         paddingLeft:`calc(1em + ${theme.spacing(4)}px)`,
         transition:theme.transitions.create('width'),
         [theme.breakpoints.up('sm')]:{
           width:'12ch',
           '&:focus':{
            width:'20ch',
           }
         }
      },

      button:{
          '&:hover': {
        textDecoration: 'none',
        backgroundColor:lightGreen[50], 
        border:prop=>prop.border,
        borderColor:prop=>prop.borderColor,
        borderRadius:'5px',
        textDecoration:props=>props.textDecoration,
        // Reset on touch devices, it doesn't add specificity 'rgba(125,0,0,.1)',
        '@media (hover:none)': {
          backgroundColor:'transparent',
        },
        '&$selected, &$selected:hover': {
        backgroundColor: 'rgba(125,0,0,.3)',
      },
      '&$disabled': {
        opacity: 0.5
      },
       },
       width:'100%',
     },

     selected:{},

      toolbar:{
        display:'flex',
        alignItems:'center',
        justifyContent:'flex-end',
        padding:theme.spacing(0,1),
        ...theme.mixins.toolbar,
      },

      mainContent:{
        flexGrow:1,
        padding:theme.spacing(3),
      },
      
}));

/********************************************* NAVIGATION EFFECTS ****************************************************************************************/  

export const navigationEffects = makeStyles((theme) => ({

  root: {
    flexGrow: 1,
  },

  samplenavBackground:{
    backgroundImage:`url(${samplenavBackgroundImage})`,
    // backgroundColor:'rgb(128,128,128)',
    backgroundSize:'cover',
    // opacity:0.9,
    backgroundRepeat:'no-repeat',
    backgroundPosition:'top center,right top',
    height:'280px',
    width:'auto',
  },

  searchAdjust:{
   [theme.breakpoints.between('lg','xl')]:{
         paddingLeft:theme.spacing(0,0,0,2),
         paddingRight:theme.spacing(0,0,0,2),
       },
  },

  circleBorder:{
     borderRadius:theme.spacing.borderRadius,
     backgroundColor:theme.palette.background.level2,
  },

  appIcon:{
    position:'relative',
    top:theme.spacing(6),
    left:theme.spacing(3),
    [theme.breakpoints.down('sm')]:{
      marginLeft:'-20px',
    },
  },
  leftIcon:{
    position:'relative',
    top:theme.spacing(6),
    left:theme.spacing(0),
    [theme.breakpoints.down('sm')]:{
      marginLeft:'-18px',
    },

    [theme.breakpoints.down('xs')]:{
      marginLeft:'-35px',
    }
  },

  searchLayout:{
    position: 'relative',
    borderRadius: '50px',
    marginRight:theme.spacing(1),
    marginLeft:theme.spacing(1),
    top:theme.spacing(6),
    backgroundColor: alpha(theme.palette.common.black, 0.25),
    '&:hover': {
      backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    [theme.breakpoints.down('sm')]:{
       marginRight:theme.spacing(4),
       marginLeft:theme.spacing(4)
    },
    [theme.breakpoints.up('md')]:{
      marginRight:theme.spacing(18),
      marginLeft:theme.spacing(18)
   },
  },

    searchInput:{
      padding: theme.spacing(1, 1, 1, 0),
      paddingLeft: `calc(.25em + ${theme.spacing(1)}px)`,
      marginLeft: 0,
      width:'100%',
      [theme.breakpoints.down('xs')]:{
       border:'1px dotted green',
       borderRadius: '50px',
      },
  },

  inputInputs: {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(2)}px)`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: '12ch',
      '&:focus': {
        width: '90ch',
        border:'2px dotted green',
      },
    },
  },
hideIcon:{
  opacity:0,
  '&:hover':{
    opacity:1,
  },
},

  hovereffect:{
    padding:theme.spacing(1),
    display:'flex',
    justifyContent:'center',
    borderRadius:theme.shape.borderRadius,
    '&:hover':{
      backgroundColor:'rgba(128, 128, 128, 0.5)', 
      cursor:'pointer',
    },  
  },

  downSearch:{
    marginTop:theme.spacing(16),
    width:'100%',
    paddingLeft:theme.spacing(0),
    paddingRight:theme.spacing(0),

    [theme.breakpoints.up('lg')]:{
      paddingLeft:theme.spacing(45),
      paddingRight:theme.spacing(45),
    },

    [theme.breakpoints.only('md')]:{
      paddingLeft:theme.spacing(2),
    },

    [theme.breakpoints.down('sm')]:{
      paddingLeft:theme.spacing(0),
      paddingRight:theme.spacing(0),
    },
  },

  colorEffects:{
    backgroundColor:blueGrey[300],
  },

  rightEdge:{
    display:'flex',
    flexGrow:1,
    justifyContent:'flex-end',
  },

  centerEdge:{
    display:'flex',
    flexGrow:1,
    justifyContent:'center',
  },

  navControl:{
    height:'560px',
  },

  root1:{
       backgroundColor:theme.palette.info.main,
       [theme.breakpoints.up('lg')]:{
         paddingLeft:theme.spacing(0),
         paddingRight:theme.spacing(0),
       },
  },

  menuButton: {
    marginRight: theme.spacing(2),
  },

  title: {
    flexGrow: 1,
    display: 'none',
    [theme.breakpoints.up('sm')]: {
      display: 'block',
    },
  },

  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: alpha(theme.palette.common.white, 0.25),
    },

    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(1),
      width: 'auto',
    },
  },

  searchIcon: {
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },

  inputRoot: {
    color: 'inherit',
  },

  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: '12ch',
      '&:focus': {
        width: '30ch',
      },
    },
  },

  sectionDesktop:{
      display:'none',
      [theme.breakpoints.up('duos')]:{
        display:'flex',
      },
  },

  sectionMobile:{
      display:'flex',
      [theme.breakpoints.up('duos')]:{
          display:'none',
      },
  },

}));

export const Styling = makeStyles((theme)=>({
    button:{
      '&:hover': {
        textDecoration: 'none',
        backgroundColor:lightBlue[50], 
        border:prop=>prop.border,
        borderColor:prop=>prop.borderColor,
        borderRadius:'5px',
        textDecoration:props=>props.textDecoration,
        // Reset on touch devices, it doesn't add specificity 'rgba(125,0,0,.1)',
        '@media (hover:none)': {
          backgroundColor:'transparent',
        },
        '&$selected, &$selected:hover': {
        backgroundColor: 'rgba(125,0,0,.3)',
      },
      '&$disabled': {
        opacity: 0.5
      },
       },
       width:'100%',
    },

    overrideHover:{
     zIndex:999,
    },
    
    active:{
      background:'rgba(128,128,128,0.2)',
      '&:hover': {
        backgroundColor:'rgba(128,128,128,0.2)',
        border:prop=>prop.border,
        borderColor:prop=>prop.borderColor,
        // borderRadius:'5px',
        textDecoration:props=>props.textDecoration,
        // Reset on touch devices, it doesn't add specificity 'rgba(125,0,0,.1)',
        '@media (hover:none)': {
          backgroundColor:'transparent',
        },
        '&$selected, &$selected:hover': {
        backgroundColor: 'rgba(125,0,0,.3)',
      },
    },
  },

   active1:{
      background:'rgba(255,255,255,0.5)',
      '&:hover': {
        textDecoration: 'none',
        backgroundColor:'rgba(255,0,0,0.9)',
        border:prop=>prop.border,
        borderColor:prop=>prop.borderColor,
        // borderRadius:'5px',
        textDecoration:props=>props.textDecoration,
        // Reset on touch devices, it doesn't add specificity 'rgba(125,0,0,.1)',
        '@media (hover:none)': {
          backgroundColor:'transparent',
        },
        '&$selected, &$selected:hover': {
        backgroundColor: 'rgba(125,0,0,.3)',
      },
    },
  },
  aligntext:{
    marginLeft:'-25px',
  },
  drawer:{
    borderRight:'none',
    overflow:'hidden',
  },

}));

export const Rooted = makeStyles({

    list:{
       background:props=>props.background,
      '&$selected, &$selected:hover':{

    },
      borderTopRightRadius:props=>props.topright,
      borderTopLeftRadius:props=>props.topleft,
      boxShadow:props=>props.boxShadow,
      borderRight:props=>props.borderRight,
      width:'100%',
    },

    listItem:{
        '&$selected, &$selected:hover':props=>props.backgroundColor,
        '&$focusVisible':props=>props.backgroundColor,
    },

    drawerRoot:props=>({
       flexGrow:1,
    }),

    paperAnchorDockedLeft:{
      borderRight:props=>props.borderRight,
    },

    nativeRoote:{
      color:props=> props.color,
    },

    input:{
     paddingTop:props=>props.top,
     paddingBottom:props=>props.bottom,
    },

    nav:{
      border:props=>props.border,
      borderRadius:props=>props.borderRadius,
      display:props=>props.display,
      top:props=>props.top,
      marginLeft:props=>props.marginLeft,
      marginRight:props=>props.marginRight,
      margin:props=>props.margin,
      width:props=>props.width,
      padding:props=>props.padding,
      left:props=>props.padding,
      right:props=>props.right,
    }
});

export const StyleSolution = makeStyles({
    root:{
        fontFamily:props=> 
           props.monospace ? 'Courier New, Courier, monospace':
           props.sansserif ? 'Trebuchet MS, Helvetica, sans-serif':
           props.garamond ? 'Garamond, serif':
           props.arial ? 'Arial, Helvetica, sans-serif':
           props.cursive ? 'Brush Script, cursive' :
           props.cursive_mt ? 'Brush Script MT, cursive' :
           props.sofia ? 'Sofia, sans-serif':
           props.georgia ? 'Georgia, serif' :
           props.fantasy ? 'Copperplate, Papyrus, fantasy' :
           props.tahoma ? 'Tahoma, Verdana, sans-serif' :
           props.timesnewroman ? 'Times New Roman, Times, serif' :
           props.adlib ? 'source-code-pro, Menlo, Monaco, Consolas, Courier New, monospace':
           `-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif`,
       textTransform:props=>
           props.uppercase ?'uppercase':
           props.lowercase ?'lowercase':
           props.capitalize ? 'capitalize':
           props.initial ? 'initial':'inherit',
      color:props=> 
           props.violetish ?'rgb(238, 130, 238)':
           props.grownish ? 'rgb(106, 90, 205)':
           props.regular ? 'rgb(0,0,0)':
           props.greenish ? 'rgb(60,179,130)':
           props.youtube ? 'rgb(255,0,0)':
           props.facebook ? 'rgb(24, 119, 242)':
           props.messenger ? 'rgb(0, 132, 255)':
           props.instagram ? 'rgb(255, 48, 108)':
           props.linkedin ? 'rgb(22, 102, 197)':
           props.whatsapp ? 'rgb(37, 211, 102)':
           props.snapchat ? 'rgb(255, 252, 0)':
           props.pinterest ? 'rgb(230, 0, 35)':
           props.twitter ? 'rgb(29, 161, 242)':'inherit',         
      textDecoration:props=>
          props.overline ?'overline':
          props.underline ? 'underline':
          props.linethrough ? 'linethrough':'none',
      letterSpacing:props=> props.nega1 ? '-1px':
          props._5 ?'.5px':
          props.positive1?'1px':
          props.positive2?'2px':
          props.positive3?'3px':
          props.positive4?'4px':
          props.positive5?'5px':'none',
      fontStyle:props=>
          props.oblique ?'oblique':                                                                 
          props.italic ? 'italic':
          props.normaltext ? 'normal':'none',
      textShadow: props=> 
          props.shadowblack ? '1px 1px 1px black':
          props.shadowwhite ? '1px 1px 1px white':
          props.shadow1black ? '1px 2px 1px black':
          props.shadow2black ? '1px 2px 2px black':
          props.shadow3black ? '2px 2px 2px black':
          props.shadowred ? '1px 1px 1px red':
          props.shadow1red ? '1px 2px 1px red':
          props.shadow2red ? '1px 2px 2px red':
          props.shadow3red ? '2px 2px 2px red':
          props.shadowgrey ? '1px 1px 1px grey':
          props.shadow2grey ? '1px 1px 2px grey':
          props.shadow3grey ? '2px 2px 2px grey':
          props.shadowgreylight ? '1px 1px 1px rgba(163,167,167,.6)':'none',
      fontWeight:props=>
          props.bold ? 'bold':'normal',
    }
});