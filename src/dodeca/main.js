

import { useEffect, useState } from 'react';

import  { styled } from '@mui/material/styles';

import Divider from '@mui/material/Divider';

import Stack from '@mui/material/Stack';

import Todo from './todo';

import *as M from '../lib';

const InputField = M.AbstractGlobal(M.Inputfield);

const Label = styled('div')(({ theme })=>({
  padding:theme.spacing(2)
}));

function Main(){
 
    const [state, setState ] = useState({
        counterValue:0,
        inputCalc1:'',
        inputCalc2:'',
        calckValue:'',
        backgroundColors:[],
    });

    const handleFirstInput=(e)=>{
        const value = e.target.value;
        setState({...state,inputCalc1:value});
    }

    const handleSecondInput=(e)=>{
        const value = e.target.value;
        setState({...state,inputCalc2:value});
    }

    const handleResetCal=()=>{
         setState({
             ...state,
             inputCalc1:0,
             inputCalc2:0,
             calckValue:0,
         });
    }

    const { counterValue, inputCalc1, inputCalc2, calckValue } = state;

    const handleIncrement =(e)=>{
        setState({
            ...state,
            counterValue:counterValue+1,
        });
     } 
 
     const handleDecrement =(e)=>{
         setState({
             ...state,
             counterValue:counterValue-1,
         }); 
     }

     const handleResetCounter=()=>{
         setState({
             ...state,
           counterValue:0,  
         })
     }

    useEffect(()=>{
        const v1 = inputCalc1 === "" ? null : parseInt(inputCalc1);
        const v2 = inputCalc2 === "" ? null : parseInt(inputCalc2);
        const total = v1+v2;
              setState({
                  ...state,
                  calckValue:total,
              });

        const button = document.querySelector('.random-colors');
              button.addEventListener("click",()=>{
                   let color = '#'
                   color +=  Math.random().toString(16).slice(2,8);
                   button.style.backgroundColor = color;
                   console.log(color); 
              });

    },[inputCalc1,inputCalc2]);

    return(
        <M.O sx={{p:2,m:2}}>
           <h1>
               Hello World!
           </h1>

           <Divider />

           {/******************************COUNTER SECTION*****************************************/}
           <h3>
               Counter Section
           </h3>
           <Label>
               <Stack  direction={{ xs: 'column', sm: 'row' }}
                       justifyContent="center"
                       alignItems="center"
                       spacing={{ xs: 1, sm: 1, md: 1 }}
               >
                   <Label>
                      <M.Buttonui outlined primary small onClick={handleIncrement} name="+" />
                   </Label>

                   <Label>
                     {counterValue > 0 ?  <M.Buttonui outlined primary small onClick={handleDecrement} name="-" />
                                       :  <M.Buttonui disabled outlined primary small onClick={handleDecrement} name="-" />
                      }
                     
                   </Label>

                   <Label>
                      <M.Buttonui outlined primary small onClick={handleResetCounter} name="reset" />
                   </Label>
                   <Label>
                      <M.O sx={{
                          p:1,
                          width:85,
                          height:60,
                          bgcolor:theme=>theme.palette.mode == 'dark'?'#101010':'grey.100',
                          color:theme=>theme.palette.mode === 'dark'?'grey.300':theme.palette.success.light,
                          border:'1px solid',
                          borderColor:theme=>theme.palette.mode === 'dark'?'grey.800':'grey.300',
                          borderRadius:2,
                          }}>
                          <h2>{counterValue}</h2>
                      </M.O>
                   </Label> 
                   <Label> <h2>{counterValue % 2 === 1 ? 'ODD':counterValue === 0 ?'':'EVEN'}</h2></Label>         
               </Stack>
           </Label>

           <Divider />
           {/****************************** CALCULATOR SECTION*****************************************/}
         <Label>
           <h3>
               Calculator Section
           </h3>
            <Stack direction="row"
                   justifyContent={'center'}
                   alignItems={'center'}
                   spacing={{xs:1,sm:1,md:2}}
            >
                <Stack direction="column" spacing={{xs:2,sm:2,md:2}}>
                    <InputField outlined small instagram number label="First Input Element" v={inputCalc1} onChange={handleFirstInput}/>
                    <InputField outlined small instagram number label="Second Input Element" v={inputCalc2} onChange={handleSecondInput} />
                    <M.Buttonui messenger outlined fullWidth onClick={handleResetCal} name="reset" />
                </Stack>
                    <M.O sx={{
                          p:1,
                          width:85,
                          height:'auto',
                          bgcolor:theme=>theme.palette.mode == 'dark'?'#101010':'grey.100',
                          color:theme=>theme.palette.mode === 'dark'?'grey.300':theme.palette.success.light,
                          border:'1px solid',
                          borderColor:theme=>theme.palette.mode === 'dark'?'grey.800':'grey.300',
                          borderRadius:2,
                          
                          }}>
                          <h2>{calckValue}</h2>
                      </M.O>    
            </Stack>
        </Label>    
          {/***************************************** RANDOM COLORS *************************************************/}
                <Label>
                    <Divider />
                    <h3>STOP BUTTON</h3>
                        <Stack direction="row" justifyContent="center" alignItems="center">
                            <M.O sx={{
                                p:5,
                                width:'100%',
                                height:'auto',
                            }}
                            >
                            <M.Buttonui className="random-colors" fullWidth large secondary contained name="STOP" />
                            </M.O>
                        </Stack>
                </Label>
{/*************************************************************TO DO SECTION**********************************************************/}
                <Label>
                    <Divider />
                      <Label><h3>VEGETABLE LIST</h3></Label>
                        <Todo />
                </Label>       
       </M.O>
    )
}

export default Main;