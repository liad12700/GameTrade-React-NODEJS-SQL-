import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Select from 'react-select';
import Header from './header';
import nba from './pictures/Nba.jpg'
import cod from './pictures/Cod.jpg'
import fifa from './pictures/Fifa.jpg'
import tekken from './pictures/Teeken.jpg'
import axios from 'axios';
import trade from './switch-512.png'
import Particles from 'react-particles-js'
import LoadingScreen from 'react-loading-screen'
import loading from './pictures/loading.gif'
import FadeIn from 'react-fade-in';
import Match from './match'

const options = [
    { value: 'nba', label: 'NBA' },
    { value: 'fifa', label: 'FIFA' },
    { value: 'COD', label: 'Call Of Duty' },
    { value: 'tekken', label: 'Tekken' }
];
const platforms = [
    { value: 'ps4', label: 'PS4' },
    { value: 'xboxone', label: 'XBOX ONE' },
    { value: 'pc', label: 'PC' }
];
const city = [
    { value: 'No Matter', label: 'No Matter' },
    { value: 'Tel Aviv', label: 'Tel Aviv' },
    { value: 'Beer Sheva', label: 'Beer Sheva' },
    { value: 'Haifa', label: 'Haifa' },
    { value: 'Eilat', label: 'Eilat' },
];
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
                    width: "82%",
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
                    width: "82%",
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
                    width: "82%",
                    margin: "auto",
                    backgroundColor: "#05386B",
                    color: "white"
                }}>
                    <img src={fifa} alt="Avatar" style={{ width: "100%", alignItems: "center", height: "100%" }} />
                    <div style={{ textAlign: "center", padding: "2px 16px" }}>
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
                    width: "82%",
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

class Screenone extends React.Component {
    render() {
        return (
            <div style={{ backgroundImage: "linear-gradient(to bottom right, blue, #33ccff)" }}>
                <div>
                    <Header id={this.props.id}/>
                </div>
                <div className="container h-100 d-flex justify-content-center">
                    <div className="jumbotron my-auto">
                        <GetGame id={this.props.id} />
                    </div>
                </div>
            </div>
        )
    }
}

class ScreenTwo extends React.Component {
    render() {
        return (
            <div style={{ backgroundImage: "linear-gradient(to bottom right, blue, #33ccff)" }}>
                <div>
                    <Header id={this.props.game.id}/>
                </div>
                <div className="container h-100 d-flex justify-content-center">
                    <div className="jumbotron my-auto">
                        <GiveGame game={this.props.game} />
                    </div>
                </div>
            </div>
        )
    }
}

class GetGame extends React.Component {
    state = {
        id: this.props.id,
        selectedOption: { value: 'nba', label: 'NBA' },
        platform: { value: 'ps4', label: 'PS4' },
        city: { value: 'No Matter', label: 'No Matter' }
    }
    componentDidMount() {
        console.log(this.state.id);
    }

    handleChange = (selectedOption) => {
        this.setState({ selectedOption });
        console.log(selectedOption.label);
    }

    changeplatform = (platform) => {
        this.setState({ platform });
        console.log(this.state.platform.label);
    }

    changeCity = (city) => {
        this.setState({ city });
        console.log(this.state.city.label);
    }

    liad = (props) => {
        var game = props.x;
        if (game == 'tekken') {
            return <Tekken y={this.state.platform.label} />
        }
        else if (game === 'fifa') {
            return <FIFA y={this.state.platform.label} />
        }
        else if (game === 'COD') {
            return <COD y={this.state.platform.label} />
        }
        else {
            return <NBA y={this.state.platform.label} />
        }
    }

    getGame = () => {
        var game = this.state.selectedOption.label;
        var platform = this.state.platform.label;
        var city = this.state.city.label;
        ReactDOM.render(<ScreenTwo game={this.state} />, document.getElementById('root'));
    }

    render() {
        return (
            <div>
                <h1 className="display-4" style={{ textAlign: 'center' }}>Which game do you want get?</h1>
                <div>
                    <this.liad x={this.state.selectedOption.value} />
                </div>
                <form onSubmit={this.getGame}>
                    <Select
                        className="mt-4 col-md col-offset-4"
                        options={options}
                        onChange={this.handleChange}
                        defaultValue={{ value: 'nba', label: 'NBA' }} />
                    <Select
                        className="mt-4 col-md col-offset-4"
                        options={platforms}
                        onChange={this.changeplatform}
                        defaultValue={{ value: 'ps4', label: 'PS4' }} />
                    <Select
                        className="mt-4 col-md col-offset-4"
                        options={city}
                        onChange={this.changeCity}
                        defaultValue={{ value: 'No Matter', label: 'No Matter' }} />
                    <br />
                    <br />
                    <button className="btn btn-success btn-lg btn-block">NEXT</button>
                </form>
            </div>
        );
    }
}

