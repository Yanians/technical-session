
import PropTypes from 'prop-types';

import React,{ Fragment } from 'react';

import M from 'materialize-css';

import { TextInput, Textarea, Select } from 'react-materialize';

import { Link } from 'react-router-dom';

import cx from 'classnames';

export default class Container extends React.Component{render(){
   return(
   	    <Fragment>
          <div className={"container "+this.props.className}>
            {this.props.children}
          </div>
        </Fragment>  
		);
	}
}

export class Section extends React.Component {render(){
      return (
           <Fragment>
           <div className={"section-default "+this.props.className}>
           {this.props.children}
           </div>
           </Fragment>
        )
     }
}

export class Row extends React.Component{render(){
	 	return(
	    <Fragment>		
          <div className={"row "+this.props.className||''} style={this.props.style}>
            {this.props.children}
          </div>
        </Fragment>  
	 	);
	 }
}
  
export class Cols extends React.Component{render(){
    const {id, s1, s2, s3, s4, s5, s6, s7, s8, s9, s10, s11, s12, onClick,
               m1, m2, m3, m4, m5, m6, m7, m8, m9, m10, m11, m12,
               l1, l2, l3, l4, l5, l6, l7, l8, l9, l10, l11,l12,
               xl1, xl2, xl3, xl4, xl5, xl6, xl7, xl8, xl9, xl10, xl11,xl12,
      children } = this.props;      
    let classes = {s1, s2, s3, s4, s5, s6, s7, s8, s9, s10, s11, s12, m1, m2, m3, m4, m5, m6, m7, m8, m9, m10, m11, m12, l1, l2, l3, l4, l5, l6, l7, l8, l9, l10, l11, l12, xl1, xl2, xl3, xl4, xl5, xl6, xl7, xl8, xl9, xl10, xl11,xl12, }
        return(
          <Fragment>
            <div onClick={onClick} style={this.props.style} className={"col "+cx(classes)+" "+this.props.className} id={id} >
               {children}
            </div>
          </Fragment>  
            )
      }
   };

   Cols.propTypes  = {
    onclick:PropTypes.func,
    id:PropTypes.string,
    s1:PropTypes.bool,
    s2:PropTypes.bool,
    s3:PropTypes.bool,
    s4:PropTypes.bool,
    s5:PropTypes.bool,
    s6:PropTypes.bool,
    s7:PropTypes.bool,
    s8:PropTypes.bool,
    s9:PropTypes.bool,
    s10:PropTypes.bool,
    s11:PropTypes.bool,
    s12:PropTypes.bool,
    m1:PropTypes.bool,
    m2:PropTypes.bool,
    m3:PropTypes.bool,
    m4:PropTypes.bool,
    m5:PropTypes.bool,
    m6:PropTypes.bool,
    m7:PropTypes.bool,
    m8:PropTypes.bool,
    m9:PropTypes.bool,
    m10:PropTypes.bool,
    m11:PropTypes.bool,
    m12:PropTypes.bool,
    l1:PropTypes.bool,
    l2:PropTypes.bool,
    l3:PropTypes.bool,
    l4:PropTypes.bool,
    l5:PropTypes.bool,
    l6:PropTypes.bool,
    l7:PropTypes.bool,
    l8:PropTypes.bool,
    l9:PropTypes.bool,
    l10:PropTypes.bool,
    l11:PropTypes.bool,
    l12:PropTypes.bool,
    xl1:PropTypes.bool,
    xl2:PropTypes.bool,
    xl3:PropTypes.bool,
    xl4:PropTypes.bool,
    xl5:PropTypes.bool,
    xl6:PropTypes.bool,
    xl7:PropTypes.bool,
    xl8:PropTypes.bool,
    xl9:PropTypes.bool,
    xl10:PropTypes.bool,
    xl11:PropTypes.bool,
    xl12:PropTypes.bool,
   }

export class Panel extends React.Component{render(){
    return(
        <Fragment>
          <div style={this.props.style} className={"card-panel "+this.props.className}>
             {this.props.children}
          </div>
        </Fragment>
      )
  }
}

export class Card extends React.Component {
  constructor(props){
    super(props);
  }

render(){
  const {children, className, style, } = this.props;
  return(

       <Fragment>
         <div className={"card "+className} style={style}>
            {children}
         </div>
       </Fragment>
    )
}}

