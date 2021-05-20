import React, { Component } from 'react'
import axios from "axios";


export class AddEvent extends Component {
    state = {
        name: '',
        content: '',
        date: '',
    };

    onSubmit = e => {
        e.preventDefault();
        const data = {
            name: this.name,
            content: this.content,
            date: this.date,
        };
        axios.post('http://127.0.0.1:5000/event/', data).then(res => {
            localStorage.setItem('token', res.data.token);
            this.props.history.push('/cabinet');
        }).catch(err => {
            this.flag = true;
            this.forceUpdate();
        })
    };


    render() {

        if (this.flag) {
            return (
                <div className="reg">
                    <h2>Invalid credentials</h2>
                    <form method="post" onSubmit={this.onSubmit}>
                        <p><input type="text" name="name" placeholder="Name"
                                  onChange={e => this.name = e.target.value}/>
                        </p>
                        <p><input type="text" name="content" placeholder="Content"
                                  onChange={e => this.content = e.target.value}/></p>
                        <p><input type="text" name="date" placeholder="Date"
                                  onChange={e => this.date = e.target.value}/>
                        </p>
                        <p className="submit"><input type="submit" name="commit" value="Submit"/></p>
                    </form>
                    <img className="tyan" src={'/images/tyan.png'} alt="Helper"/>
                </div>
            );
        } else {
            return (
                <div className="reg">
                    <form method="post" onSubmit={this.onSubmit}>
                        <p><input type="text" name="name" placeholder="Name"
                                  onChange={e => this.name = e.target.value}/>
                        </p>
                        <p><input type="text" name="content" placeholder="Content"
                                  onChange={e => this.content = e.target.value}/></p>
                        <p><input type="text" name="date" placeholder="Date"
                                  onChange={e => this.date = e.target.value}/>
                        </p>
                        <p className="submit"><input type="submit" name="commit" value="Submit"/></p>
                    </form>
                    <img className="tyan" src={'/images/tyan.png'} alt="Helper"/>
                </div>
            );
        }

    }

}


export default AddEvent;