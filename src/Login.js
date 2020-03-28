import React from 'react';
//import ReactDOM from 'react-dom';
import Header from './header';
import axios from 'axios';
export default Login;

function Login() {
    return(
        <div className="Login" style={{backgroundColor:"skyblue"}}>
            <div>
                <Header />
            </div>
            <section className="row justify-content-center">
                <div className="col-md-6" style={{backgroundColor:"blue"}}>
                <br />
                <br />
                <br />
                <br />
                <br />
                    <h1 style={{textAlign:"center"}}>Login</h1>
                    <br/>
                    <form className="row justify-content-center">
                        <div class="col-sm-8">
                            <input type="email" id="inputEmail" class="form-control" placeholder="Email address"></input>
                        </div>
                    </form>
                    <br />
                    <br />
                    <form className="row justify-content-center">    
                        <div class="col-sm-8">
                            <input type="password" id="inputPass" class="form-control" placeholder="Password"></input>
                            <br />
                            <button className="btn btn-outline-primary">cdcdcd</button>
                        </div>
                    </form>
                        <br />
                        <br />
                        <br />
                        <br />
                </div>
            </section>
        </div>
    )
      
}