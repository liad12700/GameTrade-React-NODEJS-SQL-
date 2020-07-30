import React from 'react';
import Select from 'react-select'
import ReactDOM from 'react-dom';
import Header from './header';
import Try from './try';
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

const city = [
    { value: 'Tel Aviv', label: 'Tel Aviv' },
    { value: 'Beer Sheva', label: 'Beer Sheva' },
    { value: 'Haifa', label: 'Haifa' },
    { value: 'Eilat', label: 'Eilat' },
];

class ScreenReg extends React.Component {
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
                    position: "absolute",
                    textAlign: "center",
                    top: "15%",
                    width: "100%",
                }}>
                    <FadeIn>
                        <Reg />
                    </FadeIn>
                </div>
                <Particles
                    params={particlesOpt}
                />
            </div>
        )
    }
}

class Reg extends React.Component {
    state = {
        city: { value: 'Tel Aviv', label: 'Tel Aviv' },
        reg: '',
        email: '',
        pass: '',
        name: '',
        phone: '',
        citydone: '',
        emailStatus: '',
        phoneStatus: '',
        id: ''
    }
    handleChange = (city) => {
        this.setState({ city });
        console.log(city.label);
    }
    move = () => {
        ReactDOM.render(<Try id={this.state.id} />, document.getElementById('root'));
    }
    myFunction = () => {
        setTimeout(this.move, 3000);
    }
    validation = () => {
        ReactDOM.render(<Validation_screen game={this.state} />, document.getElementById('root'));
    }
    newUser = (e) => {
        e.preventDefault();
        const email = e.target.elements.email.value;
        const pass = e.target.elements.pass.value;
        const cpass = e.target.elements.cpass.value;
        const name = e.target.elements.name.value;
        const city = this.state.city.label;
        const pnum = e.target.elements.pnum.value;
        this.setState({ email: email });
        this.setState({ pass: pass });
        this.setState({ name: name });
        this.setState({ phone: pnum });
        //console.log(pnum);
        if (email === '' || pass === '' || cpass === '' || name === '' || pnum === '') {
            this.setState({ reg: 'Some filed are empty' })
        }
        else if (pass != cpass) {
            this.setState({ reg: 'The Passwords you types is not match' })
        }
        else if (this.state.reg == '') {
            setTimeout(this.validation, 200);
            /*this.validation();
            axios.get("http://localhost:3001/Registration?email=" + email + "&password=" + pass + "&name=" + name + "&phone=" + pnum + "&city=" + city)
                .then((res) => {
                    this.setState({id:res.data});
                    this.setState({ reg: 'You have successfully registered, the system will connect you for a few seconds' })
                    this.myFunction();
                }
                )
             */
        }
    }
    emailtyping = (e) => {
        e.preventDefault();
        var email = e.target.value;
        axios.get("http://localhost:3001/emailexists?email=" + email)
            .then((res) => {
                console.log(res.data);
                this.setState({ emailStatus: res.data });
                if (res.data === 'OK') {
                    if (this.state.phoneStatus !== 'BAD') {
                        this.setState({ reg: '' });
                    }
                    else {
                        this.setState({ reg: 'The phone number you typed is used' });
                    }
                }
                else {
                    this.setState({ reg: 'The email you typed is used' })
                }
            }
            )
    }
    phonetyping = (e) => {
        e.preventDefault();
        var phone = e.target.value;
        axios.get("http://localhost:3001/phoneexists?phone=" + phone)
            .then((res) => {
                this.setState({ phoneStatus: res.data })
                console.log(res.data);
                if (res.data === 'OK') {
                    if (this.state.emailStatus !== 'BAD') {
                        this.setState({ reg: '' });
                    }
                    else {
                        this.setState({ reg: 'The email you typed is used' });
                    }
                }
                else {
                    this.setState({ reg: 'The phone number you typed is used' })
                }
            }
            )
    }
    render() {
        return (
            <div>
                <section className="row justify-content-center">
                    <div className="col-md-6">
                        <br />
                        <br />
                        <h1 style={{ textAlign: "center" }}>Regestration</h1>
                        <h4 style={{ textAlign: "center" }}>{this.state.reg}</h4>
                        <br />
                        <form className="row justify-content-center" onSubmit={this.newUser}>
                            <div class="col-sm-8" style={{ paddingBottom: '50px' }}>
                                <input type="email" id="inputEmail" class="form-control" onChange={this.emailtyping} placeholder="Email address" name="email"></input>
                            </div>
                            <br />
                            <br />
                            <div class="col-sm-8" style={{ paddingBottom: '50px' }}>
                                <input type="password" id="inputPass" class="form-control" placeholder="Password" name="pass"></input>
                            </div>
                            <br />
                            <br />
                            <div class="col-sm-8" style={{ paddingBottom: '50px' }}>
                                <input type="password" id="inputPass" class="form-control" placeholder="Confirm Password" name="cpass"></input>
                            </div>
                            <br />
                            <br />
                            <div class="col-sm-8" style={{ paddingBottom: '50px' }}>
                                <input type="string" id="inputPass" class="form-control" placeholder="Full Name" name="name"></input>
                            </div>
                            <br />
                            <br />
                            <div className="col-sm-8" style={{ paddingBottom: '50px' }}>
                                <Select
                                    options={city}
                                    onChange={this.handleChange}
                                    defaultValue={{ value: 'Tel Aviv', label: 'Tel Aviv' }} />
                            </div>
                            <br />
                            <br />
                            <div className="col-sm-8">
                                <input type="string" id="inputPass" class="form-control" onChange={this.phonetyping} placeholder="Phone Number" name="pnum"></input>
                            </div>
                            <br />
                            <br />
                            <div className="col-sm-8">
                                <button className="btn btn-success" style={{ width: '50%' }}>Regestr</button>
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
}

class Validation_screen extends React.Component {
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
                    position: "absolute",
                    textAlign: "center",
                    top: "50%",
                    width: "100%",
                }}>
                    <FadeIn>
                        <Validation game={this.props.game} />
                    </FadeIn>
                </div>
                <Particles
                    params={particlesOpt}
                />
            </div>
        )
    }

}

