import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const UpdatedUser = () => {
    const { id } = useParams()

    const [user, setUser] = useState({})

    useEffect(() => {

        const url = `http://localhost:5000/user/${id}`
        fetch(url)
            .then(res => res.json())
            .then(data => setUser(data))
    }, [])


    const handelUpdateuser = (e) => {
        e.preventDefault()
        const name = e.target.name.value
        const email = e.target.email.value
        const updatedUser = { name, email };


        //  sent data to the erver
        fetch('http://localhost:5000/user', {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updatedUser)
        })
            .then(res => res.json())
            .then(data => {

                console.log(data)
                alert('user update successful')
            })

        e.target.reset()

    }





    return (
        <div>
            <h2>Updating user:{user.name}</h2>
            <form onSubmit={handelUpdateuser}>
                <input type='name' name='name' placeholder='your name'></input>
                <br />
                <input type='email' name='email' placeholder='your email'></input>
                <br />
                <input type="submit" value='update User' />
            </form>
        </div>
    );
};

export default UpdatedUser;