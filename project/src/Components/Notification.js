// import { useToasts } from 'react-toast-notifications'
// import Button from '@material-ui/core/Button'

//  const ToastDemo = ({ content }) => {
//   const { addToast } = useToasts()
//   return (
//     <Button onClick={() => addToast(content, {
//       appearance: 'success',
//       autoDismiss: true,
//     })}>
//       Add Toast
//     </Button>
//   )
// }
// export default ToastDemo;
import React from 'react';
import {toast} from 'react-toastify'; 
import 'react-toastify/dist/ReactToastify.css'; 
   
toast.configure() 
const GeeksforGeeks = (props)=>{
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
        <div className="center">
            <button onClick={notify}>Submit</button>
            </div>
    );
}
 export default GeeksforGeeks;
