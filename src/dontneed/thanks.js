import React from 'react';
import ReactDOM from 'react-dom';
import Particles from 'react-particles-js'
import FadeIn from 'react-fade-in'
import Upload from './uploadgame'
import Mainselect from './mainselect'
export default THANKS;

function go(){
    ReactDOM.render(<Upload />, document.getElementById('root'));
  }
function go2(){
    ReactDOM.render(<Mainselect />, document.getElementById('root'));
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


function THANKS() {
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
            <h1>Thanks your game uploaded</h1>
            <button className="btn btn-light" style={{fontSize: 20, fontWeight: 'bold'}} onClick={go}>Upload more game</button>
            <br/>
            <button className="btn btn-light" style={{fontSize: 20, fontWeight: 'bold'}} onClick={go2}>Select Screen</button>
            
        </FadeIn>
        </h1>
            <Particles
                params={particlesOpt}
            />
        </div>
    )
}