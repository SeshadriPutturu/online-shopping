package org.seshadri.controller;

import org.seshadri.model.Users;
import org.seshadri.service.AuthService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/auth")
public class AuthController {
    @Autowired
    private AuthService authService;

    @PostMapping("/login")
    public Users login(@RequestParam String email, @RequestParam String password) {
        return authService.login(email, password);
    }

    @PostMapping("/register")
    public Users register(@RequestBody Users user) {
        return authService.register(user);
    }

    @PostMapping("/forgot-password")
    public String forgotPassword(@RequestParam String email) {
        Users user = authService.findUserByEmail(email);
        if (user != null) {
            // Here you would send an email with a password reset link
            return "Password reset link sent to your email.";
        }
        return "User not found.";
    }

    @PostMapping("/reset-password")
    public String resetPassword(@RequestParam String email, @RequestParam String newPassword) {
        Users user = authService.findUserByEmail(email);
        if (user != null) {
            authService.updatePassword(user, newPassword);
            return "Password successfully reset.";
        }
        return "User not found.";
    }
}
