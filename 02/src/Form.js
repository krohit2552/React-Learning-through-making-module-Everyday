import React, { useState } from 'react'

const Form = () => {
    // const [name, setName] = useState("");
    // const [Email, setEmail] = useState("");
    // const [Pasword, setPasword] = useState("");
    const [formData, setFormData] = useState({
        name: '',
        Email: '',
        password: ''
    });

    const handleInput = (e) => {
        const { name, value } = e.target;
        console.log(e.target.name);
        setFormData({
            ...formData, [name]: value
        })
    }

    // const handleName = (e) => {
    //     setName(e.target.value)
    //     console.log(e.target.value);
    // }
    // const handleEmail = (e) => {
    //     setEmail(e.target.value)
    //     console.log(e.target.value);
    // }
    // const handlePassword = (e) => {
    //     setPasword(e.target.value)
    //     console.log(e.target.value);
    // }
    const handleSubmit = (e) => {
        e.preventDefault();
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label>Name:
                    <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleInput}
                    />
                </label>
                <br />
                <label>Email:
                    <input
                        type="email"
                        name="email"
                        value={formData.Email}
                        onChange={handleInput}
                    />
                </label>
                <br />
                <label>Password:
                    <input
                        type="password"
                        name="password"
                        value={formData.password}
                        onChange={handleInput}
                    />
                </label>
                <br />
                <input type="submit" />
            </form>
        </div>
    )
}

export default Form