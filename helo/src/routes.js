import {Switch, Route} from 'react-router-dom';
import Auth from './component/Auth/Auth';
import Dashboard from './component/Dashboard/Dashboard';
import Form from './component/Form/Form';
import Post from './component/Post/Post';
import React from 'react';

// this.props.location.pathname == '/' ? display:true : display false

export default(
    <Switch>
        <Route exact path="/" component={Auth}/> 
        <Route path="/dashboard" component={Dashboard}/>
        <Route path="/post/:postid" component={Post}/>
        <Route path="/new" component={Form}/>
        
    </Switch>
)