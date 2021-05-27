import ReactDOM from 'react-dom'
import Nav from "../Nav";
import App from "../../App";
import {BrowserRouter as Router,Route,Switch} from "react-router-dom";
import LoginPage from "../LoginPage";
import RegistrationPage from "../RegistrationPage";
import AddEvent from "../AddEvent";
import UserCabinet from "../UserCabinet";
import UserCard from "../UserCard";
import UserList from "../UserList";
import EventCard from "../EventCard";
import {render,screen,fireEvent,getByTestId} from "@testing-library/react";
import ChangeProfile from "../ChangeProfile";


//Nav
it("Nav renders without crashes",()=>{
    const div=document.createElement('div');
    ReactDOM.render(<Router><Nav/></Router>,div);
});


it("Nav renders without crashes (pass user)",()=>{
    const div=document.createElement('div');
    ReactDOM.render(<Router><Nav user={{
  id : 2,
  username: "Nanii",
  email: "pfpfpf@gmail.com"}}
/>
    </Router>,div);
});


//Login
it("Login renders without crashes",()=>{
    const div=document.createElement('div');
    ReactDOM.render(<Router><LoginPage/></Router>,div);
});

it("Login renders with crashes",()=>{
    const div=document.createElement('div');
    ReactDOM.render(<Router><LoginPage flag={true}/></Router>,div);
});


it('Login renders without crashes on submit',()=>{
    render(<Router><LoginPage /></Router>);
    const  input1 = screen.getByPlaceholderText('Username');
    const  input2 = screen.getByPlaceholderText('Password');
    const  input3 = screen.getByTestId('submit');
    fireEvent.change(input1, { target: { value: '123' }});
    fireEvent.change(input2, { target: { value: '123' }});
    fireEvent.change(input3, { target: { value: '123' }});
    fireEvent(
    screen.getByTestId('submit'),
    new MouseEvent('click', {
        bubbles: true,
    cancelable: true,
    })
    )
});

it('Login renders without crashes on submit flag',()=>{
    render(<Router><LoginPage flag={true}/></Router>);
    const  input1 = screen.getByPlaceholderText('Username');
    const  input2 = screen.getByPlaceholderText('Password');
    const  input3 = screen.getByTestId('submit');
    fireEvent.change(input1, { target: { value: '123' }});
    fireEvent.change(input2, { target: { value: '123' }});
    fireEvent.change(input3, { target: { value: '123' }});
    fireEvent(
    screen.getByTestId('submit'),
    new MouseEvent('click', {
        bubbles: true,
    cancelable: true,
    })
    )
});


it("ChangeProfile renders without crashes",()=>{
    const div=document.createElement('div');
    ReactDOM.render(<Router><ChangeProfile/></Router>,div);
});

it("Changeprofile renders without crashes with flag",()=>{
    render(<Router><ChangeProfile flag={true}/></Router>);
    const  input1 = screen.getByPlaceholderText('First Name');
    const  input2 = screen.getByPlaceholderText('Last Name');
    const  input3 = screen.getByPlaceholderText('Email');
    const  input4 = screen.getByPlaceholderText('Phone');
    const  input5 = screen.getByPlaceholderText('Username');
    const  input6 = screen.getByPlaceholderText('Password');
    const  input7 = screen.getByPlaceholderText('Confirm Password');
    fireEvent.change(input1, { target: { value: '123' }});
    fireEvent.change(input2, { target: { value: '123' }});
    fireEvent.change(input3, { target: { value: '123' }});
    fireEvent.change(input4, { target: { value: '123' }});
    fireEvent.change(input5, { target: { value: '123' }});
    fireEvent.change(input6, { target: { value: '123' }});
    fireEvent.change(input7, { target: { value: '123' }});
    fireEvent(
    screen.getByTestId('submit'),
    new MouseEvent('click', {
        bubbles: true,
    cancelable: true,
    })
    )
});
it("ChangeProfile renders with crashes",()=>{

    render(<Router><ChangeProfile flag={false}/></Router>);
   const  input1 = screen.getByPlaceholderText('First Name');
    const  input2 = screen.getByPlaceholderText('Last Name');
    const  input3 = screen.getByPlaceholderText('Email');
    const  input4 = screen.getByPlaceholderText('Phone');
    const  input5 = screen.getByPlaceholderText('Username');
    const  input6 = screen.getByPlaceholderText('Password');
    const  input7 = screen.getByPlaceholderText('Confirm Password');
    fireEvent.change(input1, { target: { value: '123' }});
    fireEvent.change(input2, { target: { value: '123' }});
    fireEvent.change(input3, { target: { value: '123' }});
    fireEvent.change(input4, { target: { value: '123' }});
    fireEvent.change(input5, { target: { value: '123' }});
    fireEvent.change(input6, { target: { value: '123' }});
    fireEvent.change(input7, { target: { value: '123' }});
    fireEvent(
    screen.getByTestId('submit'),
    new MouseEvent('click', {
        bubbles: true,
    cancelable: true,
    })
    )
});
//Register

