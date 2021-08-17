import React from 'react';
import Loader from 'react-loader-spinner';
import axiosWithAuth from './../utils/axiosWithAuth';

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
            console.log(res);
        })
        .catch(err=> {
            console.log(err);
        })
    }
    render() {
        return(
            <div>In List Friends</div>
        )
    }
}

export default ListFriends;