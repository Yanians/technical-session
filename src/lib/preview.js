/*
 *Form possible layout
*/

<L.Gridui item xs2 sm2 md2 lg2 xl2><L.Gridui>
<L.Gridui item xs7 sm7 md7 lg7 xl7>

           <L.Boxui form fullWidth wrap noValidate autoComplete="off">

              <L.Cardui contained onehalf>
               <L.Gridui container zeroMinWidth item space1 columns={12}>

                 <L.Gridui item xs6 sm6 md6 lg6 xl6>
                    <L.Inputfieldui number fullWidth small label="number input" outlined />
                 </L.Gridui>   

                 <L.Gridui item xs6 sm6 md6 lg6 xl6>
                    <L.Inputfieldui text fullWidth small label="Address" outlined />
                 </L.Gridui>   

                 <L.Gridui item xs6 sm6 md6 lg6 xl6>
                    <L.Inputfieldui email fullWidth small label="email line" outlined />
                 </L.Gridui>

                 <L.Gridui item xs6 sm6 md6 lg6 xl6>
                    <L.Inputfieldui text fullWidth small label="position" outlined />
                 </L.Gridui>

                 <L.Gridui item xs6 sm6 md6 lg6 xl6>
                    <L.Inputfieldui text fullWidth small label="position" outlined />
                 </L.Gridui>

                 <L.Gridui item xs6 sm6 md6 lg6 xl6>
                    <L.Inputfieldui text fullWidth small label="position" outlined />
                 </L.Gridui>

                 <L.Gridui item xs6 sm6 md6 lg6 xl6>
                    <L.Inputfieldui text fullWidth small label="position" outlined />
                 </L.Gridui>

                 <L.Gridui item xs6 sm6 md6 lg6 xl6>
                    <L.Inputfieldui text fullWidth small label="position" outlined />
                 </L.Gridui>

                 <L.Gridui item xs6 sm6 md6 lg6 xl6>
                    <L.Inputfieldui multiline fullWidth label="comment here" outlined />
                 </L.Gridui>

               </L.Gridui> 
              </L.Cardui>  

           </L.Boxui> 
</L.Gridui>
/
<L.Gridui item xs3 sm3 md3 lg3 xl3><L.Gridui>

   
const Optimus = Styled((props)=>{
                        const { containers,children, circleContainer, circle, content, ...other} = props;
                        return <div {...other}>{children}</div>
                     })(({theme,containers,circleContainer,circle})=>{
                              if(document.body.scrollTop > 0 || document.documentElement.scrollTop > 0){
                                  if(containers){
                                    console.log(document.body.scrollTop,'if statement')
                                const container = {
                                        [theme.breakpoints.up('sm')]:{
                                            position:'fixed',
                                            top:theme.spacing(7),
                                            left:'auto',
                                            whiteSpace:'nowrap',
                                            backgroundColor:'red',
                                            transformOrigin:'top left',
                                            transition:'transform .5s linear',
                                            // marginTop:theme.spacing(4),
                                            width:'auto',
                                            height:'55px',
                                        },
                                        [theme.breakpoints.down('xs')]:{
                                            display:'flex',
                                            backgroundColor:'#fafafa',
                                            transformOrigin:'top right',
                                            transition:'transform .5s linear',
                                            marginTop:theme.spacing(4),
                                            width:'100vw',
                                            minHeight:'auto',
                                        },           
                                        
                                    }
                                    return container;

                                  }else if(circleContainer){
                                        return{
                                             [theme.breakpoints.up('sm')]:{
                                                 position:'fixed',
                                                 top:'0px',
                                                 left:'0px',
                                             },
                                             position:'fixed',
                                             top:'0px',
                                             left:'0px',
                                        }
                                  }else{
                                      return circle ? {[theme.breakpoints.up('sm')]:{
                                        backgroundColor: '#ff7979',
                                                 height:'200px',
                                                  width:'200px',
                                           borderRadius: '50%',
                                               position: 'relative',
                                             transition: 'transform 0.5s linear',
                                      },} : undefined;
                                  }
                              }else{
                                if(containers){
                                    console.log(document.body.scrollTop,'else statement')
                                    const container= {
                                      
                                        [theme.breakpoints.up('sm')]:{
                                            position:'fixed',
                                            top:theme.spacing(7),
                                            left:'auto',
                                            backgroundColor:'red',
                                            transformOrigin:'top left',
                                            transition:'transform .5s linear',
                                            // marginTop:theme.spacing(4),
                                            width:'auto',
                                            height:'2px',
                                        },
                                        [theme.breakpoints.down('sm')]:{
                                            position:'fixed',
                                            backgroundColor:'#fafafa',
                                            transformOrigin:'top right',
                                            transition:'transform .5s linear',
                                            marginTop:theme.spacing(4),
                                            width:'100vw',
                                            minHeight:'100vh',
                                        },           
                                        
                                    }
                                    return container;
                                  }else if(circleContainer){
                                        return{
                                             [theme.breakpoints.up('sm')]:{
                                                 position:'fixed',
                                                 top:'0px',
                                                 left:'0px',
                                             },
                                             position:'fixed',
                                             top:'0px',
                                             left:'0px',
                                        }
                                  }else{
                                      return circle ? {[theme.breakpoints.up('sm')]:{
                                        backgroundColor: '#ff7979',
                                                 height:'200px',
                                                  width:'200px',
                                           borderRadius: '50%',
                                               position: 'relative',
                                             transition: 'transform 0.5s linear',
                                      },} : undefined;
                                  }
                              }
                     });

