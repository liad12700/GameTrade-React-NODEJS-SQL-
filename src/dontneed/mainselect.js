import React from 'react';
import ReactDOM from 'react-dom';
import Selecttrade from './selecttrade'
import Header from './header'
export default Mainselect;

function Mainselect(){
    return(
        <section style={{backgroundColor:"orange"}}>
            <Header />
            <div className="row">
                    <div className="col-sm">
                        <Selecttrade /> 
                    </div>
                    
                    <div className="col-sm">
                        <Selecttrade />
                    </div>
                    
                    <div className="col-sm">
                        <Selecttrade />
                    </div>
                    
                    <div className="col-sm">
                        <Selecttrade />
                    </div>
            </div>
            <br />
            <div className="row">
                    <div className="col-sm">
                        <Selecttrade />
                    </div>
                    
                    <div className="col-sm">
                        <Selecttrade />
                    </div>
                    
                    <div className="col-sm">
                        <Selecttrade />
                    </div>
                    
                    <div className="col-sm">
                        <Selecttrade />
                    </div>
            </div>
            <br />
            <div className="row">
                    <div className="col-sm">
                        <Selecttrade />
                    </div>
                    
                    <div className="col-sm">
                        <Selecttrade />
                    </div>
                    
                    <div className="col-sm">
                        <Selecttrade />
                    </div>
                    
                    <div className="col-sm">
                        <Selecttrade />
                    </div>
            </div>
        </section>
    )
}