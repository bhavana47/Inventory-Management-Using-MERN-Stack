import React, { Component } from 'react';
import axios from 'axios';

//import "react-datepicker/dist/react-datepicker.css";

export default class CreateUser extends Component {
    constructor(props) {
      super(props);
  
      this.onChangeUsername = this.onChangeUsername.bind(this);
      this.onChangeUserContact = this.onChangeUserContact.bind(this);
      this.onSubmit = this.onSubmit.bind(this);
  
      this.state = {
        username: '',
        user_contact:''
      }
    }
  
    onChangeUsername(e) {
      this.setState({
        username: e.target.value
      })
    }
    onChangeUserContact(e) {
        this.setState({
          user_contact: e.target.value
        })
      }
  
    onSubmit(e) {
      e.preventDefault();
  
      const user = {
        username: this.state.username,
        user_contact: this.state.user_contact,
      }
  
      console.log(user);
  
      axios.post('http://localhost:5000/users/add', user)
        .then(res => console.log(res.data));
  
      this.setState({
        username: '',
        user_contact:''
      })
    }
  
    render() {
      return (
        <div>
          <h3>Create New User</h3>
          <form onSubmit={this.onSubmit}>
            <div className="form-group"> 
                <label>Username: </label>
                <input  type="text"
                  required
                  className="form-control"
                  value={this.state.username}
                  onChange={this.onChangeUsername}
                />
            </div>
            <div className="form-group"> 
                <label>Contact: </label>
                <input  type="text"
                  required
                  className="form-control"
                  value={this.state.user_contact}
                  onChange={this.onChangeUserContact}
                />
            </div>
            <div className="form-group">
              <input type="submit" value="Create User" className="btn btn-primary" />
            </div>
          </form>
        </div>
      )
    }
}