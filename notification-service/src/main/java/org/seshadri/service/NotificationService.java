package org.seshadri.service;


import org.seshadri.model.NotificationRequest;
import org.springframework.beans.factory.annotation.Autowired;

import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.stereotype.Service;

@Service
public class NotificationService {
    @Autowired
    private JavaMailSender emailSender;

    public void sendNotification(NotificationRequest request) {
        SimpleMailMessage message = new SimpleMailMessage();
        message.setTo(request.getRecipientEmail());
        message.setSubject(request.getSubject());
        message.setText(request.getMessage());
        emailSender.send(message);
    }
}
