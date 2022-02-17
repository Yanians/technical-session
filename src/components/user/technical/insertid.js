  import ReactDOM from 'react-dom';

  const output = <Cols s6 m12 l6 xl6>
                    <div className="card card-small card-horizontal grey lighten-3 z-depth-2">
                            <div className="card-stacked">
                               <div className=" card-content red-text">
                                   <span className="card-title">petsa indside in here...</span>
                                     <canvas id="radar" width="700" height="430"></canvas>
                               </div>
                            </div>  
                            <div className="card-action">
                              <a href="#">View Data</a>
                            </div>
                    </div>
                  </Cols> 

        RecatDOM.render(<output />,document.getElementById('reactid'));    