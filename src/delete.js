import React from 'react';
import ReactDOM from 'react-dom';
import nba from './pictures/Nba.jpg'
import cod from './pictures/Cod.jpg'
import fifa from './pictures/Fifa.jpg'
import tekken from './pictures/Teeken.jpg'
import trade from './switch-512.png';
import Login from './Login';
import Reg from './Reg';
import Try from './try'
import Header from './header';
import axios from 'axios';
import Particles from 'react-particles-js'
import FadeIn from 'react-fade-in';

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
                    width: "70%",
                    margin: "auto",
                    backgroundColor: "#05386B",
                    color: "white"
                }}>
                    <img src={nba} alt="Avatar" style={{ width: "100%", alignItems: "center", height: "100%" }} />
                    <div style={{ textAlign: "center", padding: "2px 16px" }}>
                        <h4><b>NBA 2K</b></h4>
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
                    width: "70%",
                    margin: "auto",
                    backgroundColor: "#05386B",
                    color: "white"
                }}>
                    <img src={cod} alt="Avatar" style={{ width: "100%", alignItems: "center", height: "100%" }} />
                    <div style={{ textAlign: "center", padding: "2px 16px" }}>
                        <h4><b>Call Of Duty</b></h4>
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
                    width: "70%",
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

class Tekken extends React.Component {
    render() {
        return (
            <section>
                <div style={{
                    boxShadow: "0 4px 8px 0 rgba(0,0,0,0.2)",
                    transition: "0.3s",
                    width: "70%",
                    margin: "auto",
                    backgroundColor: "#05386B",
                    color: "white"
                }}>
                    <img src={tekken} alt="Avatar" style={{ width: "100%", alignItems: "center", height: "100%" }} />
                    <div style={{ textAlign: "center", padding: "2px 16px" }}>
                        <h4><b>Tekken7</b></h4>
                        <p>{this.props.y}</p>
                        <p>Fight</p>
                        <p>2016</p>
                    </div>
                </div>
            </section>
        )
    }
}

function go() {
    ReactDOM.render(<Login />, document.getElementById('root'));
}
function go2() {
    ReactDOM.render(<Reg />, document.getElementById('root'));
}

class DeleteScreen extends React.Component {
    state = {
        sess: this.props.sess,
        len:0
    }
    move=()=>{
        ReactDOM.render(<Try id={this.state.sess}/>, document.getElementById('root'));
    }
    componentDidMount() {
        axios.get("http://localhost:3001/alloffersbysess?sess=" + this.state.sess)
            .then((res) => {
                this.setState({len:res.data.length});
                if(res.data.length===0){
                    console.log("jjf")
                    setTimeout(this.move,4000);
                }
            }
            )
    }
    screen = () => {
        if (this.state.sess === "") {
            return <FadeIn><h1 className="display-1">You Should Login Or Register First</h1>
                <br />
                <br />
                <br />
                <br />
                <div className="d-flex justify-content-center align-items-center">
                    <button className="btn btn-light btn-lg btn-block col-sm-8" style={{ fontSize: 20, fontWeight: 'bold' }} onClick={go}>Login</button>
                </div>
                <br />
                <br />
                <br />
                <br />
                <div className="d-flex justify-content-center align-items-center">
                    <button className="btn btn-light btn-lg btn-block col-sm-8" style={{ fontSize: 20, fontWeight: 'bold' }} onClick={go2}>Register</button>
                </div></FadeIn>
        }
        else if(this.state.len===0){
            return <FadeIn>
                <br />
                <br />
                <br />
                <br />
                <h1 className="display-1">You have not submitted any offers yet</h1>
                <br />
                <br />
                <br />
                <br />
            </FadeIn>
        }
        else{
            return <Delete sess={this.state.sess} />
        }
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
                <Header id='' />
                <div style={{
                    color: "#f9f3f4",
                    position: "absolute",
                    top: "16%",
                    textAlign: "center",
                    width: "100%",
                    lineHeight: "0.4em"
                }}>
                    <FadeIn>
                        <this.screen />
                    </FadeIn>
                </div>
                <Particles
                    params={particlesOpt}
                />
            </div>
        )
    }
}

class Delete extends React.Component {
    state = {
        sess: this.props.sess,
        pressed: 0,
        array: [],
        next: '',
        sess: this.props.sess,
        diabled: 'disabled',
        getgame: '',
        getplatform: '',
        givegame: '',
        giveplatform: '',
    }

    move=()=>{
        ReactDOM.render(<DeleteSucss sess={this.state.sess}/>, document.getElementById('root')); 
    }

