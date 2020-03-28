import React from 'react';
import ReactDOM from 'react-dom';
import Header from './header';
export default Reg;

function Reg(){
    return(
        <div>
            <div>
                <Header />
            </div>
            <section className="row justify-content-center">
                <div className="col-md-6" style={{backgroundColor:"blue"}}>
                <br />
                <br />
                    <h1 style={{textAlign:"center"}}>Regestration</h1>
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
                        </div>
                    </form>
                    <br />
                    <br />
                    <form className="row justify-content-center">    
                        <div class="col-sm-8">
                            <input type="password" id="inputPass" class="form-control" placeholder="Confirm Password"></input>
                        </div>
                    </form>
                    <br />
                    <br />
                    <form className="row justify-content-center">    
                        <div class="col-sm-8">
                            <input type="string" id="inputPass" class="form-control" placeholder="City"></input>
                        </div>
                    </form>
                    <br />
                    <br />
                    <form className="row justify-content-center">    
                        <div class="col-sm-8">
                            <input type="string" id="inputPass" class="form-control" placeholder="Phone Number"></input>
                        </div>
                    </form>
                    <br />
                    <br />
                    <br />
                </div>
            </section>
        </div>
    )
}