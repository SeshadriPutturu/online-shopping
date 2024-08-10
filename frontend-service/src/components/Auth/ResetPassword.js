import React, { useState } from 'react';
import AuthService from '../../services/AuthService';

const ResetPassword = () => {
    const [token, setToken] = useState('');
    const [newPassword, setNewPassword] = useState('');

    const handleResetPassword = async (e) => {
        e.preventDefault();
        try {
            await AuthService.resetPassword(token, newPassword);
            alert('Password reset successful');
        } catch (error) {
            alert('Failed to reset password');
        }
    };

    return (
        <div>
            <h2>Reset Password</h2>
            <form onSubmit={handleResetPassword}>
                <div>
                    <label>Reset Token</label>
                    <input type="text" value={token} onChange={(e) => setToken(e.target.value)} />
                </div>
                <div>
                    <label>New Password</label>
                    <input type="password" value={newPassword} onChange={(e) => setNewPassword(e.target.value)} />
                </div>
                <button type="submit">Reset Password</button>
            </form>
        </div>
    );
};

export default ResetPassword;
