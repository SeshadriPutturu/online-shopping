package org.seshadri.repository;

import org.seshadri.model.Organization;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface OrganizationRepository extends JpaRepository<Organization, Long> {
    List<Organization> findByName(String name);
    List<Organization> findByAddress(String address);
}