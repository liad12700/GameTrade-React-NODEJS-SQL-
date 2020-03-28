import React from 'react';
import ReactDOM from 'react-dom';
import Login from './Login';
import Reg from './Reg';
import Selecttrade from "./selecttrade";
import Mainselect from "./mainselect";
import Canvas from "./canvas";
export default Header;

function go(){
    ReactDOM.render(<Login />, document.getElementById('root'));
  }
function go2(){
    ReactDOM.render(<Reg />, document.getElementById('root'));
}
function go3(){
    ReactDOM.render(<Selecttrade />, document.getElementById('root'));
}
function go4(){
    ReactDOM.render(<Mainselect />, document.getElementById('root'));
}  
function go5(){
    ReactDOM.render(<Canvas />, document.getElementById('root'));
}  

function Header(){
    return(
        <header>
            <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
            <img/>
            <div class="collapse navbar-collapse" id="navbarTogglerDemo03">
                <ul class="navbar-nav mr-auto mt-2 mt-lg-0">
                    <li class="nav-item active">
                        <a className="nav-link" onClick={go} href="#" style={{display:"inline-block"}}>Login<span class="sr-only"></span></a>
                    </li>
                    <li class="nav-item active">
                        <a class="nav-link" href="#" onClick={go2} style={{display:"inline-block"}}>Regestration<span class="sr-only"></span></a>
        -           </li>
                    <li class="nav-item active">
                        <a className="nav-link" href="#" onClick={go3} style={{display:"inline-block"}}>Select Screen<span class="sr-only"></span></a>
                    </li>
                    <li class="nav-iten active">
                        <a class="nav-link" href="#" onClick={go4} style={{display:"inline-block"}}>Home<span class="sr-only"></span></a>
                    </li>
                    <li class="nav-iten active">
                        <a class="nav-link" href="#" onClick={go5} style={{display:"inline-block"}}>Home<span class="sr-only"></span></a>
                    </li>
                </ul>
            <form class="form-inline my-2 my-lg-0">
                <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"></input>
                <button className="btn btn-primary" type="submit">Search</button> 
            </form>
        </div>
    </nav>
        </header>
    )
}