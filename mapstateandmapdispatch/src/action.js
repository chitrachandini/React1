//export const INCREMENT = 'increment';
/*import axios from "axios"
import * as actions from './actionType';

export const onGetPosts = () =>{
    return (dispatch) => {
        axios.get('https://jsonplaceholder.typicode.com/posts').then((res => {
            dispatch(
                ((data) => {
                    return{
                        type: actions.GET_POSTS,
                        payload: {
                            httpResponse: data.slice(0,8)
                        }
                    }
                })(res.data)
            )
        })
        ).catch(err => 
            {    console.log(err)
            })
    }
}*/
import axios from "axios";
import * as actions from './actionType';

export const onGetPosts = () =>{
    return (dispatch) => {
        axios.get('https://jsonplaceholder.typicode.com/posts').then((res => {
            dispatch(
                ((data) => {
                    return{
                        type: actions.GET_POSTS,
                        payload: {
                            httpResponse: data.slice(0,8)
                        }
                    }
                })(res.data)
            )
        })
        ).catch(err => 
            {    console.log(err)
            })
    }
}

export const onDelete = (id) => dispatch => {
    dispatch({
        type: actions.DELETE_POST,
        id: id
    })
}