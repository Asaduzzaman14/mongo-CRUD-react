import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Home = () => {

    const [users, setUsers] = useState([])

    useEffect(() => {
        fetch('http://localhost:5000/user')
            .then(res => res.json())
            .then(data => setUsers(data))
    }, [])


    const handelDeleteUser = (id) => {
        const proceed = window.confirm('are you sure you went to delete')
        if (proceed) {
            console.log('deliting user id', id);

            const url = `http://localhost:5000/user/${id}`

            fetch(url, {
                method: 'delete'
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deleteCount > 0) {
                        console.log('deleted');
                        const remaining = users.filter(user => user._id !== id)
                        setUsers(remaining)
                    }
                })

        }
    }



    return (
        <div>
            <h2>Available user : {users.lenght}</h2>

            <ul>
                {
                    users.map(user =>
                        <li
                            key={user._id}
                        > name:{user.name} email: {user.email}
                            <Link to={`/update/${user._id}`} ><button>Update</button></Link>
                            <button onClick={() => handelDeleteUser(user._id)}>X</button>
                        </li>
                    )
                }
            </ul>
        </div>
    );
};

export default Home;