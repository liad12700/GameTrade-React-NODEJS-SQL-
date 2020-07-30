import React from 'react';
import ReactDOM from 'react-dom';
import { defaultProps } from 'react-select/src/Select';
export default NBA;

function go(){
   
}

function NBA(){
    return(
        <section>
            <div style={{
                boxShadow: "0 4px 8px 0 rgba(0,0,0,0.2)",
                transition: "0.3s",
                width: "70%",
                margin: "auto",
                backgroundColor: "blue",
                color: "white"
                }}>
                <img src="https://www.si.com/.image/c_fit%2Ccs_srgb%2Cfl_progressive%2Cq_auto:good%2Cw_620/MTY4MTAyODY2MDQzMzQ4MjQx/nba-2k18jpg.jpg" alt="Avatar" style={{width:"100%",alignItems:"center" ,height:"100%"}}/>
                <div  style={{textAlign:"center", padding:"2px 16px"}}>
                    <h4><b>NBA 2K</b></h4> 
                    <p>{defaultProps.}</p>
                    <p>Sport</p>
                    <p>2018</p> 
                    <button onClick={go} className="btn btn-success" style={{float:'none'}}>I Want It!!!!!</button>
                </div>
            </div>
        </section>
    )
}