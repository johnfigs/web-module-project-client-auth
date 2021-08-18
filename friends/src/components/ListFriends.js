import React from 'react';
import axiosWithAuth from './../utils/axiosWithAuth';

import Friend from './Friend';

class ListFriends extends React.Component {
    state = {
        friends: []
    };

    componentDidMount(){
        this.getData();
    }

    getData = () => {
        axiosWithAuth()
        .get('/friends')
        .then(res => {
            this.setState({
                friends: res.data
            })
        })
        .catch(err=> {
            console.log(err);
        })
        
    }
    render() {
        return(
            <div>
                <p>Your friends are:</p>
                {this.state.friends.map(friend => (
                    <Friend key={friend.id} friend={friend}/>
                ))}
            </div>
            
        )
    }
}

export default ListFriends;