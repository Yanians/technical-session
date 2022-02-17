import React from 'react';
import { Cols, Space } from '../wrapper';
export class VertexChart extends React.Component{
  
  render(){
    // const chart = useParams();
    return(
      <React.Fragment>
         <Space />
         <Space />
         <Space />
         <Space />
         <Space />
            <Cols s6 m12 l6 xl6>
              <div className="card card-small card-horizontal grey lighten-3 z-depth-2">
                      <div className="card-stacked">
                         <div className=" card-content red-text">
                             <span className="card-title">petsa indside in here...</span>
                               <canvas id="radar" width="700" height="430"></canvas>
                         </div>
                      </div>  
                      <div className="card-action">
                        <button onClick={null} >View Data</button>
                      </div>
              </div>
            </Cols> 

            <Cols s6 m12 l6 xl6> 
              <div className="card card-small card-horizontal grey lighten-3 z-depth-2">
                      <div className="card-stacked">
                         <div className=" card-content red-text">
                             <span className="card-title">petsa indside in here...</span>
                               <canvas id="radar" width="700" height="430"></canvas>
                         </div>
                      </div>  
                      <div className="card-action">
                         <button onClick={null} >View Data</button>
                      </div>
              </div>
            </Cols>

            <Cols s6 m12 l6 xl6>
                 <div className="card card-small card-horizontal grey lighten-3 z-depth-2">
                      <div className="card-stacked">
                         <div className=" card-content red-text">
                             <span className="card-title">petsa indside in here...</span>
                               <canvas id="radar" width="700" height="430"></canvas>
                         </div>
                      </div>  
                      <div className="card-action">
                         <button onClick={null} >View Data</button>
                      </div>
                 </div>
              </Cols>   

              <Cols s6 m12 l6 xl6>
                 <div className="card card-small card-horizontal grey lighten-3 z-depth-2">
                      <div className="card-stacked">
                         <div className=" card-content red-text">
                             <span className="card-title">petsa indside in here...</span>
                               <canvas id="radar" width="700" height="430"></canvas>
                         </div>
                      </div>  
                      <div className="card-action">
                         <button onClick={null} >View Data</button>
                      </div>
                 </div>
              </Cols>  
            </React.Fragment>  
      )
  }
}