export class CardContent extends React.Component {render(){
  const { src, title, link, text, className } = this.props;
 try{ 
  return(
     <Fragment>
        <Card>
           <div className="card-title center">
                   <Space />
                   <span className="card-title grey-text">{title}</span>
             </div>
           <div className="card-horizontal">
             <div className="card-image">
              <img alt="undefined" src={src} className="activatior" width="180" height="180" />
              <p className="center">{text}</p>
             </div>   
              <div className={"card-action "+className}>
                   <div className="center">
                     <Link to={link}>view this</Link>
                   </div>
              </div>
           </div>   
        </Card>   
     </Fragment> 
    )
  }catch{
    
  }
 }
}

export class Divider extends React.Component{render(){
  return(
      <div className={"divider default-divider "+this.props.className}></div>
    )
}}

export class Center extends React.Component{render(){
  return(
         <Fragment>
           <div className={"center center-align "+this.props.className}>
             {this.props.children}
           </div>
         </Fragment>
    );
}}

export class Space extends React.Component{render(){
  return(
       <div>&nbsp;</div>
    );
}}

 export class Collection extends React.Component {render(){
  return(
     <Fragment>
        <div style={this.props.style} className={"collection "+this.props.className}>{this.props.children}</div>
     </Fragment> 
    )
 }}

 export class Colheader extends React.Component {render(){
  return(
     <Fragment>
        <div style={this.props.style} className={"collection-header "+this.props.className}>{this.props.children}</div>
     </Fragment> 
    )
 }}

 export class ColItemLink extends React.Component{
  render(){
   try{ 
    return(
         <Fragment>
           <div className="collection-item">
             <Link className={this.props.className} to={this.props.link}>{this.props.name}</Link>
           </div>
         </Fragment>
      )
  }catch{
  }
}
 }

 export class ColItem extends React.Component{
  render(){
    return(
         <Fragment>
           <div style={this.props.style} className={"collection-item "+this.props.className}>
             {this.props.children}
           </div>
         </Fragment>
      )
  }
 }

export class ButtonM extends React.Component{render(){
     const { cyan, red, green, blue, white, teal, orange, purple, black, pink, yellow,   
            small,
      wavesorange,
         wavesred,
      wavesyellow,
        wavesteal,
       waveslight,
       wavesgreen,
      wavespurple,
            large,
           medium,
             tiny,
            waves,
              btn, 
           button, 
      wavesripple,
           submit,
          onClick,
            name } = this.props;
     let classAttr = {
        'waves-effect':waves,
        'waves-ripple':wavesripple,
        'waves-red':wavesred,
        'waves-orange':wavesorange,
        'waves-light':waveslight,
        'waves-purple':wavespurple,
        'waves-teal':wavesteal,
        'waves-green':wavesgreen,
        'waves-yellow':wavesyellow,
           'btn-small':small,
           'btn-large':large,
            'btn-tiny':tiny,
          'btn-medium':medium, btn, red, green, pink, blue, white, black, orange, purple, teal, cyan, yellow,
    }       

     const btnType = { button, submit }
     return(
        <button type={cx(btnType)} className={cx(classAttr)} onClick={onClick}>{name}</button>
      )

   }

}

export class TargetLink extends React.Component{
  render(){
    try{
    return(
       <li className="collection-item">
            <i className="material-icons prefix">{this.props.icon}</i>
         <Link style={this.props.style} onClick={this.props.onClick}  className={" "+this.props.className} to={this.props.link}>
            <b style={{position:'relative',top:'-6px',left:'30px'}} className="black-text">{this.props.name}</b>
         </Link>
       </li>
      )
  }catch{

  }
  }
}

