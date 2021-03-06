import React, { Component } from 'react'
import Registration from './auth/Registrations';

export default class Home extends Component {
  constructor(props) {
    super(props);
    
    this.handleSuccessfulAuth = this.handleSuccessfulAuth.bind(this);
  }

  handleSuccessfulAuth(data) {
    this.props.handleLogin(data);
    this.props.history.push("/dashboard");
  }
    
  render() {
    return (
      <div>
        <h1>Home</h1>
        <h2>Status: {this.props.loggedInStatus}</h2>
        <Registration handleSuccessfulAuth={this.handleSuccessfulAuth}/>
      </div>
    )
  }
}
