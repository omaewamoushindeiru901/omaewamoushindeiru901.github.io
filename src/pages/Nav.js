import React, {Component} from 'react'
import {Link} from "react-router-dom";
import axios from "axios";
class Nav extends Component{

    state = {};
    componentDidMount() {
        const config={
            headers:{
                Authorization: 'Token '+ localStorage.getItem('token')
            }
        };

        axios.get('http://127.0.0.1:5000/user/',config).then(res => {this.setState({user:res.data})}).catch(err =>{this.forceUpdate();
            })

    }

    render() {
        if (this.props.user){
            return (
                <nav className="navi">
                    <ul>
                        <li><h2>What the event</h2></li>
                        <li><Link to='/changeprofile'><a>Profile</a></Link></li>
                        <li><Link to='/addevent'> <a>Add event</a></Link></li>
                        <li><Link to='/userlist'><a>Other users</a></Link></li>
                        <li><Link to='/' style={{float: "right"}} onClick={() => {localStorage.clear();window.location.href="/"}}><a>Logout</a> </Link></li>
                    </ul>
                </nav>
            );
        }
        else{
        return (
                <nav className="navi">
                    <ul>
                        <li><h2>What the event</h2></li>
                        <li><Link to='/changeprofile'><a>Profile</a></Link></li>
                        <li><Link to='/addevent'> <a>Add event</a></Link></li>
                        <li><Link to='/userlist'><a>Other users</a></Link></li>
                        <li><Link to='/' style={{float: "right"}} onClick={() => {localStorage.clear();window.location.href="/"}}><a>Logout</a> </Link></li>
                    </ul>
                </nav>
        )
            }
    }
}

export default Nav;