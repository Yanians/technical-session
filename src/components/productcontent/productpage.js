import React from 'react';

import { Links } from '../components';

import { AddForm } from '../actionform';

import { Minimal } from './minimal';

import { useSelector } from 'react-redux';

function Cctv(){
      const cctv = useSelector(state=>({
                items:state.Cctv,
            }));
  /*
  * this should not use  <<< return() >>>
  * if function component is the content
  * it must be <<< return <Function /> jsx >>>
  */
       return <Minimal defaultDb={cctv.items} />
  }

export function Biometrics(){
    const bio = useSelector(state=>({
                items:state.Biometrics,
            }));
       return <Minimal defaultDb={bio.items} />   
  }

export function TurnStyles(){
    const turnstyle = useSelector(state=>({
                items:state.Turnstyles,
            }));
       return <Minimal defaultDb={turnstyle.items} />   
  }

export function CardScanners(){
       const scanners = useSelector(state=>({
                items:state.Cardscanners,
            }));

       return <Minimal defaultDb={scanners.items} />   
}

export function Xpassed(){
  const xpass = useSelector(state=>({
                items:state.Xpass,
            }));
      return <Minimal defaultDb={xpass.items} />    
    }

export function FormAdd(){
    return  (
            <Links>
                <AddForm />
            </Links>
    )
  }
export default Cctv;







