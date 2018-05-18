let initial_state = {
    username: '',
    id: '',
    profilepic: ''
}

let DOSOMETHING = "DOSOMETHING";

export default function reducer(state = initial_state, action){
    switch(action.type){
        case DOSOMETHING:
            return Object.assign({}, state, {username: state.username, id: state.id, profilepic: state.profilepic})
        default:
        return state;
    }
}

export function doSomething(id, username, profilepic){
    return{
        type: DOSOMETHING,
        payload: {
            id, username, profilepic
        }
    }
}