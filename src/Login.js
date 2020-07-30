import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Header from './header';
import Try from './try'
import axios from 'axios';
import Particles from 'react-particles-js'
import FadeIn from 'react-fade-in'; 

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

class LoginScreen extends React.Component{
    render(){
        return(
            <div style={{backgroundImage: "linear-gradient(to bottom right, blue, #33ccff)",
                    width: '100%',
                    height: '100%',
                    position: 'fixed',
                    backgroundSize: 'cover',
                    backgroundPosition: '50% 50%',
                    backgroundRepeat: 'no-repeat',
                    zIndex: 2}}>
                <Header id=''/>
                <h1 style={{
                color: "#f9f3f4",
                position: "absolute",
                textAlign: "center",
                top: "32%",
                width: "100%",
                lineHeight: "0.4em"
            }}>
            <FadeIn>
                <Login />      
            </FadeIn>
            </h1>
                <Particles
                    params={particlesOpt}
                />
            </div>
        )
    }
}

class Login extends Component{
    state={
        id:3,
        login:''
    }
    myFunction=()=>{
        console.log(this.state.id);
        ReactDOM.render(<Try id={this.state.id}/>, document.getElementById('root'));
    }
    getUser= (e) =>{
        e.preventDefault();
        const user= e.target.elements.username.value;
        const pass= e.target.elements.pass.value;
        axios.get("http://localhost:3001/login?email="+user+"&password="+pass)
        .then( (res)=>{
            if(res.data==='Wrong Password'){
                this.setState({login:'You typed a worng password'});
            }
            else{
                this.setState({id:res.data});
                this.myFunction();
            }
            console.log(res.data);
        }
        )
        console.log(user);
        console.log(pass);
        }
    render(){
        return(
            <div className="Login">
                <section className="row justify-content-center">
                    <div className="col-md-6">
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                        <h1 style={{textAlign:"center"}}>Login</h1>
                        <h4 style={{textAlign:"center"}}>{this.state.login}</h4>
                        <br/>
                        <form className="row justify-content-center" onSubmit={this.getUser}>
                            <div className="col-sm-8" style={{paddingBottom: '50px'}}>
                                <input type="email" id="inputEmail" className="form-control" placeholder="Email address" name="username"></input>
                            </div>
                        <br />
                        <br />   
                            <div class="col-sm-8">
                                <input type="password" id="inputPass" className="form-control" placeholder="Password" name="pass"></input>
                                <br />
                                <br />
                                <br />
                                <button className="btn btn-success" style={{width:'50%'}}>Login</button>
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
}
    
export default LoginScreen;
