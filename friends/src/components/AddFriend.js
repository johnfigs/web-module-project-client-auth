import React from 'react';
import axios from 'axios';

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
      credentials: {
        ...this.state.friend,
        [e.target.name]: e.target.value
      }
    });
  };

//   login = e => {
//     e.preventDefault();
//     axios.post('http://localhost:5000/api/login', this.state.credentials)
//       .then(res => {
//         localStorage.setItem("token", res.data.payload);
//         this.props.history.push('/ListFriends');
//       })
//       .catch(err=> {
//         console.log(err);
//       })
//   };

  render() {
    return (
      <div>
        <form onSubmit={this.login}>
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