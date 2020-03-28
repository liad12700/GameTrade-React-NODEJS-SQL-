import React from 'react';
import ReactDOM from 'react-dom';
import Login from './Login';
import Reg from './Reg';
import Particles from 'react-particles-js'
import FadeIn from 'react-fade-in'; 
export default Canvas;
function go(){
    ReactDOM.render(<Login />, document.getElementById('root'));
  }
function go2(){
    ReactDOM.render(<Reg />, document.getElementById('root'));
}
const particlesOpt={
  particles: {
     number:{
         value:150,
         density:{
             enable:true,
             value_area: 800
         }
     }
  }
}


function Canvas() {
    return(
        <div style={{backgroundColor: "black"}}>
            <h1 style={{
            color: "#f9f3f4",
            position: "absolute",
            textAlign: "center",
            top: "40%",
            width: "100%",
            lineHeight: "0.4em"
        }}>
        <FadeIn>
            <h1>Welcome To Game Trade</h1>
            <button className="btn btn-light" style={{fontSize: 20, fontWeight: 'bold'}} onClick={go}>Login</button>
            <br/>
            <button className="btn btn-light" style={{fontSize: 20, fontWeight: 'bold'}} onClick={go2}>Register</button>
            
        </FadeIn>
        </h1>
            <Particles
                params={particlesOpt}
            />
        </div>
    )
}