class GiveGame extends React.Component {
    state = {
        selectedOption: { value: 'nba', label: 'NBA' },
        platform: { value: 'ps4', label: 'PS4' },
        getgame: this.props.game.selectedOption,
        getplatform: this.props.game.platform,
        city: this.props.game.city,
        id: this.props.game.id,
        samegame: ''
    }
    componentDidMount() {
        //console.log(this.state);
        //console.log(this.props);
        console.log(this.state.id);
    }

    handleChange = (selectedOption) => {
        this.setState({ selectedOption });
        console.log(selectedOption.label);
    }

    changeplatform = (platform) => {
        this.setState({ platform });
        console.log(this.state.platform.label);
    }

    liad = (props) => {
        var game = props.x;
        if (game === 'tekken') {
            return <Tekken y={this.state.platform.label} />
        }
        else if (game === 'fifa') {
            return <FIFA y={this.state.platform.label} />
        }
        else if (game === 'COD') {
            return <COD y={this.state.platform.label} />
        }
        else {
            return <NBA y={this.state.platform.label} />
        }
    }

    getGame = (e) => {
        var givegame = this.state.selectedOption.label;
        var giveplatform = this.state.platform.label;
        var getgame = this.state.getgame.label;
        var getplatform = this.state.getplatform.label;
        if (givegame === getgame && giveplatform === getplatform) {
            e.preventDefault();
            this.setState({ samegame: 'You insert the same game and same platform' });
            window.scrollTo(0, 0);
        }
        else {
            ReactDOM.render(<Loading game={this.state} />, document.getElementById('root'));
        }
    }

    render() {
        return (
            <div>
                <h1 className="display-4" style={{ textAlign: 'center' }}>Which game do you want give?</h1>
                <h2 style={{ textAlign: 'center' }}><em>{this.state.samegame}</em></h2>
                <div>
                    <this.liad x={this.state.selectedOption.value} />
                </div>
                <form onSubmit={this.getGame}>
                    <Select
                        className="mt-4 col-md col-offset-4"
                        options={options}
                        onChange={this.handleChange}
                        defaultValue={{ value: 'nba', label: 'NBA' }} />
                    <Select
                        className="mt-4 col-md col-offset-4"
                        options={platforms}
                        onChange={this.changeplatform}
                        defaultValue={{ value: 'ps4', label: 'PS4' }} />
                    <br />
                    <br />
                    <button className="btn btn-success btn-lg btn-block">NEXT</button>
                </form>
            </div>
        );
    }
}

class Loading extends React.Component {
    state = {
        givegame: this.props.game.selectedOption,
        giveplatform: this.props.game.platform,
        getgame: this.props.game.getgame,
        getplatform: this.props.game.getplatform,
        city: this.props.game.city,
        id: this.props.game.id,
        array: ''
    }
    myFunction = () => {
        ReactDOM.render(<Notfound game={this.state} />, document.getElementById('root'));
    }
    myFunction2 = () => {
        ReactDOM.render(<Foundgame game={this.state} />, document.getElementById('root'));
    }
    searchgame = () => {
        var getgame = this.state.getgame.label;
        var givegame = this.state.givegame.label;
        var getplatform = this.state.getplatform.label;
        var giveplatform = this.state.giveplatform.label;
        var getcity = this.state.city.label;

        /*if(getgame===givegame&&giveplatform===getplatform){
            console.log("you insert same game with same platform")
        }*/
        axios.get("http://localhost:3001/searchoffer?getgame=" + getgame + "&getplatform=" + getplatform + "&city=" + getcity + "&givegame=" + givegame + "&giveplatform=" + giveplatform)
            .then((res) => {
                if (res.data == 'NO') {
                    this.myFunction();
                }
                else {
                    this.setState({ array: res.data });
                    this.myFunction2();
                }
                console.log(res.data);
            }
            )

    }
    componentDidMount() {
        //console.log(this.props.game);
        //console.log(this.state.givegame);
        //console.log(this.state.giveplatform);
        //console.log(this.state.getgame);
        //console.log(this.state.getplatform);
        //console.log(this.state.city);
        //console.log(this.props.game);
        console.log(this.state.id);
        setTimeout(this.searchgame, 5000)
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
                text='We are searching partner for your trade'
            />
        )
    }
}

class Foundgame extends React.Component {
    state = {
        array: this.props.game.array
    }