export class TargetLinks extends React.Component{
  render(){
    try{
    return(
       <li className="collection-item">
            <i className="material-icons prefix">{this.props.icon}</i>
         <Link style={this.props.style} onClick={this.props.onClick}  className={" "+this.props.className} to={this.props.link}>
                  {this.props.name}
         </Link>
       </li>
      )
  }catch{

  }
  }
}

  export class UserLink extends React.Component{render(){
   try{ 
     return(
        <Link style={this.props.style} onClick={this.props.onClick}  className={" "+this.props.className} to={this.props.link}>
           {this.props.name}
        </Link>
     )
   }catch{

   }  

   }
}

  export class RelatedTopic extends React.Component {render(){
  return(
     <Fragment>
        <a href={"!# "+this.props.href} className={"collection-item "+this.props.className}>
             <img alt="udefined" className="img circle" width="30" height="30" src={this.props.src} />
               <div className="comments">{this.props.comments}</div>
        </a>
     </Fragment> 
    )
 }}

export class Form extends React.Component{render(){
     
      const {id, s1, s2, s3, s4, s5, s6, s7, s8, s9, s10, s11, s12, noValidate,
               m1, m2, m3, m4, m5, m6, m7, m8, m9, m10, m11, m12,
               l1, l2, l3, l4, l5, l6, l7, l8, l9, l10, l11,l12,
               xl1, xl2, xl3, xl4, xl5, xl6, xl7, xl8, xl9, xl10, xl11,xl12,
      children } = this.props;      
    let classes = {s1, s2, s3, s4, s5, s6, s7, s8, s9, s10, s11, s12, m1, m2, m3, m4, m5, m6, m7, m8, m9, m10, m11, m12, l1, l2, l3, l4, l5, l6, l7, l8, l9, l10, l11, l12, noValidate,               xl1, xl2, xl3, xl4, xl5, xl6, xl7, xl8, xl9, xl10, xl11,xl12,}
       return(
             <>
              <form id={id} className={"col "+cx(classes)+" "+this.props.className} onSubmit={this.props.onSubmit}>
                  {children}
              </form>
             </>
            ) 
   }
}
 Form.propTypes  = {
    onclick:PropTypes.func,
    id:PropTypes.number,
    s1:PropTypes.bool,
    s2:PropTypes.bool,
    s3:PropTypes.bool,
    s4:PropTypes.bool,
    s5:PropTypes.bool,
    s6:PropTypes.bool,
    s7:PropTypes.bool,
    s8:PropTypes.bool,
    s9:PropTypes.bool,
    s10:PropTypes.bool,
    s11:PropTypes.bool,
    s12:PropTypes.bool,
    m1:PropTypes.bool,
    m2:PropTypes.bool,
    m3:PropTypes.bool,
    m4:PropTypes.bool,
    m5:PropTypes.bool,
    m6:PropTypes.bool,
    m7:PropTypes.bool,
    m8:PropTypes.bool,
    m9:PropTypes.bool,
    m10:PropTypes.bool,
    m11:PropTypes.bool,
    m12:PropTypes.bool,
    l1:PropTypes.bool,
    l2:PropTypes.bool,
    l3:PropTypes.bool,
    l4:PropTypes.bool,
    l5:PropTypes.bool,
    l6:PropTypes.bool,
    l7:PropTypes.bool,
    l8:PropTypes.bool,
    l9:PropTypes.bool,
    l10:PropTypes.bool,
    l11:PropTypes.bool,
    l12:PropTypes.bool,
    xl1:PropTypes.bool,
    xl2:PropTypes.bool,
    xl3:PropTypes.bool,
    xl4:PropTypes.bool,
    xl5:PropTypes.bool,
    xl6:PropTypes.bool,
    xl7:PropTypes.bool,
    xl8:PropTypes.bool,
    xl9:PropTypes.bool,
    xl10:PropTypes.bool,
    xl11:PropTypes.bool,
    xl12:PropTypes.bool,
   }
/*
 * [@]  Signature optional 
 * [x] <Textfield name="" value="" disabled placeholder="" />
 */  
export class Textfield extends React.Component{render(){
  const { required, 
          validate,
             email,
          password,
       placeholder, 
                 v,
                 s,
                 m,
                 l,
                xl,
           success,
             error,
      defaultValue,
              icon,
             label,
          onChange,
          disabled,
                id,
         className,
              type,
          } = this.props;

    let classes = { required, validate }
  return(<>
            <TextInput
                       type={type}
                      email={email}
                   password={password}
                placeholder={placeholder} 
                      value={v} 
                          s={s} 
                          m={m}
                   disabled={disabled} 
                          l={l} 
                         xl={xl}
                   validate={validate} 
                    success={success} 
                      error={error} 
                       icon={icon} 
                      label={label} 
                   onChange={onChange} 
                         id={id} 
               defaultValue={defaultValue}
                  className={className} 
                   required={cx(classes.required)}
            />
        </>
       )    
   }
}

