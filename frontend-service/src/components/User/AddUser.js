import React, { useState } from 'react';
import UserService from '../../services/UserService';

const AddUser = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');

    const handleAddUser = async (e) => {
        e.preventDefault();
        try {
            await UserService.createUser({ name, email });
            alert('User added successfully');
        } catch (error) {
            console.error('Error adding user:', error);
        }
    };

    return (
        <div>
            <h2>Add User</h2>
            <form onSubmit={handleAddUser}>
                <div>
                    <label>Name</label>
                    <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
                </div>
                <div>
                    <label>Email</label>
                    <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                </div>
                <button type="submit">Add User</button>
            </form>
        </div>
    );
};

export default AddUser;
