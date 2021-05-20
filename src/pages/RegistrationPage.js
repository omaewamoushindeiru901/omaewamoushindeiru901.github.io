import React, { Component } from 'react'
import axios from "axios";
import {Link} from "react-router-dom";


export class RegistrationPage extends Component {
    state = {
        firstName: '',
        lastname: '',
        email: '',
        phone: '',
        username: '',
        password: '',
        password2: '',
    };

    onSubmit = e =>{
        e.preventDefault();
         if (this.password===this.password2) {
             const data = {
                 username: this.username,
                 firstName: this.firstName,
                 lastName: this.lastName,
                 email: this.email,
                 password: this.password,
                 phone: this.phone,
             };
             axios.post('http://127.0.0.1:5000/user/', data).then(res => {
                 localStorage.setItem('token', res.data.token);
                 this.props.history.push('/');
             }).catch(err => {
                 this.flag = true;
                 this.forceUpdate();
             })
         }
         else{
             this.flag=true;
             this.forceUpdate();
         }

    };




    render() {
        if (this.flag){
        return (
           <div className="reg">
                <h2>Invalid credentials</h2>
                <form method="post" onSubmit={this.onSubmit}>
                    <p><input type="text" name="firstName"  placeholder="First Name" onChange={e => this.firstName = e.target.value}/></p>
                    <p><input type="text" name="lastName"  placeholder="Last Name" onChange={e => this.lastName = e.target.value}/></p>
                    <p><input type="text" name="email"  placeholder="Email" onChange={e => this.email = e.target.value}/></p>
                    <p><input type="text" name="phone"  placeholder="Phone" onChange={e => this.phone = e.target.value}/></p>
                    <p><input type="text" name="username"  placeholder="Username" onChange={e => this.username = e.target.value}/></p>
                    <p><input type="password" name="password"  placeholder="Password" onChange={e => this.password = e.target.value}/></p>
                    <p><input type="password" name="password2"  placeholder="Confirm Password" onChange={e => this.password2 = e.target.value}/></p>
                    <p className="submit"><input type="submit" name="commit" value="Submit"/></p>
                    <Link to={'/'}><a >Already have an account?</a></Link>
                </form>
                <img className="tyan" src={window.location.origin + '/images/tyan.png'} alt="Helper"/>
            </div>
        );}
        else {
            return (
           <div className="reg">
                <form method="post" onSubmit={this.onSubmit}>
                    <p><input type="text" name="firstName"  placeholder="First Name" onChange={e => this.firstName = e.target.value}/></p>
                    <p><input type="text" name="lastName"  placeholder="Last Name" onChange={e => this.lastName = e.target.value}/></p>
                    <p><input type="text" name="email"  placeholder="Email" onChange={e => this.email = e.target.value}/></p>
                    <p><input type="text" name="phone"  placeholder="Phone" onChange={e => this.phone = e.target.value}/></p>
                    <p><input type="text" name="username"  placeholder="Username" onChange={e => this.username = e.target.value}/></p>
                    <p><input type="password" name="password"  placeholder="Password" onChange={e => this.password = e.target.value}/></p>
                    <p><input type="password" name="password2"  placeholder="Confirm Password" onChange={e => this.password2 = e.target.value}/></p>
                    <p className="submit"><input type="submit" name="commit" value="Submit"/></p>
                    <Link to={'/'}><a >Already have an account?</a></Link>
                </form>
                <img className="tyan" src={window.location.origin + '/images/tyan.png'} alt="Helper"/>
            </div>
        );
        }

    }


}


export default RegistrationPage;