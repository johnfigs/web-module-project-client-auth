import React from 'react';

const Friend = (props)=> {
    const { friend } = props;
    return(
        <div>
            <p>Friend Name: {friend.name}</p>
        </div>
    )
}

export default Friend;