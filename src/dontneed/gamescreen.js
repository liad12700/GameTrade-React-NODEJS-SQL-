import React from 'react';
import ReactDOM from 'react-dom';
import './App.css';
import Header from './header';

class Gamescreen extends React.Component{
  render(){
    return (
    <div className="App">
      <div>
        <Header />
      </div>
      <section>
      <div className="row">
            <div className="col-sm-5" style={{ backgroundColor: 'red' }}>
            <div style={{
                boxShadow: "0 4px 8px 0 rgba(0,0,0,0.2)",
                transition: "0.3s",
                width: "70%",
                margin: "auto",
                backgroundColor: "blue",
                color: "white"
                }}>
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSPEEIfFyJovc7fCvCNHa9nmKVYburuhQK80t7lxwMm7G3WRCC9&s" alt="Avatar" style={{width:"100%",alignItems:"center" ,height:"100%"}}/>
                <div  style={{textAlign:"center", padding:"2px 16px"}}>
                    <h4><b>Tekken7</b></h4> 
                    <p>PS4</p>
                    <p>Fight</p>
                    <p>2016</p> 
                </div>
            </div>
            </div>
            <div className="col-sm-7" style={{ backgroundColor: 'orange', top: "40%" }}>
            <ul class="list-group">
              <li class="list-group-item active">Name</li>
              <li class="list-group-item active">Phone Number</li>
              <li class="list-group-item active">Email</li>
              <li class="list-group-item active">City</li>
            </ul>
            </div>
          </div>
          <div className="row">
            <div className="col-sm-12" style={{ backgroundColor: 'blue' }}>
              <button className="btn btn-success">NEXT</button>
            </div>
          </div>
                </section>
    </div>
  );
  }
}
export default Gamescreen;