    changepress = (value) => {
        if (value === 'next') {
            this.setState({ pressed: this.state.pressed + 1 });
        }
        else {
            this.setState({ pressed: this.state.pressed - 1 });
        }
    }

    use = () => {
        console.log(this.state);
        this.disablebutton();
        this.setState({ getgame: this.state.array[this.state.pressed].game_give });
        this.setState({ getplatform: this.state.array[this.state.pressed].platform_give });
        this.setState({ givegame: this.state.array[this.state.pressed].game_get });
        this.setState({ giveplatform: this.state.array[this.state.pressed].platform_get });
    }

    componentDidMount() {
        this.disablebutton();
        this.showdata();
    }

    disablebutton = () => {
        if (this.state.pressed === 0) {
            this.refs.prev.setAttribute("disabled", "disabled");
        }
        else {
            this.refs.prev.removeAttribute("disabled");
        }
        if (this.state.pressed + 1 === this.state.array.length) {
            this.refs.next.setAttribute("disabled", "disabled");
        }
        else {
            this.refs.next.removeAttribute("disabled");
        }

    }

    showdata = () => {
        //console.log(this.state.array[this.state.pressed].user_id.toString());
        axios.get("http://localhost:3001/alloffersbysess?sess=" + this.state.sess)
            .then((res) => {
                console.log(res.data);
                this.setState({ array: res.data });
                this.setState({ getgame: res.data[0].game_give })
                this.setState({ getplatform: res.data[0].platform_give })
                this.setState({ givegame: res.data[0].game_get })
                this.setState({ giveplatform: res.data[0].platform_get })
            }
            )
    }

    next = () => {
        console.log(this.state.pressed + 1);
        console.log(this.state.array.length);
        if (this.state.pressed + 1 <= this.state.array.length) {
            this.changepress('next');
            setTimeout(this.use, 200);
        }
    }

    perv = () => {
        if (this.state.pressed !== 0) {
            this.changepress('perv')
            setTimeout(this.use, 200);
        }
    }
    get = () => {
        var game = this.state.getgame;
        if (game == 'Tekken') {
            return <Tekken y={this.state.getplatform} />
        }
        else if (game === 'FIFA') {
            return <FIFA y={this.state.getplatform} />
        }
        else if (game === 'Call Of Duty') {
            return <COD y={this.state.getplatform} />
        }
        else {
            return <NBA y={this.state.getplatform} />
        }
    }
    give = () => {
        var game = this.state.givegame;
        if (game == 'Tekken') {
            return <Tekken y={this.state.giveplatform} />
        }
        else if (game === 'FIFA') {
            return <FIFA y={this.state.giveplatform} />
        }
        else if (game === 'Call Of Duty') {
            return <COD y={this.state.giveplatform} />
        }
        else {
            return <NBA y={this.state.giveplatform} />
        }
    }
    delete = () => {
        axios.get("http://localhost:3001/deleteOffer?id=" + this.state.array[this.state.pressed].id)
            .then((res) => {
                console.log(res.data);
                this.move();
            }
            )
    }

    render() {
        return (
            <div class="container">
                <div class="row">
                    <div class="col-sm-4">
                        <h1 style={{ textAlign: 'center' }}>GET</h1>
                        <this.get />
                    </div>
                    <div class="col-sm-4">
                        <img src={trade} width="120" height="120" style={{ display: 'block', margin: 'auto', marginTop: '17em' }} alt="" />
                    </div>
                    <div class="col-sm-4">
                        <h1 style={{ textAlign: 'center' }}>GIVE</h1>
                        <this.give />
                    </div>
                </div>
                <br />
                <br />
                <div className="d-flex justify-content-center align-items-center">
                    <div class="btn-group">
                        <button ref="prev" type="button" class="btn btn-light" onClick={this.perv}>Previous</button>
                        <button ref="next" type="button" class="btn btn-light" onClick={this.next}>Next</button>
                    </div>
                </div>
                <br />
                <br />
                <div className="d-flex justify-content-center align-items-center">
                    <button className="btn btn-light btn-lg btn-block col-sm-8" style={{ fontSize: 20, fontWeight: 'bold' }} onClick={this.delete}>Delete The Offer</button>
                </div>
            </div>
        )
    }
}

class DeleteSucss extends React.Component {
    move=()=>{
        ReactDOM.render(<Try id={this.props.sess}/>, document.getElementById('root')); 
    }
    myFunction = () => {
        setTimeout(this.move, 3000);
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
                        <h1 className="display-1">Offer successfully deleted</h1>
                    </FadeIn>
                </h1>
                <Particles
                    params={particlesOpt}
                />
            </div>
        )
    }
}

export default DeleteScreen;