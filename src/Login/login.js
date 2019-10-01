import React from 'react';
import './login.css';

export default class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = { username: '', pass: '' };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  render() {
    console.log(this.props);
    return (
      <div class="limiter" >
      <div class="container-login100">
        <div class="wrap-login100">
          <form class="login100-form validate-form" onSubmit={this.handleSubmit} >
            <span class="login100-form-title p-b-26">
                Vodafone Prim Sistemi
            </span>
            <div>              
                <Username 
                    onChange={this.handleUsernameChange}
                    value={this.state.username}/>
                <Password 
                    onChange={this.handlePasswordChange}
                    value={this.state.password}/>
                <div class="container-login100-form-btn">
                      <div class="wrap-login100-form-btn">
                          <div class="login100-form-bgbtn"></div>
                          <button class="login100-form-btn">
                              Login
                          </button>
                      </div>
                  </div>             
            </div>
            <div class="text-center p-t-115">
              <span class="txt1">
                Don’t have an account? 
              </span>

              <a class="txt2" href="#">
                Sign Up
              </a>
					</div>
				</form>
			</div>
		</div>
	</div>
    );
  }

  handleSubmit = (e) => {
    e.preventDefault();
      // You're accessing the string directly and not as an array item
    if ( !this.state.username | !this.state.pass ) {
        return (alert('ERROR: username='+this.state.username+', password='+this.state.pass));
    } else {
        this.props.history.push('/mainPage');
    }
  }
  
  handleUsernameChange = (inputFieldValue)=> {
    this.setState({ username: inputFieldValue, pass: this.state.pass});
  }
  
  handlePasswordChange = (inputFieldValue)=> {
    this.setState({ pass: inputFieldValue, username: this.state.username});
  }
}

class Username extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }

  render() {
    return (
        <div class="wrap-input100 validate-input" data-validate = "Valid email is: a@b.c">
            <input class="input100" type="text" name="email"
                   onChange={this.handleChange} 
                   value={this.props.value} required />
            <span class="focus-input100" data-placeholder="Email"></span>
        </div>
    );
  }
    
  handleChange = (event)=> {
    this.props.onChange(event.target.value);
  }
}

class Password extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }
    
  render() {
    return (
      <div class="wrap-input100 validate-input" data-validate="Enter password">
            <span class="btn-show-pass">
                <i class="zmdi zmdi-eye"></i>
            </span>
            <input class="input100" type="password" name="pass" 
                   onChange={this.handleChange}
                   value={this.props.value} required />
            <span class="focus-input100" data-placeholder="Password"></span>
      </div>
    );
  }

  handleChange = (event)=> {
    this.props.onChange(event.target.value);
  }

}