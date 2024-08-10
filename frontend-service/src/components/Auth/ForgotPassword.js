import React, { useState } from 'react';
import AuthService from '../../services/AuthService';

const ForgotPassword = () => {
    const [email, setEmail] = useState('');

    const handleForgotPassword = async (e) => {
        e.preventDefault();
        try {
            await AuthService.forgotPassword(email);
            alert('Forgot password email sent');
        } catch (error) {
            alert('Failed to send email');
        }
    };

    return (
        <div>
            <h2>Forgot Password</h2>
            <form onSubmit={handleForgotPassword}>
                <div>
                    <label>Email</label>
                    <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                </div>
                <button type="submit">Send Reset Email</button>
            </form>
        </div>
    );
};

export default ForgotPassword;
