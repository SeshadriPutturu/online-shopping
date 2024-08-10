import axios from 'axios';

const API_URL = 'http://localhost:8081/organization';

class OrganizationService {
    getAllOrganizations() {
        return axios.get(API_URL);
    }

    getOrganizationById(id) {
        return axios.get(`${API_URL}/${id}`);
    }

    createOrganization(organization) {
        return axios.post(API_URL, organization);
    }

    updateOrganization(id, organization) {
        return axios.put(`${API_URL}/${id}`, organization);
    }

    deleteOrganization(id) {
        return axios.delete(`${API_URL}/${id}`);
    }
}

export default new OrganizationService();
