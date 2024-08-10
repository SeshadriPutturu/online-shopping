import axios from 'axios';

const API_URL = 'http://localhost:8084/order';

class OrderService {
    getAllOrders() {
        return axios.get(API_URL);
    }

    getOrderById(id) {
        return axios.get(`${API_URL}/${id}`);
    }

    createOrder(order) {
        return axios.post(API_URL, order);
    }

    updateOrder(id, order) {
        return axios.put(`${API_URL}/${id}`, order);
    }

    deleteOrder(id) {
        return axios.delete(`${API_URL}/${id}`);
    }
}

export default new OrderService();
