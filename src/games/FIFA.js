import React from 'react';
import ReactDOM from 'react-dom';
export default FIFA;

function go(){
    
}

function FIFA(){
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
                <img src="https://www.fifplay.com/img/public/fifa-16-cover-switzerland.jpg" alt="Avatar" style={{width:"100%",alignItems:"center" ,height:"100%"}}/>
                <div  style={{textAlign:"center", padding:"2px 16px"}}>
                    <h4><b>Fifa</b></h4> 
                    <p>PS4</p>
                    <p>Sport</p>
                    <p>2016</p> 
                    <button onClick={go} className="btn btn-success" style={{float:'none'}}>I Want It!!!!!</button>
                </div>
            </div>
        </section>
    )
}