import { Breakpoint } from '@material-ui/core/styles/createBreakpoints';
import { HeaderConfig, PermanentSidebarConfig, PersistentSidebarConfig, EdgeSidebarConfig, TemporarySidebarConfig, InsetSidebarConfig, SidebarProperties, StickyInsetSidebarConfig, AbsoluteInsetSidebarConfig, FixedInsetSidebarConfig } from './Config';
import { Dictionary, MapBreakpoint } from './Utils';
export declare type HeaderConfigMap = MapBreakpoint<HeaderConfig>;
export declare type SubheaderConfigMapById = Dictionary<MapBreakpoint<HeaderConfig>>;
export declare type SubheaderData = {
    configMapById: SubheaderConfigMapById;
    configMap: MapBreakpoint<HeaderConfig[]>;
    hiddenById: Dictionary<Breakpoint[]>;
};
export declare type EdgeSidebarConfigMapById = Dictionary<MapBreakpoint<EdgeSidebarConfig>>;
export declare type EdgeSidebarData = {
    sidebarIds: string[];
    configMap: MapBreakpoint<EdgeSidebarConfig[]>;
    configMapById: Dictionary<MapBreakpoint<EdgeSidebarConfig>>;
    hiddenById: Dictionary<Breakpoint[]>;
};
export declare type InsetSidebarData = {
    configMapById: Dictionary<MapBreakpoint<InsetSidebarConfig>>;
    configMap: MapBreakpoint<InsetSidebarConfig[]>;
};
export interface IRegistryOld<ConfigType> {
    registerConfig: (breakpoint: Breakpoint, config: Omit<ConfigType, 'id' | 'hidden'>) => IRegistryOld<ConfigType>;
}
export interface IHeaderBuilder {
    create: (id: string) => IRegistryOld<HeaderConfig>;
    registerConfig: IRegistryOld<HeaderConfig>['registerConfig'];
    update: (updater: (config: MapBreakpoint<Omit<HeaderConfig, 'id'>>) => void) => void;
    getId: () => string;
    getData: () => HeaderConfigMap;
    debug: () => void;
}
export interface IEdgeSidebarRegistry {
    registerPersistentConfig: (breakpoint: Breakpoint, config: Omit<PersistentSidebarConfig, 'id' | 'anchor' | 'variant' | 'hidden'>) => IEdgeSidebarRegistry;
    registerPermanentConfig: (breakpoint: Breakpoint, config: Omit<PermanentSidebarConfig, 'id' | 'anchor' | 'variant' | 'hidden'>) => IEdgeSidebarRegistry;
    registerTemporaryConfig: (breakpoint: Breakpoint, config: Omit<TemporarySidebarConfig, 'id' | 'anchor' | 'variant' | 'hidden'>) => IEdgeSidebarRegistry;
}
export interface IEdgeSidebarBuilder {
    create: (id: string, properties: SidebarProperties) => IEdgeSidebarRegistry;
    update: (id: string, updater: (config: MapBreakpoint<Omit<EdgeSidebarConfig, 'id' | 'anchor'>>) => void) => void;
    hide: (id: string, breakpoints: Breakpoint[] | boolean) => void;
    getSidebarIds: () => string[];
    getData: () => EdgeSidebarData;
    debug: () => void;
}
export interface IInsetSidebarRegistry {
    registerStickyConfig: (breakpoint: Breakpoint, config: Omit<StickyInsetSidebarConfig, 'id' | 'anchor' | 'variant'>) => IInsetSidebarRegistry;
    registerAbsoluteConfig: (breakpoint: Breakpoint, config: Omit<AbsoluteInsetSidebarConfig, 'id' | 'anchor' | 'variant'>) => IInsetSidebarRegistry;
    registerFixedConfig: (breakpoint: Breakpoint, config: Omit<FixedInsetSidebarConfig, 'id' | 'anchor' | 'variant'>) => IInsetSidebarRegistry;
}


