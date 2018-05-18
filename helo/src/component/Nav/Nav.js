import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import reducer from './../../ducks/reducer'

 export function Nav(props){

     console.log(props)
     return(
         <div>

             
            Nav

            <Link to="/dashboard"><button>Home </button></Link>
            <Link to="/new"><button>New Post </button></Link>
            <Link to="/"><button>Logout </button></Link>

            
            
        </div>
    )
}


function mapStateToProps(state){
    return{
        username : state.username,
        profilepic : state.profilepic
    }
}

export default connect (mapStateToProps)(Nav)