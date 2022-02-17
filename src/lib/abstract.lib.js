
import *as React from 'react';

import *as W from './index';

import { alpha } from '@mui/material/styles';

import { styled } from '@mui/material/styles';

import PropTypes from 'prop-types';

import Divider from '@mui/material/Divider';

import AbstractIcon  from './wrapper';

function ResponsiveDrawer(props){

 const { 

     classDrawer, 

     classPaperRoot, 

     classToolbar,

     container,

     drawerList,

     breakpoints,

     open,

     anchor,

     classes,

     onClose,

     background,

     ...other

    } = props;

      return (
           <nav className={classDrawer}>
                { breakpoints ?

                        <W.Drawer permanent classes={classes} {...props}>
                          <div className={classToolbar}/>
                            <Divider />
                                <W.Lists background={background}>
                                  {drawerList}
                                </W.Lists>
                        </W.Drawer> :

                        <W.Drawer anchor={anchor} temporary container={container} open={open} onClose={onClose} classes={classes} {...props}>
                          <div className={classToolbar} />
                            <Divider />
                                <W.Lists background={background}>
                                  {drawerList}
                                </W.Lists>
                        </W.Drawer>
                }  
           </nav>
      )
}

ResponsiveDrawer.propTypes={
    drawerList:PropTypes.node,
    classToolbar:PropTypes.object.isRequired,
    classDrawer:PropTypes.object.isRequired,
    onClose:PropTypes.func,
    classes:PropTypes.object.isRequired,
    open:PropTypes.bool,
    breakpoints:PropTypes.bool,
};

const Search = styled('div')(({theme})=>({
      position:'relative',
      borderRadius:theme.shape.borderRadius,
      border:'1px dotted grey',
      backgroundColor:alpha(theme.palette.common.white,0.15),
      '&:hover':{
        backgroundColor:alpha(theme.palette.common.white, 0.30),
      },
      marginLeft:0,
      width:'100%',
      [theme.breakpoints.up('sm')]:{
        marginLeft:theme.spacing(1),
        width:'auto',
      },
}));

const Swrapper = styled('div')(({theme})=>({
    position:'absolute',
    padding:theme.spacing(0,2),
    display:'flex',
    justifyContent:'center',
    alignItems:'center',
    height:'100%',
    pointerEvents:'none',
}));

function AbstractWrapper(Parent, Sub){
    return props=>{
      const {icon, searchContent } = props;
        return  <Parent>
                    <Sub>
                      {icon}
                    </Sub>
                    {searchContent}
                </Parent>
     }
}

const AbstractSearch = AbstractWrapper(Search, Swrapper);

AbstractSearch.propTypes={
  icon:PropTypes.node,
  searchIcon:PropTypes.node,
};



const methodMap = [
  [
    'requestFullscreen',
    'exitFullscreen',
    'fullscreenElement',
    'fullscreenEnabled',
    'fullscreenchange',
    'fullscreenerror',
  ],
  // New WebKit
  [
    'webkitRequestFullscreen',
    'webkitExitFullscreen',
    'webkitFullscreenElement',
    'webkitFullscreenEnabled',
    'webkitfullscreenchange',
    'webkitfullscreenerror',

  ],
  // Old WebKit
  [
    'webkitRequestFullScreen',
    'webkitCancelFullScreen',
    'webkitCurrentFullScreenElement',
    'webkitCancelFullScreen',
    'webkitfullscreenchange',
    'webkitfullscreenerror',

  ],
  [
    'mozRequestFullScreen',
    'mozCancelFullScreen',
    'mozFullScreenElement',
    'mozFullScreenEnabled',
    'mozfullscreenchange',
    'mozfullscreenerror',
  ],
  [
    'msRequestFullscreen',
    'msExitFullscreen',
    'msFullscreenElement',
    'msFullscreenEnabled',
    'MSFullscreenChange',
    'MSFullscreenError',
  ],
];

const nativeAPI = (() => {
  const unprefixedMethods = methodMap[0];
  const returnValue = {};

  for (const methodList of methodMap) {
    const exitFullscreenMethod = methodList?.[1];
    if (exitFullscreenMethod in document) {
      for (const [index, method] of methodList.entries()) {
        returnValue[unprefixedMethods[index]] = method;
      }

      return returnValue;
    }
  }

  return false;
})();

const eventNameMap = {
  change: nativeAPI.fullscreenchange,
  error: nativeAPI.fullscreenerror,
};

// eslint-disable-next-line import/no-mutable-exports
let screenfull = {
  // eslint-disable-next-line default-param-last
  request(element = document.documentElement, options) {
    return new Promise((resolve, reject) => {
      const onFullScreenEntered = () => {
        screenfull.off('change', onFullScreenEntered);
        resolve();
      };

      screenfull.on('change', onFullScreenEntered);

      const returnPromise = element[nativeAPI.requestFullscreen](options);

      if (returnPromise instanceof Promise) {
        returnPromise.then(onFullScreenEntered).catch(reject);
      }
    });
  },
  exit() {
    return new Promise((resolve, reject) => {
      if (!screenfull.isFullscreen) {
        resolve();
        return;
      }

      const onFullScreenExit = () => {
        screenfull.off('change', onFullScreenExit);
        resolve();
      };

      screenfull.on('change', onFullScreenExit);

      const returnPromise = document[nativeAPI.exitFullscreen]();

      if (returnPromise instanceof Promise) {
        returnPromise.then(onFullScreenExit).catch(reject);
      }
    });
  },
  toggle(element, options) {
    return screenfull.isFullscreen ? screenfull.exit() : screenfull.request(element, options);
  },
  onchange(callback) {
    screenfull.on('change', callback);
  },
  onerror(callback) {
    screenfull.on('error', callback);
  },
  on(event, callback) {
    const eventName = eventNameMap[event];
    if (eventName) {
      document.addEventListener(eventName, callback, false);
    }
  },
  off(event, callback) {
    const eventName = eventNameMap[event];
    if (eventName) {
      document.removeEventListener(eventName, callback, false);
    }
  },
  raw: nativeAPI,
};

Object.defineProperties(screenfull, {
  isFullscreen: {
    get: () => Boolean(document[nativeAPI.fullscreenElement]),
  },
  element: {
    enumerable: true,
    get: () => document[nativeAPI.fullscreenElement] ?? undefined,
  },
  isEnabled: {
    enumerable: true,
    // Coerce to boolean in case of old WebKit.
    get: () => Boolean(document[nativeAPI.fullscreenEnabled]),
  },
});

if (!nativeAPI) {
  screenfull = {isEnabled:false};
}

export { 

  ResponsiveDrawer, 

  AbstractSearch, 

  screenfull, 
  
};