import React from 'react';
import RegisterForm from './RegisterForm';
import PropTypes from 'prop-types';
import RegisterSuccess from './RegisterSuccess';

class RegisterControl extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      nameValid: false,
      usernameValid: false,
      usernameNotInUse: false,
      emailValid: false,
      emailNotInUse: false,
      passwordValid: false,
      passwordMatch: false,
      formSubmitTry: false,
      formSubmitSuccess: false
    };
    this.handleFormValidation = this.handleFormValidation.bind(this);
    this.handleValidatingName = this.handleValidatingName.bind(this);
    this.handleValidatingUsername = this.handleValidatingUsername.bind(this);
    this.handleValidatingEmail = this.handleValidatingEmail.bind(this);
    this.handleValidatingPassword = this.handleValidatingPassword.bind(this);
  }
  handleFormValidation(name, username, email, password, password2){
    let enteredName = name;
    let enteredUsername = username;
    let enteredEmail = email;
    let enteredPassword = password;
    let enteredPassword2 = password2;
    this.handleValidatingName(enteredName);
    this.handleValidatingUsername(enteredUsername);
    this.handleValidatingEmail(enteredEmail);
    this.handleValidatingPassword(enteredPassword, enteredPassword2);
    this.setState({formSubmitTry: true});
    console.log(this.state);
    if(this.state.nameValid && this.state.usernameValid && this.state.emailValid  && this.state.passwordValid && this.state.passwordMatch){
      this.setState({formSubmitSuccess: true});
    } else {
      this.setState({formSubmitSuccess: false});
    }
  }
  handleValidatingName(name){
    if(name.trim() === ''){
      this.setState({nameValid: false});
    } else {
      this.setState({nameValid: true});
    }
  }
  handleValidatingUsername(username){
    if(username.trim() === ''){
      this.setState({usernameValid: false});
    } else {
      this.setState({usernameValid: true});
    }
    console.log(this.props.accountList);
    let userTaken = 0;
    Object.keys(this.props.accountList).map((account) => {
      if(username.trim().toLowerCase() === this.props.accountList[account].username.toLowerCase()) {
        userTaken++;
      }
      if(userTaken > 0){
        this.setState({usernameNotInUse: false});
      } else {
        this.setState({usernameNotInUse: true});
      }
    });
  }
  handleValidatingEmail(email){
    if(email.trim() === '' || !email.includes('@')){
      this.setState({emailValid: false});
    } else {
      this.setState({emailValid: true});
    }
    let emailTaken = 0;
    Object.keys(this.props.accountList).map((account) => {
      if(email.trim().toLowerCase() === this.props.accountList[account].email.toLowerCase()) {
        emailTaken++;
      }
      if(emailTaken > 0){
        this.setState({emailNotInUse: false});
      } else {
        this.setState({emailNotInUse: true});
      }
    });
  }
  handleValidatingPassword(password, password2){
    let capitals = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    let lowers = 'abcdefghijklmnopqrstuvwxyz';
    let digits = '0123456789';

    if(password.trim() === ''){
      this.setState({passwordValid: false});
    }
    let splitPassword = password.trim().split('');
    let containsCapitals = false;
    let containsLowers = false;
    let containsNumbers = false;
    let validLength = false;
    for(let i = 0; i < splitPassword.length; i++){
      if(capitals.includes(splitPassword[i])){
        containsCapitals = true;
      }
      if(lowers.includes(splitPassword[i])){
        containsLowers = true;
      }
      if(digits.includes(splitPassword[i])){
        containsNumbers = true;
      }
    }
    if(splitPassword.length >= 8){
      validLength = true;
    }
    if(containsCapitals && containsLowers && containsNumbers && validLength){
      this.setState({passwordValid: true});
    } else {
      this.setState({passwordValid: false});
    }

    if(password === password2){
      this.setState({passwordMatch: true});
    } else {
      this.setState({passwordMatch: false});
    }
  }
  render(){
    let currentView = null;
    let nameError = null;
    let usernameError = null;
    let usernameUsed = null;
    let emailError = null;
    let emailUsed = null;
    let passwordError = null;
    let passwordMatched = null;
    if(this.state.formSubmitTry){
      if(!this.state.nameValid){
        nameError = <div>Please Enter a Name!</div>;
      } else {
        nameError = null;
      }
      if(!this.state.usernameValid){
        usernameError = <div>Please Enter a Username!</div>;
      } else {
        usernameError = null;
      }
      if(this.state.usernameNotInUse){
        usernameUsed = <div>This Username is Already in Use!</div>;
      } else {
        usernameUsed = null;
      }
      if(!this.state.emailValid){
        emailError = <div>Please Enter an Email!</div>;
      } else {
        emailError = null;
      }
      if(this.state.emailNotInUse){
        emailUsed = <div>This Email is Already in Use!</div>;
      } else {
        emailUsed = null;
      }
      if(!this.state.passwordValid){
        passwordError = <div>Please enter a password with at least one uppercase letter, one lowercase letter, one digit, and make sure that it is 8 characters or greater in length.</div>;
      } else {
        passwordError = null;
      }
      if(!this.state.passwordMatch){
        passwordMatched = <div>Password confirmation did not match!</div>;
      } else {
        passwordMatched = null;
      }
    }
    if(!this.state.formSubmitSuccess){
      currentView =
        <div>
          {nameError}
          {usernameError}
          {usernameUsed}
          {emailError}
          {emailUsed}
          {passwordError}
          {passwordMatched}
        </div>;
    } else {
      currentView = <RegisterSuccess/>;
    }
    return (
      <div>
        <RegisterForm onValidatingForm={this.handleFormValidation}
          submitSuccess={this.state.formSubmitSuccess} />
        {currentView}
      </div>
    );
  }
}
RegisterControl.propTypes = {
  accountList: PropTypes.object
};
export default RegisterControl;
