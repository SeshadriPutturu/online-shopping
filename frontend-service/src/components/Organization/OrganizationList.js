import React, { useState, useEffect } from 'react';
import OrganizationService from '../../services/OrganizationService';

const OrganizationList = () => {
    const [organizations, setOrganizations] = useState([]);

    useEffect(() => {
        fetchOrganizations();
    }, []);

    const fetchOrganizations = async () => {
        try {
            const response = await OrganizationService.getAllOrganizations();
            setOrganizations(response.data);
        } catch (error) {
            console.error('Error fetching organizations:', error);
        }
    };

    return (
        <div>
            <h2>Organization List</h2>
            <ul>
                {organizations.map((org) => (
                    <li key={org.id}>{org.name}</li>
                ))}
            </ul>
        </div>
    );
};

export default OrganizationList;
