// @flow: trespaylas 
/
/*
 * Signature API
 */
 
/**************GRID DEFAULT VALUE **************
 * flex: '0 1 auto',
 * flexDirection: 'row',
 * alignItems: 'flex-start',
 * flexWrap: 'nowrap',
 * justifyContent: 'flex-start',

/************************************************/
// if item
/*inline api */ // <Gridui flex justifycenter item sx3 greenborder zeronMinWidth /*or can be mix via container*/ >{children}</Gridui>
<Gridui container, //pass as prop optional when set item attribute || false by default
        item, // given conditioned if ( item )
        xs1, xs2, xs3, xs4, xs5, xs6, xs7, xs8, xs9, xs10, xs11, xs12, // 0 to 599px extra-small size abreviated: xs
        sm1, sm2, sm3, sm4, sm5, sm6, sm7, sm8, sm9, sm10, sm11, sm12, // 600px to 959px small size abreviated: sm
        md1, md2, md3, md4, md5, md6, md7, md8, md9, md10, md11, md12, // 960px to 1279px medium size abreviated: md
        lg1, lg2, lg3, lg4, lg5, lg6, lg7, lg8, lg9, lg10, lg11, lg12, // 1280px to 1919px large size abreviated: lg
        xl1, xl2, xl3, xl4, xl5, xl6, xl7, xl8, xl9, xl10, xl11, xl12, // 1920px above extra-large size abreviated: xl
        display,// flex, grid, table, inline, block, none
        justify,// justifycenter, justifystart, justifyend, spacebetween, spacearound, spaceevenly
        border, // blackborder, greenborder 1px solid --
        zeroMinWidth, //as is false by default
 ></Gridui>
/

//else if(container)
/*inline api */ // <Gridui container nowrap spacebetween centeritems row space4 blackborder>{children}</Gridui>
<Gridui container 
        wrap,  //wrap, nowrap, wrapreverse 
        justifyContent,// justifytart,justifycenter,justifyend,spacebetween,spacearound,spaceevenly,
        alignItems,//flexitemstart, centeritems,flexitemiend,stretchitems,flexitembaseline
        alignContent,//alignstart,aligncenter,alignend,spacebetween,spacearound,alignstretch
        direction, //row,column, rowreverse,colreverse
        spacing, // space0 to space10 & half
        border, // blackborder, greenborder 1px solid --
 ></Gridui>
 /

 //else if auto

/*inline api */ // <Gridui className={/*define your class attribute here...*/} space4 blackborder>{children}</Gridui>
<Gridui  auto,
        display,// flex, grid, table, inline, block, none
        justify,// justifycenter, justifystart, justifyend, spacebetween, spacearound, spaceevenly
        style, // blackborder, greenborder 1px solid --
        border, // blackborder, greenborder 1px solid --
 ></Gridui>
 /


 /**************Stack DEFAULT VALUE **************
 * flex: '0 1 auto',
 * flexDirection: 'row',
 * alignItems: 'flex-start',
 * flexWrap: 'nowrap',
 * justifyContent: 'flex-start',

/************************************************/

/*
 * <Stack />  API version --no-version 
 * please combine used of Paper component for better layout
 *
 */

 // if container

 /*inline api*/ // <Stack container s2 /*or*/ nospace>{children}</Stackui>
  <Stackui container, // pass by prop conditionally
           spacing, // nospace, s1,s2,s3,s4,s5,s6,s7,s8,s9,s10       
  >{children}</Stackui>
/

  // if item && spacing value
<Stackui item, // pass by prop conditionall
           spacing, // s1,s2,s3,s4,s5,s6,s7,s8,s9,s10,s11,s12       
  >{children}</Stackui>
  /

// else
<Stackui>{children}</Stackui>
/

/* inline api */  //<Boxui form th35 dashgrey1 fullWidth instagram l7 onClick={/*function inside here*/} >{children}</Boxui> 
// variants here not applicable
<Boxui  onClick, //as is
        component, //span,button,div,a nav,form
        border,// dashgrey1,dashgrey2,dashgrey3,dashgrey4,solidgrey1,solidgrey2,solidgrey3,solidgrey4,
        opacity,//l3, l7, l5, l9
        bgcolor, // messenger,instagram, pinterest, etc...
        fullWidth, // set width to 100% pass by prop false by default
        width, // if form component is used adjust size to th25, th35, th45, th55
        noValidate, //by dault false, when apply set to true
        autoComplete, //string set to autoComplete="off"|| false by default,
