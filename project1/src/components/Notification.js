/*import React from 'react';
import {toast} from 'react-toastify'; 
import 'react-toastify/dist/ReactToastify.css'; 
   
toast.configure() 
const Notification = (props)=>{
    const notify = ()=>{ 
        if(props.formValid === true){
        toast('Thanks for the feedback',
           {position: toast.POSITION.TOP_RIGHT})
        }
        else{
            toast('Fill the  feedback form', 
            {position: toast.POSITION.TOP_RIGHT})
        }
    }
    return (
        <div className="center" >
            <button onClick={notify}>Submit</button>
        </div>
    );
}
 export default Notification;*/
 import React from 'react';
import {toast} from 'react-toastify'; 
import 'react-toastify/dist/ReactToastify.css'; 
    
toast.configure() 
const Notification=(props)=>{
    const notify = ()=>{ 
        if(props.formValid === true){
            toast.success('Thanks for the feedback')
            }
            else{
                toast.warning('Fill the feedback')
            }
    }
    return (
        <div className="center">
            <button onClick={notify}>submit</button>
            </div>
    );
}
 export default Notification;