Textfield.propTypes = {
  validate:PropTypes.bool,
  s:PropTypes.number,
  m:PropTypes.number,
  l:PropTypes.number,
  xl:PropTypes.number,
  error:PropTypes.string,
  success:PropTypes.string,
  datalength:PropTypes.string,
  disabled:PropTypes.bool,
  type:PropTypes.oneOf(["text","number","file","date","password","email"]),
  placeholder:PropTypes.string,
  className:PropTypes.string,
  onChange:PropTypes.func,
};



export class Inputfile extends React.Component{
  render(){
    const { file, validate, required } = this.props;
    let attr = { validate };
    let fileType = { file }
    let requiredAttr = { required }
    return (
       <div className="file-field">
         <input type= {cx(fileType)} className={cx(attr)+" "+this.props.className} {...requiredAttr} />
       </div>
      )
  }
}

export class Inputfield extends React.Component{

  componentDidMount(){
     M.AutoInit();
  }
  render(){
try{
   const {validate,browserDefault, label, placeholder, name, required, s1, s2, s3, s4, s5, s6, s7, s8, s9, s10, s11, s12, error, success, datalength,
               m1, m2, m3, m4, m5, m6, m7, m8, m9, m10, m11, m12, v, onChange, file, email, password, text, tel, number, date,time,month,
               l1, l2, l3, l4, l5, l6, l7, l8, l9, l10, l11,l12, modified,autoCapitalize,step,min,
               xl1, xl2, xl3, xl4, xl5, xl6, xl7, xl8, xl9, xl10, xl11,xl12 }  = this.props;
   let attr = {s1, s2, s3, s4, s5, s6, s7, s8, s9, s10, s11, s12, m1, m2, m3, m4, m5, m6, m7, m8, m9, m10, m11, m12, l1, l2, l3, l4, l5, l6, l7, l8, l9, l10, l11, l12, xl1, xl2, xl3, xl4, xl5, xl6, xl7, xl8, xl9, xl10, xl11, xl12, };

   const inputAttr = { required }
   const inputValidate ={'browser-default':browserDefault,'modified-payment-input':modified }
   const inputType = {email, password, date, tel, number, time, text, file, month, }
               
            return ( file ?
                            <div className={"file-field input-field col "+cx(attr)}>
                              {this.props.icon}
                                 <div className={this.props.btnType}> 
                                    <b>{name}</b>

                                  <input 
                                           type={cx(inputType)}
                                          value={v} 
                                       onChange={onChange} 
                                      className={cx(inputValidate)}
                                                {...inputAttr}
                                  />
                                 </div>
                                   <div className="file-path-wrapper">
                                    <input className={"file-path validate "+ cx(attr)} type="text" required placeholder="Upload an image"/>
                                   </div>
                              </div>
                        : <> <div className={"input-field col "+cx(attr)}>
                                    {this.props.icon}
                                    <input 
                                        placeholder={placeholder} 
                                               type={cx(inputType)}
                                                 id={this.props.label}
                                              value={v} 
                                           validate={validate}
                                     autoCapitalize={autoCapitalize}
                                           onChange={onChange}
                                        data-length={datalength}
                                               step={step}
                                                min={min} 
                                          className={this.props.className}
                                                    // {...inputAttr}
                                    />
                                      <label className="active inputfield-component-active" htmlFor={this.props.label}>{this.props.label}</label>
                                         <span className={"helper-text "+this.props.validateStatus} data-error={error} data-success={success}></span>
                                  </div>
                              </>
                    )
         }catch{
         } 
      }  
}

 Inputfield.propTypes  = {
    onclick:PropTypes.func,
    id:PropTypes.number,
    s1:PropTypes.bool,
    s2:PropTypes.bool,
    s3:PropTypes.bool,
    s4:PropTypes.bool,
    s5:PropTypes.bool,
    s6:PropTypes.bool,
    s7:PropTypes.bool,
    s8:PropTypes.bool,
    s9:PropTypes.bool,
    s10:PropTypes.bool,
    s11:PropTypes.bool,
    s12:PropTypes.bool,
    m1:PropTypes.bool,
    m2:PropTypes.bool,
    m3:PropTypes.bool,
    m4:PropTypes.bool,
    m5:PropTypes.bool,
    m6:PropTypes.bool,
    m7:PropTypes.bool,
    m8:PropTypes.bool,
    m9:PropTypes.bool,
    m10:PropTypes.bool,
    m11:PropTypes.bool,
    m12:PropTypes.bool,
    l1:PropTypes.bool,
    l2:PropTypes.bool,
    l3:PropTypes.bool,
    l4:PropTypes.bool,
    l5:PropTypes.bool,
    l6:PropTypes.bool,
    l7:PropTypes.bool,
    l8:PropTypes.bool,
    l9:PropTypes.bool,
    l10:PropTypes.bool,
    l11:PropTypes.bool,
    l12:PropTypes.bool,
    xl1:PropTypes.bool,
    xl2:PropTypes.bool,
    xl3:PropTypes.bool,
    xl4:PropTypes.bool,
    xl5:PropTypes.bool,
    xl6:PropTypes.bool,
    xl7:PropTypes.bool,
    xl8:PropTypes.bool,
    xl9:PropTypes.bool,
    xl10:PropTypes.bool,
    xl11:PropTypes.bool,
    xl12:PropTypes.bool,
   }


