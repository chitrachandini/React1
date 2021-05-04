/*import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Button from '@material-ui/core/Button'
const Feedback =()=>{
    return(
          <div className="container">
            <h4>FeedBack Form</h4>
            <p>We would love to hear your thoughts, suggestions, concerns or problems with anything so we can improve!</p>
            <hr/>
            <p><b>FeedBack Type</b></p>
            <FormControlLabel control={<Checkbox name="checkedC"/>}/>Comments <FormControlLabel control={<Checkbox name="checkedC" />}/>Suggestions <FormControlLabel control={<Checkbox name="checkedC" />}/>Questions
            <p><b>Describe your feedback:*</b></p>
            <p className = "text"><input  type = "text"  id="text"/></p>
            <p><b>Email</b></p>
            <p><input  type = "email"  id="email"/></p>
            <p className="center"><Button variant="contained" color="secondary">Submit Feedback</Button></p>
          </div>
    )
}
export default Feedback;*/
import React, { Component } from 'react';
//import Button from '@material-ui/core/Button'
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import './Feedback.css'
class  SignUp extends Component{
    state = {
        describe:'',
        emailid: '',
        error : {
            describeError:'',
            emailidError:''
        },
        formValid:false
    }
    handleChange = (e) => {
        console.log(e);
        this.validateForm(e.target);
    }
    handleSubmit = (e) => {
        e.preventDefault();
        if(this.state.formValid === true){
            window.alert(' Successfully submitted')
        }
        else{
            window.alert('enter correct values')
        }
    }
    validateForm = (val) => {
        let describeError= this.state.error.describeError;
        let emailidError = this.state.error.emailidError;
        let formValid = this.state.formValid;
        if(val.id === 'describe'){
            if(val.value === '') {
                describeError = 'describe your feedback';
                formValid = false
            }
            else{
                describeError = '';
                formValid = true;
            }
        }
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
        this.setState({
            [val.id] : val.value,
            error : {
                describeError:describeError,
                emailidError :emailidError,
            },
            formValid : formValid
        })
    }
    render(){
        return(
            <div className = "form">
                <form onSubmit = {this.handleSubmit}>
                    <h4>FeedBack Form</h4>
                    <p>We would love to hear your thoughts, suggestions, concerns or problems with anything so we can improve!</p>
                    <p className="hl"><hr></hr></p>
                    <p><b>Feedback Type</b></p>
                    <FormControlLabel control={<Checkbox name="checkedC"/>}/>Comments <FormControlLabel control={<Checkbox name="checkedC" />}/>Suggestions <FormControlLabel control={<Checkbox name="checkedC" />}/>Questions
                    <p className="move"><b>Describe your feedback</b><span className="color">*</span></p>
                    <label htmlFor = "describe"></label>
                    <p className = "hr"><input type = "text" id="describe" onChange={this.handleChange} required/></p>
                    <p>{this.state.error.describeError}</p>
                    <p className="move1"><b>Email</b></p>
                    <label htmlFor = "emailid"></label>
                    <p className = "hr"><input type = "email" id="emailid" onChange={this.handleChange} required/></p>
                    <p>{this.state.error.emailidError}</p>
                    <button className="c">Submit Feedback</button>
                </form>
            </div>
        )
    }
}
export default SignUp;
