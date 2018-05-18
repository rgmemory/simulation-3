import React, {Component} from 'react';
import axios from 'axios';
import {connect} from 'react-redux';
import {doSomething} from '../../ducks/reducer'

export default class Auth extends Component{

    constructor(){
        super()

        this.state = {
            username: '',
            password: ''
        }

        this.updatePassword = this.updatePassword.bind(this);
        this.updateUsername = this.updateUsername.bind(this);
        this.register = this.register.bind(this);
        this.getUsers = this.getUsers.bind(this);
        this.login = this.login.bind(this);
    }

    updateUsername(value){
        this.setState({
            username: value
        })
    }

    updatePassword(value){
        this.setState({
            password: value
        })
    }

    getUsers(){
        axios.get('/get').then(res => {
            console.log("get works on the front", res.data)
        }).catch(e => console.log('you got an error', e))
        
    }
    
    register(){
        let {username, password} = this.state;
        axios.post('/register', {username, password}).then(ok => {

        }).catch(e => console.log('error', e))

        // Once the response comes back, navigate to the Dashboard view.
        
    }

    login(){
        let {username, password} = this.state;
        axios.post('/login', {username, password}).then(ok => {
            
            console.log(ok);
        })

        // Once the response comes back, navigate to the Dashboard view.

    }


    render(){
        return(
            <div>
                Auth
                Username:<input type="text" onChange={e => this.updateUsername(e.target.value)}/>
                Password:<input type="text" onChange={e => this.updatePassword(e.target.value)}/>

                <button onClick={this.login}>Login</button>
                <button onClick={this.register}>Register</button>
                <button onClick={this.getUsers}>Get</button>
            </div>
        )
    }
}

// export default connect(null, {mapStateToProps, doSomething})(Auth);