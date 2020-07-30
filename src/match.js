import React from 'react';
import Select from 'react-select'
import ReactDOM from 'react-dom';
import Header from './header';
import axios from 'axios';
import Particles from 'react-particles-js'
import nba from './pictures/Nba.jpg'
import cod from './pictures/Cod.jpg'
import fifa from './pictures/Fifa.jpg'
import tekken from './pictures/Teeken.jpg'
import LoadingScreen from 'react-loading-screen'
import loading from './pictures/loading.gif'
import arrow from './pictures/arrow.png'

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

class NBA extends React.Component {
    render() {
        return (
            <section>
                <div style={{
                    boxShadow: "0 4px 8px 0 rgba(0,0,0,0.2)",
                    transition: "0.3s",
                    width: "35%",
                    margin: "auto",
                    backgroundColor: "#05386B",
                    color: "white"
                }}>
                    <img src={nba} alt="Avatar" style={{ width: "100%", alignItems: "center", height: "100%" }} />
                    <div style={{ textAlign: "center", padding: "2px 16px" }}>
                        <h4 style={{fontSize: 15}}><b>NBA 2K</b></h4>
                        <p>{this.props.y}</p>
                        <p>Sport</p>
                        <p>2018</p>
                    </div>
                </div>
            </section>
        )
    }
}

class COD extends React.Component {
    render() {
        return (
            <section>
                <div style={{
                    boxShadow: "0 4px 8px 0 rgba(0,0,0,0.2)",
                    transition: "0.3s",
                    width: "35%",
                    margin: "auto",
                    backgroundColor: "#05386B",
                    color: "white"
                }}>
                    <img src={cod} alt="Avatar" style={{ width: "100%", alignItems: "center", height: "100%" }} />
                    <div style={{ textAlign: "center", padding: "2px 16px" }}>
                        <h4 style={{fontSize: 15}}><b>Call Of Duty</b></h4>
                        <p>{this.props.y}</p>
                        <p>Shooting</p>
                        <p>2020</p>
                    </div>
                </div>
            </section>
        )
    }
}

class FIFA extends React.Component {
    render() {
        return (
            <section>
                <div style={{
                    boxShadow: "0 4px 8px 0 rgba(0,0,0,0.2)",
                    transition: "0.3s",
                    width: "35%",
                    margin: "auto",
                    backgroundColor: "#05386B",
                    color: "white"
                }}>
                    <img src={fifa} alt="Avatar" style={{ width: "100%", alignItems: "center", height: "100%" }} />
                    <div style={{ textAlign: "center", padding: "2px 16px", height: "100%" }}>
                        <h4 style={{fontSize: 15}}><b>FIFA</b></h4>
                        <p>{this.props.y}</p>
                        <p>Sport</p>
                        <p>2016</p>
                    </div>
                </div>
            </section>
        )
    }
}

