package org.seshadri.service;

import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.junit.jupiter.MockitoExtension;
import org.seshadri.model.Organization;
import org.seshadri.repository.OrganizationRepository;

import java.util.Arrays;
import java.util.List;
import java.util.Optional;

import static org.junit.jupiter.api.Assertions.*;
import static org.mockito.ArgumentMatchers.any;
import static org.mockito.Mockito.*;

@ExtendWith(MockitoExtension.class)
public class OrganizationServiceTest {

    @Mock
    private OrganizationRepository organizationRepository;

    @InjectMocks
    private OrganizationService organizationService;

    private Organization org1;
    private Organization org2;

    @BeforeEach
    public void setUp() {
        org1 = new Organization();
        org1.setId(1L);
        org1.setName("Organization 1");
        org1.setAddress("Address 1");
        org1.setPhoneNumber("123-456-7890");

        org2 = new Organization();
        org2.setId(2L);
        org2.setName("Organization 2");
        org2.setAddress("Address 2");
        org2.setPhoneNumber("098-765-4321");
    }

    @Test
    public void testGetAllOrganizations() {
        when(organizationRepository.findAll()).thenReturn(Arrays.asList(org1, org2));

        List<Organization> organizations = organizationService.getAllOrganizations();
        assertNotNull(organizations);
        assertEquals(2, organizations.size());
        assertEquals("Organization 1", organizations.get(0).getName());
    }

    @Test
    public void testGetOrganizationById() {
        when(organizationRepository.findById(1L)).thenReturn(Optional.of(org1));

        Optional<Organization> organization = Optional.ofNullable(organizationService.getOrganizationById(1L));
        assertTrue(organization.isPresent());
        assertEquals("Organization 1", organization.get().getName());
    }

    @Test
    public void testCreateOrganization() {
        when(organizationRepository.save(any(Organization.class))).thenReturn(org1);

        Organization createdOrganization = organizationService.createOrganization(org1);
        assertNotNull(createdOrganization);
        assertEquals("Organization 1", createdOrganization.getName());
    }

    @Test
    public void testUpdateOrganization() {
        when(organizationRepository.findById(1L)).thenReturn(Optional.of(org1));
        when(organizationRepository.save(any(Organization.class))).thenReturn(org1);

        Organization updatedDetails = new Organization();
        updatedDetails.setName("Updated Organization");
        updatedDetails.setAddress("Updated Address");
        updatedDetails.setPhoneNumber("111-111-1111");

        Organization updatedOrganization = organizationService.updateOrganization(1L, updatedDetails);
        assertNotNull(updatedOrganization);
        assertEquals("Updated Organization", updatedOrganization.getName());
        assertEquals("Updated Address", updatedOrganization.getAddress());
        assertEquals("123-456-7890", updatedOrganization.getPhoneNumber());
    }

    @Test
    public void testDeleteOrganization() {
        doNothing().when(organizationRepository).deleteById(1L);

        assertDoesNotThrow(() -> organizationService.deleteOrganization(1L));
        verify(organizationRepository, times(1)).deleteById(1L);
    }
}