    componentDidMount() {
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
                    <Header id={this.props.game.id}/>
                    <div className="row" style={{paddingTop:10}}>
                        <div className="col-sm-10">
                            <Tradecomponent game={this.props.game} />
                        </div>
                        <div className="col-sm-2">
                            <Persondeatails game={this.props.game} />
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

class Tradecomponent extends React.Component {
    state = {
        givegame: this.props.game.givegame.value,
        getgame: this.props.game.getgame.value,
        giveplatform: this.props.game.giveplatform.label,
        getplatform: this.props.game.getplatform.label,
        array: this.props.game.array
    }
    componentDidMount() {
        console.log(this.props);
        console.log(this.state.givegame);
        console.log(this.state.giveplatform);
        console.log(this.state.getgame);
        console.log(this.state.getplatform);
        console.log(this.state.array)
    }
    get = () => {
        var game = this.state.getgame;
        if (game === 'tekken') {
            return <Tekken y={this.state.getplatform} />
        }
        else if (game === 'fifa') {
            return <FIFA y={this.state.getplatform} />
        }
        else if (game === 'COD') {
            return <COD y={this.state.getplatform} />
        }
        else {
            return <NBA y={this.state.getplatform} />
        }
    }
    give = () => {
        var game = this.state.givegame;
        if (game === 'tekken') {
            return <Tekken y={this.state.giveplatform} />
        }
        else if (game === 'fifa') {
            return <FIFA y={this.state.giveplatform} />
        }
        else if (game === 'COD') {
            return <COD y={this.state.giveplatform} />
        }
        else {
            return <NBA y={this.state.giveplatform} />
        }
    }
    render() {
        return (
            <div className="row">
                <div className="col-sm">
                    <this.get />
                </div>
                <div className="col-sm">
                    <img src={trade} width="120" height="120" style={{ display: 'block', margin: 'auto', marginTop: '20em' }} alt="" />
                </div>
                <div className="col-sm">
                    <this.give />
                </div>

            </div>
        )
    }

}

class Persondeatails extends React.Component {
    state = {
        id: this.props.game.array[0].user_id.toString(),
        pressed: 0,
        array: this.props.game.array,
        next: '',
        diabled:'disabled',
        email: '',
        name: '',
        phone: '',
        city: '',
        getgame: this.props.game.getgame.label,
        getplatform: this.props.game.getplatform.label,
        givegame: this.props.game.givegame.label,
        giveplatform: this.props.game.giveplatform.label,
    }

    changepress=(value)=>{
        if(value==='next'){
            this.setState({ pressed: this.state.pressed + 1 });
        }
        else{
            this.setState({ pressed: this.state.pressed - 1 });
        }
    }

    use=()=>{
        this.disablebutton();
        this.showdata();
    }

    componentDidMount() {
        this.disablebutton();
        this.showdata();
        console.log(this.props.game);
        console.log(this.state);
    }

    disablebutton=()=>{
        if(this.state.pressed===0){
            this.refs.prev.setAttribute("disabled", "disabled");
        }
        else{
            this.refs.prev.removeAttribute("disabled");
        }
        if (this.state.pressed+1 === this.state.array.length) {
            this.refs.next.setAttribute("disabled", "disabled");
        }
        else{
            this.refs.next.removeAttribute("disabled");
        }

    }

    showdata = () => {
        console.log(this.state.array[this.state.pressed].user_id.toString());
        axios.get("http://localhost:3001/getinfobyid?id=" + this.state.array[this.state.pressed].user_id.toString())
            .then((res) => {
                console.log(res.data);
                this.setState({ name: res.data[0].name })
                this.setState({ email: res.data[0].email })
                this.setState({ phone: res.data[0].phone })
                this.setState({ city: res.data[0].city })
            }
            )
    }

    next = () => {
        console.log(this.state.pressed+1);
        console.log(this.state.array.length);
        if (this.state.pressed+1 <= this.state.array.length) {
            this.changepress('next');
            setTimeout(this.use,200);
        }
    }

    perv = () => {
        if (this.state.pressed!==0) {
            this.changepress('perv')
            setTimeout(this.use,200);
        }
    }

    send=()=>{
        axios.get("http://localhost:3001/interst?sess='"+this.props.game.id+"'&id="+this.state.id+"&getgame=" + this.state.getgame + "&getplatform=" + this.state.getplatform + "&givegame=" + this.state.givegame + "&giveplatform=" + this.state.giveplatform)
            .then((res) => {
                console.log(res.data);
            }
            )
    }

    render() {
        return (
            <div style={{ textAlign: 'center', marginTop: '1em' }} className="row d-flex justify-content-center">
                <h3>The details of the user who made a suitable offer for you</h3>
                <ul className="list-group" style={{ paddingBottom: '10px' }}>
                    <li className="list-group-item list-group-item-primary">Name: {this.state.name}</li>
                    <li className="list-group-item list-group-item-primary">Phone: {this.state.phone}</li>
                    <li className="list-group-item list-group-item-primary">Email: {this.state.email}</li>
                    <li className="list-group-item list-group-item-primary">City: {this.state.city}</li>
                </ul>     
                <div style={{ paddingBottom: '10px' }} class="btn-group">
                    <button ref="prev" type="button" class="btn btn-light" onClick={this.perv}>Previous</button>
                    <button ref="next" type="button" class="btn btn-light" onClick={this.next}>Next</button>
                </div>
                <h4>When you click the button your and your partner's details will be sent to each other</h4>
                <button className="btn btn-light" onClick={this.send}>Interested in this offer</button>
            </div>
        )
    }

}

class Notfound extends React.Component {
    state = {
        id: this.props.game.id,
        getgame: this.props.game.getgame,
        getplatform: this.props.game.getplatform,
        givegame: this.props.game.givegame,
        giveplatform: this.props.game.giveplatform
    }
    myFunction = () => {
        ReactDOM.render(<Notfound2 game={this.state} />, document.getElementById('root'));
    }
    componentDidMount() {
        console.log(this.state);
        setTimeout(this.myFunction, 5000);
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
                <Header id={this.props.game.id}/>
                <h1 style={{
                    color: "#f9f3f4",
                    position: "absolute",
                    textAlign: "center",
                    top: "40%",
                    width: "100%",
                    lineHeight: "0.4em"
                }}>
                    <FadeIn>
                        <h1 className="display-1">We Didn't found partner to you</h1>
                    </FadeIn>
                </h1>
                <Particles
                    params={particlesOpt}
                />
            </div>
        )
    }
}

class Notfound2 extends React.Component {
    state = {
        id: this.props.game.id,
        getgame: this.props.game.getgame,
        getplatform: this.props.game.getplatform,
        givegame: this.props.game.givegame,
        giveplatform: this.props.game.giveplatform
    }
    move=()=>{
        ReactDOM.render(<Uploadgood id={this.state.id}/>, document.getElementById('root'));
    }
    go = () => {
        var getgame = this.state.getgame.label;
        var getplatform = this.state.getplatform.label;
        var givegame = this.state.givegame.label;
        var giveplatform = this.state.giveplatform.label;
        axios.get("http://localhost:3001/addOffer?getgame=" + givegame + "&getplatform=" + giveplatform + "&givegame=" + getgame + "&giveplatform=" + getplatform + "&user_sess=" + this.state.id)
            .then((res) => {
                this.move()
            }
            )
    }
    go2 = () => {
        ReactDOM.render(<Screenone id={this.state.id}/>, document.getElementById('root')); 
    }
    go3=()=>{
        ReactDOM.render(<Match game={this.props.game}/>, document.getElementById('root'));
    }
    componentDidMount() {
        console.log(this.state)
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
                <Header id={this.props.game.id}/>
                <h1 style={{
                    color: "#f9f3f4",
                    position: "absolute",
                    textAlign: "center",
                    top: "32%",
                    width: "100%",
                    lineHeight: "0.4em"
                }}>
                    <FadeIn>
                        <h1 className="display-4">You can upload your offer and if someone will search it he will conect with you</h1>
                        <button onClick={this.go} className="btn btn-light btn-lg btn-block">Upload The Offer</button>
                        <h1 className="display-4">You can change your offer</h1>
                        <button onClick={this.go2} className="btn btn-light btn-lg btn-block">Change My Offer</button>
                        <h1 className="display-4">You can search trade between 3 pepole</h1>
                        <button onClick={this.go3} className="btn btn-light btn-lg btn-block">Find Me A match</button>
                    </FadeIn>
                </h1>
                <Particles
                    params={particlesOpt}
                />
            </div>
        )
    }
}

class Uploadgood extends React.Component {
    state = {
        id: this.props.id,
    }
    myFunction = () => {
        ReactDOM.render(<Screenone id={this.state.id} />, document.getElementById('root'));
    }
    componentDidMount() {
        console.log(this.state);
        setTimeout(this.myFunction, 5000);
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
                <Header id={this.props.id}/>
                <h1 style={{
                    color: "#f9f3f4",
                    position: "absolute",
                    textAlign: "center",
                    top: "40%",
                    width: "100%",
                    lineHeight: "0.4em"
                }}>
                    <FadeIn>
                        <h1 className="display-1">Your offer uploaded successfully</h1>
                    </FadeIn>
                </h1>
                <Particles
                    params={particlesOpt}
                />
            </div>
        )
    }
}


export default Screenone
