import React from 'react';
import ReactDOM from 'react-dom';
import logo from './pictures/logodone.PNG'
import Login from './Login';
import Reg from './Reg';
import Delete from './delete';
import axios from 'axios';
import Try from './try';

function go() {
    ReactDOM.render(<Login />, document.getElementById('root'));
}
function go2() {
    ReactDOM.render(<Reg />, document.getElementById('root'));
}

class Header extends React.Component {
    state = {
        name: '',
        sess: this.props.id
    }
    componentDidMount() {
        if (this.state.sess !== '') {
            axios.get("http://localhost:3001/getnamebysess?sess='" + this.state.sess + "'")
                .then((res) => {
                    console.log(res.data);
                    this.setState({ name: "Welcome " + res.data });
                }
                )

        }
    }
    go3=()=> {
        ReactDOM.render(<Delete sess={this.state.sess}/>, document.getElementById('root'));
    }
    go4=()=>{
        ReactDOM.render(<Try id={this.state.sess}/>, document.getElementById('root'));
    }
    render() {
        return (
            <header>
                <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <img src={logo} width="90" height="90" className="d-inline-block align-top" alt="" onClick={this.go4}/>
                    <div className="collapse navbar-collapse" id="navbarTogglerDemo03">
                        <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
                            <li className="nav-item active">
                                <a className="nav-link" onClick={go} href="#" style={{ display: "inline-block" }}>Login<span className="sr-only"></span></a>
                            </li>
                            <li className="nav-item active">
                                <a className="nav-link" href="#" onClick={go2} style={{ display: "inline-block" }}>Regestration<span className="sr-only"></span></a>
        -                   </li>
                            <li className="nav-item active">
                                <a className="nav-link" href="#" onClick={this.go3} style={{ display: "inline-block" }}>Delete Offer<span className="sr-only"></span></a>
        -                   </li>
                        </ul>
                        <span class="navbar-text">
                            {this.state.name}
                        </span>
                    </div>
                </nav>
            </header>
        )
    }
}
export default Header;