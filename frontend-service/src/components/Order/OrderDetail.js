import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import OrderService from '../../services/OrderService';

const OrderDetail = () => {
    const { id } = useParams();
    const [order, setOrder] = useState(null);

    useEffect(() => {
        fetchOrder();
    }, [id]);

    const fetchOrder = async () => {
        try {
            const response = await OrderService.getOrderById(id);
            setOrder(response.data);
        } catch (error) {
            console.error('Error fetching order:', error);
        }
    };

    if (!order) {
        return <div>Loading...</div>;
    }

    return (
        <div>
            <h2>Order Detail</h2>
            <p>Description: {order.description}</p>
            <p>Amount: {order.amount}</p>
        </div>
    );
};

export default OrderDetail;
