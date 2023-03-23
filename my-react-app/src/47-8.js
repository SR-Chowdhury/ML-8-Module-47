import { useEffect, useState } from 'react';
import './App.css';

function RenderAPIData () {
    const [users, setUsers] = useState([]);
    useEffect( () => {
       const url = 'https://jsonplaceholder.typicode.com/users';
       fetch(url) 
            .then (res => res.json())
            .then (data => setUsers(data))
            .catch (err => console.log(err))
    } , []);

    return (
        <div>
            {
                users.map(user => <DisplayUser name = {user.name} email = {user.email}/>)
            }
            
        </div>
    );
}

function DisplayUser (props) {
    const {name, email} = props;
    return (
        <div style={{textAlign: 'center', marginBottom: '5px', border: '1px solid #ddd'}}>
            <h1>Name: {name}</h1>
            <h3>Email: {email}</h3>
        </div>
    );
}

export default RenderAPIData;