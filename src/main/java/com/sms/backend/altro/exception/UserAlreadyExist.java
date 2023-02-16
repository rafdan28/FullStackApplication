package com.sms.backend.altro.exception;

import java.io.Serial;

public class UserAlreadyExist extends RuntimeException{

    @Serial
    private static final long serialVersionUID = 1L;
    private final String email;

    public UserAlreadyExist(String email) {
        super(String.format("User with email: %s, already exist!!",email));
        this.email = email;
    }

    public String getEmail() {
        return email;
    }
}