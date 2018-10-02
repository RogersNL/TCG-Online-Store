import React from 'react';
import RegisterForm from './RegisterForm';
import PropTypes from 'prop-types';

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
    console.log(props.masterAccountList);
  }
  render(){
    return (
      <div>
        <RegisterForm onValidatingForm={this.handleFormValidation}/>
      </div>
      );
    }
  }
RegisterControl.propTypes = {
  masterAccountList: PropTypes.object
}
export default RegisterControl;
