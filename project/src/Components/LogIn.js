// import React, { Component } from 'react';
// import FormControlLabel from '@material-ui/core/FormControlLabel';
// import Checkbox from '@material-ui/core/Checkbox';
// import './LogIn.css'
// import Notify from './Notify'
// class  LogIn extends Component{
//     state = {
//         emailid: '',
//         password:'',
//         error : {
//             emailidError:'',
//             passwordError:''
//         },
//         formValid:false,
//     }
//     handleChange = (e) => {
//         console.log(e);
//         this.validateForm(e.target);
//     }
//     handleSubmit = (e) => {
//         e.preventDefault();
//         if(this.state.formValid === true){
//             window.alert('account successfully created')
//         }
//         else{
//             window.alert('enter correct values')
//         }
//     }
//     validateForm = (val) => {
//         let emailidError = this.state.error.emailidError;
//         let passwordError = this.state.error.passwordError;
//         let formValid = this.state.formValid;
//         if(val.id === 'emailid'){
//             if(val.value.trim() === '') {
//                 emailidError = 'please enter emailid';
//                 formValid = false
//             }
//             else{
//                 emailidError = '';
//                 formValid = true;
//             }
//         }
//         if(val.id === 'password'){
//             if(val.value === '') {
//                 passwordError = 'please enter correct password';
//                 formValid = false
//             }
//             else{
//                 passwordError = '';
//                 formValid = true;
//             }
//         }
//         this.setState({
//             [val.id] : val.value,
//             error : {
//                 emailidError :emailidError,
//                 passwordError:passwordError

//             },
//             formValid : formValid
//         })
//     }
//     render(){
//         return(
//             <div className = "container">
//                 <div className="card">
//                     <div className = "form">
//                         <h4 className = "Name">Login</h4><br/>
//                             <form onSubmit = {this.handleSubmit}>
//                                 <label htmlFor = "emailid"><b className = "changecolor">Email id</b></label>
//                                 <p className = "line"><input type = "email" id="emailid" onChange={this.handleChange} required/></p>
//                                 <p>{this.state.error.emailidError}</p>
//                                 <label htmlFor = "password"><b className = "changecolor">Password</b></label>
//                                 <p className = "line"><input  type = "password"  id="password" onChange={this.handleChange} required/></p>
//                                 <p>{this.state.error.passwordError}</p>
//                                 <FormControlLabel  control={<Checkbox name="checkedC" />}label ="I agree the terms and conditions"/><br/><br/>
//                                 <button className="c">Login</button>
//                                 <Notify/>
//                             </form>
//                     </div>
//                 </div>
//             </div>
//         )
//     }
// }
// export default LogIn;
import React, { Component } from 'react';
import { Grid, Paper, Avatar, TextField, Button, Typography, Link } from '@material-ui/core';
//import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import '../App.css';
//import * as actions from '../Actions/action'
import 'react-toastify/dist/ReactToastify.css'
//import { StudentData } from './studentData';


class Login extends Component  {
    state= {
      
    }
   
    
    
    render()
     { 
        
       
        const paperStyle = { padding: '20px', height: '70vh', width: 300, margin: '30px auto' }
        const avatarStyle = { backgroundColor: '#EE6E73' }
        const ButtonStyle = { backgroundColor: '#EE6E73', color: 'white', marginTop:20 }
         return (
        <div>

            <Grid>
                <Paper elevation={10} style={paperStyle} >
                    <Grid align='center'>
                        {/*<Avatar style={avatarStyle}><LockOutlinedIcon /></Avatar>*/}
                        <h4>Sign in</h4>
                    </Grid>
                    <p><TextField className='mb-10' label='PIN No' name="userName" variant="outlined" placeholder='Enter your pinno' fullWidth required  onChange={this.handleChange}>
                    </TextField></p>
                    <TextField className='mb-10' label='Password' name="passWord" placeholder='Enter Password' variant="outlined" type='password' fullWidth required onChange={this.handleChange}>
                    </TextField>
                    <Button className="loginBtn" style={ButtonStyle} type='submit'  variant="contained" onClick={this.loginClick} fullWidth>Login</Button>
                    <Typography>
                        <Link href="#">
                            forgot Password ?
                                </Link>
                    </Typography>
                    <Typography>Do u have Account
                                <Link href="#">
                            Sign up ?
                                </Link>
                    </Typography>
                </Paper>
            </Grid>
        </div>
    );
}
}


export default Login;
