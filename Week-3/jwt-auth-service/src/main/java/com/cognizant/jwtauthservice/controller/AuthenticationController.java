package com.cognizant.jwtauthservice.controller;

import java.util.Base64;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestHeader;
import org.springframework.web.bind.annotation.RestController;

import com.cognizant.jwtauthservice.model.AuthenticationResponse;

@RestController
public class AuthenticationController {

    @GetMapping("/authenticate")
    public AuthenticationResponse authenticate(
            @RequestHeader("Authorization") String authHeader) {

        String base64Credentials =
                authHeader.substring("Basic ".length());

        byte[] decodedBytes =
                Base64.getDecoder().decode(base64Credentials);

        String credentials =
                new String(decodedBytes);

        String[] values =
                credentials.split(":", 2);

        String username = values[0];
        String password = values[1];

        if ("user".equals(username)
                && "pwd".equals(password)) {

            return new AuthenticationResponse(
                    "sample-jwt-token");
        }

        return new AuthenticationResponse(
                "Invalid Credentials");
    }
}