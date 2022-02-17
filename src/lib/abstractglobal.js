
import PropTypes from 'prop-types';

import React from 'react';

import makeStyles  from '@mui/material/styles';

import  { StyleSolution }  from './index';

  function AbstractGlobal(Component){
      return props=>{
        const { onClick, divider, textContent, outlined, children, p, className, autofocus, ContainerProps, disableGutters,Containercomponents, div,a,span,button, dense, start, center,
           shadow1red,shadow2red,shadow3red,shadow1grey,shadow2grey,shadow3grey,shadow1black,shadow2black,shadow3black,shadowblack,shadowgrey,shadowred,shadowgreylight, shadowwhite, //shadows
         grownish,greenish,violetish,facebook,messenger,onClose,
         inherits,youtube,whatsapp,linkedin,instagram,twitter,pinterest,snapchat,regular, //colors
         nega1,positive1,positive2,positive3,positive4,positive5,_5,
         monospace,arial,timesnewroman,tahoma,georgia,garamond,cursive,sansserif,cursive_mt,fantasy,adlib,sofia,  // font-family
         uppercase,lowercase,initial,capitalize,inherit,
         overline,linethrough,underline, //
         normaltext,italic,oblique, //font-style
         normal,bold, // font-weight
         selected,classes,white,
         h1,h2,h3,h4,h5,h6,body1,body2,subtitle1,subtitle2,caption, //variant
         colreverse,rowreverse,column,leftIcon,rightIcon,
         responsiveText1,responsiveText2,responsiveText3,responsiveText4,responsiveText5,responsiveText6,responsiveText7,responsiveText8,responsiveText9,responsiveText10,responsiveText11,responsiveText12,px24,px18,px12,px16, r40,r24,r32,r18,r16,r12,r36,r72, // font-size 10vw
         ...rest} = props;

        const stylelish = StyleSolution(props);
        return textContent ?
         <Component className={stylelish.root + " "+className} {...rest}>
           {textContent}
         </Component> :
         <Component className={stylelish.root + " "+className} {...rest}>
           {children}
         </Component> 
      }; 
  };

  AbstractGlobal.propTypes = {
    textContent:PropTypes.string,
    linkedin:PropTypes.bool,
    facebook:PropTypes.bool,
    instagram:PropTypes.bool,
    shadowwhite:PropTypes.bool,
    white:PropTypes.bool,
    twitter:PropTypes.bool,
    youtube:PropTypes.bool,
    pinterest:PropTypes.bool,
    whatsapp:PropTypes.bool,
    regular:PropTypes.bool,
    messenger:PropTypes.bool,
    snapchat:PropTypes.bool,
    grownish:PropTypes.bool,
    violetish:PropTypes.bool,
    greenish:PropTypes.bool,
    nega1:PropTypes.bool,
    positive5:PropTypes.bool,
    positive1:PropTypes.bool,
    positive2:PropTypes.bool,
    positive3:PropTypes.bool,
    positive4:PropTypes.bool,
    _5:PropTypes.bool,
    monospace:PropTypes.bool,
    timesnewroman:PropTypes.bool,
    tahoma:PropTypes.bool,
    Verdana:PropTypes.bool,
    fantasy:PropTypes.bool,
    arial:PropTypes.bool,
    sansserif:PropTypes.bool,
    georgia:PropTypes.bool, 
    garamond:PropTypes.bool,
    cursive:PropTypes.bool,
    cursive_mt:PropTypes.bool,
    shadowgrey:PropTypes.bool,
    shadow1grey:PropTypes.bool,
    shadow2grey:PropTypes.bool,
    shadow3grey:PropTypes.bool,
    shadow1red:PropTypes.bool,
    shadow3red:PropTypes.bool,
    shadow2red:PropTypes.bool,
    shadowblack:PropTypes.bool,
    shadow1black:PropTypes.bool,
    shadow2black:PropTypes.bool,
    shadow3black:PropTypes.bool,
    shadowgreylight:PropTypes.bool,
    responsiveText1:PropTypes.bool,
    responsiveText2:PropTypes.bool,
    responsiveText3:PropTypes.bool,
    responsiveText4:PropTypes.bool,
    responsiveText5:PropTypes.bool,
    responsiveText6:PropTypes.bool,
    responsiveText7:PropTypes.bool,
    responsiveText8:PropTypes.bool,
    responsiveText9:PropTypes.bool,
    responsiveText10:PropTypes.bool,
    responsiveText11:PropTypes.bool,
    responsiveText12:PropTypes.bool,
    px24:PropTypes.bool,
    px18:PropTypes.bool,
    px16:PropTypes.bool,
    px12:PropTypes.bool,
    r72:PropTypes.bool,
    r32:PropTypes.bool,
    r24:PropTypes.bool,
    r36:PropTypes.bool,
    r18:PropTypes.bool,
    r16:PropTypes.bool,
    r12:PropTypes.bool,
    h1:PropTypes.bool,
    h2:PropTypes.bool,
    h3:PropTypes.bool,
    h4:PropTypes.bool,
    h5:PropTypes.bool,
    h6:PropTypes.bool,
    subtitle1:PropTypes.bool,
    subtitle2:PropTypes.bool,
    caption:PropTypes.bool,
    body1:PropTypes.bool,
    body2:PropTypes.bool,
    uppercase:PropTypes.bool,
    lowercase:PropTypes.bool,
    initial:PropTypes.bool,
    inherits:PropTypes.bool,
    linethrough:PropTypes.bool,
    underline:PropTypes.bool,
    overline:PropTypes.bool,
    capitalize:PropTypes.bool,
    normaltext:PropTypes.bool,
    oblique:PropTypes.bool,
    italic:PropTypes.bool,
    Component:PropTypes.func,
};

  export default AbstractGlobal;
  