class Validation extends React.Component {
    state = {
        email: this.props.game.email,
        id: '',
        pass: this.props.game.pass,
        code: Math.floor(Math.random() * 1000000) + 99999,
        pnum: this.props.game.phone,
        city: this.props.game.city.label,
        name: this.props.game.name,
        coded: ''
    }
    move = () => {
        ReactDOM.render(<Try id={this.state.id} />, document.getElementById('root'));
    }
    componentDidMount() {
        console.log(this.props.game)
        console.log(this.props.game.phone);
        axios.get("http://localhost:3001/sms?tel=" + this.props.game.phone + "&code=" + this.state.code)
            .then((res) => {
            }
            )
    }
    chackcode = (e) => {
        e.preventDefault();
        console.log(e.target.code.value);
        console.log(this.state.code);
        console.log(this.state.code.toString() === e.target.code.value.toString());
        if (this.state.code.toString() === e.target.code.value.toString()) {
            axios.get("http://localhost:3001/Registration?email=" + this.state.email + "&password=" + this.state.pass + "&name=" + this.state.name + "&phone=" + this.state.pnum + "&city=" + this.state.city)
                .then((res) => {
                    this.setState({ id: res.data });
                    setTimeout(this.move(), 300);
                }
                )
        }
        else {
            this.setState({ coded: 'The Code You Types is Wrong' })
        }
    }
    render() {
        return (
            <div>
                <h4 className="display-4" style={{ textAlign: "center", color: "#f9f3f4", fontSize: "40px" }}>We Send verification code To Your Phone please write him in tne input below</h4>
                <h4 className="display-5">{this.state.coded}</h4>
                <form className="row justify-content-center" onSubmit={this.chackcode}>

                    <div className="col-sm-10" style={{ paddingBottom: '50px' }}>
                        <input className="form-control form-control-lg" id="" placeholder="The verification code" name="code" />
                    </div>
                    
                    <button className="btn btn-light btn-lg btn-block col-sm-3" style={{ fontSize: 20, fontWeight: 'bold' }}>NEXT</button>
                </form>
            </div>
        )
    }
}

export default ScreenReg;