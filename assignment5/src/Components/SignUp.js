import React, { Component } from 'react';
import '../App.css';
class  SignUp extends Component{
    state = {
        name: '',
        dateofbirth :'',
        emailid: '',
        contactnumber:'',
        error : {
            nameError:'',
            dateofbirthError:'',
            emailidError:'',
            contactnumber:''
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
            window.alert('account successfully created')
        }
        else{
            window.alert('enter correct values')
        }
    }
    validateForm = (val) => {
        let nameError = this.state.error.nameError;
        let dateofbirthError = this.state.error.dateofbirthError;
        let emailidError = this.state.error.emailidError;
        let contactnumberError = this.state.error.contactnumberError;
        let formValid = this.state.formValid;
        if(val.id === 'name'){
            if((val.value).trim() === '') {
                nameError = 'please enter name';
                formValid = false
            }
            else{
                nameError='';
                formValid = true;
            }
        }
        if(val.id === 'dateofbirth'){
            if(val.value === '') {
                dateofbirthError = 'please enter dateofbirth';
                formValid = false
            }
            else{
                dateofbirthError = '';
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
        if(val.id === 'contactnumber'){
            if(val.value.length != 10) {
                contactnumberError = 'please enter contactnumber';
                formValid = false
            }
            else{
                contactnumberError = '';
                formValid = true;
            }
        }
        this.setState({
            [val.id] : val.value,
            error : {
                nameError : nameError,
                dateofbirthError : dateofbirthError,
                emailidError :emailidError,
                contactnumberError:contactnumberError

            },
            formValid : formValid
        })
    }
    render(){
        return(
            <div>
               <form onSubmit = {this.handleSubmit}>
                  <label htmlFor = "name">Name</label>
                  <input type = "text" pattern="[a-zA-Z]*" id="name" onChange={this.handleChange} required/>
                  <p>{this.state.error.nameError}</p>
                  <label htmlFor = "dateofbirth">Date of Birth</label>
                  <input type = "date" id="dateofbirth" onChange={this.handleChange} required/>
                  <p>{this.state.error.dateofbirthError}</p>
                  <label htmlFor = "emailid">Emailid</label>
                  <input type = "email" id="emailid" onChange={this.handleChange} required/>
                  <p>{this.state.error.emailidError}</p>
                  <label htmlFor = "contactnumber">Contact number</label>
                  <input type = "number"  id="contactnumber" onChange={this.handleChange} required/>
                  <p>{this.state.error.contactnumberError}</p>
                  <button>submit</button>
               </form>
            </div>
        )
    }
}
export default SignUp;