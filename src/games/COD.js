import React from 'react';
import ReactDOM from 'react-dom';
export default COD;

function go(){
    
}

function COD(){
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
                <img src="https://upload.wikimedia.org/wikipedia/en/e/e9/CallofDutyModernWarfare%282019%29.jpg" alt="Avatar" style={{width:"100%",alignItems:"center" ,height:"100%"}}/>
                <div  style={{textAlign:"center", padding:"2px 16px"}}>
                    <h4><b>Call Of Duty</b></h4> 
                    <p>PS4</p>
                    <p>Shooting</p>
                    <p>2020</p> 
                    <button onClick={go} className="btn btn-success" style={{float:'none'}}>I Want It!!!!!</button>
                </div>
            </div>
        </section>
    )
}