import React, { useState, useEffect } from 'react';
import OrderService from '../../services/OrderService';

const OrderList = () => {
    const [orders, setOrders] = useState([]);

    useEffect(() => {
        fetchOrders();
    }, []);

    const fetchOrders = async () => {
        try {
            const response = await OrderService.getAllOrders();
            setOrders(response.data);
        } catch (error) {
            console.error('Error fetching orders:', error);
        }
    };

    return (
        <div>
            <h2>Order List</h2>
            <ul>
                {orders.map((order) => (
                    <li key={order.id}>{order.description}</li>
                ))}
            </ul>
        </div>
    );
};

export default OrderList;
