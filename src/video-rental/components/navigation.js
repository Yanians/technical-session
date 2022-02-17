import*as React from 'react';

import Toolbar from '@mui/material/Toolbar';

import styled from 'styled-components';

import CssBaseline from '@mui/material/CssBaseline';

import Container from '@mui/material/Container';

import  {blue, green,red,yellow, } from '@mui/material/colors';

// import green from '@mui/material/colors';

// import red from '@mui/material/colors';

// import yellow from '@mui/material/colors';

import LightModeIcon from '@mui/icons-material/LightModeTwoTone';

import DarkModeIcon from '@mui/icons-material/DarkModeTwoTone';

import { DataTable } from '../index';

import { 
   ThemeProvider,
    createTheme,
 } from '@mui/material/styles';

// import  createTheme  from '@mui/material/styles';


import Layout,{
   Root, 
   getDrawerSidebar, 
   getHeader,
   getContent,
   getSidebarContent,
   getCollapseBtn, 
   getSidebarTrigger,
   getFooter,
   getInsetSidebar,
   getInsetFooter,
   getInsetContainer,
 } from '@mui-treasury/layout';

// import Root from '@mui-treasury/layout';

// import getHeader from '@mui-treasury/layout';

// import getDrawerSidebar from '@mui-treasury/layout';

// import getSidebarContent from '@mui-treasury/layout';

// import getCollapseBtn from '@mui-treasury/layout';

// import getSidebarTrigger from '@mui-treasury/layout';

// import getFooter from '@mui-treasury/layout';

// import getContent from '@mui-treasury/layout';

// import getInsetSidebar from '@mui-treasury/layout';

// import getInsetFooter from '@mui-treasury/layout';

// import getInsetContainer from '@mui-treasury/layout';

import *as W from '../../lib';

import *as L from '../index';

import *as _ from '../../treasurylib';

const Header = getHeader(styled)

const DrawerContainer = getDrawerSidebar(styled)

const SidebarContent = getSidebarContent(styled)

const Content = getContent(styled)

const Footer = getFooter(styled)

const CollapseBtn = getCollapseBtn(styled)

const InsetSidebar = getInsetSidebar(styled)

const InsetContainer = getInsetContainer(styled)

const SidebarTrigger = getSidebarTrigger(styled)

const InsetFooter = getInsetFooter(styled)

const Title = W.Typographyui;

const SearchInput = W.Inputs;

const scheme = Layout();

      scheme.configureHeader(builder=>{
             builder.registerConfig('xs',{position:'sticky'})
                    .registerConfig('md',{
                            position:'permanent'
                          })
      })

      scheme.configureEdgeSidebar(builder=>{
            builder.create('trigger_sidebar',{anchor:'left'})
                   .registerTemporaryConfig('xs',{width:'auto'})
                   .registerPermanentConfig('sm',{
                        width:180,
                      })
                   .registerPermanentConfig('md',{
                        width:220,
                      })
      })

      scheme.configureInsetSidebar(builder=>{
             builder.create('trigger_inset',{anchor:'right'})
                    .registerFixedConfig('xs',{width:240})
                     .registerFixedConfig('md',{width:240})
                      .registerFixedConfig('lg',{width:240})
      })

export default ()=>{

     const r = L.responsiveDrawer();

     const [state, setState ] = React.useState(false);

     const themeConfig = createTheme({

         palette:{

            type:state ? 'dark':'light',

            primary:{
               main:green[600],
               light:'#0066ff',
               contrastText:'white',
            },

            secondary:{
               main:blue[700],
            },

            tertiary:{
               main:yellow[700],
            },

       }
    });

       const toggleTheme =()=>{
         setState(!state)
     }

      return (
 
       <Root scheme={scheme}>
            {( { state: { sidebar } }) => (
        <ThemeProvider theme={themeConfig}>      
         <CssBaseline />

            <Header>
              <Toolbar className={r.header}>
                <SidebarTrigger sidebarId={'trigger_sidebar'} />
                <Title instagram bold shadow1grey oblique fantasy noWrap div h4 textContent={'Video Rentals'} sx={{flexGrow:1,display:{xs:'none',sm:'block'}}}/>

                 <div className={r.search}>
                   <div className={r.searchIcon}>
                      <W.SearchIcon />
                   </div>
                   <SearchInput disableUnderline search placeholder={'Search'} classes={{root:r.inputRoot,input:r.inputInput}} />
                 </div>
                  
                    <W.Ib button onClick={toggleTheme}>
                       {state ? <DarkModeIcon /> : <LightModeIcon />}
                    </W.Ib>
              </Toolbar>
            </Header>
               <DrawerContainer sidebarId={'trigger_sidebar'}>

                 <SidebarContent>
                        <_.NavHeader collapsed={sidebar.trigger_sidebar.collapsed} />
                 <_.NavContent />         
                   </SidebarContent>
                  <CollapseBtn />
               </DrawerContainer>

              <Content>
                  <W.CardDefault />
                    <DataTable />
              </Content>

              <Footer>
                <_.Footer />
              </Footer>        
      </ThemeProvider>  
     )} 
       </Root>     
     )  
  }
      // <DrawerContainer sidebarId={'trigger_sidebar'}>

      //           <SidebarContent>
      //              <_.NavHeader />
      //              <_.NavContent />         
      //           </SidebarContent>
      //          <CollapseBtn />
      //         </DrawerContainer>
