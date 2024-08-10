import React, { useState } from 'react';
import OrderService from '../../services/OrderService';

const AddOrder = () => {
    const [description, setDescription] = useState('');
    const [amount, setAmount] = useState('');

    const handleAddOrder = async (e) => {
        e.preventDefault();
        try {
            await OrderService.createOrder({ description, amount });
            alert('Order added successfully');
        } catch (error) {
            console.error('Error adding order:', error);
        }
    };

    return (
        <div>
            <h2>Add Order</h2>
            <form onSubmit={handleAddOrder}>
                <div>
                    <label>Description</label>
                    <input type="text" value={description} onChange={(e) => setDescription(e.target.value)} />
                </div>
                <div>
                    <label>Amount</label>
                    <input type="number" value={amount} onChange={(e) => setAmount(e.target.value)} />
                </div>
                <button type="submit">Add Order</button>
            </form>
        </div>
    );
};

export default AddOrder;
