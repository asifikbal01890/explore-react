import React from 'react';

const UserCard = ({userData}) => {
   const {name, email} = userData
    
    return (
        <div style={{border: "2px solid tomato", marginTop: "20px"
        }}>
           <h2>Name: {name}</h2>
           <h4>Email: {email}</h4>
        </div>
    );
};

export default UserCard;