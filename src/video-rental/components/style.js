// import makeStyles from '@mui/material/styles';

import { alpha } from '@mui/material/styles';

import { makeStyles } from '@material-ui/core/styles';

const responsiveDrawerWidth = 240;

export const responsiveDrawer = makeStyles((theme)=>({

     root:{
       display:'flex',
       flexGrow:1,
     },

     header: {
        fontWeight: 900,
        minWidth: 0,
        fontSize: 18,
        height:'356px',
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

export const userTableLayout = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.default
  },
  menuButton: {
    marginRight: theme.spacing(2)
  },
  title: {
    flexGrow: 1
  },
  toolbar: {
    display: "flex",
    justifyContent: "space-between",
    marginBottom: theme.spacing(2)
  },
  content: {
    margin: theme.spacing(2),
    padding: theme.spacing(2)
  }
}));
