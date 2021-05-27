import React, {Component, useEffect, useState} from 'react'
import EventCard from "./EventCard";
import Nav from "./Nav";
import axios from "axios";
class UserCabinet extends Component{
     state = {};
    componentDidMount() {
        if (this.props.location.state){
            const { id } = this.props.location.state;
            this.id=id;
            this.forceUpdate();
        }
        else {
            const config = {
                headers: {
                    Authorization: 'Token ' + localStorage.getItem('token')
                }
            };
            axios.get('http://127.0.0.1:5000/user/', config).then(res => {this.setState({user: res.data})}).catch(err => {this.forceUpdate();
            })
        }

        }

        render(){
            if (this.id){
            return (
                <div>
                    <Nav/>
                    <EventCard url={'http://127.0.0.1:5000/event/'}/>
                </div>
            );
            }
            else if (this.state.user){

                return (
                     <div>
                            <Nav/>
                            <EventCard url={'http://127.0.0.1:5000/event/'}/>
                     </div>
                    )
            }


            else{
                return (
                <div/>
            );
            }
        }

}


export default UserCabinet;