></Boxui> 
/

//if hrefoutlined

/*inline api*/ // <Buttonui hrefoutlined small primary disabledElevation onClick={/*function inside here..*/}
<Buttonui onClick,//as is
          size, //small,medium,large,
          color, //primary,secondary,defaults,inherit,
          variant, // this is given condition if hrefoutlined
          disabled, //pass as prop by default false,
          disabledElevation // pass as prop by defualt false,        
>{name}</Buttonui>          
/
//else if outlined

/*inline api*/ // <Buttonui outlined small primary disabledElevation onClick={/*function inside here..*/}
<Buttonui 
          variant, // this is given condition if outlined,
>{name}</Buttonui>          
/

//else if contained

/*inline api*/ // <Buttonui contained small primary disabledElevation onClick={/*function inside here..*/}
<Buttonui 
          variant, // this is given condition if contained,
>{name}</Buttonui>          
/

// else

/*inline api*/ // <Buttonui small primary disabledElevation onClick={/*function inside here..*/}
<Buttonui 
          variant, // variant="text" default value
>{name}</Buttonui>          
/
// if xs || sm || md || lg || xl
/*inline api*/ // <Containerui xl disableGutters maxWidth="xl">{children}</Containerui>
<Containerui xs //with gutter left & right
             sm //with gutter left & right
             md //with gutter left & right
             lg //with gutter left & right
             xl //with gutter left & right
             maxWidth, // xs, sm, md, lg, xl
             disableGutters //remove gutter left & right * by default false
></Containerui>
/
// else if diableGutters

/*inline api*/ // <Containerui disbaleGutters>{children}</Containerui>
<Containerui
             disableGutters //remove gutter left & right * by default false
></Containerui>
/

//else
/*inline api*/ // <Containerui className=" /* difine your class attribute*/ ">{children}</Containerui>
<Containerui
             className, // pass as prop className={className}
></Containerui>
/
/*inline api */ // <Cardui onefourth outlined>{children}</Cardui>
<Cardui minWidth, // onefourth, twothird, onehalf
        variant, // outlined, contained
></Cardui>
/

/*nline api */ //<CardContentui component="div" className={/*define your class attrubute here...*/} >{children}</CardContentui>
<CardContentui component, // div, button, span, a, p, nav
               className, //as is pass as prop
></CardContentui>        
/

 // if disableSpacing
/*inlne api*/ //<CardActionui disableSpacing className={/*dinfe your class attrubute here...*/} >{children}</CardContentui>
<CardActionui className,// as is pass as prop
              classes, //same as className
              disableSpacing, //meet per condition disasbleSpacing
>{children}</CardContentui>
/

//else 
/*inlne api*/ //<CardActionui className={/*dinfe your class attrubute here...*/} >{children}</CardContentui>
<CardActionui className,// as is pass as prop
              classes, //same as className
>{children}</CardContentui>
/

//if(img ||audio || video || picture || iframe)

/*inline api */ // <CardMediaui img h="140" image={/*it accepts as variable or link*/} title="string" className="/*define your class attribute here.*/"

<CardMediaui style, //h="140" otherwise not visible
             component, // img ,audio, video ,pictue, iframe
             image, // string || passs as prop
             src, // only apply this if you use component it act as an image link
             title , // same as alt= variant provide this as a string
             className, // as is pass as prop
 /> // no children...             
/
//else
<CardMediaui style, //must provide this value height otherwise the image is not visible
             image, // string || passs as prop
             title , // same as alt= variant provide this as a string
             className, // as is pass as prop
 /> // no children...
/

/*inline api*/ //<CardActionAreaui>{children}<CardActionAreaui>
<CardActionAreaui
           /*
            * This is only useful when you want to navigate the card into another link like registering handler event
           */
>{children}</CardActionAreaui>
/
// if(h1 || h2 || h3 || h4 || h5 || h6 || body1)
/*inline api*/ // <Typographyui shadowgrey messenger h5 lowercase>{children}</Typographyui>
<Typographyui
              textShadow, // shadowblack,shadowgrey,shadowred
              letterSpacing, //nega1, _5, positive1 to positive5
              fontFamily, // monospace,arial,timesnewroman,tahoma,georgia,garamond,cursive,sansserif,cursive_mt,fantasy,
              textTransform, // uppercase, lowercase, inherit,capitalize, initial
              textDecoration, // overline, linethrough, underline
              color, // greenish, violetish, grownish, messsenger,youtube, messenger,linkedlin,instagram,facebook,twitter,
              variant, // h1,h2,h3,h4,h5,h6,body1
