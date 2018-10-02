import React from 'react';
import RegisterForm from './RegisterForm';

class RegisterControl extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      nameValid: false,
      usernameValid: false,
      emailValid: false,
      passwordValid: false,
      formSubmitSuccess: false
    };
    this.handleFormValidation = this.handleFormValidation.bind(this);
  }
  handleFormValidation(name, username, email, password, password2){

  }
  render(){
    return (
      <div>
        <RegisterForm onValidatingForm={this.handleFormValidation}/>
      </div>
      );
    }
  }

export default RegisterControl;
