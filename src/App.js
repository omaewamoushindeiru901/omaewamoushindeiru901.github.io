import React, {useEffect} from 'react'
import {BrowserRouter as Router,Route,Switch} from "react-router-dom";
import {LoginPage} from "./pages/LoginPage";
import {RegistrationPage} from "./pages/RegistrationPage";
import UserCabinet from "./pages/UserCabinet";
import {AddEvent} from "./pages/AddEvent";
import ChangeProfile from "./pages/ChangeProfile";
import UserList from "./pages/UserList";


function App (){
      return (

              <Router>
                  <div>
                      <Switch>
                          <Route exact path='/' exect component={LoginPage}/>
                          <Route exact path='/registration' exect component={RegistrationPage}/>
                          <Route exact path='/cabinet' exect component={UserCabinet}/>
                          <Route exact path='/addevent' exect component={AddEvent}/>
                          <Route exact path='/changeprofile' exect component={ChangeProfile}/>
                          <Route exact path='/userlist' exect component={UserList}/>
                      </Switch>
                  </div>
              </Router>

      );

}

export default App;