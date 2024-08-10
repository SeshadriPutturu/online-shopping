import axios from 'axios';

const API_URL = 'http://localhost:8083/auth';

class AuthService {
    login(username, password) {
        return axios.post(`${API_URL}/login`, { username, password });
    }

    forgotPassword(email) {
        return axios.post(`${API_URL}/forgot-password`, { email });
    }

    resetPassword(token, newPassword) {
        return axios.post(`${API_URL}/reset-password`, { token, newPassword });
    }
}

export default new AuthService();
