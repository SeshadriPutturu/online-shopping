package org.seshadri.service;

import jakarta.transaction.Transactional;
import org.seshadri.model.Organization;

import org.seshadri.repository.OrganizationRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class OrganizationService {

    @Autowired
    private OrganizationRepository organizationRepository;

    public List<Organization> getAllOrganizations() {
        return organizationRepository.findAll();
    }

    public Organization getOrganizationById(Long id) {
        return organizationRepository.findById(id).orElse(null);
    }

    public Organization createOrganization(Organization organization) {
        return organizationRepository.save(organization);
    }

    public Organization updateOrganization(Long id, Organization organization) {
        Organization existingOrganization = organizationRepository.findById(id).orElse(null);
        if (existingOrganization != null) {
            existingOrganization.setName(organization.getName());
            existingOrganization.setAddress(organization.getAddress());
            return organizationRepository.save(existingOrganization);
        } else {
            return null;
        }
    }

    public void deleteOrganization(Long id) {
        organizationRepository.deleteById(id);
    }
}