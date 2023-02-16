package com.sms.backend.service;

import com.sms.backend.altro.DTO.Registration;
import com.sms.backend.model.Utente;

public interface AuthenticationService {
    Utente signup(Registration registration);
    Utente getDetails(String email);
}
