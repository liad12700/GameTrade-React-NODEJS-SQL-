import React from 'react';
import ReactDOM from 'react-dom';
import Selecttrade from './selecttrade'
export default Mainselect;

function shadwo(e){
    e.target.style.boxShadow = "10px 20px 30px lightblue";
}

function Mainselect(){
    return(
        <section style={{backgroundColor:"orange"}}>
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