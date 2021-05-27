import React from 'react'
import Nav from "./Nav";

import UserCard from "./UserCard";

function UserList() {
    return(
        <div>
            <Nav/>
            <div className="profil"><h2>List of all users</h2></div>
            <UserCard url= {'http://127.0.0.1:5000/user/'} />
        </div>
    )

}

export default UserList;