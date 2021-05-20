import React, { Component } from 'react'
import axios from "axios";
import  {Link} from "react-router-dom";
import { Redirect } from 'react-router'


export class LoginPage extends Component{
    state = {
        username: '',
        password: '',
    };

     onSubmit = e =>{
        e.preventDefault();
        const data = {
                username: this.username,
                password: this.password,
            };
        axios.post('http://127.0.0.1:5000/',data).then(res => {
                localStorage.setItem('token',res.data.token)
            this.props.history.push('/cabinet');
            }).catch(err =>{
                this.flag=true;
                this.forceUpdate();

            })
    };


    render() {
        if (this.flag) {
            return (
                <div>
                    <h1>What the event</h1>
                    <h2>Invalid credentials</h2>
                    <form method="post" onSubmit={this.onSubmit} action={'/cabinet'}>
                        <p><input type="text" name="username" placeholder="Username"
                                  onChange={e => this.username = e.target.value}/></p>
                        <p><input type="password" name="password" placeholder="Password"
                                  onChange={e => this.password = e.target.value}/></p>
                        <p className="submit"><input type="submit" name="commit" value="Sign in"/></p>
                        <Link to={'/registration'}> <a>Don`t have an account?</a></Link>
                    </form>

                </div>
            );
        } else {
            return (
                <div>
                     <h1>What the event</h1>
                    <form method="post" onSubmit={this.onSubmit}>
                        <p><input type="text" name="username" placeholder="Username"
                                  onChange={e => this.username = e.target.value}/></p>
                        <p><input type="password" name="password" placeholder="Password"
                                  onChange={e => this.password = e.target.value}/></p>
                        <p className="submit"><input data-testid='submit' type="submit" name="commit" value="Sign in"/></p>
                       <Link to={'/registration'}> <a>Don`t have an account?</a></Link>
                    </form>
                </div>
            );
        }
    }
}

export default LoginPage;