>{children}</Typographyui>              

//else if(span || div || button )
/
/*inline api*/ // <Typographyui shadowgrey _5 messenger span uppercase>{children}</Typographyui>
<Typographyui component, // span || div
              display, //block,inline, initial,
              textShadow, // shadowblack,shadowgrey,shadowred
              letterSpacing, //nega1, _5, positive1 to psoditive5
              fontFamily, // monospace,arial,timesnewroman,tahoma,georgia,garamond,cursive,sansserif,cursive_mt,fantasy,
              fontSize, // responsiveText1, to responsiveText12, && px12,px16,px18,px24
              textTransform, // uppercase, lowercase, inherit,capitalize, initial
              textDecoration, // overline, linethrough, underline
              color, // greenish, violetish, grownish, messsenger,youtube, etc...
>{children}</Typographyui>                            
/

//else
/*inline api*/ // <Typographyui shadowgrey _5 messenger lowercase>{children}</Typographyui>
<Typographyui 
              textShadow, // shadowblack,shadowgrey,shadowred
              textTransform, // uppercase, lowercase, inherit,capitalize, initial
              letterSpacing, //nega1, _5, positive1 to psoditive5
              fontFamily, // monospace,arial,timesnewroman,tahoma,georgia,garamond,cursive,sansserif,cursive_mt,fantasy,
              fontSize, // responsiveText1, to responsiveText12, && px12,px16,px18,px24
              textDecoration, // overline, linethrough, underline
              color, // greenish, violetish, grownish, messsenger,youtube, etc...
>{children}</Typographyui>                            
/

//if disabled
/*inline api*/ // <Inputfield disbaled  value={/*any*/} outlined />
<Inputfield disabled,// false by default
            value,// pass by prop
            size, // small ,medium
            variant, // outlined,standard, filled
/>// no children
/

//else if readonly
/*inline api*/ // <Inputfield readonly id="/*given*/" value={/*any*/} inputProps={{readOnly:true}} />
<Inputfieldui
  id, //given
  variant, //outlined,standard, filled
  value, // pass by prop
  inputProps, //function <> given by default readOnly:true
 /> //no  children
/

// else if multiline

/*inline api*/ // <Inputfield multiline id="/*given*/" outlined placeholder="text area" onChange={/*binding function here...*/}
<Inputfieldui
  multiline, // textarea
  id, //given
  variant, //outlined,standard, filled
  placeholder, // pass by prop
  onChange, //pass by prop
  fullWidth, // by default false
  required, // pass by prop
  helperText, //string pass by prop
  label, // string pass by prop
  value, // pass by binding action 

 /> //no  children
/

//else
/*inline api*/ // <L.Inputfieldui text fullWidth small label="Address" value={/*any*/} onChange={/*any*/} outlined />
<Inputfieldui
  size, // small, medium
  variant, // outlined, standard, filled
  placeholder, // by default false
  type, // text, password, email, search, number
  onChange, // pass by prop
  fullWidth, // by default false
  required, // pass by prop false by default
  helperText, // string pass by prop
  label, // string pass by prop
  value, // pass by prop

 /> //no  children
/

/*inline api of Hideui */ //<Hideui hidexsup>{children}</Hideui>
<Hideui   /*one of the props below boolean types*/
        xsup, // hide the component from xs to upstream
         xsdown, // hide the component xs downstream
         smup, // hide the component sm to upstream
         smdown, // hide the component sm to downstream
         mdup, // hide the component md to upstream
         mddown, // hide the component md to downstream
         lgdown, // hide the component lg to downstream
         lgup, // hide the component lg to upstream
         xlup, // hide the component xl to upstream
         xldown, // hide the component xl to downstream
         onlyXs, // hide the component only in xs
         onlyXsSm, // hide the component only in xs and sm
         onlyMdLgXl, // hide the component only in md,lg,xl sizes
>{children}</Hideui>

/********************************************************************************************************************/
             /*Wrapper.js*/    ...........................--......................
