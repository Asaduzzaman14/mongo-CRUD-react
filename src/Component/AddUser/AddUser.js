import React from 'react';

const AddUser = () => {



    const handelFromSubmit = (e) => {
        e.preventDefault()
        const name = e.target.name.value
        const email = e.target.email.value
        const user = { name, email };



        //  sent data to the erver
        fetch('http://localhost:5000/user', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then(res => res.json())
            .then(data => {

                console.log(data)
                alert('user added successful')
            })

        e.target.reset()

    }





    return (
        <div>
            <h2>Plaease add new user</h2>
            <form onSubmit={handelFromSubmit}>
                <input type='name' name='name' placeholder='your name'></input>
                <br />
                <input type='email' name='email' placeholder='your email'></input>
                <br />
                <input type="submit" value='Add User' />
            </form>
        </div>
    );
};

export default AddUser;