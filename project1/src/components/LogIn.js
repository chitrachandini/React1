import React, { Component } from 'react';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import './LogIn.css'
//import Notify from './Notify'
class  LogIn extends Component{
    state = {
        emailid: '',
        password:'',
        error : {
            emailidError:'',
            passwordError:''
        },
        formValid:false,
    }
    handleChange = (e) => {
        console.log(e);
        this.validateForm(e.target);
    }
    handleSubmit = (e) => {
        e.preventDefault();
        if(this.state.formValid === true){
            //window.alert('account successfully created')
        }
        else{
            window.alert('enter correct values')
        }
    }
    validateForm = (val) => {
        let emailidError = this.state.error.emailidError;
        let passwordError = this.state.error.passwordError;
        let formValid = this.state.formValid;
        if(val.id === 'emailid'){
            if(val.value.trim() === '') {
                emailidError = 'please enter emailid';
                formValid = false
            }
            else{
                emailidError = '';
                formValid = true;
            }
        }
        if(val.id === 'password'){
            if(val.value === '') {
                passwordError = 'please enter correct password';
                formValid = false
            }
            else{
                passwordError = '';
                formValid = true;
            }
        }
        this.setState({
            [val.id] : val.value,
            error : {
                emailidError :emailidError,
                passwordError:passwordError

            },
            formValid : formValid
        })
    }
    render(){
        return(
            <div className = "container">
                <div className="card">
                    <div className = "form">
                        <h4 className = "Name">Login</h4><br/>
                            <form onSubmit = {this.handleSubmit}>
                                <label htmlFor = "emailid"><b className = "changecolor">Email id</b></label>
                                <p className = "line"><input type = "email" id="emailid" onChange={this.handleChange} required/></p>
                                <p>{this.state.error.emailidError}</p>
                                <label htmlFor = "password"><b className = "changecolor">Password</b></label>
                                <p className = "line"><input  type = "password"  id="password" onChange={this.handleChange} required/></p>
                                <p>{this.state.error.passwordError}</p>
                                <FormControlLabel className="middle" control={<Checkbox name="checkedC" />}label ="I agree the terms and conditions"/><br/><br/>
                                <button className="center">Login</button>
                            </form>
                    </div>
                </div>
            </div>
        )
    }
}
export default LogIn;