/********************************************************************************************************************/   
{
  [*] <Item button leftIcon={} rightIcon={} {...prop} > /*usage property*/
  (((if button && leftIcon && rightIcon /* are true the following props will apply*/)))
      * outlined                                       -> bool
      * disableGutters                                 -> bool
      * textShadow: shadowgreylight,shadowgrey, ...etc -> bool
      * border: outlined                               -> bool
      * textDecoration: underline,linethrough,overline -> bool
      * color: youtube,facebook, ...etc                -> bool
      * fontWeight: bold, normal                       -> bool
      * dense                                          -> bool
      * direction: rowreverse,column,colreverse        -> bool
      * className                                      -> JSS hook /*see style.js*/
      * letterSpacing: nega1,_5,positive1, to positive5-> bool
      * fontStyle: arial, cursive, ...etc              -> bool
      * textTransform: uppercase,lowercase, ...etc     -> bool
      * autoFocus                                      -> bool
      * alignItems: start, center,                     -> bool
      * divider                                        -> bool
      * CotainerComponents                             -> elementType
      * CotainerProps                                  -> object

  (((if button && leftIcon /* are true the following props will apply*/)))

      * disableGutters                                 -> bool
      * textShadow: shadowgreylight,shadowgrey, ...etc -> bool
      * border: outlined                               -> bool
      * textDecoration: underline, linethrough, ...etc -> bool
      * color: youtube,facebook, ...etc                -> bool
      * fontWeight: bold, normal                       -> bool
      * dense                                          -> bool
      * direction: rowreverse,column,colreverse        -> bool
      * className                                      -> JSS hook /*see style.js*/
      * letterSpacing: nega1,_5,positive1, to positive5-> bool
      * fontStyle: arial, cursive, ...etc              -> bool
      * textTransform: uppercase,lowercase, ...etc     -> bool
      * autoFocus                                      -> bool
      * alignItems: start, center,                     -> bool
      * divider                                        -> bool
      * CotainerComponents                             -> elementType
      * CotainerProps                                  -> object
}

{
  [*]<Wrapper /> /*usage static property*/
      classes:PropTypes.object.isRequired,
      padding:PropTypes.string,
         left:PropTypes.string,
          top:PropTypes.string,
       bottom:PropTypes.string,
        right:PropTypes.string,

      /*
       * border-radius perimeter
       * this will act as wrapper inside parent Component
       */  
     topright:PropTypes.number,
      topleft:PropTypes.number,
  bottomright:PropTypes.number,
   bottomleft:PropTypes.number,
        width:PropTypes.string,
        color:PropTypes.oneOf(['magnum','trigun','reigun','flame']),
}

{
  [*]<Input /> /*usage property*/
  (((if(search || text || number || email || password || time )/* are true the following props will apply*/)))

    * size: small,tiny,semi,medium,large                   -> bool
    * value: v,                                            -> oneOf([v={}, v=""]);
    * type:search,text,email,number,password,time          -> bool
    * onChange                                             -> onChange={e=>submits(e)}
    * autoFocus                                            -> bool
    * error                                                -> bool
    * fullWidth                                            -> bool
    * label                                                -> string
    * margin: dense,none,normal,                           -> bool
    * placeholder                                          -> string
    * color: primary, secondary                            -> bool
    * variant: outliend,filled, standard,                  -> bool

(((if(multiline)/* are true the following props will apply*/)))    

    * size: small,tiny,semi,medium,large                   -> bool
    * classes                                              -> object
    * onChange                                             -> onChange={e=>submits(e)}
    * disabled                                             -> bool
    * marxRows:one,to six                                  -> bool
    * autoFocus                                            -> bool
    * error                                                -> bool
    * fullWidth                                            -> bool
    * label                                                -> string
    * margin: dense,none,normal,                           -> bool
    * placeholder                                          -> string
    * color: primary, secondary                            -> bool
    * variant: outliend,filled, standard,                  -> bool    
}    

{
  [*]/*API*/<Nav absolute secondary toprightradius="2px" topleftradius="2px" noshadow>{children}</Nav>
 /
    * classes                                                   -> object
    * position: absolute,static,fixed,relative,sticky,          -> bool
    * color: primary, secondary, inherit, transparent, defaults,-> bool
    * topright: toprightradius,topleftradius,                   -> string
    * boxShadow: greyshadows, noshadow,                         -> bool
}

{
  [*] /*API default <IconButton></IconButton */<Ib start small secondary>{children}</Ib>

    * edge: start, end                                           -> bool
    * color: defaults,inherit,primary,seconday                   -> bool
    * disableRipple: disableRipple                               -> bool
    * disabled:disabled                                          -> bool
    * disableFocusRipple:disableFocusRipple                      -> bool
    * size:small,medium                                          -> bool
}