export class Numberfield extends React.Component{render(){

try{
    const { validate,  datalength, disabled, type, onChange } = this.props;

  return(<>
            <TextInput validate={validate} disabled={disabled} onChange={onChange} data-length={datalength} value={this.props.v} s={this.props.s} m={this.props.m} l={this.props.l} xl={this.props.xl} label={this.props.label} icon={this.props.icon} success={this.props.success} error={this.props.error} placeholder={this.props.placeholder||''} id={this.props.id||''} className={" "+this.props.className} type={type} />
         </>
        )   
   }catch(err){
     console.error('Error in Numberfield ',err)
   }
 }
}

Numberfield.propTypes = {
  validate:PropTypes.bool,
  s:PropTypes.number,
  m:PropTypes.number,
  l:PropTypes.number,
  xl:PropTypes.number,
  error:PropTypes.string,
  success:PropTypes.string,
  datalength:PropTypes.string,
  disabled:PropTypes.bool,
  type:PropTypes.oneOf(["number"]),
  placeholder:PropTypes.string,
  className:PropTypes.string,
  onChange:PropTypes.func,
};

export class Emailfield extends React.Component{render(){
  const { validate,required, onChange,email  } = this.props;
    let classes = {
        validate,
        required,
    }
 try{   
  return (<>
            <TextInput onChange={onChange} error={this.props.error} value={this.props.v} s={this.props.s} m={this.props.m} l={this.props.l} xl={this.props.l} icon={this.props.icon} label={this.props.label}  placeholder={this.props.placeholder||''} id={this.props.id||''} type={email} className={this.props.className} required={cx(classes)} />
         </>
        )   
 }catch{
 } 
   }
}

Emailfield.propTypes = {
  validate:PropTypes.bool,
  s:PropTypes.number,
  m:PropTypes.number,
  l:PropTypes.number,
  xl:PropTypes.number,
  error:PropTypes.string,
  success:PropTypes.string,
  datalength:PropTypes.string,
  disabled:PropTypes.bool,
  email:PropTypes.bool,
  placeholder:PropTypes.string,
  className:PropTypes.string,
  onChange:PropTypes.func,
};

export class Passwordfield extends React.Component{render(){
  return (<>
            <TextInput validate={this.props.validate} value={this.props.v} label={this.props.label} placeholder={this.props.placeholder} icon={this.props.icon} onChange={this.props.onChange} id={this.props.id||''} password className={this.props.className||''} required/>
        </>   
      )
   }
}

Passwordfield.propTypes = {
  validate:PropTypes.bool,
  s:PropTypes.number,
  m:PropTypes.number,
  l:PropTypes.number,
  xl:PropTypes.number,
  error:PropTypes.string,
  success:PropTypes.string,
  datalength:PropTypes.string,
  disabled:PropTypes.bool,
  type:PropTypes.oneOf(["password"]),
  placeholder:PropTypes.string,
  className:PropTypes.string,
  onChange:PropTypes.func,
};

