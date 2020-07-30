import React from 'react';
import ReactDOM from 'react-dom';
import Login from './Login';
import Reg from './Reg';
import Particles from 'react-particles-js'
import FadeIn from 'react-fade-in';
import fifa from './pictures/Fifa.jpg'
import arrow from './pictures/arrow.png'


class FIFA extends React.Component {
    render() {
        return (
            <section>
                <div style={{
                    boxShadow: "0 4px 8px 0 rgba(0,0,0,0.2)",
                    transition: "0.3s",
                    width: "30%",
                    margin: "auto",
                    backgroundColor: "#05386B",
                    color: "white"
                }}>
                    <img src={fifa} alt="Avatar" style={{ width: "100%", alignItems: "center", height: "100%" }} />
                    <div style={{ textAlign: "center", padding: "2px 16px", height: "100%" }}>
                        <h4><b>Fifa</b></h4>
                        <p>{this.props.y}</p>
                        <p>Sport</p>
                        <p>2016</p>
                    </div>
                </div>
            </section>
        )
    }
}
/* 
                <div className="row">
                    <div className="col-sm">
                    <FIFA />
                    </div>
                </div>
                <div className="row">
                    <img src={arrow} width="190" height="90" className="col-sm" alt="" />
                    <img src={arrow} width="190" height="90" className="col-sm" alt="" />
                </div>
                <div className="row">
                    <FIFA className="col-sm"/>
                    <img src={arrow} width="190" height="90" className="col-sm" alt="" />
                    <FIFA className="col-sm"/>
                </div>
               
class App extends React.Component {
    render() {
        return (
            <div class="container">
                <div class="row justify-content-md-center">
                    <div class="col-sm-4">
                        <FIFA />
                    </div>
                </div>
                <div class="row justify-content-md-center" style={{"padding":"20px"}}>
                    <div className="col-sm-2">
                        <img src={arrow} width="100" height="70" alt="" style={{"transform": "rotate(112deg)"}} />
                    </div>
                    <div className="col-sm-1"></div>
                    <div className="col-sm-2">
                        <img src={arrow} width="100" height="70" alt="" style={{"transform": "rotate(230deg)"}}/>
                    </div>
                </div>
                <div class="row justify-content-md-center">
                    <div class="col-sm-4">
                        <FIFA />
                    </div>
                    <div class="col-sm-1">
                            <img src={arrow} width="100" height="70" alt="" style={{"top":"50%",  "position": "relative"}}/>
                    </div>
                    <div class="col-sm-4">
                        <FIFA />
                    </div>
                </div>
            </div>
        )
    }
}
*/

function go() {
    ReactDOM.render(<Login />, document.getElementById('root'));
}
function go2() {
    ReactDOM.render(<Reg />, document.getElementById('root'));
}
const particlesOpt = {
    particles: {
        number: {
            value: 150,
            density: {
                enable: true,
                value_area: 800
            }
        }
    }
}

class App extends React.Component {
    myFunction = () => {
        setTimeout(function () { ReactDOM.render(<App2 />, document.getElementById('root')); }, 5000);
    }
    componentDidMount() {
        this.myFunction();
    }
    render() {
        return (
            <div style={{
                backgroundImage: "linear-gradient(to bottom right, blue, #33ccff)",
                width: '100%',
                height: '100%',
                position: 'fixed',
                backgroundSize: 'cover',
                backgroundPosition: '50% 50%',
                backgroundRepeat: 'no-repeat',
                zIndex: 2
            }}>
                <h1 style={{
                    color: "#f9f3f4",
                    position: "absolute",
                    textAlign: "center",
                    top: "40%",
                    width: "100%",
                    lineHeight: "0.4em"
                }}>
                    <FadeIn>
                        <h1 className="display-1">Welcome To Game Trade</h1>
                    </FadeIn>
                </h1>
                <Particles
                    params={particlesOpt}
                />
            </div>
        )
    }
}
class App2 extends React.Component {
    render() {
        return (
            <div style={{
                backgroundImage: "linear-gradient(to bottom right, blue, #33ccff)",
                width: '100%',
                height: '100%',
                position: 'fixed',
                backgroundSize: 'cover',
                backgroundPosition: '50% 50%',
                backgroundRepeat: 'no-repeat',
                zIndex: 2
            }}>
                <h1 style={{
                    color: "#f9f3f4",
                    position: "absolute",
                    textAlign: "center",
                    top: "40%",
                    width: "100%",
                    lineHeight: "0.4em"
                }}>
                    <FadeIn>
                        <div className="d-flex justify-content-center align-items-center">
                            <button className="btn btn-light btn-lg btn-block col-sm-8" style={{ fontSize: 20, fontWeight: 'bold' }} onClick={go}>Login</button>
                        </div>
                            <br />
                            <br />
                        <div className="d-flex justify-content-center align-items-center">
                            <button className="btn btn-light btn-lg btn-block col-sm-8" style={{ fontSize: 20, fontWeight: 'bold' }} onClick={go2}>Register</button>
                        </div>
                    </FadeIn>
                </h1>
                <Particles
                    params={particlesOpt}
                />
            </div>
        )
    }
}


export default App;