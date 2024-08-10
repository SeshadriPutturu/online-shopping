import React, { useState } from 'react';
import OrganizationService from '../../services/OrganizationService';

const AddOrganization = () => {
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');

    const handleAddOrganization = async (e) => {
        e.preventDefault();
        try {
            await OrganizationService.createOrganization({ name, description });
            alert('Organization added successfully');
        } catch (error) {
            console.error('Error adding organization:', error);
        }
    };

    return (
        <div>
            <h2>Add Organization</h2>
            <form onSubmit={handleAddOrganization}>
                <div>
                    <label>Name</label>
                    <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
                </div>
                <div>
                    <label>Description</label>
                    <input type="text" value={description} onChange={(e) => setDescription(e.target.value)} />
                </div>
                <button type="submit">Add Organization</button>
            </form>
        </div>
    );
};

export default AddOrganization;