it("RegistrationPage renders without crashes",()=>{
    const div=document.createElement('div');
    ReactDOM.render(<Router><RegistrationPage/></Router>,div);
});

it('RegistrationPage renders without crashes on submit',()=>{
    render(<Router><RegistrationPage /></Router>);
    const  input1 = screen.getByPlaceholderText('First Name');
    const  input2 = screen.getByPlaceholderText('Last Name');
    const  input3 = screen.getByPlaceholderText('Email');
    const  input4 = screen.getByPlaceholderText('Phone');
    const  input5 = screen.getByPlaceholderText('Username');
    const  input6 = screen.getByPlaceholderText('Password');
    const  input7 = screen.getByPlaceholderText('Confirm Password');
    fireEvent.change(input1, { target: { value: '123' }});
    fireEvent.change(input2, { target: { value: '123' }});
    fireEvent.change(input3, { target: { value: '123' }});
    fireEvent.change(input4, { target: { value: '123' }});
    fireEvent.change(input5, { target: { value: '123' }});
    fireEvent.change(input6, { target: { value: '123' }});
    fireEvent.change(input7, { target: { value: '123' }});
    fireEvent(
    screen.getByTestId('submit'),
    new MouseEvent('click', {
        bubbles: true,
    cancelable: true,
    })
    )
});

it('RegistrationPage renders with crashes on submit',()=>{
    render(<Router><RegistrationPage /></Router>);
    const  input1 = screen.getByPlaceholderText('First Name');
    const  input2 = screen.getByPlaceholderText('Last Name');
    const  input3 = screen.getByPlaceholderText('Email');
    const  input4 = screen.getByPlaceholderText('Phone');
    const  input5 = screen.getByPlaceholderText('Username');
    const  input6 = screen.getByPlaceholderText('Password');
    const  input7 = screen.getByPlaceholderText('Confirm Password');
    fireEvent.change(input1, { target: { value: '123' }});
    fireEvent.change(input2, { target: { value: '123' }});
    fireEvent.change(input3, { target: { value: '123' }});
    fireEvent.change(input4, { target: { value: '123' }});
    fireEvent.change(input5, { target: { value: '123' }});
    fireEvent.change(input6, { target: { value: '123' }});
    fireEvent.change(input7, { target: { value: '1234' }});
    fireEvent(
    screen.getByTestId('submit'),
    new MouseEvent('click', {
        bubbles: true,
    cancelable: true,
    })
    )
});

