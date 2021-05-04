/*import * as actions from './action';

const initState = {
    counter: 0
}

const reducer = (state = initState, action) => {
    switch(action.type){
        case actions.INCREMENT:
            return {...state, counter: state.counter + action.payload}
        default:
            return state;
    }
}

export default reducer;*/
/*import * as actions from './actionType';

const initState = {
    counter: 0,
    posts: []
}

const reducer = (state = initState, action) => {
    switch(action.type){
        case actions.INCREMENT:
            return {...state, counter: state.counter + action.payload}
        case actions.GET_POSTS:
            return {...state, posts: action.payload.httpResponse}
        default:
            return state;
    }
}

export default reducer;*/
import * as actions from './actionType';

const initState = {
    counter: 0,
    posts: []
}

const reducer = (state = initState, action) => {
    switch(action.type){
        case actions.INCREMENT:
            return {...state, counter: state.counter + action.payload}
        case actions.GET_POSTS:
            return {...state, posts: action.payload.httpResponse}
        case actions.DELETE_POST:
            return {
                ...state,
                posts: state.posts.filter(
                    ({id}) => id !== action.id
                )
            }
        default:
            return state;
    }
}

export default reducer;