export class Img extends React.Component{render(){
 return(<img style={this.props.style} src={this.props.src} width={this.props.w} height={this.props.h} className={"img "+this.props.className} alt={this.props.description} />)
 }
}
         
export class TextArea extends React.Component{render(){
  const { v, s, m, l, xl, icon, label, placeholder, success, error, onChange, id, className, datalength } =this.props;
     return(
            <Textarea  value={v}
                           s={s}
                           m={m} 
                           l={l} 
                          xl={xl} 
                        icon={icon}
                       label={label} 
                     success={success} 
                       error={error} 
                    onChange={onChange}
                    placeholder={placeholder} 
                          id={id} 
                   className={className} 
                 data-length={datalength} />
         
      )
  }
}

TextArea.propTypes = {
  validate:PropTypes.bool,
  s:PropTypes.number,
  m:PropTypes.number,
  l:PropTypes.number,
  xl:PropTypes.number,
  v:PropTypes.oneOf(["",0,Array,{},[]]),
  error:PropTypes.string,
  success:PropTypes.string,
  datalength:PropTypes.string,
  disabled:PropTypes.bool,
  placeholder:PropTypes.string,
  className:PropTypes.string,
  onChange:PropTypes.func,
};

export class Selects extends React.Component{
   componentDidMount(){
      M.AutoInit();
   }
  render(){

    const { className, label, icon, onChange, id, children } = this.props;
    return(
             <Select
                  id={id}
                  icon={ icon } 
                  multiple={false}
                  className={className}
                  onChange={onChange}
                  label={label}
                  options={{
                    classes:'',
                    dropdownOptions: {
                      alignment: 'left',
                      autoTrigger: true,
                      closeOnClick: true,
                      constrainWidth: true,
                      coverTrigger: true,
                      hover: false,
                      inDuration: 150,
                      onCloseEnd: null,
                      onCloseStart: null,
                      onOpenEnd: null,
                      onOpenStart: null,
                      outDuration: 250
                    }
                  }}
                  value=""
                >
                { children }
                  </Select>
      )
  }
}

const SECOND = 1000, // 60,000 miliseconds / 60 seconds = 1000 seconds
    MINUTE = SECOND*60, //3,600 seconds = 60 minutes
    HOUR = MINUTE * 60, // 3,600 minutes = 60 hours
    DAY = HOUR * 24, // 1,440 hours * 24 = 
    MONTH = DAY * 30,
    YEAR = DAY * 365;

export const getTimeAgoString = (timestamp) => {
  
    const elapsed = Date.now() - timestamp,
        getElapsedString = (value, unit) => {
            const round = Math.round(elapsed / value);
            return `${unit === ' second'? 'Just now':`${round}${unit}${round > 1 ? 's' : ''} ago`}`;
        };

    if (elapsed < MINUTE) {
        return getElapsedString(SECOND, ' second');
    }
    if (elapsed < HOUR) {
        return getElapsedString(MINUTE, ' m');
    }
    if (elapsed < DAY) {
        return getElapsedString(HOUR, ' h');
    }
    if (elapsed < MONTH) {
        return getElapsedString(DAY, ' d');
    }
    if (elapsed < YEAR) {
        return getElapsedString(MONTH, ' mon');
    }
    return getElapsedString(YEAR, ' year');
};

class TimeAgo extends React.Component {

    state = {
        datetime: null,
        string: ""
    };

    setDateTime = ({timestamp}) => {
        const date = new Date(timestamp);
        this.setState({datetime: date.toISOString(), string: getTimeAgoString(timestamp)});
    };

    componentDidMount() {
        this.setDateTime(this.props);
    }

    componentWillReceiveProps(props) {
        this.setDateTime(props);
    }

    shouldComponentUpdate(props, {datetime}) {
        return datetime !== this.state.datetime;
    }

    render() {
        const {datetime, string} = this.state;
        return <time dateTime={datetime}>{string}</time>;
    }
}

TimeAgo.propTypes = {
  timestamp:PropTypes.instanceOf(Date).isRequired,
}

export { TimeAgo };