it('RegistrationPage renders without crashes on submit with flag',()=>{
    render(<Router><RegistrationPage flag={true} /></Router>);
    const  input1 = screen.getByPlaceholderText('First Name');
    const  input2 = screen.getByPlaceholderText('Last Name');
    const  input3 = screen.getByPlaceholderText('Email');
    const  input4 = screen.getByPlaceholderText('Phone');
    const  input5 = screen.getByPlaceholderText('Username');
    const  input6 = screen.getByPlaceholderText('Password');
    const  input7 = screen.getByPlaceholderText('Confirm Password');
    fireEvent.change(input1, { target: { value: '123' }});
    fireEvent.change(input2, { target: { value: '123' }});
    fireEvent.change(input3, { target: { value: '123' }});
    fireEvent.change(input4, { target: { value: '123' }});
    fireEvent.change(input5, { target: { value: '123' }});
    fireEvent.change(input6, { target: { value: '123' }});
    fireEvent.change(input7, { target: { value: '123' }});
    fireEvent(
    screen.getByTestId('submit'),
    new MouseEvent('click', {
        bubbles: true,
    cancelable: true,
    })
    )
});

//events
it("Event renders without crashes",()=>{
    render(<Router><AddEvent/></Router>)
});

it("Event renders with crashes",()=>{
    render(<Router><AddEvent state={{id:0}}/></Router>)
});


it("Event renders with crashes with flag",()=>{
    render(<Router><AddEvent flag={1}/></Router>)
});

it('AddEvent renders without crashes on submit',()=>{
    render(<Router><AddEvent /></Router>);
    const  input1 = screen.getByPlaceholderText('Name');
    const  input2 = screen.getByPlaceholderText('Content');
    const  input3 = screen.getByPlaceholderText('Date');
    fireEvent.change(input1, { target: { value: '123' }});
    fireEvent.change(input2, { target: { value: '123' }});
    fireEvent.change(input3, { target: { value: '123' }});
    fireEvent(
    screen.getByTestId('submit'),
    new MouseEvent('click', {
        bubbles: true,
    cancelable: true,
    })
    )
});

it('AddEvent renders without crashes on submit on flag',()=>{
    render(<Router><AddEvent flag={true}/></Router>);
    const  input1 = screen.getByPlaceholderText('Name');
    const  input2 = screen.getByPlaceholderText('Content');
    const  input3 = screen.getByPlaceholderText('Date');
    fireEvent.change(input1, { target: { value: '123' }});
    fireEvent.change(input2, { target: { value: '123' }});
    fireEvent.change(input3, { target: { value: '123' }});
    fireEvent(
    screen.getByTestId('submit'),
    new MouseEvent('click', {
        bubbles: true,
    cancelable: true,
    })
    )
});

it('AddEvent renders with crashes on submit',()=>{
    render(<Router><AddEvent/></Router>);
    const  input1 = screen.getByPlaceholderText('Name');
    const  input2 = screen.getByPlaceholderText('Content');
    const  input3 = screen.getByPlaceholderText('Date');
    fireEvent.change(input1, { target: { value: 123 }});
    fireEvent.change(input2, { target: { value: '123' }});
    fireEvent.change(input3, { target: { value: '123' }});
    fireEvent(
    screen.getByTestId('submit'),
    new MouseEvent('click', {
        bubbles: true,
    cancelable: true,
    })
    )
});

//UserCabinet
it("UserCabinet renders without crashes",()=>{
    render(<Router><UserCabinet /></Router>);
});

it("UserCabinet renders with crashes",()=>{
    render(<Router><UserCabinet state={1}  /></Router>);
});

it("UserCabinet renders with crashes on flag",()=>{
    render(<Router><UserCabinet config={0}/></Router>);
});



it("UserCard renders without crashes",()=>{
    const div=document.createElement('div');
    ReactDOM.render(<Router><UserCard/></Router>,div);
});


it("UserList renders without crashes",()=>{
    const div=document.createElement('div');
    ReactDOM.render(<Router><UserList/></Router>,div);
});

it("AddEvent renders without crashes",()=>{
    const div=document.createElement('div');
    ReactDOM.render(<Router><AddEvent state={{id:1}} /></Router>,div);

});
it("Addevent renders without crashes",()=>{

    render(<Router><AddEvent state={{id:2}} /></Router>);

});
it("EventCard renders without crashes",()=>{
    const div=document.createElement('div');
    ReactDOM.render(<Router><EventCard/></Router>,div);
});

it ('Test App',()=>{
    render(<App/>);
});


