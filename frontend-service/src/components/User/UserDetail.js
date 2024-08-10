import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import UserService from '../../services/UserService';

const UserDetail = () => {
    const { id } = useParams();
    const [user, setUser] = useState(null);

    useEffect(() => {
        fetchUser();
    }, [id]);

    const fetchUser = async () => {
        try {
            const response = await UserService.getUserById(id);
            setUser(response.data);
        } catch (error) {
            console.error('Error fetching user:', error);
        }
    };

    if (!user) {
        return <div>Loading...</div>;
    }

    return (
        <div>
            <h2>User Detail</h2>
            <p>Name: {user.name}</p>
            <p>Email: {user.email}</p>
        </div>
    );
};

export default UserDetail;
