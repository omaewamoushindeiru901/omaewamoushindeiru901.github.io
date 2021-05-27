import React, {Component} from "react";
import axios from "axios";
import {Link} from "react-router-dom";

class ChangeProfile extends Component {

    state = {
        id: "",
        firstName: "",
        lastName: "",
        email: "",
        phone:"",
        username: "",
        password: "",
        password2: "",
    };

    flag=false
    componentDidMount() {
        const config = {
            headers: {
                Authorization: 'Token ' + localStorage.getItem('token')
            }
        };

        axios.get('http://127.0.0.1.5000/user/', config).then(res => {this.setState({user: res.data})}).catch(err => {this.forceUpdate();
        })
    }


    onSubmit = e => {

        e.preventDefault();
        const data = {
            id: 6,
            firstName: this.firstName,
            lastName: this.lastName,
            email: this.email,
            phone: this.phone,
            username: this.username,
            password: this.password,
            password2: this.password2,
        };
        if (this.username === ''&& this.email === ''&& this.phone === '' && this.password === ''&& this.password2 === '')
        {
            this.flag = true;
            this.forceUpdate();
        }
        else{
            axios.put('http://127.0.0.1:5000/user/', data).then(res => {
                this.props.history.push('/cabinet');
            }).catch(err => {this.flag = true;
                this.forceUpdate();
            })
            }
    };


    render() {
        if(this.flag)
        {
           return (
                <div data-testid="submit">
                      <form method='put' onSubmit={this.onSubmit} >
                        <p><input type="text" name="firstName"  placeholder="First Name" onChange={e => this.firstName = e.target.value}/></p>
                        <p><input type="text" name="lastName"  placeholder="Last Name" onChange={e => this.lastName = e.target.value}/></p>
                        <p><input type="text" name="email"  placeholder="Email" onChange={e => this.email = e.target.value}/></p>
                        <p><input type="text" name="phone"  placeholder="Phone" onChange={e => this.phone = e.target.value}/></p>
                            <p><input type="text" name="username"  placeholder="Username" onChange={e => this.username = e.target.value}/></p>
                        <p><input type="password" name="password"  placeholder="Password" onChange={e => this.password = e.target.value}/></p>
                        <p><input type="password" name="password2"  placeholder="Confirm Password" onChange={e => this.password2 = e.target.value}/></p>
                        <p className="submit"><input type="submit" name="commit" value="Submit"/></p>
                    </form>
                </div>
           )
        }
        return (
            <div data-testid="submit">
              <form method='put' onSubmit={this.onSubmit} >
                        <p><input type="text" name="firstName"  placeholder="First Name" onChange={e => this.firstName = e.target.value}/></p>
                        <p><input type="text" name="lastName"  placeholder="Last Name" onChange={e => this.lastName = e.target.value}/></p>
                        <p><input type="text" name="email"  placeholder="Email" onChange={e => this.email = e.target.value}/></p>
                        <p><input type="text" name="phone"  placeholder="Phone" onChange={e => this.phone = e.target.value}/></p>
                            <p><input type="text" name="username"  placeholder="Username" onChange={e => this.username = e.target.value}/></p>
                        <p><input type="password" name="password"  placeholder="Password" onChange={e => this.password = e.target.value}/></p>
                        <p><input type="password" name="password2"  placeholder="Confirm Password" onChange={e => this.password2 = e.target.value}/></p>
                        <p className="submit"><input type="submit" name="commit" value="Submit"/></p>
                    </form>
            </div>
        );
    };
}

export default ChangeProfile;