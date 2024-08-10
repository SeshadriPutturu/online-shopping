import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import OrganizationService from '../../services/OrganizationService';

const OrganizationDetail = () => {
    const { id } = useParams();
    const [organization, setOrganization] = useState(null);

    useEffect(() => {
        fetchOrganization();
    }, [id]);

    const fetchOrganization = async () => {
        try {
            const response = await OrganizationService.getOrganizationById(id);
            setOrganization(response.data);
        } catch (error) {
            console.error('Error fetching organization:', error);
        }
    };

    if (!organization) {
        return <div>Loading...</div>;
    }

    return (
        <div>
            <h2>Organization Detail</h2>
            <p>Name: {organization.name}</p>
            <p>Description: {organization.description}</p>
        </div>
    );
};

export default OrganizationDetail;