class Main extends React.Component {
    render() {
        return (
            <div>
                <div class="container">
                    <div class="row justify-content-md-center">
                        <div class="col-sm-4">
                            <COD />
                        </div>
                    </div>
                    <div class="row justify-content-md-center" style={{ "padding": "20px" }}>
                        <div className="col-sm-2">
                            <img src={arrow} width="100" height="70" alt="" style={{ "transform": "rotate(112deg)" }} />
                        </div>
                        <div className="col-sm-1"></div>
                        <div className="col-sm-2">
                            <img src={arrow} width="100" height="70" alt="" style={{ "transform": "rotate(230deg)" }} />
                        </div>
                    </div>
                    <div class="row justify-content-md-center">
                        <div class="col-sm-4">
                            <FIFA />
                        </div>
                        <div class="col-sm-1">
                            <img src={arrow} width="100" height="70" alt="" style={{ "top": "50%", "position": "relative" }} />
                        </div>
                        <div class="col-sm-4">
                            <NBA />
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

class Persondeatails extends React.Component {
    state = {
        id: this.props.game.toString(),
        next: '',
        email: '',
        name: '',
        phone: '',
        city: ''
    }

    componentDidMount() {
        this.showdata();
        console.log(this.props.game);
        console.log(this.state);
    }

    showdata = () => {
        axios.get("http://localhost:3001/getinfobyid?id=" + this.state.id)
            .then((res) => {
                console.log(res.data);
                this.setState({ name: res.data[0].name })
                this.setState({ email: res.data[0].email })
                this.setState({ phone: res.data[0].phone })
                this.setState({ city: res.data[0].city })
            }
            )
    }

    render() {
        return (
            <div style={{ textAlign: 'center', marginTop: '1em' }} className="row d-flex justify-content-center">
                <ul className="list-group" style={{ paddingBottom: '10px' }}>
                    <li className="list-group-item list-group-item-primary">Name: {this.state.name}</li>
                    <li className="list-group-item list-group-item-primary">Phone: {this.state.phone}</li>
                    <li className="list-group-item list-group-item-primary">Email: {this.state.email}</li>
                    <li className="list-group-item list-group-item-primary">City: {this.state.city}</li>
                </ul>
            </div>
        )
    }

}

class Sentence extends React.Component {
    state = {
        sentence: "",
        name1: "",
        name2: ""
    }
    send = () => {
        axios.get("http://localhost:3001/sendtheinerest?liad=" + this.state.sentence + "&id1=" + this.props.game.idperson1 + "&id2=" + this.props.game.idperson2)
            .then((res) => {
                console.log(res);
            })
    }
    componentDidMount() {
        axios.get("http://localhost:3001/getinfobyid?id=" + this.props.game.idperson1)
            .then((res) => {
                console.log(res.data);
                this.setState({ name1: res.data[0].name })
                axios.get("http://localhost:3001/getinfobyid?id=" + this.props.game.idperson2)
                    .then((res) => {
                        console.log(res.data);
                        this.setState({ name2: res.data[0].name })
                        this.setState({ sentence: "You get " + this.props.game.getgame.label + " for " + this.props.game.getplatform.label + " from " + this.state.name1 + " and give " + this.props.game.givegame.label + " for " + this.props.game.giveplatform.label + " to " + this.state.name2 })
                    }
                    )
            }
            )
    }
    render() {
        return (
            <div>
                <h4>{this.state.sentence}</h4>
                <div className="d-flex justify-content-center align-items-center">
                    <button className="btn btn-light btn-lg btn-block col-sm-8" style={{ fontSize: 20, fontWeight: 'bold' }} onClick={this.send}>This Match Is Good To Me</button>
                </div>
            </div>
        )
    }
}

class Match extends React.Component {
    componentDidMount(){
        console.log(this.props.game);
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
                <div style={{
                    position: "absolute",
                    textAlign: "center",
                    width: "100%",
                }}>
                    <Header id={this.props.game.id} />
                    <div className="row" style={{ paddingTop: 10 }}>
                        <div className="col-sm-3" style={{ textAlign: 'center' }}>
                            <Sentence game={this.props.game} />
                        </div>
                        <div className="col-sm-7">
                            <Main />
                        </div>
                        <div className="col-sm-1">
                            <Persondeatails game={this.props.game.idperson1} />
                            <Persondeatails game={this.props.game.idperson2} />
                        </div>
                    </div>
                </div>
                <Particles
                    params={particlesOpt}
                />
            </div>
        )
    }
}
class Loading extends React.Component {
    state = {
        id: this.props.game.id,
        getgame: this.props.game.getgame,
        getplatform: this.props.game.getplatform,
        givegame: this.props.game.givegame,
        giveplatform: this.props.game.giveplatform,
        middlegame: 'FIFA',
        middleplatform: 'XBOX ONE',
        idperson1: 36,
        idperson2: 37
    }
    myFunction2 = () => {
        ReactDOM.render(<Match game={this.state} />, document.getElementById('root'));
    }
    componentDidMount() {
        console.log("OKOKOKOK")
        setTimeout(this.myFunction2, 5000)
    }
    render() {
        return (
            <LoadingScreen
                loading={true}
                backgroundImage="linear-gradient(to bottom right, blue, #33ccff)"
                bgColor='#f1f1f1'
                spinnerColor='#9ee5f8'
                textColor='#676767'
                logoSrc={loading}
                text='We are searching partners for your match'
            />
        )
    }
}

export default Loading