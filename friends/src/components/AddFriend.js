import React from 'react';

import axiosWithAuth from '../utils/axiosWithAuth';

class AddForm extends React.Component {
  state = {
    friend: {
      id: Date.now(),
      name: '',
      age: '',
      email: ''
    }
  };

  handleChange = e => {
    this.setState({
      friend: {
        ...this.state.friend,
        [e.target.name]: e.target.value
      }
    });
  };

  submitFriend = e => {
    e.preventDefault();
    axiosWithAuth()
    .post('/friends', this.state.friend)
      .then(res => {
        console.log(res)
        this.props.history.push('/ListFriends');
      })
      .catch(err=> {
        console.log(err);
      })
  };

  render() {
    return (
      <div>
        <form onSubmit={this.submitFriend}>
          <input
            type="text"
            name="name"
            value={this.state.friend.name}
            onChange={this.handleChange}
          />
          <input
            type="text"
            name="age"
            value={this.state.friend.age}
            onChange={this.handleChange}
          />
           <input
            type="email"
            name="email"
            value={this.state.friend.email}
            onChange={this.handleChange}
          />
          <button>Add Friend!</button>
        </form>
      </div>
    );
  }
}

export default AddForm;