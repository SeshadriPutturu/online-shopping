package org.seshadri.service;

import org.seshadri.model.Users;
import org.seshadri.repositry.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class AuthService {
    @Autowired
    private UserRepository userRepository;

    public Users login(String email, String password) {
        Users user = userRepository.findByEmail(email);
        if (user != null && user.getPassword().equals(password)) {
            return user;
        }
        return null;
    }

    public Users register(Users user) {
        return userRepository.save(user);
    }

    public Users findUserByEmail(String email) {
        return userRepository.findByEmail(email);
    }

    public void updatePassword(Users user, String newPassword) {
        user.setPassword(newPassword);
        userRepository.save(user);
    }
}
