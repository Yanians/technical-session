
import*as React from 'react';

import Content from '../project/scratch';

import { create } from 'jss';

import rtl from 'jss-rtl';

import { makeStyles, jssPreset } from '@material-ui/core/styles';

import Frame from 'react-frame-component';

import *as W from '../lib';

const useStyle = makeStyles(theme=>({
	  root:{
	  	display:'flex',
	    backgroundColor: theme.palette.background.default,
    flexGrow: 1,
    width:'100%',
    height: 500,
    border: "none",
    boxShadow: theme.shadows[1]	
	  },
       
}));

 

export default props =>{

	const [state, setState ] = React.useState({});

	const [ ready, setReady ] = React.useState(false);

    let contentWindow = null;

    let contentDocument = null;

	const handleRef = ref => {

    contentDocument = ref ? ref.node.contentDocument : null;

    contentWindow = ref ? ref.node.contentWindow : null;
  };

  const onContentDidMount = () => {
    setState({
      ready: true,
      jss: create({
        plugins: [...jssPreset().plugins, rtl()],
        insertionPoint: contentWindow["demo-frame-jss"]
      }),
      sheetsManager: new Map(),
      container: contentDocument.body
    });
  };

  const onContentDidUpdate = () => {
    contentDocument.body.dir = props.theme.direction;
  };
    
    const r = useStyle();
	     return (
	     	 <Frame link="http://localhost:3000" className={r.root} ref={e=>handleRef(e)} contentDidMount={e=>onContentDidMount(e)} onContentDidUpdate={e=>onContentDidUpdate(e)}>
	     	 	    <Content />  
	     	 </Frame>
	     	  	
	     	)
};