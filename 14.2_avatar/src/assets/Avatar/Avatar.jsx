import { useState, useEffect } from 'react';
import './Avatar.css'
// import DATA from '../data/data';
const Avatar = () => {
    const [users, setUsers] = useState(['',''])

    const fetchUser = () =>{
        for(let i=0;i<=10;i ++){
        fetch('https://api.api-ninjas.com/v1/randomuser',{
            headers: { 'X-Api-Key': '1VxRcvHUNkgwMXOt7tVtEQ==ctGNJsbofQAXYL0z'},
        })
        .then((response) =>response.json())
        .then((data) => setUsers(data))
    }
    return
    }
    
   fetchUser()
    // useEffect(() => {
    //     fetchUser()
    //     console.log(users);
    //  }, []);
   console.log(users);
   
    
  return (
  <>
  <section>
    {users.map(user => {
    <div key={Math.random()}>
        <h1>{user.name}</h1>
        <p>{user.address}</p>
    </div>
    })
}
  </section>
    
  </>
  )
};

export default Avatar;
