import React, { useEffect, useState } from 'react';
import UserCard from './UserCard';

const Post = () => {
    const [users, setUsers] = useState([])


// useEffect(()=>{},[])
useEffect(()=>{
  fetch('https://jsonplaceholder.typicode.com/users')
  .then(res => res.json())
  .then(data => setUsers(data)) 
},[])

    return (
        <div style={{display: "grid", gridTemplateColumns: "auto auto auto", gap: "20px"}}>
            {
                users.map((user) =><UserCard key={user.id}  userData={user} ></UserCard>)
            }
        </div>
    );
};

export default Post;