
import React from 'react';
import ReactDOM from 'react-dom';
import Particles from 'react-particles-js'
import FadeIn from 'react-fade-in';
import THANKS from './thanks' 
export default UploadTwo;

function go(){
    ReactDOM.render(
        <THANKS/>,
        document.getElementById('root')
      );
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

  function UploadTwo(){
      return(
        <div style={{backgroundColor: '#31BB76'}}>
    <h1 style={{
        color: "#f9f3f4",
        position: "absolute",
        textAlign: "center",
        top: "15%",
        width: "100%",
        lineHeight: "0.4em"
    }}>
    <FadeIn>
        <h1>Which game do you like to get?</h1>
        <div style={{
                transition: "0.3s",
                width: "70%",
                margin: "auto",
                color: "white"
                }}>
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSPEEIfFyJovc7fCvCNHa9nmKVYburuhQK80t7lxwMm7G3WRCC9&s" alt="Avatar" style={{width:"20%",alignItems:"center" ,height:"20%"}}/>
                <div  style={{textAlign:"center", padding:"2px 16px"}}>
                    <form>
                        <select style={{fontSize: "2vh"}}>
                            <option value="volvo">NBA 2K</option>
                            <option value="saab">FIFA</option>
                            <option value="fiat">Call Of Duty</option>
                            <option value="audi">Tekken</option>
                        </select>
                    </form>
                    <br />
                    <form>
                        <select style={{fontSize: "2vh"}}>
                            <option value="volvo">PS4</option>
                            <option value="saab">XBOX ONE</option>
                            <option value="fiat">PC</option>
                        </select>
                    </form> 
                </div>
            </div>
        <br/>
        <button className="btn btn-light" style={{fontSize: 20, fontWeight: 'bold'}} onClick={go}>Next</button>
        
    </FadeIn>
    </h1>
        
        <Particles
                params={particlesOpt}
                />
      </div>
      )  
    }